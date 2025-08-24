import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { manifesto } from "../content/manifesto";

export default function Home(){
  return(<div className="min-h-screen flex flex-col">
    <Header/>
    <main className="flex-1">
      <section className="relative">
        <div className="absolute inset-0 hero-ring" aria-hidden="true"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="inline-flex items-center gap-2 badge"><Sparkles className="h-3.5 w-3.5"/><span>Independent. Human. Fluent.</span></div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">Consulting that feels human.<br/>Results that feel inevitable.</h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-700">Unomi helps you navigate eCommerce, ERP, custom development, reporting, and AI with clear answers and zero kickbacks.</p>
          <div className="mt-8 flex items-center gap-3">
            <Link href="/contact" className="btn-primary">Start a project <ArrowRight className="ml-2 h-4 w-4"/></Link>
            <Link href="/services" className="btn-ghost">Explore services</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title:"ERP & eComm",body:"Sage, NetSuite, Dynamics, Acumatica, Shopify, BigCommerce. Integration without the drama."},
            {title:"Custom Dev & AI",body:"From scoping to shipping. Practical automation that respects your people and process."},
            {title:"Reporting & Ops",body:"Dashboards, data hygiene, and clean handoffs so you stop babysitting spreadsheets."},
          ].map(c=>(
            <div key={c.title} className="card p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-neutral-700">{c.body}</p>
              <Link href="/services" className="mt-4 inline-flex items-center text-neutral-900 hover:opacity-80">Learn more <ArrowRight className="ml-1 h-4 w-4"/></Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Our Manifesto</h2>
          <p className="mt-4 text-neutral-700 whitespace-pre-line">{manifesto}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-24">
        <div className="card p-8 md:p-10 text-center">
          <h3 className="text-2xl font-semibold">Let’s build something useful.</h3>
          <p className="mt-2 text-neutral-700">Tell us what you’re trying to fix. We’ll keep it simple and ship it.</p>
          <div className="mt-6"><Link href="/contact" className="btn-primary">Contact us</Link></div>
        </div>
      </section>
    </main>
    <Footer/>
  </div>);
}
