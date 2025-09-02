 

// setup-kaleidoscope.js
// Run this script in your Next.js project root: node setup-kaleidoscope.js

const fs = require('fs');
const path = require('path');

// Component TypeScript code
const componentCode = `'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './KaleidoscopeHero.module.css';

interface KaleidoscopeHeroProps {
  title?: string;
  subtitle?: string;
  showControls?: boolean;
  initialSpeed?: number;
  initialSegments?: number;
  initialComplexity?: number;
}

const KaleidoscopeHero: React.FC<KaleidoscopeHeroProps> = ({
  title = 'kaleidoscope',
  subtitle = 'A radical recovery solution for those ready to be free from drinking and the pain beneath it',
  showControls = true,
  initialSpeed = 1,
  initialSegments = 12,
  initialComplexity = 3,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(initialSpeed);
  const [segments, setSegments] = useState(initialSegments);
  const [complexity, setComplexity] = useState(initialComplexity);
  const [hideText, setHideText] = useState(false);
  const [controlsMinimized, setControlsMinimized] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width: number, height: number;
    let centerX: number, centerY: number;
    let time = 0;
    let mouseX = 0, mouseY = 0;
    
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
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - centerX) / width;
      mouseY = (e.clientY - rect.top - centerY) / height;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Color system
    const getKaleidoscopeColor = (phase: number, layer = 0): string => {
      const colors = [
        { h: 300, s: 100, l: 70 },  // Magenta
        { h: 280, s: 100, l: 75 },  // Purple-pink
        { h: 200, s: 100, l: 70 },  // Cyan
        { h: 180, s: 100, l: 65 },  // Turquoise
        { h: 60, s: 100, l: 70 },   // Yellow
        { h: 30, s: 100, l: 65 },   // Orange
        { h: 300, s: 100, l: 70 }   // Loop back to magenta
      ];
    
      const index = (phase * (colors.length - 1)) % (colors.length - 1);
      const i = Math.floor(index);
      const f = index - i;
    
      const c1 = colors[i];
      const c2 = colors[i + 1];
    
      const h = c1.h + (c2.h - c1.h) * f + time * 20;
      const s = c1.s + (c2.s - c1.s) * f;
      const l = c1.l + (c2.l - c1.l) * f + Math.sin(time * 2 + layer) * 10;
    
      return \`hsl(\${h % 360}, \${s}%, \${l}%)\`;
    };
    
    const drawKaleidoscopeSegment = () => {
      const maxRadius = Math.min(width, height) * 0.7;
      const angleStep = (Math.PI * 2) / segments;
    
      ctx.save();
    
      // Create clipping mask for one segment
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, maxRadius, 0, angleStep);
      ctx.closePath();
      ctx.clip();
    
      // Draw complex patterns within the segment
      for (let layer = 0; layer < complexity; layer++) {
        const layerTime = time * (1 + layer * 0.3);
        const layerScale = 1 - layer * 0.15;
    
        // Flowing shapes
        for (let i = 0; i < 5; i++) {
          const shapeTime = layerTime + i * 0.5;
          const radius = maxRadius * layerScale * (0.2 + Math.sin(shapeTime) * 0.1);
          const distance = maxRadius * layerScale * (0.3 + Math.sin(shapeTime * 0.7) * 0.3);
          const angle = angleStep * 0.5 + Math.sin(shapeTime * 0.5) * angleStep * 0.3;
    
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
    
          // Create gradient for each shape
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
          const colorPhase = (shapeTime * 0.1 + i * 0.2) % 1;
    
          gradient.addColorStop(0, getKaleidoscopeColor(colorPhase, layer));
          gradient.addColorStop(0.5, getKaleidoscopeColor((colorPhase + 0.1) % 1, layer));
          gradient.addColorStop(1, 'rgba(0,0,0,0)');
    
          ctx.fillStyle = gradient;
          ctx.globalAlpha = 0.6 - layer * 0.1;
    
          // Draw organic flowing shape
          ctx.beginPath();
          for (let j = 0; j <= 20; j++) {
            const shapeAngle = (j / 20) * Math.PI * 2;
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
    
        // Add soft crystalline structures with blur effect
        ctx.save();
        ctx.shadowBlur = 8;
        ctx.shadowColor = getKaleidoscopeColor((time * 0.05 + layer * 0.1) % 1, layer);
        ctx.strokeStyle = getKaleidoscopeColor((time * 0.05 + layer * 0.1) % 1, layer);
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.15;
    
        for (let i = 0; i < 8; i++) {
          const lineRadius = maxRadius * layerScale * (0.2 + i * 0.1);
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
      ctx.translate(centerX + mouseX * 30, centerY + mouseY * 30);
    
      // Rotate the entire kaleidoscope slowly
      ctx.rotate(time * 0.1);
    
      // Draw each segment and mirror it
      for (let i = 0; i < segments; i++) {
        ctx.save();
        ctx.rotate((Math.PI * 2 / segments) * i);
    
        // Draw main segment
        drawKaleidoscopeSegment();
    
        // Mirror the segment for perfect symmetry
        ctx.scale(1, -1);
        drawKaleidoscopeSegment();
    
        ctx.restore();
      }
    
      // Add central ornament
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
      // Create smooth gradient background with purple base
      const bgGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, Math.max(width, height) * 1.5
      );
    
      // Purple gradient variations
      bgGradient.addColorStop(0, '#6B3CFF');   // Lighter purple in center
      bgGradient.addColorStop(0.5, '#5B2CFA'); // Main purple color
      bgGradient.addColorStop(1, '#3A1BA0');   // Darker purple at edges
    
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);
    
      // Add subtle noise/grain effect
      ctx.globalAlpha = 0.03;
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, size, size);
      }
      ctx.globalAlpha = 1;
    };
    
    const animate = () => {
      if (!isPaused) {
        time += 0.01 * speed;
      }
    
      drawBackground();
      drawKaleidoscope();
    
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, speed, segments, complexity]);

  return (
    <div className={styles.heroContainer}>
      <canvas ref={canvasRef} className={styles.canvas} />
      
      <div className={\`\${styles.heroContent} \${hideText ? styles.hidden : ''}\`}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
      </div>
      
      {showControls && (
        <div className={\`\${styles.controls} \${controlsMinimized ? styles.minimized : ''}\`}>
          <button 
            className={styles.toggleControls} 
            onClick={() => setControlsMinimized(!controlsMinimized)}
          >
            ⚙️
          </button>
          <div className={styles.controlGroup}>
            <button onClick={() => setIsPaused(!isPaused)}>
              {isPaused ? 'Play' : 'Pause'}
            </button>
            <button onClick={() => setHideText(!hideText)}>
              {hideText ? 'Show Text' : 'Hide Text'}
            </button>
          </div>
          <div className={styles.controlGroup}>
            <label>
              Speed: 
              <input 
                type="range" 
                min="0.1" 
                max="3" 
                step="0.1" 
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
              />
            </label>
          </div>
          <div className={styles.controlGroup}>
            <label>
              Segments: 
              <input 
                type="range" 
                min="6" 
                max="24" 
                step="2" 
                value={segments}
                onChange={(e) => setSegments(parseInt(e.target.value))}
              />
            </label>
          </div>
          <div className={styles.controlGroup}>
            <label>
              Complexity: 
              <input 
                type="range" 
                min="1" 
                max="5" 
                step="1" 
                value={complexity}
                onChange={(e) => setComplexity(parseInt(e.target.value))}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default KaleidoscopeHero;`;

// CSS Module code
const cssCode = `/* KaleidoscopeHero.module.css */

.heroContainer {
  position: relative;
  width: 100vw;
  height: 56.25vw; /* 16:9 aspect ratio */
  max-height: 100vh;
  max-width: 177.77vh; /* 16:9 aspect ratio */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #5B2CFA;
  overflow: hidden;
}

.canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.heroContent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  color: white;
  pointer-events: none;
  animation: fadeIn 2s ease-out;
  max-width: 90%;
  padding: 2rem;
  transition: opacity 0.3s ease;
}

.heroContent.hidden {
  opacity: 0;
}

.heroTitle {
  font-family: 'Bebas Neue', 'Archivo Black', sans-serif;
  font-size: clamp(2rem, 7vw, 5rem);
  font-weight: 400;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 40px rgba(255,255,255,0.3);
  animation: glow 3s ease-in-out infinite alternate;
  text-transform: lowercase;
  transform: scaleX(1.3);
  transform-origin: center;
  display: inline-block;
}

.heroSubtitle {
  font-family: 'Epilogue', sans-serif;
  font-size: clamp(0.9rem, 2vw, 1.25rem);
  font-weight: 400;
  opacity: 0.9;
  letter-spacing: 0.01em;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.95);
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translate(-50%, -40%); 
  }
  to { 
    opacity: 1; 
    transform: translate(-50%, -50%); 
  }
}

@keyframes glow {
  from { 
    filter: drop-shadow(0 0 20px rgba(255,255,255,0.5)); 
  }
  to { 
    filter: drop-shadow(0 0 30px rgba(255,255,255,0.8)); 
  }
}

.controls {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: white;
  background: rgba(255,255,255,0.1);
  padding: 15px;
  border-radius: 15px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.2);
  z-index: 20;
  transition: all 0.3s ease;
}

.controls:hover {
  background: rgba(255,255,255,0.15);
  transform: translateY(-2px);
}

.controls.minimized {
  padding: 10px;
}

.controls.minimized .controlGroup {
  display: none;
}

.toggleControls {
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  margin-bottom: 10px;
  opacity: 0.8;
  transition: opacity 0.2s;
  display: block;
}

.toggleControls:hover {
  opacity: 1;
}

.controls button {
  background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1));
  color: white;
  border: 1px solid rgba(255,255,255,0.3);
  padding: 8px 16px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
}

.controls button:hover {
  background: linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.2));
  transform: scale(1.05);
}

.controls input[type="range"] {
  width: 120px;
  margin: 5px;
  margin-left: 10px;
}

.controlGroup {
  margin: 8px 0;
  font-size: 0.85rem;
}

.controlGroup label {
  display: flex;
  align-items: center;
  gap: 10px;
}`;

// Create directories and files
const createFiles = () => {
  // Determine if we're using src directory
  const hasSrc = fs.existsSync(path.join(process.cwd(), 'src'));
  const baseDir = hasSrc ? 'src/components' : 'components';

  const componentDir = path.join(process.cwd(), baseDir, 'KaleidoscopeHero');

  // Create directory if it doesn't exist
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
    console.log('✅ Created directory:', componentDir);
  }

  // Write TypeScript file
  const tsFile = path.join(componentDir, 'index.tsx');
  fs.writeFileSync(tsFile, componentCode);
  console.log('✅ Created file:', tsFile);

  // Write CSS Module file
  const cssFile = path.join(componentDir, 'KaleidoscopeHero.module.css');
  fs.writeFileSync(cssFile, cssCode);
  console.log('✅ Created file:', cssFile);

  console.log('\n🎉 Kaleidoscope Hero component installed successfully!');
  console.log('\n📝 Next steps:');
  console.log('1. Add Google Fonts to your layout.tsx or _document.tsx');
  console.log('2. Import the component: import KaleidoscopeHero from "@/components/KaleidoscopeHero"');
  console.log('3. Use it in your page: <KaleidoscopeHero showControls={false} />');
  console.log('\n💡 For production, set showControls={false} to hide the control panel.');
};

// Run the setup
try {
  createFiles();
} catch (error) {
  console.error('❌ Error creating files:', error.message);
  console.log('\nPlease make sure you run this script from your Next.js project root directory.');
}