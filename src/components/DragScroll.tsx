"use client";

import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

// Horizontal strip that scrolls with the trackpad/touch and supports click-drag for mouse users.
export default function DragScroll({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, left: 0, moved: false });

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    drag.current = { down: true, startX: e.pageX, left: el.scrollLeft, moved: false };
    el.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.down || !ref.current) return;
    const dx = e.pageX - drag.current.startX;
    if (Math.abs(dx) > 5) drag.current.moved = true;
    ref.current.scrollLeft = drag.current.left - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
  };
  // Swallow the click that follows a drag so card links don't navigate accidentally.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onClickCapture={onClickCapture}
      className={`overflow-x-auto cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {children}
    </div>
  );
}
