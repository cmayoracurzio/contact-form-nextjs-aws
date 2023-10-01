import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center">
      <div className="container max-w-md space-y-4 rounded-md border p-6 shadow-lg">
        <h1 className="text-left text-3xl font-bold tracking-tight">
          Contact Form
        </h1>
        <ContactForm />
      </div>
    </main>
  );
}
