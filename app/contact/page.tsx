import ContactForm from "@/app/ui/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact'
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