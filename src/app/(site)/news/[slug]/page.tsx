import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubpageHero from "@/components/SubpageHero";
import { ARTICLES, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Article" };
  return { title: a.title, description: a.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <SubpageHero eyebrow={`${article.author} · ${article.date}`} title={article.title} />
      <article className="bg-paper py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6">
          {article.body.map((b, i) => {
            if (b.type === "h")
              return (
                <h2 key={i} className="font-serif text-2xl md:text-3xl text-ink mt-10 mb-3 leading-snug">
                  {b.text}
                </h2>
              );
            if (b.type === "ul")
              return (
                <ul key={i} className="my-5 space-y-3">
                  {b.items.map((it, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed text-text-body">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-crimson" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
            if (b.type === "quote")
              return (
                <blockquote key={i} className="my-7 border-l-2 border-crimson pl-5 font-serif italic text-xl text-ink/90">
                  {b.text}
                </blockquote>
              );
            return (
              <p key={i} className="my-5 text-lg leading-relaxed text-text-body">
                {b.text}
              </p>
            );
          })}

          <div className="mt-12 pt-8 border-t border-line">
            <Link href="/news" className="text-crimson font-semibold uppercase tracking-[0.12em] text-sm">
              ← All articles
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-stone py-16 md:py-20 border-t border-line">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
            See Elmwood for yourself
          </h2>
          <p className="mt-4 text-text-body">Schedule a personal tour and meet our teachers.</p>
          <Link
            href="/schedule-a-tour"
            className="inline-flex items-center justify-center mt-7 bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
          >
            Schedule a Tour
          </Link>
        </div>
      </section>
    </>
  );
}
