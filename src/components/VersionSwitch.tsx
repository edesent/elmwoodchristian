import Link from "next/link";

interface Props {
  current: "v1" | "v2" | "v3";
}

const versions: { id: Props["current"]; href: string; label: string }[] = [
  { id: "v1", href: "/", label: "v1" },
  { id: "v2", href: "/v2", label: "v2" },
  { id: "v3", href: "/v3", label: "v3" },
];

/**
 * Floating switcher so Eli can compare design versions live.
 * Remove this component (and its uses in the layouts) before launch.
 */
export default function VersionSwitch({ current }: Props) {
  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <div className="flex items-center gap-1 rounded-full bg-ink/90 p-1.5 shadow-lg backdrop-blur">
        <span className="pl-2 pr-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/50">
          Design
        </span>
        {versions.map((v) => (
          <Link
            key={v.id}
            href={v.href}
            aria-current={v.id === current ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
              v.id === current
                ? "bg-white text-ink"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            {v.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
