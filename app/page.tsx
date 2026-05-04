"use client";

import { useState } from "react";

const workflows = [
  "Auto Detect",
  "Offline",
  "Slow Speeds",
  "Intermittent Drops",
  "Wi-Fi Issue",
  "Speed Change / Radius Bounce",
  "60GHz Onboarding",
  "Delete PPPoE / Adopt Radio",
  "DSL / CenturyLink",
  "Ticket Note Builder"
];

export default function HomePage() {
  const [issue, setIssue] = useState("");
  const [workflow, setWorkflow] = useState("Auto Detect");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    setAnswer("");
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ issue, workflow })
      });
      const data = await res.json();
      setAnswer(data.answer ?? data.error ?? "No answer returned.");
    } catch (error) {
      setAnswer("Request failed. Check server logs and environment variables.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>MontanaSky Support Copilot</h1>
      <p>Internal SOP/RAG assistant for help desk workflows, escalation checks, and ticket notes.</p>

      <div className="card">
        <label>Workflow</label>
        <select value={workflow} onChange={(e) => setWorkflow(e.target.value)}>
          {workflows.map((item) => <option key={item}>{item}</option>)}
        </select>

        <div style={{ height: 16 }} />

        <label>Describe the issue or tech request</label>
        <textarea
          rows={7}
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="Example: Customer has Tarana and Plume. Wi-Fi shows connected but nothing loads."
        />

        <div style={{ height: 16 }} />
        <button onClick={generate} disabled={loading || !issue.trim()}>
          {loading ? "Generating..." : "Generate Workflow"}
        </button>
      </div>

      <div style={{ height: 24 }} />
      <div className="output">{answer || "Output will appear here."}</div>
    </main>
  );
}
