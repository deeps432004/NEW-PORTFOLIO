import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    // Forward to FormSubmit endpoint with target deepsdeepika967@gmail.com
    const response = await fetch("https://formsubmit.co/ajax/deepsdeepika967@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: "http://localhost:3000",
        Origin: "http://localhost:3000",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New Portfolio Message from ${name} (${email})`,
        _template: "table",
        _captcha: "false",
      }),
    });

    const data = await response.json();

    // Check if FormSubmit requires initial 1-time activation
    if (data.message && data.message.includes("Activation")) {
      return NextResponse.json({
        success: true,
        activationNeeded: true,
        message:
          "FormSubmit has sent an activation link to deepsdeepika967@gmail.com. Please click 'Activate Form' in your Gmail inbox to begin receiving incoming messages directly!",
      });
    }

    if (data.success === "true" || data.success === true) {
      return NextResponse.json({
        success: true,
        activationNeeded: false,
        message: "Message successfully dispatched to deepsdeepika967@gmail.com!",
      });
    }

    return NextResponse.json(
      { error: data.message || "Failed to transmit message." },
      { status: 400 }
    );
  } catch (err: any) {
    console.error("Contact backend route error:", err);
    return NextResponse.json(
      { error: "Internal server error while transmitting. Please use direct email." },
      { status: 500 }
    );
  }
}
