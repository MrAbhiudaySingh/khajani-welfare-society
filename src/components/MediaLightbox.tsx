import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Newspaper } from "lucide-react";

export interface MediaItem {
  image: string;
  source?: string;
  title?: string;
  desc?: string;
  date?: string;
}

export interface MediaLightboxProps {
  // Enhanced / Structured items
  items?: MediaItem[];
  currentIndex?: number | null;
  onNavigate?: (index: number) => void;

  // Simple / Legacy array of image URLs or media objects
  images?: string[];
  media?: { url?: string; image?: string; title?: string; description?: string }[];
  initialIndex?: number;
  isOpen?: boolean;

  onClose: () => void;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({
  items: propItems,
  currentIndex: propCurrentIndex,
  onClose,
  onNavigate: propOnNavigate,
  images,
  media,
  initialIndex = 0,
  isOpen = true,
}) => {
  // If legacy isOpen prop is provided and false, don't render anything
  if (isOpen === false) return null;

  // Normalize items array
  const items: MediaItem[] =
    propItems && propItems.length > 0
      ? propItems
      : media && media.length > 0
      ? media.map((m) => ({
          image: m.image || m.url || "",
          title: m.title,
          desc: m.description,
        }))
      : images && images.length > 0
      ? images.map((img) => ({ image: img }))
      : [];

  // Internal index state for legacy uncontrolled navigation
  const [internalIndex, setInternalIndex] = useState<number>(initialIndex);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof initialIndex === "number") {
      setInternalIndex(initialIndex);
    }
  }, [initialIndex]);

  const activeIndex =
    typeof propCurrentIndex === "number"
      ? propCurrentIndex
      : propCurrentIndex === null
      ? null
      : internalIndex;

  const handleNavigate = (newIdx: number) => {
    if (propOnNavigate) {
      propOnNavigate(newIdx);
    } else {
      setInternalIndex(newIdx);
    }
  };

  const [zoom, setZoom] = useState<number>(1);
  const [isPanning, setIsPanning] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const activeItem =
    items && activeIndex !== null && activeIndex >= 0 && activeIndex < items.length
      ? items[activeIndex]
      : null;

  // Reset zoom and pan on item change
  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null || !items.length) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        if (activeIndex < items.length - 1) handleNavigate(activeIndex + 1);
      } else if (e.key === "ArrowLeft") {
        if (activeIndex > 0) handleNavigate(activeIndex - 1);
      } else if (e.key === "+" || e.key === "=") {
        setZoom((prev) => Math.min(prev + 0.3, 3));
      } else if (e.key === "-") {
        setZoom((prev) => Math.max(prev - 0.3, 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, items.length, onClose, propOnNavigate]);

  if (!mounted || activeIndex === null || !activeItem) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.4, 3.2));
  const handleZoomOut = () => {
    setZoom((prev) => {
      const next = Math.max(prev - 0.4, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };
  const handleResetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsPanning(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning || zoom <= 1) return;
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
    });
  };

  const handleMouseUp = () => setIsPanning(false);

  const toggleZoomClick = (e: React.MouseEvent) => {
    // Only toggle zoom if not dragging
    if (zoom === 1) {
      setZoom(1.8);
    } else {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Newspaper Clipping Reader"
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-black/95 backdrop-blur-2xl text-white select-none transition-opacity duration-300"
    >
      {/* Top Bar / Controls */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 glass-navy z-20">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-accent/20 border border-accent/30 text-accent">
            <Newspaper size={18} />
          </div>
          <div>
            <h3 className="font-display font-bold text-base text-white tracking-wide">
              {activeItem.source || activeItem.title || "Press Clipping"}
            </h3>
            {activeItem.date && (
              <span className="text-xs text-secondary font-medium tracking-wider uppercase">
                {activeItem.date}
              </span>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="flex items-center gap-1 glass px-2 py-1 rounded-xl border border-white/15">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 1}
              className="p-1.5 hover:bg-white/15 rounded-lg transition disabled:opacity-30 disabled:cursor-not-allowed"
              title="Zoom Out (-)"
            >
              <ZoomOut size={16} />
            </button>
            <span className="text-xs font-mono px-1 font-bold">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoom >= 3.2}
              className="p-1.5 hover:bg-white/15 rounded-lg transition disabled:opacity-30 disabled:cursor-not-allowed"
              title="Zoom In (+)"
            >
              <ZoomIn size={16} />
            </button>
            {zoom > 1 && (
              <button
                onClick={handleResetZoom}
                className="p-1.5 hover:bg-white/15 rounded-lg transition text-secondary ml-1"
                title="Reset Zoom"
              >
                <RotateCcw size={14} />
              </button>
            )}
          </div>

          <span className="text-xs text-white/50 px-2 font-mono">
            {activeIndex + 1} / {items.length}
          </span>

          <button
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-red-500/80 rounded-xl transition-all border border-white/20"
            title="Close (Esc)"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center p-4 md:p-8 overflow-hidden cursor-default"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={(e) => {
          if (e.target === e.currentTarget && zoom === 1) {
            onClose();
          }
        }}
      >
        {/* Navigation Prev Button */}
        {activeIndex > 0 && (
          <button
            onClick={() => handleNavigate(activeIndex - 1)}
            className="absolute left-4 md:left-8 z-30 p-3.5 rounded-2xl glass-dark hover:bg-accent/20 border border-white/20 text-white transition-all transform hover:scale-110 active:scale-95 shadow-xl"
            title="Previous Article (←)"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Clipping Image Container */}
        <div
          className="relative max-h-full max-w-full flex items-center justify-center transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            cursor: zoom > 1 ? (isPanning ? "grabbing" : "grab") : "zoom-in",
          }}
          onClick={zoom === 1 ? toggleZoomClick : undefined}
          title={zoom === 1 ? "Click to zoom in" : "Drag to pan"}
        >
          <img
            src={activeItem.image}
            alt={activeItem.source || activeItem.title || "Press clipping"}
            className="max-h-[75vh] md:max-h-[80vh] w-auto max-w-[90vw] md:max-w-[85vw] object-contain rounded-xl shadow-2xl border border-white/10"
            draggable={false}
          />
        </div>

        {/* Navigation Next Button */}
        {activeIndex < items.length - 1 && (
          <button
            onClick={() => handleNavigate(activeIndex + 1)}
            className="absolute right-4 md:right-8 z-30 p-3.5 rounded-2xl glass-dark hover:bg-accent/20 border border-white/20 text-white transition-all transform hover:scale-110 active:scale-95 shadow-xl"
            title="Next Article (→)"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Bottom Information Drawer */}
      {activeItem.desc && (
        <div className="px-6 py-3 border-t border-white/10 glass-navy z-20 text-center">
          <p className="text-sm text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            {activeItem.desc}
          </p>
          <span className="text-[10px] text-white/40 uppercase tracking-widest block mt-1">
            Tip: Double-click or use +/- to zoom, drag to pan newspaper columns
          </span>
        </div>
      )}
    </div>,
    document.body
  );
};

export default MediaLightbox;
