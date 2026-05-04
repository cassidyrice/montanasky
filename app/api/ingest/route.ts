import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const secret = req.headers.get("x-ingest-secret");

  if (secret !== process.env.ADMIN_INGEST_SECRET) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  return NextResponse.json({
    status: "placeholder",
    message: "Run scripts/ingest-sops.ts locally or replace this route with server-side SOP ingestion."
  });
}
