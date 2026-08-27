import {
  CalendarClock,
  Truck,
  Users,
  FileText,
  Receipt,
  CreditCard,
  ClipboardList,
  UserCheck,
  CheckCircle2,
  Check,
  Snowflake,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { ScheduleMockup, DispatchMockup } from "@/components/DashboardMockup";

type Feature = { icon: LucideIcon; title: string; description: string };
const FEATURES: Feature[] = [
  { icon: CalendarClock, title: "Scheduling", description: "Schedule HVAC service calls and appointments in seconds." },
  { icon: Truck, title: "Dispatching", description: "Assign the right technician to every job, automatically." },
  { icon: Users, title: "Customer Management", description: "Store customer information and full service history." },
  { icon: FileText, title: "Estimates", description: "Create HVAC estimates and proposals customers can approve fast." },
  { icon: Receipt, title: "Invoicing", description: "Create and send professional invoices in one click." },
  { icon: CreditCard, title: "Payments", description: "Let customers pay for completed jobs online, instantly." },
];

const STEPS = [
  { icon: ClipboardList, title: "Book the Job", description: "Create an HVAC job from a call, form, or repeat customer in seconds." },
  { icon: UserCheck, title: "Assign a Technician", description: "Dispatch the closest available tech with one tap." },
  { icon: CheckCircle2, title: "Get Paid", description: "Complete the job, send the invoice, and collect payment on the spot." },
];

const BENEFITS = [
  "Reduce paperwork",
  "Schedule technicians faster",
  "Keep customer records organized",
  "Send estimates quickly",
  "Get paid faster",
  "Manage jobs from one dashboard",
];

const TESTIMONIALS = [
  { name: "Carlos Mendoza", company: "Coastal Air Solutions", quote: "We cut our scheduling time in half and stopped losing jobs in spreadsheets.", color: "bg-blue-600" },
  { name: "Rachel Owens", company: "Owens Heating & Cooling", quote: "Invoicing used to take all evening. Now it takes minutes, right from the job site.", color: "bg-emerald-600" },
  { name: "Trevor Banks", company: "Banks Comfort Systems", quote: "Our techs love the dispatch board — no more phone tag between jobs.", color: "bg-amber-600" },
];

const PLANS = [
  {
    name: "Starter",
    price: "$49",
    description: "For small HVAC teams getting organized.",
    features: ["Scheduling", "Customer Management", "Estimates", "Invoicing"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "For growing teams that need full dispatch control.",
    features: ["Everything in Starter", "Dispatching", "Payments", "Reporting"],
    highlighted: true,
  },
];

const FOOTER_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-slate-600">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Run Your HVAC Business From One Simple Platform
              </h1>
              <p className="mt-6 text-lg text-slate-600">
                Manage jobs, technicians, customers, estimates, invoices, and payments from one place.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700">
                  Start Free Trial
                </a>
                <a href="#how-it-works" className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  See How It Works
                </a>
              </div>
            </div>
            <ScheduleMockup />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Features"
              title="Everything your team needs, in one platform"
              description="Purpose-built tools for the way HVAC businesses actually work."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Preview */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <DispatchMockup />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Product Preview</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                See every job and every technician, live
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                The dispatch board gives your whole team a real-time view of who&apos;s where, so nothing falls through the cracks.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="How It Works" title="From booked job to paid invoice in 3 steps" />
            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {STEPS.map(({ icon: Icon, title, description }, i) => (
                <div key={title} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    {i + 1}
                  </div>
                  <Icon className="mx-auto mt-4 h-6 w-6 text-blue-600" />
                  <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Benefits" title="Less busywork. More billable hours." />
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
                <span className="text-slate-800">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="Testimonials" title="Trusted by HVAC teams like yours" />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map(({ name, company, quote, color }) => (
                <figure key={name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <blockquote className="text-slate-700">&ldquo;{quote}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white ${color}`}>
                      {name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-slate-900">{name}</span>
                      <span className="block text-sm text-slate-500">{company}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Pricing" title="Simple pricing that grows with you" />
          <div className="mx-auto mt-14 grid max-w-3xl gap-8 sm:grid-cols-2">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted ? "bg-blue-600 text-white shadow-xl" : "bg-white ring-1 ring-slate-200"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-semibold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                <p className={`mt-1 text-sm ${plan.highlighted ? "text-blue-100" : "text-slate-500"}`}>{plan.description}</p>
                <p className="mt-6 text-4xl font-bold">
                  {plan.price}
                  <span className={`text-base font-medium ${plan.highlighted ? "text-blue-100" : "text-slate-500"}`}>/month</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className={`h-4 w-4 shrink-0 ${plan.highlighted ? "text-white" : "text-blue-600"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold ${
                    plan.highlighted ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Start Free Trial
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-600 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to simplify your HVAC business?</h2>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 hover:bg-blue-50"
            >
              Start Free Trial
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Contact" title="Get in touch" description="Have questions? Send us a message and we'll respond within one business day." />
          <div className="mt-12">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6">
          <a href="#" className="flex items-center gap-2 font-bold text-slate-900">
            <Snowflake className="h-5 w-5 text-blue-600" />
            FlowHVAC
          </a>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.href} href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
                  {link.label}
                </a>
              )
            )}
          </nav>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} FlowHVAC. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
