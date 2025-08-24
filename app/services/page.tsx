import Header from "../../components/Header";

import Footer from "../../components/Footer";
export const metadata={title:"Services — Unomi"};

import Image from "next/image";
export default function Services(){
  return(<div className="min-h-screen flex flex-col">
    <Header/>
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <h1 className="text-4xl font-bold tracking-tight">Services</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">Modular engagements that fit your team and timeline. No giant mystery SOWs.</p>
        <div className="mt-6">
+          <Image
           src="/mascot/unomi-robot-256.png"
            alt="Unomi robot"
            width={120}
            height={120}
          />
+        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
        {[
          {title:"ERP Integration",items:["Sage 100/Intacct","NetSuite","Dynamics 365","Acumatica","Process mapping & QA"]},
          {title:"eCommerce",items:["Shopify / BigCommerce","Headless storefronts","Payments & tax","OMS & fulfillment"]},
          {title:"Custom Development",items:["APIs & microservices","Data modeling","Import pipelines","Azure & serverless"]},
          {title:"AI & Automation",items:["AR/AP workflows","Agentic tools","Document extraction","Routing & triage"]},
          {title:"Reporting & Analytics",items:["Dashboards","Data hygiene","KPI design","Self-serve reports"]},
          {title:"Project Rescue",items:["Scoping sanity check","Vendor neutral audits","Go-live stabilization"]}
        ].map(card=>(<div key={card.title} className="card p-6"><h3 className="text-lg font-semibold">{card.title}</h3><ul className="mt-3 space-y-2 text-neutral-700 list-disc pl-5">{card.items.map(i=><li key={i}>{i}</li>)}</ul></div>))}
      </section>
    </main>
    <Footer/>
  </div>);
}
