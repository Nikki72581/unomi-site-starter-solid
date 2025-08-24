// app/contact/ContactForm.tsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return <div className="card p-6 mt-6"><p>Thanks. We’ll be in touch shortly.</p></div>;
  return (
    <form className="card p-6 mt-6 space-y-4" onSubmit={(e)=>{e.preventDefault();setSubmitted(true);}}>
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"/>
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"/>
      </div>
      <div>
        <label className="block text-sm font-medium">How can we help?</label>
        <textarea required rows={5} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"/>
      </div>
      <button className="btn-primary">Send</button>
    </form>
  );
}
