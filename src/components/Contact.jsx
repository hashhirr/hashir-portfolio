import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuArrowUpRight, LuCheck, LuCopy, LuDownload, LuLoaderCircle, LuMail, LuPhone, LuSend } from "react-icons/lu";

import { CONTACT, CV, EMAILJS, PROFILE, SOCIALS, cvHref, emailHref, phoneHref } from "../constants/config";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import TopoBackground from "./ui/TopoBackground";

const EMPTY_FORM = { name: "", email: "", message: "" };
const emailjsConfigured = Boolean(EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey);

const shortUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const CHANNELS = [
  { label: "LinkedIn", value: shortUrl(SOCIALS.linkedin), href: SOCIALS.linkedin, Icon: FaLinkedinIn },
  { label: "GitHub", value: shortUrl(SOCIALS.github), href: SOCIALS.github, Icon: FaGithub },
  { label: "Phone", value: CONTACT.phone, href: phoneHref, Icon: LuPhone },
];

const ChannelRow = ({ label, value, href, Icon }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    className="group flex items-center gap-4 border-b hairline py-4 transition-colors"
  >
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border hairline text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent">
      <Icon className="text-[16px]" aria-hidden="true" />
    </span>
    <span className="min-w-0 flex-1">
      <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{label}</span>
      <span className="block truncate font-medium">{value}</span>
    </span>
    <LuArrowUpRight
      className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      aria-hidden="true"
    />
  </a>
);

const EmailRow = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      window.location.href = emailHref;
    }
  };

  return (
    <div className="flex items-center gap-4 border-b hairline py-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
        <LuMail className="text-[16px]" aria-hidden="true" />
      </span>
      <a href={emailHref} className="min-w-0 flex-1 hover:text-accent">
        <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Email</span>
        <span className="block truncate font-medium">{CONTACT.email}</span>
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded-full border hairline px-3 py-1.5 text-xs text-muted transition-colors hover:text-fg"
        aria-live="polite"
      >
        {copied ? <LuCheck className="text-accent" aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

const Field = ({ label, as = "input", ...props }) => {
  const Tag = as;
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      <Tag
        {...props}
        className="w-full rounded-xl border hairline bg-bg/60 px-4 py-3 text-[15px] text-fg outline-none transition-[border-color,box-shadow] placeholder:text-muted/60 focus:border-accent/50 focus:shadow-[0_0_0_4px_rgb(var(--accent)/0.12)]"
      />
    </label>
  );
};

const ContactForm = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = ({ target }) => setForm((f) => ({ ...f, [target.name]: target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!emailjsConfigured) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
      setSuccess("Opening your email app…");
      return;
    }

    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setError("Taking longer than usual. Please try again or email me directly.");
    }, 12000);

    try {
      // Loaded on demand so the contact SDK never slows down the first paint.
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: form.name,
          to_name: PROFILE.shortName,
          from_email: form.email,
          to_email: CONTACT.email,
          message: form.message,
        },
        EMAILJS.publicKey
      );
      setSuccess("Thank you. I will get back to you as soon as possible.");
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error(err);
      setError(err?.text || "Something went wrong. Please try again.");
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required autoComplete="name" />
        <Field
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@company.com"
          required
          autoComplete="email"
        />
      </div>
      <Field
        as="textarea"
        label="Message"
        name="message"
        rows={5}
        value={form.message}
        onChange={handleChange}
        placeholder="What are you building, and where can I help?"
        required
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <p className="text-sm text-muted" role="status" aria-live="polite">
          {error ? (
            <span className="text-red-500">{error}</span>
          ) : success ? (
            <span className="text-accent">{success}</span>
          ) : (
            "I usually reply within 24 hours."
          )}
        </p>
        <button type="submit" disabled={loading} className="btn-primary disabled:cursor-not-allowed disabled:opacity-70">
          {loading ? <LuLoaderCircle className="animate-spin" aria-hidden="true" /> : <LuSend aria-hidden="true" />}
          {loading ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
};

const Contact = () => (
  <section id="contact" className="relative isolate overflow-hidden py-16 sm:py-24">
    <TopoBackground fade="linear" opacity={0.08} className="-z-10" />
    <div className="container-x">
      <SectionHeading
        index="06"
        eyebrow="Contact"
        title="Have a product to ship?"
        accent="Let's talk."
        description={`${PROFILE.availability}: full-time roles, contracts and freelance builds across mobile, web and backend.`}
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal>
          <EmailRow />
          {CHANNELS.map((c) => (
            <ChannelRow key={c.label} {...c} />
          ))}
          <a href={cvHref} download={CV.downloadName} className="btn-ghost mt-8">
            <LuDownload aria-hidden="true" />
            Download my CV
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  </section>
);

export default Contact;
