import Header from "../../components/Header";
import Footer from "../../components/Footer";
export const metadata={title:"Podcast — Unomi"};
export default function Podcast(){
  return(<div className="min-h-screen flex flex-col">
    <Header/>
    <main className="flex-1">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <h1 className="text-4xl font-bold tracking-tight">Pretty Sharp with Nikki R</h1>
        <p className="mt-3 text-neutral-700 max-w-2xl">Weekly takes on world events, tech, and creativity with just enough chaos to keep it honest.</p>
        <div className="card p-6 mt-6"><p>Coming soon. Want to be a guest? Reach out on the contact page.</p></div>
      </section>
    </main>
    <Footer/>
  </div>);
}
