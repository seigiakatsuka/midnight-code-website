import ContactForm from "@/app/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <div>
        <ContactForm />
      </div>
    </>
  );
}
