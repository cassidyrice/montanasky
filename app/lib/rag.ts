import fs from "node:fs/promises";
import path from "node:path";

const SOP_DIR = path.join(process.cwd(), "sops");

// MVP fallback retrieval: simple keyword scoring over local markdown files.
// Replace with Supabase pgvector after SOP ingestion is implemented.
export async function retrieveSopContext(issue: string, workflow: string) {
  const files = await fs.readdir(SOP_DIR);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  const queryTerms = normalize(`${issue} ${workflow}`).split(" ").filter(Boolean);

  const scored = await Promise.all(markdownFiles.map(async (file) => {
    const fullPath = path.join(SOP_DIR, file);
    const content = await fs.readFile(fullPath, "utf8");
    const normalized = normalize(content);
    const score = queryTerms.reduce((total, term) => total + (normalized.includes(term) ? 1 : 0), 0);
    return { file, content, score };
  }));

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((item) => `SOURCE: ${item.file}\n${item.content.slice(0, 2500)}`)
    .join("\n\n---\n\n");
}

function normalize(input: string) {
  return input.toLowerCase().replace(/[^a-z0-9/]+/g, " ");
}
