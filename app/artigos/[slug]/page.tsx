import Link from "next/link";
import { notFound } from "next/navigation";
import { getArtigoBySlug, getArtigos } from "@/lib/artigos";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-static";

export async function generateStaticParams() {
  const artigos = await getArtigos();

  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const artigo = await getArtigoBySlug(slug);

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
      description: "Este artigo não foi encontrado.",
    };
  }

  return {
    title: artigo.title,
    description: artigo.description,
  };
}

export default async function ArtigoPage({ params }: PageProps) {
  const { slug } = await params;
  const artigo = await getArtigoBySlug(slug);

  if (!artigo) {
    notFound();
  }

  return (
    <main className="container">
      <article className="article">
        <Link href="/" className="back">
          ← Voltar
        </Link>

        <p className="tag">Artigo</p>
        <h1>{artigo.title}</h1>

        <div className="meta">
          <span>Por {artigo.author}</span>
          <span>{artigo.date}</span>
        </div>

        <p className="description">{artigo.description}</p>

        <div className="content">
          <p>{artigo.content}</p>
        </div>
      </article>
    </main>
  );
}