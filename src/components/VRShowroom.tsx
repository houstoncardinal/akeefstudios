import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, Stars, Float, Text, OrbitControls } from "@react-three/drei";
import { useRef, useState, Suspense, useCallback } from "react";
import * as THREE from "three";
import { portfolioVideos } from "@/data/portfolio";

// Extract YouTube video ID from URL
const getYoutubeId = (url: string) => {
  const match = url.match(/(?:v=|\/)([\w-]{11})/);
  return match ? match[1] : null;
};

// Individual video screen in 3D space
const VideoScreen = ({
  position,
  rotation,
  video,
  index,
  activeVideo,
  onActivate,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  video: (typeof portfolioVideos)[0];
  index: number;
  activeVideo: number | null;
  onActivate: (index: number) => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const isActive = activeVideo === index;
  const videoId = video.youtubeUrl ? getYoutubeId(video.youtubeUrl) : null;

  useFrame((_, delta) => {
    if (meshRef.current) {
      const targetEmissive = hovered || isActive ? 0.3 : 0.05;
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, targetEmissive, delta * 4);
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Screen frame */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[4.4, 2.7, 0.1]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Screen glow border */}
      <mesh position={[0, 0, -0.03]}>
        <boxGeometry args={[4.5, 2.8, 0.02]} />
        <meshStandardMaterial
          color={isActive ? "#ff0000" : hovered ? "#cc0000" : "#330000"}
          emissive={isActive ? "#ff0000" : hovered ? "#cc0000" : "#220000"}
          emissiveIntensity={isActive ? 1 : hovered ? 0.5 : 0.1}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Interactive screen surface */}
      <mesh
        ref={meshRef}
        onPointerEnter={() => { setHovered(true); document.body.style.cursor = "pointer"; }}
        onPointerLeave={() => { setHovered(false); document.body.style.cursor = "default"; }}
        onClick={() => onActivate(isActive ? -1 : index)}
      >
        <planeGeometry args={[4.2, 2.5]} />
        <meshStandardMaterial
          color="#000"
          emissive="#ff0000"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* HTML overlay — thumbnail or YouTube embed */}
      <Html
        transform
        distanceFactor={4.5}
        position={[0, 0, 0.01]}
        style={{ width: "420px", height: "250px", pointerEvents: isActive ? "auto" : "none" }}
      >
        <div
          style={{ width: "420px", height: "250px", overflow: "hidden", borderRadius: "4px", background: "#000", position: "relative" }}
          onClick={(e) => {
            if (!isActive) {
              e.stopPropagation();
              onActivate(index);
            }
          }}
        >
          {isActive && videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&modestbranding=1`}
              style={{ width: "100%", height: "100%", border: "none" }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={video.title}
            />
          ) : (
            <div style={{ position: "relative", width: "100%", height: "100%", cursor: "pointer" }}>
              <img
                src={video.thumbnail}
                alt={video.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: hovered ? "brightness(1.2)" : "brightness(0.7)" }}
              />
              {/* Play button overlay */}
              <div style={{
                position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(0,0,0,0.3)", transition: "all 0.3s"
              }}>
                <div style={{
                  width: "50px", height: "50px", borderRadius: "50%",
                  background: "rgba(200,0,0,0.9)", display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: hovered ? "0 0 30px rgba(255,0,0,0.8)" : "0 0 10px rgba(255,0,0,0.4)",
                  transform: hovered ? "scale(1.2)" : "scale(1)", transition: "all 0.3s"
                }}>
                  <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: "16px solid white", marginLeft: "4px" }} />
                </div>
              </div>
              {/* Title bar */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 16px",
                background: "linear-gradient(transparent, rgba(0,0,0,0.95))", color: "white"
              }}>
                <div style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1.2 }}>
                  {video.title}
                </div>
                <div style={{ fontSize: "10px", color: "#ff4444", marginTop: "3px", textTransform: "uppercase", letterSpacing: "2px" }}>
                  {video.artist} • {video.year}
                </div>
              </div>
            </div>
          )}
        </div>
      </Html>

      {/* Label under screen */}
      <Text
        position={[0, -1.65, 0]}
        fontSize={0.18}
        color="#ff3333"
        anchorX="center"
        font="/fonts/bebas-neue.woff"
        letterSpacing={0.15}
      >
        {video.title.toUpperCase().slice(0, 30)}
      </Text>
    </group>
  );
};

// Room environment
const Room = () => {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 6, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#050505" />
      </mesh>

      {/* Floor grid lines */}
      {Array.from({ length: 21 }).map((_, i) => (
        <mesh key={`grid-${i}`} position={[i * 2 - 20, -1.99, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.01, 40]} />
          <meshStandardMaterial color="#ff0000" transparent opacity={0.08} emissive="#ff0000" emissiveIntensity={0.5} />
        </mesh>
      ))}
      {Array.from({ length: 21 }).map((_, i) => (
        <mesh key={`grid2-${i}`} position={[0, -1.99, i * 2 - 20]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <planeGeometry args={[0.01, 40]} />
          <meshStandardMaterial color="#ff0000" transparent opacity={0.08} emissive="#ff0000" emissiveIntensity={0.5} />
        </mesh>
      ))}

      {/* Ambient red accent lights */}
      <pointLight position={[0, 5, 0]} intensity={0.3} color="#ffffff" />
      <pointLight position={[-8, 3, -5]} intensity={0.8} color="#ff0000" distance={15} />
      <pointLight position={[8, 3, -5]} intensity={0.8} color="#ff0000" distance={15} />
      <pointLight position={[0, 3, 5]} intensity={0.4} color="#ff2200" distance={12} />

      {/* Spotlights on screens */}
      <spotLight position={[0, 5, 2]} angle={0.6} penumbra={0.8} intensity={0.5} color="#ffffff" target-position={[0, 1, -5]} />
    </group>
  );
};

// Floating logo
const FloatingLogo = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <Text
        position={[0, 4.2, -8]}
        fontSize={0.8}
        color="#ff0000"
        anchorX="center"
        letterSpacing={0.3}
        font="/fonts/bebas-neue.woff"
      >
        AKEEF STUDIOS
      </Text>
      <Text
        position={[0, 3.5, -8]}
        fontSize={0.2}
        color="#666"
        anchorX="center"
        letterSpacing={0.4}
      >
        VIRTUAL SHOWROOM
      </Text>
    </Float>
  );
};

// Loading fallback
const Loader = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-background z-50">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
      <p className="font-bebas text-2xl tracking-[0.2em] text-primary">LOADING SHOWROOM</p>
      <p className="text-xs text-muted-foreground tracking-widest">PREPARING YOUR EXPERIENCE</p>
    </div>
  </div>
);

const VRShowroom = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  // Position screens in a curved arrangement
  const screenPositions: { pos: [number, number, number]; rot: [number, number, number] }[] = [
    // Back wall - center
    { pos: [0, 1.2, -8], rot: [0, 0, 0] },
    // Back wall - left
    { pos: [-5.5, 1.2, -7], rot: [0, 0.3, 0] },
    // Back wall - right
    { pos: [5.5, 1.2, -7], rot: [0, -0.3, 0] },
    // Left wall
    { pos: [-9, 1.2, -2], rot: [0, Math.PI / 4, 0] },
    // Right wall
    { pos: [9, 1.2, -2], rot: [0, -Math.PI / 4, 0] },
    // Front sides
    { pos: [-7, 1.2, 4], rot: [0, Math.PI / 3, 0] },
  ];

  const handleActivate = useCallback((index: number) => {
    setActiveVideo(index === -1 ? null : index);
  }, []);

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 1.5, 8], fov: 60 }}
          gl={{ antialias: true, alpha: false }}
          dpr={[1, 1.5]}
        >
          <color attach="background" args={["#030303"]} />
          <fog attach="fog" args={["#030303", 15, 35]} />

          <ambientLight intensity={0.15} />

          <Room />
          <FloatingLogo />
          <Stars radius={30} depth={20} count={1000} factor={3} saturation={0} fade speed={0.5} />

          {portfolioVideos.map((video, i) => {
            if (i >= screenPositions.length) return null;
            return (
              <VideoScreen
                key={video.id}
                position={screenPositions[i].pos}
                rotation={screenPositions[i].rot}
                video={video}
                index={i}
                activeVideo={activeVideo}
                onActivate={handleActivate}
              />
            );
          })}

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={3}
            maxDistance={15}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 6}
            rotateSpeed={0.5}
            zoomSpeed={0.8}
            target={[0, 1, -2]}
          />
        </Canvas>
      </Suspense>

      {/* HUD Overlay */}
      <div className="absolute top-6 left-6 z-10 pointer-events-none">
        <div className="glass border border-primary/20 rounded-xl px-5 py-3 backdrop-blur-xl">
          <h2 className="font-bebas text-xl tracking-[0.2em] text-primary">SHOWROOM</h2>
          <p className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase">Click a screen to play • Drag to look around</p>
        </div>
      </div>

      {/* Active video info */}
      {activeVideo !== null && portfolioVideos[activeVideo] && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 animate-fade-in">
          <div className="glass border border-primary/40 rounded-2xl px-8 py-4 backdrop-blur-xl text-center">
            <p className="font-bebas text-lg tracking-[0.15em] text-primary">{portfolioVideos[activeVideo].title}</p>
            <p className="text-xs text-muted-foreground mt-1">{portfolioVideos[activeVideo].artist} • {portfolioVideos[activeVideo].year}</p>
            <button
              onClick={() => setActiveVideo(null)}
              className="mt-3 text-xs text-foreground/60 hover:text-primary transition-colors tracking-widest uppercase"
            >
              ✕ Close Video
            </button>
          </div>
        </div>
      )}

      {/* Back button */}
      <div className="absolute top-6 right-6 z-10">
        <a
          href="/portfolio"
          className="glass border border-primary/20 rounded-xl px-5 py-3 backdrop-blur-xl text-xs tracking-[0.15em] uppercase text-foreground/70 hover:text-primary hover:border-primary/50 transition-all duration-300 block"
        >
          ← Back to Portfolio
        </a>
      </div>
    </div>
  );
};

export default VRShowroom;
