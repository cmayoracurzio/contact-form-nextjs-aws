# Email Contact Form with Next.js 13 and AWS

This project implements a simple, fast, reliable email contact form.

## Technologies used

- **Node.js** for runtime environment
- **TypeScript** for type safety
- **Next.js 13** as the React-based web framework
- **Tailwind CSS** for styling
- **Shadcn/ui** for components
- **Utilities:**
  - Forms with `react-hook-form` and `zod`
  - Tailwind CSS management with `clsx`, `tailwind-merge`
  - Tailwind CSS formatting with `prettier-plugin-tailwindcss`
- **Amazon Web Services:**
  - Lambda for serverless backend processing (see `./functions/sendContactForm.js`)
  - Simple Email Service (SES) for reliable email delivery
  - API Gateway for secure endpoint management
  - Identity and Access Management (IAM) for access and permissions management

## Setting up AWS (summarized)

1. Create a new IAM user with project-specific permissions
2. Choose your preferred region for deploying AWS services
3. SES: Create (and verify) new identity via email address
4. IAM: Create policy to allow using SES to send emails
5. IAM: Create role for a Lambda service and add the created policy as permission
6. Lambda: Create function with the following configuration:
   - Runtime: Node 18.x
   - Permissions: using the existing role defined in step 5
   - Code: using `./functions/sendContactForm.js`. Replace `YOUR_AWS_REGION` and `YOUR_VERIFIED_EMAIL` with the values defined in steps 2 and 3.
7. Lambda: Add a trigger to the function using API Gateway (create a new REST API with API key security)

Note: The API endpoint and API key will be needed as environment variables.

## Getting started

### Prerequisites

- Node.js (16.x or higher)
- A modern web browser
- AWS is set up according to above instructions

After ensuring the prerequisites are met, follow these steps to set up and run the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/cmayoracurzio/contact-form-nextjs-aws.git
   cd email-contact-form-nextjs-aws
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set up Environment Variables**:

   Copy the `.env.example` file to a new `.env.local` file:

   ```bash
   cp .env.example .env.local
   ```

   Open `.env.local` and replace the placeholder values with your actual values.

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000` to see the application in action.

## License
