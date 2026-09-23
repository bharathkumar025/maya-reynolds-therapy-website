import Link from "next/link";

export default function ClonePage() {
  return (
    <main className="min-h-screen bg-[#f6f1e7] text-[#37443d]">
      <div className="border-b border-[#b9b09f] bg-[#ece5d7] py-2 text-center text-xs tracking-[.18em]">CLONE REFERENCE · PART 1</div>
      <header className="border-b border-[#c9c0af] bg-[#f8f4eb]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="font-serif text-3xl tracking-tight">Conejo Valley <span className="block text-center text-[9px] font-sans font-semibold uppercase tracking-[.4em]">Family Counseling</span></div>
          <nav className="hidden gap-7 text-sm md:flex"><a href="#welcome">Home</a><a href="#help">How We Help</a><a href="#areas">Areas of Expertise</a><a href="#contact">Contact</a></nav>
          <a href="#contact" className="rounded-sm bg-[#67796d] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white">Book an Appointment</a>
        </div>
      </header>
      <section id="welcome" className="bg-[#e5ddd0]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#67796d]">Online & in-person counseling in Newbury Park & across CA</p><h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">Rebuild your foundation on solid ground and finally begin to thrive.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-black/65">Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.</p><a href="#contact" className="mt-7 inline-block bg-[#67796d] px-6 py-3 text-sm font-bold text-white">Book an Appointment</a></div>
          <div className="hero-photo min-h-[470px] rounded-sm"></div>
        </div>
      </section>
      <section id="help" className="mx-auto max-w-6xl px-6 py-20"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#67796d]">You’re holding onto hope</p><h2 className="mt-3 max-w-3xl font-serif text-4xl">Life can be better than it is right now.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">At Conejo Valley Family Counseling, clients are offered a compassionate and safe space to navigate life’s ups and downs. Support is available for adults, couples, children, teens, and families.</p></section>
      <section id="areas" className="bg-[#f8f4eb] py-20"><div className="mx-auto max-w-6xl px-6"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#67796d]">Our areas of expertise</p><div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-5">{["Dissociation","Trauma","Family conflict","Special needs parenting","Depression","Marriage","Anxiety","Relationships","Children","Teens"].map(x=><div key={x} className="border-b border-black/10 pb-4 font-serif text-xl">{x}</div>)}</div></div></section>
      <section className="mx-auto max-w-6xl px-6 py-20"><div className="session-photo min-h-[420px] rounded-sm"></div><div className="mt-8 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#67796d]">How we work</p><h2 className="mt-3 font-serif text-4xl">We’re here to make a difference.</h2><p className="mt-4 leading-8 text-black/65">The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.</p></div></section>
      <section id="contact" className="bg-[#67796d] py-20 text-white"><div className="mx-auto max-w-6xl px-6"><h2 className="font-serif text-4xl">Find a therapist who is the right fit for you.</h2><p className="mt-4 max-w-2xl leading-7 text-white/80">We want to make getting started simple. You’re welcome to come into an office in Newbury Park or schedule virtual appointments from anywhere in California.</p><p className="mt-7 text-sm">925 Broadbeck Dr · Suites 200 and 225 · Newbury Park, CA 91320 · 805.242.3120</p></div></section>
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm"><Link href="/" className="font-bold text-[#435a50]">← View the redesigned final homepage</Link></div>
    </main>
  );
}