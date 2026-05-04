import { NextResponse } from "next/server";
import { retrieveSopContext } from "@/app/lib/rag";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const issue = String(body.issue ?? "").trim();
    const workflow = String(body.workflow ?? "Auto Detect").trim();

    if (!issue) {
      return NextResponse.json({ error: "Missing issue." }, { status: 400 });
    }

    const context = await retrieveSopContext(issue, workflow);

    const answer = [
      "Issue Type:",
      workflow,
      "",
      "Retrieved SOP Context:",
      context || "No matching SOP context found.",
      "",
      "Next implementation step:",
      "Connect this endpoint to the selected model provider and return the formatted support workflow."
    ].join("\n");

    return NextResponse.json({ answer });
  } catch (error) {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
