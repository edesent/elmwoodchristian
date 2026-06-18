"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { STAFF } from "@/lib/staff";

export default function StaffPreview() {
  const featured = STAFF;
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, left: 0 });

  // Drag-to-scroll for mouse users (touch uses native scrolling).
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = scroller.current;
    if (!el) return;
    drag.current = { down: true, startX: e.pageX, left: el.scrollLeft };
    el.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.down) return;
    const el = scroller.current;
    if (!el) return;
    el.scrollLeft = drag.current.left - (e.pageX - drag.current.startX);
  };
  const endDrag = () => {
    drag.current.down = false;
  };

  return (
    <section className="bg-paper py-24 md:py-28">
      {/* Title — kept to header width */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow text-crimson">Our People</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Teachers who know your child by name
            </h2>
          </div>
          <Link
            href="/staff"
            className="inline-flex items-center gap-2 text-crimson font-semibold uppercase tracking-[0.12em] text-sm whitespace-nowrap"
          >
            Meet our full faculty <span>→</span>
          </Link>
        </div>
      </div>

      {/* Faculty strip — drag or scroll left/right */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={scroller}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className="mt-14 flex gap-6 md:gap-8 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featured.map((m) => (
            <div key={m.slug} className="group shrink-0 w-52 sm:w-60">
              <div className="relative aspect-square overflow-hidden rounded-sm border border-line">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  draggable={false}
                  sizes="240px"
                  className="object-cover grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 pointer-events-none"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl text-ink leading-tight">{m.name}</h3>
              <p className="text-[0.72rem] uppercase tracking-[0.16em] text-crimson font-semibold mt-1">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
