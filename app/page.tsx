import Link from "next/link";
import { getArtigos } from "@/lib/artigos";

export const dynamic = "force-static";

export default async function Home() {
  const artigos = await getArtigos();

  return (
    <main className="container">
      <section className="hero">
        <p className="tag">Blog com Next.js</p>
        <h1>Artigos sobre tecnologia, SEO e desenvolvimento web</h1>
        <p>
          Projeto com App Router, rotas dinâmicas, Server Components,
          carregamento de dados e SEO dinâmico.
        </p>
      </section>

      <section className="grid">
        {artigos.map((artigo) => (
          <article key={artigo.slug} className="card">
            <p className="date">{artigo.date}</p>
            <h2>{artigo.title}</h2>
            <p>{artigo.description}</p>
            <p className="author">Por {artigo.author}</p>

            <Link href={`/artigos/${artigo.slug}`} className="button">
              Ler artigo
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
