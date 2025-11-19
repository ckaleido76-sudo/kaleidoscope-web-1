'use client';

import React, { useEffect, useRef } from 'react';
import styles from './KaleidoscopeHero.module.css';

interface KaleidoscopeHeroProps {
  title?: string;
  subtitle?: string;
  initialSpeed?: number;
  initialSegments?: number;
  initialComplexity?: number;
}

const KaleidoscopeHero: React.FC<KaleidoscopeHeroProps> = ({
  title = 'Kaleidoscope Recovery',
  subtitle = 'A radical recovery solution',
  initialSpeed = 0.8,
  initialSegments = 8,
  initialComplexity = 2,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  // Fixed animation values for consistent performance (no controls)
  const speed = initialSpeed;
  const segments = initialSegments;
  const complexity = initialComplexity;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return; // Respect reduced motion
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width: number, height: number;
    let centerX: number, centerY: number;
    let time = 0;
    // Removed mouse tracking - keep animation centered
    let active = false;

    const resize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      centerX = width / 2;
      centerY = height / 2;
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    // Mouse tracking removed - animation stays centered
    
    // Color system
    const getKaleidoscopeColor = (phase: number, layer = 0): string => {
      const colors = [
        { h: 300, s: 100, l: 70 },
        { h: 280, s: 100, l: 75 },
        { h: 200, s: 100, l: 70 },
        { h: 180, s: 100, l: 65 },
        { h: 60, s: 100, l: 70 },
        { h: 30, s: 100, l: 65 },
        { h: 300, s: 100, l: 70 }
      ];
      const index = (phase * (colors.length - 1)) % (colors.length - 1);
      const i = Math.floor(index);
      const f = index - i;
      const c1 = colors[i];
      const c2 = colors[i + 1];
      const h = c1.h + (c2.h - c1.h) * f + time * 20;
      const s = c1.s + (c2.s - c1.s) * f;
      const l = c1.l + (c2.l - c1.l) * f + Math.sin(time * 2 + layer) * 10;
      return `hsl(${h % 360}, ${s}%, ${l}%)`;
    };
    
    const drawKaleidoscopeSegment = () => {
      const maxRadius = Math.min(width, height) * 0.7;
      const angleStep = (Math.PI * 2) / segments;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, maxRadius, 0, angleStep);
      ctx.closePath();
      ctx.clip();
      for (let layer = 0; layer < complexity; layer++) {
        const layerTime = time * (1 + layer * 0.3);
        const layerScale = 1 - layer * 0.15;
        for (let i = 0; i < 3; i++) {
          const shapeTime = layerTime + i * 0.5;
          const radius = maxRadius * layerScale * (0.2 + Math.sin(shapeTime) * 0.1);
          const distance = maxRadius * layerScale * (0.3 + Math.sin(shapeTime * 0.7) * 0.3);
          const angle = angleStep * 0.5 + Math.sin(shapeTime * 0.5) * angleStep * 0.3;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
          const colorPhase = (shapeTime * 0.1 + i * 0.2) % 1;
          gradient.addColorStop(0, getKaleidoscopeColor(colorPhase, layer));
          gradient.addColorStop(0.5, getKaleidoscopeColor((colorPhase + 0.1) % 1, layer));
          gradient.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = gradient;
          ctx.globalAlpha = 0.6 - layer * 0.1;
          ctx.beginPath();
          for (let j = 0; j <= 12; j++) {
            const shapeAngle = (j / 12) * Math.PI * 2;
            const shapeRadius = radius * (1 + Math.sin(shapeAngle * 3 + shapeTime) * 0.3);
            const px = x + Math.cos(shapeAngle) * shapeRadius;
            const py = y + Math.sin(shapeAngle) * shapeRadius;
            if (j === 0) {
              ctx.moveTo(px, py);
            } else {
              ctx.lineTo(px, py);
            }
          }
          ctx.closePath();
          ctx.fill();
        }
        ctx.save();
        ctx.shadowBlur = 8;
        ctx.shadowColor = getKaleidoscopeColor((time * 0.05 + layer * 0.1) % 1, layer);
        ctx.strokeStyle = getKaleidoscopeColor((time * 0.05 + layer * 0.1) % 1, layer);
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.15;
        for (let i = 0; i < 4; i++) {
          const lineRadius = Math.min(width, height) * layerScale * (0.2 + i * 0.1);
          const lineAngle = angleStep * 0.5 + Math.sin(layerTime * 0.3 + i) * 0.2;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(
            Math.cos(lineAngle) * lineRadius,
            Math.sin(lineAngle) * lineRadius
          );
          ctx.stroke();
        }
        ctx.restore();
      }
      ctx.restore();
    };
    
    const drawKaleidoscope = () => {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time * 0.1);
      for (let i = 0; i < segments; i++) {
        ctx.save();
        ctx.rotate((Math.PI * 2 / segments) * i);
        drawKaleidoscopeSegment();
        ctx.scale(1, -1);
        drawKaleidoscopeSegment();
        ctx.restore();
      }
      const centerSize = 30 + Math.sin(time * 2) * 10;
      const centerGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, centerSize);
      centerGradient.addColorStop(0, '#ffffff');
      centerGradient.addColorStop(0.3, getKaleidoscopeColor(time * 0.1 % 1));
      centerGradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = centerGradient;
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      ctx.arc(0, 0, centerSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };
    
    const drawBackground = () => {
      ctx.fillStyle = '#EEEBFD';
      ctx.fillRect(0, 0, width, height);
      if (time % 0.1 < 0.02) {
        ctx.globalAlpha = 0.02;
        for (let i = 0; i < 30; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(x, y, 1, 1);
        }
        ctx.globalAlpha = 1;
      }
    };
    
    const animate = () => {
      time += 0.01 * speed;
      drawBackground();
      drawKaleidoscope();
      rafRef.current = requestAnimationFrame(animate);
    };

    // Start/stop animation when in view
    const io = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      if (active && rafRef.current == null) {
        rafRef.current = requestAnimationFrame(animate);
      } else if (!active && rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    }, { threshold: 0.1 });

    io.observe(canvas);

    return () => {
      window.removeEventListener('resize', resize);
      // Mouse event listener removed
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [complexity, initialComplexity, initialSegments, initialSpeed, segments, speed]);

  return (
    <div className={styles.heroContainer}>
      <h1 className="sr-only">Kaleidoscope Recovery — a radical recovery solution</h1>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden />
    </div>
  );
};

export default KaleidoscopeHero;
