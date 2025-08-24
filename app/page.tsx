// app/contact/page.tsx
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "./ContactForm.tsx";

export const metadata = { title: "Contact — Unomi" };

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
          <p className="mt-3 text-neutral-700">
            Tell us what you’re trying to fix. We’ll follow up fast.
          </p>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}