import { useEffect, useRef, useState, ReactNode } from "react";

type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'zoom-in' 
  | 'zoom-out'
  | 'flip-up'
  | 'flip-down';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const animationStyles: Record<AnimationType, { initial: string; visible: string }> = {
  'fade-up': {
    initial: 'opacity-0 translate-y-16',
    visible: 'opacity-100 translate-y-0'
  },
  'fade-down': {
    initial: 'opacity-0 -translate-y-16',
    visible: 'opacity-100 translate-y-0'
  },
  'fade-left': {
    initial: 'opacity-0 translate-x-16',
    visible: 'opacity-100 translate-x-0'
  },
  'fade-right': {
    initial: 'opacity-0 -translate-x-16',
    visible: 'opacity-100 translate-x-0'
  },
  'zoom-in': {
    initial: 'opacity-0 scale-90',
    visible: 'opacity-100 scale-100'
  },
  'zoom-out': {
    initial: 'opacity-0 scale-110',
    visible: 'opacity-100 scale-100'
  },
  'flip-up': {
    initial: 'opacity-0 rotateX-90',
    visible: 'opacity-100 rotateX-0'
  },
  'flip-down': {
    initial: 'opacity-0 -rotateX-90',
    visible: 'opacity-100 rotateX-0'
  }
};

const ScrollReveal = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className = '',
  once = true
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, once]);

  const { initial, visible } = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={`transition-all transform-gpu ${className} ${
        isVisible ? visible : initial
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  );
};

// Wrapper for staggered children animations
interface ScrollRevealGroupProps {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  childClassName?: string;
}

export const ScrollRevealGroup = ({
  children,
  animation = 'fade-up',
  staggerDelay = 100,
  duration = 700,
  threshold = 0.1,
  className = '',
  childClassName = ''
}: ScrollRevealGroupProps) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          duration={duration}
          threshold={threshold}
          className={childClassName}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ScrollReveal;
