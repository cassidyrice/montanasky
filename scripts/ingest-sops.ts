import fs from "node:fs/promises";
import path from "node:path";

const SOP_DIR = path.join(process.cwd(), "sops");

async function main() {
  const files = (await fs.readdir(SOP_DIR)).filter((file) => file.endsWith(".md"));

  for (const file of files) {
    const content = await fs.readFile(path.join(SOP_DIR, file), "utf8");
    const title = content.match(/^#\s+(.+)$/m)?.[1] ?? file;

    console.log(JSON.stringify({
      source_file: file,
      title,
      chars: content.length,
      status: "ready-for-embedding"
    }));
  }

  console.log("\nNext step: create embeddings and upsert rows into Supabase sop_documents.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
