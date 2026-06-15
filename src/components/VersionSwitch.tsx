import Link from "next/link";

interface Props {
  current: "v1" | "v2";
}

/**
 * Small floating toggle so Eli can compare design versions live.
 * Remove this component (and its uses in the layouts) before launch.
 */
export default function VersionSwitch({ current }: Props) {
  const to = current === "v1" ? "/v2" : "/";
  const label = current === "v1" ? "View design v2" : "View design v1";

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <Link
        href={to}
        className="flex items-center gap-2 rounded-full bg-ink/90 text-white text-xs font-semibold tracking-wide px-4 py-2.5 shadow-lg backdrop-blur hover:bg-ink transition-colors"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-crimson-light" />
        {label}
      </Link>
    </div>
  );
}
