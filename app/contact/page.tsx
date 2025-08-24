"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
export const metadata={title:"Contact — Unomi"};
export default function Contact(){
  const [submitted,setSubmitted]=useState(false);
  return(<div className="min-h-screen flex flex-col">
    <Header/>
    <main className="flex-1">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-3 text-neutral-700">Tell us what you’re trying to fix. We’ll follow up fast.</p>
        {submitted?(<div className="card p-6 mt-6"><p>Thanks. We’ll be in touch shortly.</p></div>):(
          <form className="card p-6 mt-6 space-y-4" onSubmit={(e)=>{e.preventDefault();setSubmitted(true);}}>
            <div><label className="block text-sm font-medium">Name</label><input required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"/></div>
            <div><label className="block text-sm font-medium">Email</label><input type="email" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"/></div>
            <div><label className="block text-sm font-medium">How can we help?</label><textarea required rows={5} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"/></div>
            <button className="btn-primary">Send</button>
          </form>
        )}
      </section>
    </main>
    <Footer/>
  </div>);
}
