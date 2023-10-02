import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <Card className="max-sm:h-full max-sm:w-full max-sm:border-none">
      <CardHeader>
        <CardTitle>Contact Form</CardTitle>
        <CardDescription>
          Send us a message and we will get back to you ASAP.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ContactForm />
      </CardContent>
    </Card>
  );
}
