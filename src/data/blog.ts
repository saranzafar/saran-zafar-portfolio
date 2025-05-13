import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkSlug from "remark-slug";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export interface Metadata {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
}

export interface Post {
  slug: string;
  metadata: Metadata;
  source: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

function getMDXFiles(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"));
}

export async function markdownToHTML(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkSlug as any)
    .use(remarkRehype)
    .use(rehypePrettyCode, { /* … */ })
    .use(rehypeSlug as any)
    .use(
      rehypeAutolinkHeadings as any,
      { behavior: "append", content: { type: "text", value: " " } }
    )
    .use(rehypeStringify)
    .process(markdown);

  return file.toString();
}

export async function getPost(slug: string): Promise<Post> {
  const fullPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content: rawContent } = matter(raw);

  const html = await markdownToHTML(rawContent);
  const metadata = data as Metadata;

  return { slug, metadata, source: html };
}

export async function getBlogPosts(): Promise<Post[]> {
  const files = getMDXFiles();

  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      return getPost(slug);
    })
  );

  // Sort newest first
  return posts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );
}
