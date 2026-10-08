import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, Stagger } from "../components/Motion";
import Header from "../components/Header";
const image =
  "https://drive.google.com/uc?export=view&id=1koVGhvD8mkiRXRukqrklo0HbB48p9PIa";

const officeImage =
  "https://drive.google.com/uc?export=view&id=1DwpoQD0VWsfGsl4J1CwtSb3Wxy5ePVJW";

const officeImage2 =
  "https://drive.google.com/uc?export=view&id=1EqlCJsSNzGI93VgaQULRIwoFP2xiFioy";

const officeImage3 =
  "https://drive.google.com/uc?export=view&id=1DwpoQD0VWsfGsl4J1CwtSb3Wxy5ePVJW";

const services = [
  {
    number: "01",
    title: "Individual Therapy for Anxiety & Panic",
    text: "A steady place to understand worry, panic, overthinking, and the physical patterns that keep your nervous system on alert.",
    tags: ["Anxiety", "Panic", "Chronic stress"]
  },
  {
    number: "02",
    title: "Trauma Therapy",
    text: "Carefully paced trauma work that prioritizes safety, stabilization, regulation, and a deeper sense of choice in everyday life.",
    tags: ["Trauma", "EMDR", "Safety"]
  },
  {
    number: "03",
    title: "Burnout & Perfectionism Therapy",
    text: "Support for high-achieving adults who are tired of pushing through and want a more sustainable relationship with work, rest, and themselves.",
    tags: ["Burnout", "Perfectionism", "Pressure"]
  }
];

const faqs = [
  [
    "Do you offer in-person therapy?",
    "Yes. Dr. Reynolds offers in-person therapy from her private Santa Monica office. The space is intentionally quiet, comfortable, and uncluttered."
  ],
  [
    "Do you offer telehealth?",
    "Yes. Secure telehealth sessions are available for clients located in California, giving you the flexibility to continue therapy from a private space that works for you."
  ],
  [
    "What issues do you work with?",
    "Dr. Reynolds commonly works with anxiety, panic, trauma, complex trauma, burnout, perfectionism, chronic stress, emotional regulation, and the effects of high internal pressure."
  ],
  [
    "What therapy approaches do you use?",
    "Her work integrates evidence-based approaches including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques."
  ],
  [
    "Do you work with trauma?",
    "Yes. Trauma work is an important part of the practice, including both single-incident trauma and more complex, long-standing patterns related to childhood, relationships, or chronic stress."
  ],
  [
    "What is your approach to trauma therapy?",
    "Trauma work is paced carefully, with an emphasis on safety and stabilization. The goal is to help you feel more regulated and supported—not only during sessions, but in daily life."
  ]
];



function Button({
  href,
  children,
  light = false
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-xs font-bold uppercase tracking-[.12em] transition ${
        light
          ? "bg-white text-forest hover:bg-sand"
          : "bg-forest text-white hover:bg-terracotta"
      }`}
    >
      {children}
      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      {/* HERO — preserves source-site hero hierarchy while introducing Maya's theme */}
      <section className="relative min-h-[720px] overflow-hidden bg-forest text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={image}
            alt="Warm portrait-style therapy imagery"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-forest/20" />

        <div className="container-width relative flex min-h-[720px] items-end pb-20 pt-36 md:pb-28">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="mb-6 flex items-center gap-4 text-sand">
                <span className="reveal-line" />
                <span className="eyebrow">Therapy in Santa Monica, California</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="font-serif text-6xl font-medium leading-[.93] tracking-[-.03em] sm:text-7xl md:text-8xl">
                You don&apos;t have to keep pushing through.
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                Warm, grounded therapy for adults navigating anxiety, panic, trauma,
                burnout, and the high internal pressure that can make life feel
                harder than it looks.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="#contact" light>Schedule a consultation</Button>
                <a href="#approach" className="group inline-flex items-center gap-2 px-2 py-3.5 text-xs font-bold uppercase tracking-[.12em] text-white/80">
                  Explore my approach
                  <ArrowDown size={15} className="transition-transform group-hover:translate-y-1" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* INTRO / HOPE */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container-width grid gap-14 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <FadeIn>
            <div>
              <div className="eyebrow text-terracotta">A place to slow down</div>
              <h2 className="mt-4 font-serif text-5xl leading-none text-forest md:text-6xl">
                When being “fine” takes too much energy.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-2xl text-[15px] leading-7 text-charcoal/75">
              <p>
                Many of the people Dr. Reynolds works with are thoughtful,
                capable, and high-achieving—but internally exhausted, stuck in
                overthinking, or emotionally on edge.
              </p>
              <p className="mt-5">
                Therapy can become a space to understand what is happening,
                reconnect with yourself, and develop more sustainable ways of
                living and working.
              </p>
              <div className="mt-7 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-forest">
                <span className="h-px w-8 bg-terracotta" />
                Insight · Resilience · Self-connection
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHO WE HELP — source section order retained */}
      <section className="hero-grid bg-mist py-24 md:py-32">
        <div className="container-width">
          <FadeIn>
            <div className="max-w-xl">
              <div className="eyebrow text-terracotta">Who I work with</div>
              <h2 className="mt-4 font-serif text-5xl leading-none text-forest md:text-6xl">
                Support for adults who are ready for something to feel different.
              </h2>
            </div>
          </FadeIn>

          <Stagger>
            <div className="mt-14 grid gap-px overflow-hidden border border-forest/10 bg-forest/10 md:grid-cols-3">
              {[
                ["01", "Anxiety & Panic", "For constant worry, tension, panic, racing thoughts, and the feeling that your mind never quite switches off."],
                ["02", "Trauma & Past Experiences", "For experiences that continue to shape your relationships, confidence, emotional responses, or sense of safety."],
                ["03", "Burnout & Perfectionism", "For professionals, entrepreneurs, and creatives who are tired of living under relentless internal pressure."]
              ].map(([num, title, text]) => (
                <FadeIn key={num}>
                  <article className="group h-full bg-ivory p-8 transition duration-500 hover:bg-forest hover:text-white md:p-10">
                    <span className="text-xs font-bold tracking-widest text-terracotta">{num}</span>
                    <h3 className="mt-12 font-serif text-3xl leading-tight">{title}</h3>
                    <p className="mt-5 text-sm leading-6 text-current opacity-65">{text}</p>
                    <ArrowRight className="mt-10 opacity-40 transition group-hover:translate-x-2 group-hover:opacity-100" size={20} />
                  </article>
                </FadeIn>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* AREAS OF EXPERTISE */}
      <section className="bg-forest py-24 text-white md:py-32">
        <div className="container-width grid gap-14 md:grid-cols-[.8fr_1.2fr]">
          <FadeIn>
            <div>
              <div className="eyebrow text-sand">Areas of expertise</div>
              <h2 className="mt-4 font-serif text-5xl leading-none md:text-6xl">
                Depth when you need it. Practical tools when you need those, too.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-x-8 border-t border-white/15">
              {["Anxiety", "Panic", "Trauma", "Complex trauma", "Burnout", "Perfectionism", "Chronic stress", "Emotional regulation", "High internal pressure", "Self-connection"].map((item, i) => (
                <div key={item} className="flex items-center gap-3 border-b border-white/10 py-5 text-sm text-white/75">
                  <span className="text-terracotta">0{i + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="bg-sand/55 py-24 md:py-32">
        <div className="container-width">
          <div className="grid gap-14 md:grid-cols-[.7fr_1.3fr]">
            <FadeIn>
              <div>
                <div className="eyebrow text-terracotta">How I work</div>
                <h2 className="mt-4 font-serif text-5xl leading-none text-forest md:text-6xl">
                  A warm, grounded approach to therapy.
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <p className="max-w-2xl text-lg leading-8 text-charcoal/75">
                  Sessions are structured enough to feel supportive, while still
                  leaving room for reflection and depth. Dr. Reynolds combines
                  evidence-based methods with attention to both the emotional and
                  physiological sides of what you&apos;re experiencing.
                </p>
                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                  {[
                    ["CBT", "Understand patterns, challenge unhelpful thoughts, and build practical skills."],
                    ["EMDR", "Process difficult experiences at a pace that prioritizes safety."],
                    ["Mindfulness", "Build awareness of thoughts, emotions, sensations, and the present moment."],
                    ["Body-oriented work", "Notice how stress and emotion live in the body—not just the mind."]
                  ].map(([title, text]) => (
                    <div key={title} className="paper-card p-7">
                      <Sparkles size={17} className="text-terracotta" />
                      <h3 className="mt-7 font-serif text-2xl text-forest">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-charcoal/65">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-ivory py-24 md:py-32">
        <div className="container-width">
          <FadeIn>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="eyebrow text-terracotta">Services</div>
                <h2 className="mt-4 font-serif text-5xl leading-none text-forest md:text-6xl">
                  Therapy tailored to what you&apos;re carrying.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-charcoal/60">
                Individual therapy for adults, available in-person in Santa Monica
                and through secure telehealth across California.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 border-t border-forest/15">
            {services.map((service) => (
              <article key={service.number} className="group grid gap-7 border-b border-forest/15 py-9 md:grid-cols-[80px_1fr_1.1fr] md:items-center">
                <div className="text-xs font-bold tracking-widest text-terracotta">{service.number}</div>
                <h3 className="max-w-md font-serif text-3xl leading-tight text-forest md:text-4xl">{service.title}</h3>
                <div>
                  <p className="text-sm leading-6 text-charcoal/65">{service.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-forest/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-forest/65">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-sand py-24 md:py-32">
        <div className="container-width grid gap-12 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <FadeIn>
            <div className="image-frame relative aspect-[4/5] max-w-md">
              <Image src={image} alt="Dr. Maya Reynolds portrait placeholder" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
              <div className="absolute bottom-5 left-5 bg-ivory px-5 py-4">
                <div className="font-serif text-xl text-forest">Dr. Maya Reynolds</div>
                <div className="mt-1 text-[9px] font-bold uppercase tracking-widest text-charcoal/55">PsyD · Licensed Clinical Psychologist</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-xl">
              <div className="eyebrow text-terracotta">Meet Dr. Maya Reynolds</div>
              <h2 className="mt-4 font-serif text-5xl leading-none text-forest md:text-6xl">
                Practical tools. Depth. A relationship built on trust.
              </h2>
              <div className="mt-7 space-y-5 text-[15px] leading-7 text-charcoal/70">
                <p>
                  I&apos;m a licensed clinical psychologist based in Santa Monica,
                  California, offering therapy for adults who feel overwhelmed by
                  anxiety, stress, or the lingering effects of past experiences.
                </p>
                <p>
                  I work with people who may look “functional” on the outside while
                  quietly struggling with worry, tension, difficulty sleeping, or a
                  sense that they&apos;re always bracing for something to go wrong.
                </p>
                <p>
                  My goal is not simply symptom relief. I want therapy to help you
                  develop insight, resilience, and a stronger relationship with
                  yourself over time.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-5 text-xs font-bold uppercase tracking-widest text-forest">
                <span className="flex items-center gap-2"><Check size={14} className="text-terracotta" /> Santa Monica</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-terracotta" /> California telehealth</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-terracotta" /> Adults</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* NEW OFFICE SECTION */}
      <section id="office" className="bg-ivory py-24 md:py-32">
        <div className="container-width">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="eyebrow text-terracotta">Our office</div>
              <h2 className="mt-4 font-serif text-5xl leading-none text-forest md:text-6xl">
                A calm space to slow down.
              </h2>
              <p className="mt-6 text-base leading-7 text-charcoal/65">
                The Santa Monica office is a quiet, private setting designed to
                feel grounding from the moment you arrive. Natural light,
                comfortable textures, and an uncluttered environment create room
                to settle in and focus on the work.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-[1.35fr_.65fr]">
            <FadeIn>
              <div className="image-frame relative min-h-[470px]">
                <Image src={officeImage} alt="Warm therapy office placeholder" fill className="object-cover" sizes="(max-width: 768px) 100vw, 65vw" />
                <div className="absolute bottom-6 left-6 max-w-xs bg-forest/90 p-6 text-white backdrop-blur">
                  <div className="eyebrow text-sand">Santa Monica</div>
                  <p className="mt-2 font-serif text-2xl">A private place to arrive as you are.</p>
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-5">
              <FadeIn delay={0.08}>
                <div className="image-frame relative min-h-[220px]">
                  <Image src={officeImage2} alt="Comfortable office interior placeholder" fill className="object-cover" sizes="(max-width: 768px) 35vw" />
                </div>
              </FadeIn>
              <FadeIn delay={0.16}>
                <div className="image-frame relative min-h-[220px]">
                  <Image src={officeImage3} alt="Bright private office placeholder" fill className="object-cover" sizes="(max-width: 768px) 35vw" />
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Location", "123th Street 45 W, Santa Monica, CA 90401", MapPin],
              ["In-person", "Private sessions from the Santa Monica office", Check],
              ["Telehealth", "Secure sessions for clients across California", Phone]
            ].map(([title, text, Icon]) => (
              <div key={title as string} className="border-t border-forest/15 pt-5">
                <Icon size={17} className="text-terracotta" />
                <div className="mt-4 text-xs font-bold uppercase tracking-widest text-forest">{title as string}</div>
                <p className="mt-2 text-sm leading-6 text-charcoal/60">{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-mist py-24 md:py-32">
        <div className="container-width grid gap-12 md:grid-cols-[.75fr_1.25fr]">
          <FadeIn>
            <div>
              <div className="eyebrow text-terracotta">FAQs</div>
              <h2 className="mt-4 font-serif text-5xl leading-none text-forest md:text-6xl">
                A few things you may be wondering.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-6 text-charcoal/60">
                If your question isn&apos;t answered here, reach out. A first
                conversation can be a simple way to see whether we may be a good fit.
              </p>
            </div>
          </FadeIn>

          <div className="border-t border-forest/15">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border-b border-forest/15 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-serif text-2xl text-forest">
                  {question}
                  <span className="faq-plus shrink-0 text-terracotta"><ChevronDown size={20} /></span>
                </summary>
                <p className="max-w-2xl pb-2 pt-4 text-sm leading-7 text-charcoal/65">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden bg-terracotta py-24 text-white md:py-32">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/20" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-white/15" />
        <div className="container-width relative text-center">
          <FadeIn>
            <div className="eyebrow text-white/70">Take the next step</div>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-6xl leading-[.92] md:text-8xl">
              You don&apos;t have to navigate it all alone.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/80">
              Start with a consultation to talk about what you&apos;re experiencing,
              what you&apos;re looking for, and whether working together feels like a good fit.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="mailto:hello@mayareynoldstherapy.com" light>
                Schedule a consultation
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal py-14 text-white">
        <div className="container-width">
          <div className="grid gap-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
            <div>
              <div className="font-serif text-3xl">Maya Reynolds<span className="text-terracotta">.</span></div>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
                PsyD · Licensed Clinical Psychologist<br />
                Warm, grounded therapy for adults in Santa Monica and across California.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#" aria-label="Instagram" className="rounded-full border border-white/10 p-2.5 transition hover:border-terracotta hover:text-terracotta"><Instagram size={16} /></a>
                <a href="mailto:hello@mayareynoldstherapy.com" aria-label="Email" className="rounded-full border border-white/10 p-2.5 transition hover:border-terracotta hover:text-terracotta"><Mail size={16} /></a>
              </div>
            </div>

            <div>
              <div className="eyebrow text-sand">Explore</div>
              <div className="mt-5 space-y-3 text-sm text-white/55">
                <a href="#approach" className="block hover:text-white">Approach</a>
                <a href="#services" className="block hover:text-white">Services</a>
                <a href="#about" className="block hover:text-white">About</a>
                <a href="#office" className="block hover:text-white">Office</a>
                <a href="#faq" className="block hover:text-white">FAQs</a>
              </div>
            </div>

            <div>
              <div className="eyebrow text-sand">Contact</div>
              <div className="mt-5 space-y-4 text-sm text-white/55">
                <div className="flex gap-3"><MapPin size={16} className="shrink-0 text-terracotta" />123th Street 45 W<br />Santa Monica, CA 90401</div>
                <div className="flex gap-3"><Mail size={16} className="shrink-0 text-terracotta" />hello@mayareynoldstherapy.com</div>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-7 text-[10px] uppercase tracking-widest text-white/30">
            © {new Date().getFullYear()} Dr. Maya Reynolds · Fictional therapist profile for portfolio assignment
          </div>
        </div>
      </footer>
    </main>
  );
}
