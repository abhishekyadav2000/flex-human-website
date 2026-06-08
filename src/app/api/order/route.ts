import { brand } from "@/lib/content";
import { NextResponse } from "next/server";

type OrderItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
};

type OrderBody = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  notes?: string;
  items: OrderItem[];
  subtotal: number;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as OrderBody;
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zip,
      notes,
      items,
      subtotal,
    } = body;

    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !address?.trim() ||
      !city?.trim() ||
      !state?.trim() ||
      !zip?.trim() ||
      !items?.length
    ) {
      return NextResponse.json({ error: "All required fields must be filled." }, { status: 400 });
    }

    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    const itemRows = items
      .map(
        (item) =>
          `<tr><td>${item.name}</td><td>${item.quantity}</td><td>$${item.price.toLocaleString()}</td><td>$${(item.price * item.quantity).toLocaleString()}</td></tr>`,
      )
      .join("");

    const subject = `Flex Human Product Order — ${fullName}`;
    const html = `
      <h2>${subject}</h2>
      <p><strong>Customer:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}, ${city}, ${state} ${zip}</p>
      ${notes?.trim() ? `<p><strong>Notes:</strong> ${notes.replace(/\n/g, "<br>")}</p>` : ""}
      <h3>Order Items</h3>
      <table border="1" cellpadding="8" cellspacing="0">
        <tr><th>Product</th><th>Qty</th><th>Unit Price</th><th>Line Total</th></tr>
        ${itemRows}
      </table>
      <p><strong>Subtotal:</strong> $${subtotal.toLocaleString()}</p>
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
        return NextResponse.json({ error: "Failed to send order." }, { status: 500 });
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
        phone,
        address: `${address}, ${city}, ${state} ${zip}`,
        notes: notes?.trim() || "N/A",
        items: items.map((item) => `${item.name} x${item.quantity} ($${item.price})`).join("; "),
        subtotal: `$${subtotal.toLocaleString()}`,
      }),
    });

    if (!formRes.ok) {
      return NextResponse.json({ error: "Failed to place order. Please email us directly." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
