'use client';

import React, { useState } from 'react';
import {
  Mail,
  User,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ArrowUpRight,
  Loader2,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  contact: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const recipientEmail = 'nandinisrivastava015@gmail.com';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(recipientEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      // 1. Try our Next.js API route first
      let res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // 2. If the API route fails (e.g. deployment or static host), fallback directly to FormSubmit
      if (!res.ok) {
        res = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            Name: formData.name,
            Email: formData.email,
            'Contact / Phone': formData.contact || 'Not provided',
            Message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}`,
            _template: 'table',
            _captcha: 'false',
          }),
        });
      }

      const data = await res.json().catch(() => null);

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          contact: '',
          message: '',
        });
      } else {
        throw new Error(data?.error || data?.message || 'Failed to deliver message.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong while sending your message.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoFallbackUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nContact: ${formData.contact}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white md:px-12">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-12 left-1/2 -z-10 h-96 w-full max-w-4xl -translate-x-1/2 bg-gradient-to-b from-purple-900/20 via-indigo-900/10 to-transparent blur-3xl opacity-60" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
        {/* Left Column: Context & Contact Details */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Let&apos;s work <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-white bg-clip-text text-transparent">
                together.
              </span>
            </h2>

            <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              Have an idea, project collaboration, or opportunity? Reach out today to discuss your project needs
            </p>
          </div>

          {/* Quick Direct Email Box */}
          <div className="rounded-2xl border border-white/10 bg-neutral-950/60 backdrop-blur-xl p-5 shadow-lg">
            <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              Direct Email
            </span>
            <div className="mt-2 flex items-center justify-between gap-3 flex-wrap">
              <a
                href={`mailto:${recipientEmail}`}
                className="text-sm font-mono text-white hover:text-white transition-colors underline-offset-4 hover:underline break-all"
              >
                {recipientEmail}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-neutral-300 hover:bg-white/10 hover:text-white transition-all active:scale-95"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl border border-white/10 bg-neutral-950/70 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/20">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-5">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Delivered!</h3>
                <p className="mt-2 max-w-md text-sm text-neutral-400 leading-relaxed">
                  Thank you for reaching out. Your details and message were received and sent
                  directly to{' '}
                  <span className="text-purple-300 font-mono">{recipientEmail}</span>. I will get back
                  to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="text-xl font-bold text-white">Send a Message</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Fill in your details below to get in touch directly.
                  </p>
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs text-red-200">
                    <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-2">
                      <p>{errorMessage || 'Failed to send message via the form.'}</p>
                      <a
                        href={mailtoFallbackUrl}
                        className="inline-flex items-center gap-1 font-semibold text-white underline underline-offset-2 hover:text-red-300"
                      >
                        Click here to send directly via your mail client
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-neutral-300"
                    >
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-500">
                        <User className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-purple-500 focus:bg-white/[0.06] focus:ring-2 focus:ring-purple-500/20 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-neutral-300"
                    >
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-500">
                        <Mail className="h-4 w-4" />
                      </div>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-purple-500 focus:bg-white/[0.06] focus:ring-2 focus:ring-purple-500/20 disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact / Phone number field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-medium text-neutral-300"
                  >
                    Contact
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-500">
                      <Phone className="h-4 w-4" />
                    </div>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-purple-500 focus:bg-white/[0.06] focus:ring-2 focus:ring-purple-500/20 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-neutral-300"
                  >
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute top-3 left-3.5 text-neutral-500">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-purple-500 focus:bg-white/[0.06] focus:ring-2 focus:ring-purple-500/20 resize-none disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:bg-[position:right_center] hover:shadow-purple-700/50 hover:scale-[1.01] active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Details</span>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}