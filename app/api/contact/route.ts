import { NextResponse } from "next/server";

/** POST /api/contact — validates the contact form and forwards it to CONTACT_FORM_ENDPOINT
 *  (any JSON webhook: Formspree, Make, Zapier, a CRM…). Where submissions go is still [TODO] in
 *  content/copy.md; until the variable is set, the route answers 503 and the form shows its error state. */
const MAX = { firstName: 100, lastName: 100, email: 200, phone: 40, message: 5000 } as const;
type Field = keyof typeof MAX;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  // Honeypot: real visitors never fill the hidden "company" field
  if (typeof body.company === "string" && body.company.trim()) return NextResponse.json({ ok: true });

  const data: Partial<Record<Field, string>> & { newsletter: boolean } = { newsletter: body.newsletter === true };
  for (const key of Object.keys(MAX) as Field[]) {
    const value = typeof body[key] === "string" ? (body[key] as string).trim() : "";
    if (value.length > MAX[key]) return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    data[key] = value;
  }
  if (!data.firstName || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email ?? "")) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpoint) return NextResponse.json({ ok: false, error: "unconfigured" }, { status: 503 });

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...data, source: request.headers.get("referer") ?? "", sentAt: new Date().toISOString() }),
    });
    if (!res.ok) return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }
}
