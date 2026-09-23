"use client"
import { ArrowRight, CalendarDays, Check, ChevronDown, HeartHandshake, MapPin, Menu, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  {
    title: "Anxiety & Overwhelm",
    text: "Slow the noise down, understand what is driving it, and build practical ways to feel steadier in everyday life."
  },
  {
    title: "Trauma & Life Transitions",
    text: "Create room for difficult experiences without letting the past decide what comes next."
  },
  {
    title: "Relationships & Connection",
    text: "Work through recurring patterns, communicate more clearly, and build relationships that feel safer and more honest."
  }
];

const faqs = [
  ["Do you offer online sessions?", "Yes. Dr. Reynolds offers secure video sessions for clients across California, as well as in-person sessions in Newbury Park."],
  ["What happens in the first session?", "The first meeting is a relaxed conversation about what brings you in, what you hope will change, and what kind of support feels useful. There is no expectation that you have everything figured out."],
  ["How often would we meet?", "Many clients begin weekly, then adjust frequency as their goals and needs change. The plan is discussed together rather than being one-size-fits-all."],
  ["Is therapy confidential?", "Sessions are private and handled according to applicable professional and legal requirements. Limits to confidentiality are explained before therapy begins."]
];

function Button({ children, href = "#contact", dark = false }: { children: React.ReactNode; href?: string; dark?: boolean }) {
  return (
    <a href={href} className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${dark ? "bg-ink text-white hover:bg-moss" : "bg-white text-ink ring-1 ring-ink/10 hover:bg-cream"}`}>
      {children}<ArrowRight size={16} />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-[#fbfaf6]/95 backdrop-blur">
        <div className="container-narrow flex h-[76px] items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-sage text-white"><HeartHandshake size={20}/></span>
            <span>
              <span className="block font-serif text-xl leading-none">Maya Reynolds</span>
              <span className="text-[10px] font-semibold uppercase tracking-[.22em] text-sage">Therapy & Counseling</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#about" className="hover:text-sage">About</a>
            <a href="#services" className="hover:text-sage">Services</a>
            <a href="#office" className="hover:text-sage">Our Office</a>
            <a href="#faq" className="hover:text-sage">FAQs</a>
            <Button>Book a consultation</Button>
          </nav>
          <a href="#contact" className="md:hidden rounded-full bg-ink p-3 text-white"><Menu size={19}/></a>
        </div>
      </header>

      <section className="grain bg-cream">
        <div className="container-narrow grid min-h-[680px] items-center gap-12 py-16 md:grid-cols-[1.05fr_.95fr] md:py-24">
          <div className="fade-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-sage">Therapy in Newbury Park & online across California</p>
            <h1 className="max-w-2xl font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">A quieter place to understand what you’re carrying.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ink/70">Dr. Maya Reynolds offers warm, collaborative therapy for adults, couples, and young adults who want more clarity, connection, and room to breathe.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button dark>Schedule a consultation</Button>
              <Button href="#about">Meet Dr. Reynolds</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-ink/65">
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-sage"/> Private & supportive</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-sage"/> Newbury Park + California</span>
            </div>
          </div>
          <div className="relative">
            <div className="hero-photo min-h-[500px] rounded-[38px] shadow-soft md:min-h-[590px]" aria-label="Calm therapy setting"></div>
            <div className="absolute -bottom-6 -left-3 max-w-[290px] rounded-3xl bg-white p-5 shadow-soft md:-left-8">
              <p className="font-serif text-xl">“You don’t have to arrive with the right words.”</p>
              <p className="mt-2 text-xs uppercase tracking-[.15em] text-sage">A gentle starting point</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container-narrow grid gap-12 py-24 md:grid-cols-[.8fr_1.2fr] md:py-32">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.22em] text-sage">A note from Maya</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Therapy should feel like a conversation, not a performance.</h2>
        </div>
        <div className="grid gap-8 text-lg leading-8 text-ink/70 md:grid-cols-[180px_1fr]">
          <div>
            <img src="/placeholder.svg" alt="Illustrated portrait of Dr. Maya Reynolds" className="mx-auto aspect-square w-40 rounded-[28px] object-cover ring-8 ring-white shadow-soft" />
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[.14em] text-sage">Dr. Maya Reynolds</p>
          </div>
          <div>
          <p>My work begins with curiosity: what has happened, what is happening now, and what you want your life to feel like from here. I create a grounded space where you can be honest without needing to make your experience smaller or more polished.</p>
          <p className="mt-6">Together, we look for patterns that keep you stuck and practice new ways of responding. My approach draws from evidence-informed, trauma-aware work while staying practical and personal to you.</p>
          <p className="mt-6 font-semibold text-ink">The goal is not to become someone else. It is to feel more at home in your own life.</p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-mist py-24 md:py-28">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-sage">How I can help</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Support for the parts of life that don’t fit neatly into a box.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service, i) => (
              <article key={service.title} className="overflow-hidden rounded-[28px] bg-white shadow-[0_8px_30px_rgba(36,49,47,.05)]">
                <div className="h-44 bg-cover bg-center" style={{backgroundImage: `url(${[
                  "https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=900&q=85",
                  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
                  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85",
                ][i]})`}} />
                <div className="p-7">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-cream text-sage font-serif">{String(i+1).padStart(2,"0")}</span>
                <h3 className="mt-7 font-serif text-2xl">{service.title}</h3>
                <p className="mt-3 leading-7 text-ink/65">{service.text}</p>
                <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-moss">Learn more <ArrowRight size={15}/></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="office" className="container-narrow grid gap-10 py-24 md:grid-cols-[1fr_.9fr] md:py-28">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          <div className="office-photo min-h-[320px] rounded-[34px]"></div>
          <div className="session-photo min-h-[220px] rounded-[34px]"></div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-sage">Our Office</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">A calm room to slow down and be heard.</h2>
          <p className="mt-6 text-lg leading-8 text-ink/70">The Newbury Park office is designed to feel warm, private, and unhurried. Expect natural light, comfortable seating, and a space where you can take a breath before we begin.</p>
          <div className="mt-7 space-y-4 text-sm">
            <p className="flex gap-3"><MapPin className="mt-0.5 text-sage" size={18}/> Newbury Park, California</p>
            <p className="flex gap-3"><CalendarDays className="mt-0.5 text-sage" size={18}/> In-person and secure online sessions</p>
            <p className="flex gap-3"><ShieldCheck className="mt-0.5 text-sage" size={18}/> A private, welcoming environment</p>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="container-narrow grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-sand">Start gently</p>
            <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">You can begin before you know exactly what you need.</h2>
          </div>
          <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-sand px-6 py-3 text-sm font-bold text-ink hover:bg-white">Book a consultation <ArrowRight size={16}/></a>
        </div>
      </section>

      <section id="faq" className="container-narrow py-24 md:py-28">
        <div className="grid gap-12 md:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-sage">FAQs</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Questions are welcome.</h2>
          </div>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map(([q,a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q}<ChevronDown size={18} className="transition group-open:rotate-180"/></summary>
                <p className="mt-3 max-w-2xl leading-7 text-ink/65">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-cream py-24">
        <div className="container-narrow grid gap-10 md:grid-cols-[1fr_.8fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-sage">Let’s talk</p>
            <h2 className="mt-3 font-serif text-5xl">A first conversation can be simple.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink/70">Tell me a little about what you’re looking for. We can talk about fit, availability, and what getting started could look like.</p>
          </div>
          <form className="rounded-[30px] bg-white p-7 shadow-soft" onSubmit={(e)=>e.preventDefault()}>
            <label className="block text-sm font-semibold">Name<input className="mt-2 w-full rounded-xl border border-ink/10 bg-[#fbfaf6] px-4 py-3 outline-none focus:ring-2 focus:ring-sage/30" placeholder="Your name"/></label>
            <label className="mt-4 block text-sm font-semibold">Email<input type="email" className="mt-2 w-full rounded-xl border border-ink/10 bg-[#fbfaf6] px-4 py-3 outline-none focus:ring-2 focus:ring-sage/30" placeholder="you@example.com"/></label>
            <label className="mt-4 block text-sm font-semibold">What brings you here?<textarea rows={4} className="mt-2 w-full resize-none rounded-xl border border-ink/10 bg-[#fbfaf6] px-4 py-3 outline-none focus:ring-2 focus:ring-sage/30" placeholder="A few words is enough."></textarea></label>
            <button className="mt-5 w-full rounded-full bg-ink px-5 py-3 font-semibold text-white hover:bg-moss">Send inquiry</button>
          </form>
        </div>
      </section>

      <footer className="bg-[#1b2624] py-10 text-white/75">
        <div className="container-narrow flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <p><span className="font-serif text-white">Dr. Maya Reynolds</span> · Therapy & Counseling</p>
          <p>Newbury Park, CA · Online across California</p>
        </div>
      </footer>
    </main>
  );
}