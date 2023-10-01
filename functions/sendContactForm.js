// Deployed on AWS lambda

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "YOUR_AWS_REGION" });

export const handler = async (event) => {
  const { firstName, lastName, email, message } = JSON.parse(event.body);

  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: ["YOUR_VERIFIED_EMAIL"],
    },
    Message: {
      Body: {
        Text: {
          Data: `
              New message:
              ---
              Name: ${firstName} ${lastName}
              Email: ${email}
              Message: ${message}
            `,
        },
      },
      Subject: {
        Data: "Contact Form Message",
      },
    },
    Source: "YOUR_VERIFIED_EMAIL",
  });

  try {
    await ses.send(command);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email." }),
    };
  }
};
