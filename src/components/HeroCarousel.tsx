'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

type Bag = {
  key: 'pyramid' | 'v' | 'nafi';
  label: string;
  folder: string;
};

const BAGS: Bag[] = [
  { key: 'pyramid', label: 'Pyramid', folder: 'pyramid' },
  { key: 'v', label: 'En V', folder: 'v' },
  { key: 'nafi', label: 'Nafi', folder: 'nafi' },
];

const FRAME_COUNT = 36;
const AUTO_ROTATE_INTERVAL = 5000;

function pad(n: number) {
  return String(n).padStart(3, '0');
}

export default function HeroCarousel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeBag, setActiveBag] = useState(0);
  const [frameIndex, setFrameIndex] = useState(0);
  const [dragAngle, setDragAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartAngle = useRef(0);
  const framesRef = useRef<Map<string, HTMLImageElement[]>>(new Map());
  const [loadedBags, setLoadedBags] = useState<Set<string>>(new Set());
  const rafRef = useRef<number>(0);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const preloadBag = useCallback((bag: Bag) => {
    const key = bag.folder;
    if (framesRef.current.has(key)) return;

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;
    const total = FRAME_COUNT;

    for (let i = 1; i <= total; i++) {
      const img = new Image();
      img.src = `/3d/${bag.folder}/${pad(i)}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === total) {
          framesRef.current.set(key, images);
          setLoadedBags(prev => new Set(prev).add(key));
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === total) {
          setLoadedBags(prev => {
            const next = new Set(prev);
            next.delete(key);
            return next;
          });
        }
      };
      images.push(img);
    }
  }, []);

  useEffect(() => {
    BAGS.forEach(preloadBag);
  }, [preloadBag]);

  const getCurrentFrame = useCallback(() => {
    return Math.abs(Math.floor(dragAngle / 10) % FRAME_COUNT);
  }, [dragAngle]);

  useEffect(() => {
    if (!isDragging) return;
    const idx = getCurrentFrame();
    setFrameIndex(idx);
  }, [dragAngle, isDragging, getCurrentFrame]);

  useEffect(() => {
    if (isDragging) return;
    let frame = 0;
    let last = 0;

    const animate = (ts: number) => {
      if (!last) last = ts;
      const delta = ts - last;
      if (delta > 80) {
        frame = (frame + 1) % FRAME_COUNT;
        setFrameIndex(frame);
        last = ts;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [activeBag, isDragging]);

  useEffect(() => {
    autoTimerRef.current = setInterval(() => {
      if (!isDragging) {
        setActiveBag(prev => (prev + 1) % BAGS.length);
        setDragAngle(0);
        setFrameIndex(0);
      }
    }, AUTO_ROTATE_INTERVAL);
    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, [isDragging]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bag = BAGS[activeBag];
    const images = framesRef.current.get(bag.folder);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!images || !images[frameIndex] || !images[frameIndex].complete || !images[frameIndex].naturalWidth) {
      ctx.fillStyle = 'var(--mw-line, #e8e6e1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'var(--mw-stone, #8a8680)';
      ctx.font = '13px "DM Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(bag.label, canvas.width / 2, canvas.height / 2);
      return;
    }

    const img = images[frameIndex];
    const scale = Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;
    ctx.drawImage(img, x, y, w, h);
  }, [frameIndex, activeBag, loadedBags]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartAngle.current = dragAngle;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    setDragAngle(dragStartAngle.current + delta * 0.5);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full flex flex-col items-center" style={{ background: 'transparent' }}>
      <canvas
        ref={canvasRef}
        width={520}
        height={520}
        className="w-full max-w-[520px] aspect-square cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: 'none' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      />
      <div className="flex gap-6 mt-4">
        {BAGS.map((bag, i) => (
          <button
            key={bag.key}
            onClick={() => {
              setActiveBag(i);
              setDragAngle(0);
              setFrameIndex(0);
            }}
            className="text-caps text-[11px] pb-1 transition-colors"
            style={{
              color: activeBag === i ? 'var(--mw-ink)' : 'var(--mw-stone)',
              borderBottom: activeBag === i ? '1px solid var(--mw-ink)' : '1px solid transparent',
            }}
          >
            {bag.label}
          </button>
        ))}
      </div>
    </div>
  );
}
