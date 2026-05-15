import { brand } from "@/lib/content";
import { NextResponse } from "next/server";

type ContactBody = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  inquiryType?: string;
  interest?: string;
  variant?: "contact" | "talent";
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const { firstName, lastName, email, message, inquiryType, interest, variant } = body;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All required fields must be filled." }, { status: 400 });
    }

    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    const isTalent = variant === "talent";
    const subject = isTalent
      ? `Flex Human Talent Community: ${interest ?? "General"}`
      : `Flex Human Contact: ${inquiryType ?? "General Contact"}`;

    const html = `
      <h2>${subject}</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${inquiryType ? `<p><strong>Inquiry Type:</strong> ${inquiryType}</p>` : ""}
      ${interest ? `<p><strong>Area of Interest:</strong> ${interest}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM ?? "Flex Human <onboarding@resend.dev>",
          to: [brand.email],
          reply_to: email,
          subject,
          html,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
        return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    }

    const formRes = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(brand.email)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: subject,
        _template: "table",
        name: fullName,
        email,
        inquiry_type: inquiryType ?? interest ?? "N/A",
        message,
      }),
    });

    if (!formRes.ok) {
      return NextResponse.json({ error: "Failed to send message. Please email us directly." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
