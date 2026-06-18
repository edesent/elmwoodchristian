import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "News & Articles",
  description:
    "Articles on Christian education, mastery learning, and raising children in faith—from the Elmwood Christian Academy community in Brighton, Colorado.",
};

export default function NewsPage() {
  const articles = [...ARTICLES].sort((a, b) => (a.iso < b.iso ? 1 : -1));
  return (
    <>
      <SubpageHero
        eyebrow="News & Articles"
        title="From the Elmwood community"
        subtitle="Encouragement and perspective on Christ-centered education."
      />
      <section className="bg-paper py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 grid gap-px bg-line border border-line">
          {articles.map((a, i) => (
            <AnimateOnScroll key={a.slug} delay={i * 60}>
              <Link
                href={`/news/${a.slug}`}
                className="group block bg-paper hover:bg-white transition-colors p-8 md:p-10"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">
                  {a.author} · {a.date}
                </p>
                <h2 className="mt-3 font-serif text-2xl md:text-3xl text-ink leading-snug group-hover:text-crimson transition-colors">
                  {a.title}
                </h2>
                <p className="mt-3 leading-relaxed text-text-body max-w-2xl">{a.excerpt}</p>
                <span className="mt-4 inline-block text-crimson font-semibold uppercase tracking-[0.12em] text-sm">
                  Read article →
                </span>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
