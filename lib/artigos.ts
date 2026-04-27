import artigosLocais from "@/data/artigos.json";

export type Artigo = {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  description: string;
  content: string;
};

export async function getArtigos(): Promise<Artigo[]> {
  return artigosLocais as Artigo[];
}

export async function getArtigoBySlug(slug: string): Promise<Artigo | undefined> {
  const artigos = await getArtigos();

  return artigos.find((artigo) => artigo.slug === slug);
}