import { type NextRequest, NextResponse } from "next/server";
import {
  contactFormValidator,
  type ContactFormSchema,
} from "@/lib/validators/form";

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormSchema = await request.json();

    // Server-side form validation
    const result = contactFormValidator.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Oops! Some of the contact form values are not correct." },
        { status: 400 },
      );
    }

    // Fetch environment variables needed to access API
    const apiEndpoint = process.env.CONTACT_FORM_ENDPOINT;
    if (!apiEndpoint) {
      throw new Error("API endpoint was not found in environment variables.");
    }

    const apiKey = process.env.CONTACT_FORM_API_KEY;
    if (!apiKey) {
      throw new Error("API key was not found in environment variables.");
    }

    // Post message to the API
    const response = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        message: body.message,
      }),
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        charset: "utf-8",
      },
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }

    return NextResponse.json(
      { message: "Success! Thank you for message!" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something unexpected happened." },
      { status: 500 },
    );
  }
}
