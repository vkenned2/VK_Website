"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

interface ScrollyCanvasProps {
  scrollProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const TOTAL_FRAMES = 96;

  // Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const tempImages = new Array<HTMLImageElement>(TOTAL_FRAMES);

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      // Format: frame_00_delay-0.042s.png to frame_95_delay-0.042s.png (0-indexed, padded to 2 digits)
      const frameIndex = i.toString().padStart(2, "0");
      const filename = `frame_${frameIndex}_delay-0.042s.png`;
      img.src = `/sequence/${filename}`;
      
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount === TOTAL_FRAMES) {
          setIsPreloaded(true);
        }
      };
      
      img.onerror = () => {
        console.error(`Failed to load image frame: ${filename}`);
        loadedCount++; // Avoid blocking the site if a frame is missing
        setImagesLoaded(loadedCount);
        if (loadedCount === TOTAL_FRAMES) {
          setIsPreloaded(true);
        }
      };

      tempImages[i] = img;
    }
    imagesRef.current = tempImages;
  }, []);

  const renderFrame = (progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.round(progress * (TOTAL_FRAMES - 1)))
    );

    const img = imagesRef.current[frameIndex];
    if (img && img.complete) {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.width;
      const imgHeight = img.height;

      // Cover scaling math (object-fit: cover logic)
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth, drawHeight, drawX, drawY;

      if (imgRatio > canvasRatio) {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
        drawX = (canvasWidth - drawWidth) / 2;
        drawY = 0;
      } else {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        drawX = 0;
        drawY = (canvasHeight - drawHeight) / 2;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

      // Patch the Gemini AI watermark in the sequence frames
      const patchW = imgWidth * 0.055;
      const patchH = imgHeight * 0.095;
      const sourceX = imgWidth * 0.80;
      const sourceY = imgHeight * 0.785;
      const targetX = imgWidth * 0.88;
      const targetY = imgHeight * 0.785;

      const scaleX = drawWidth / imgWidth;
      const scaleY = drawHeight / imgHeight;

      const canvasTargetX = drawX + targetX * scaleX;
      const canvasTargetY = drawY + targetY * scaleY;
      const canvasPatchW = patchW * scaleX;
      const canvasPatchH = patchH * scaleY;

      ctx.drawImage(
        img,
        sourceX, sourceY, patchW, patchH,
        canvasTargetX, canvasTargetY, canvasPatchW, canvasPatchH
      );
    }
  };

  // Resize listener
  useEffect(() => {
    if (!isPreloaded) return;

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      }

      renderFrame(scrollProgress.get());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isPreloaded, scrollProgress]);

  // Handle scroll update
  useMotionValueEvent(scrollProgress, "change", (latest) => {
    if (isPreloaded) {
      requestAnimationFrame(() => renderFrame(latest));
    }
  });

  return (
    <div className="relative h-full w-full bg-[#121212] flex items-center justify-center">
      {/* Loading Overlay */}
      {!isPreloaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#121212] z-50 transition-opacity duration-500">
          <div className="relative w-48 h-[2px] bg-white/10 overflow-hidden rounded-full mb-4">
            <div
              className="absolute left-0 top-0 h-full bg-white transition-all duration-300 ease-out"
              style={{ width: `${(imagesLoaded / TOTAL_FRAMES) * 100}%` }}
            />
          </div>
          <p className="text-xs font-medium tracking-[0.2em] text-[#86868b] uppercase">
            Loading Experience {Math.round((imagesLoaded / TOTAL_FRAMES) * 100)}%
          </p>
        </div>
      )}

      {/* Subtle Studio Backlight: provides natural depth and hair separation */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.02)_40%,transparent_70%)]" />

      {/* Canvas Rendering with soft edge-feathering to eliminate outer compression noise while preserving full natural hair texture */}
      <canvas
        ref={canvasRef}
        className="block w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        style={{
          opacity: isPreloaded ? 1 : 0,
          maskImage: "radial-gradient(ellipse 75% 75% at 50% 45%, black 45%, rgba(0,0,0,0.85) 60%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 45%, black 45%, rgba(0,0,0,0.85) 60%, transparent 85%)",
        }}
      />

      {/* Outer Studio Vignette: blends outer perimeter into page background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_75%_at_50%_45%,transparent_50%,rgba(18,18,18,0.5)_75%,#121212_100%)]" />
    </div>
  );
}
