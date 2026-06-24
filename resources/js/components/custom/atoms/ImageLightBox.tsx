import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface Screenshot {
    url: string;
    caption?: string;
}

interface LightboxProps {
    screenshots: Screenshot[];
    initialIndex: number;
    onClose: () => void;
}

export const Lightbox = ({
    screenshots,
    initialIndex,
    onClose,
}: LightboxProps) => {
    const [current, setCurrent] = useState(initialIndex);
    const [showScrollHint, setShowScrollHint] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    const prev = useCallback(
        () =>
            setCurrent(
                (i) => (i - 1 + screenshots.length) % screenshots.length,
            ),
        [screenshots.length],
    );
    const next = useCallback(
        () => setCurrent((i) => (i + 1) % screenshots.length),
        [screenshots.length],
    );

    /* Reset scroll + re-check overflow on image change */
    useEffect(() => {
        const el = imgRef.current;
        if (!el) return;
        el.scrollTo({ top: 0 });

        const raf = requestAnimationFrame(() => {
            setShowScrollHint(el.scrollHeight > el.clientHeight + 4);
        });
        return () => cancelAnimationFrame(raf);
    }, [current]);

    /* Hide hint once the user scrolls */
    const handleScroll = useCallback(() => {
        if (imgRef.current && imgRef.current.scrollTop > 30) {
            setShowScrollHint(false);
        }
    }, []);

    /* Keyboard navigation */
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose, prev, next]);

    /* Lock body scroll */
    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = original;
        };
    }, []);

    const shot = screenshots[current];

    const modal = (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
            onClick={onClose}
        >
            <div
                className="relative flex w-full max-w-5xl flex-col rounded-2xl bg-gray-950 shadow-2xl"
                style={{ height: 'min(98dvh, 700px)' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* ── Top bar ── */}
                <div className="flex flex-shrink-0 items-center justify-between border-b border-white/10 px-4 py-0">
                    <p className="text-xs font-medium text-white/50">
                        {current + 1} / {screenshots.length}
                        {shot.caption && (
                            <span className="ml-3 text-white/70">
                                {shot.caption}
                            </span>
                        )}
                    </p>
                    <button
                        onClick={onClose}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="Close lightbox"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* ── Image area ── */}
                <div
                    ref={imgRef}
                    onScroll={handleScroll}
                    className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain"
                >
                    <img
                        key={current}
                        src={shot.url}
                        alt={shot.caption ?? `Screenshot ${current + 1}`}
                        className="block w-full"
                        draggable={false}
                    />

                    {/* Prev / Next */}
                    {screenshots.length > 1 && (
                        <>
                            <button
                                onClick={prev}
                                className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white/80 backdrop-blur-sm transition-all hover:bg-black/80 hover:text-white active:scale-95"
                                aria-label="Previous screenshot"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={next}
                                className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white/80 backdrop-blur-sm transition-all hover:bg-black/80 hover:text-white active:scale-95"
                                aria-label="Next screenshot"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </>
                    )}

                    {/* ── Design B: frosted glass pill (contrast-safe) ── */}
                    <div
                        className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 transition-all duration-300"
                        style={{ opacity: showScrollHint ? 1 : 0 }}
                    >
                        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3.5 py-2 backdrop-blur-md">
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                className="shrink-0"
                                aria-hidden="true"
                            >
                                <path
                                    d="M6.5 1v11M2 8l4.5 4.5L11 8"
                                    stroke="rgba(255,255,255,0.85)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text-[11px] font-medium tracking-wide text-white/80">
                                scroll for more
                            </span>
                        </div>
                    </div>
                </div>

                {/* ── Dot indicators ── */}
                {screenshots.length > 1 && (
                    <div className="flex flex-shrink-0 justify-center gap-1.5 border-t border-white/10 py-3">
                        {screenshots.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to screenshot ${i + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-200 ${
                                    i === current
                                        ? 'w-5 bg-white'
                                        : 'w-1.5 bg-white/30 hover:bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );

    return createPortal(modal, document.body);
};
