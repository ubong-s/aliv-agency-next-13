import { FAQ } from "@/components";
import { ContactForm } from "./(components)";

export const metadata = {
  title: "Contact - Aliv Agency",
};

export default async function Contact() {
  return (
    <>
      <ContactForm />
      <FAQ />
    </>
  );
}
