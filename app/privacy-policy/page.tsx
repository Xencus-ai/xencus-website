import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Xencus Privacy Policy — how we collect, use, and protect your personal data in compliance with the Digital Personal Data Protection Act 2023 (DPDP Act) and Indian law.",
  path: "/privacy-policy",
  noIndex: false,
});

const LAST_UPDATED = "1 June 2025";
const COMPANY_NAME = "Xencus";
const COMPANY_FULL = "Xencus (referred to as "Xencus", "we", "us", or "our")";
const CONTACT_EMAIL = "legal@xencus.com";
const CONTACT_ADDRESS = "India";

const sections = [
  { id: "who-we-are", title: "Who we are" },
  { id: "what-we-collect", title: "Information we collect" },
  { id: "how-we-use", title: "How we use your information" },
  { id: "sharing", title: "How we share information" },
  { id: "retention", title: "Data retention" },
  { id: "your-rights", title: "Your rights" },
  { id: "cookies", title: "Cookies and tracking" },
  { id: "third-party", title: "Third-party services" },
  { id: "security", title: "Data security" },
  { id: "children", title: "Children's privacy" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact us" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* ── Page header ─────────────────────────────────────────────── */}
      <div className="border-b border-gray-100 bg-gray-50/60 px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-secondary/40">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-paragraph-secondary">
            Last updated: <span className="font-medium text-heading">{LAST_UPDATED}</span>
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-paragraph-secondary sm:text-base">
            This policy explains how {COMPANY_FULL} collects, uses, and protects personal data
            when you visit our website, contact us, or engage us for services. We are committed
            to protecting your privacy in accordance with the{" "}
            <strong className="font-semibold text-heading">
              Digital Personal Data Protection Act 2023
            </strong>{" "}
            (DPDP Act) and other applicable Indian laws.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">

          {/* ── Table of contents (sticky left) ──────────────────── */}
          <aside className="mb-12 lg:col-span-3 lg:mb-0">
            <div className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-brand-secondary/40">
                Contents
              </p>
              <nav aria-label="Privacy policy sections">
                <ol className="space-y-2">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex items-center gap-2 text-sm text-paragraph-secondary transition-colors hover:text-heading"
                      >
                        <span className="w-5 shrink-0 text-[11px] font-bold text-brand-secondary/30">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          {/* ── Policy content ───────────────────────────────────── */}
          <article className="prose prose-gray max-w-none lg:col-span-9 lg:prose-base prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-heading prose-p:text-paragraph-secondary prose-p:leading-7 prose-li:text-paragraph-secondary prose-li:leading-7 prose-strong:text-heading prose-a:text-brand-secondary prose-a:underline-offset-2 hover:prose-a:opacity-80">

            {/* 1 */}
            <section id="who-we-are" className="scroll-mt-[calc(var(--header-offset)+1.5rem)]">
              <h2>1. Who we are</h2>
              <p>
                {COMPANY_FULL} provides managed operations, legal, HR, finance, and technical
                services to education businesses and professionals in India. Our registered
                office is in India.
              </p>
              <p>
                For the purposes of the Digital Personal Data Protection Act 2023, Xencus is the
                Data Fiduciary in respect of personal data collected through our website and
                service engagements.
              </p>
              <p>
                You can reach our designated contact for data protection matters at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </section>

            <hr className="my-8 border-gray-100" />

            {/* 2 */}
            <section id="what-we-collect" className="scroll-mt-[calc(var(--header-offset)+1.5rem)]">
              <h2>2. Information we collect</h2>
              <p>We collect personal data in the following ways:</p>

              <h3>Information you provide directly</h3>
              <ul>
                <li>
                  <strong>Contact and enquiry data:</strong> Name, email address, phone number,
                  company name, and the message content when you submit a contact form, book a
                  call, or email us.
                </li>
                <li>
                  <strong>Engagement data:</strong> Details you share during onboarding or
                  service delivery including role, organisation, and project requirements.
                </li>
                <li>
                  <strong>Communication records:</strong> Records of correspondence between you
                  and Xencus by email, phone, or written communication.
                </li>
              </ul>

              <h3>Information collected automatically</h3>
              <ul>
                <li>
                  <strong>Usage data:</strong> Pages visited, time spent, referring URL, and
                  browser or device type, collected through cookies and analytics tools.
                </li>
                <li>
                  <strong>Technical data:</strong> IP address, browser type, operating system,
                  and approximate geographic location derived from IP.
                </li>
              </ul>

              <h3>Information from third parties</h3>
              <ul>
                <li>
                  Business contact information sourced from publicly available professional
                  profiles (for example, LinkedIn) where we are reaching out in a business context.
                </li>
              </ul>

              <p>
                We do not collect special categories of sensitive personal data (such as
                biometric data, health data, or financial account numbers) through our website.
              </p>
            </section>

            <hr className="my-8 border-gray-100" />

            {/* 3 */}
            <section id="how-we-use" className="scroll-mt-[calc(var(--header-offset)+1.5rem)]">
              <h2>3. How we use your information</h2>
              <p>We use the personal data we collect for the following purposes:</p>
              <ul>
                <li>
                  <strong>Responding to enquiries:</strong> To understand your requirements and
                  respond to contact form submissions, calls, and emails.
                </li>
                <li>
                  <strong>Delivering services:</strong> To onboard you as a client and provide
                  the services you have engaged us for, including managing project communications
                  and reporting.
                </li>
                <li>
                  <strong>Invoicing and compliance:</strong> To issue invoices, maintain accounts,
                  and comply with GST and other statutory obligations under Indian law.
                </li>
                <li>
                  <strong>Service improvement:</strong> To understand how visitors use our
                  website and identify areas for improvement, using aggregated and anonymised
                  analytics data.
                </li>
                <li>
                  <strong>Marketing communications:</strong> To send relevant content, service
                  updates, or case studies where you have consented or where we have a legitimate
                  business interest in contacting you as a professional. You can opt out at any
                  time.
                </li>
                <li>
                  <strong>Legal obligations:</strong> To comply with applicable Indian laws
                  including the DPDP Act 2023, the IT Act 2000, and tax regulations.
                </li>
              </ul>
              <p>
                We do not use automated decision-making or profiling that would have a legal or
                similarly significant effect on you.
              </p>
            </section>

            <hr className="my-8 border-gray-100" />

            {/* 4 */}
            <section id="sharing" className="scroll-mt-[calc(var(--header-offset)+1.5rem)]">
              <h2>4. How we share information</h2>
              <p>
                We do not sell your personal data to third parties. We share your data only in
                the following limited circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service providers (Data Processors):</strong> Trusted third-party
                  vendors who support our operations, such as email service providers, CRM tools,
                  analytics platforms, and document management systems. These providers process
                  data only on our instructions and under contractual obligations aligned with
                  applicable privacy law.
                </li>
                <li>
                  <strong>Professional advisors:</strong> Lawyers, chartered accountants, and
                  auditors who require access to data to provide professional services to Xencus.
                </li>
                <li>
                  <strong>Legal and regulatory authorities:</strong> Where required by law, court
                  order, or statutory obligation under Indian law, including tax authorities and
                  law enforcement agencies.
                </li>
                <li>
                  <strong>Business transfers:</strong> In connection with a merger, acquisition,
                  or sale of assets, where your data may be transferred as part of the
                  transaction, subject to equivalent privacy protections.
                </li>
              </ul>
            </section>

            <hr className="my-8 border-gray-100" />

            {/* 5 */}
            <section id="retention" className="scroll-mt-[calc(var(--header-offset)+1.5rem)]">
              <h2>5. Data retention</h2>
              <p>
                We retain personal data for as long as necessary to fulfil the purposes described
                in this policy or as required by applicable law:
              </p>
              <ul>
                <li>
                  <strong>Contact and enquiry data:</strong> Up to two years from the date of
                  last contact, unless you become a client.
                </li>
                <li>
                  <strong>Client engagement data:</strong> For the duration of the engagement
                  and for a period of seven years thereafter, as required for GST, income tax,
                  and statutory compliance purposes under Indian law.
                </li>
                <li>
                  <strong>Website analytics data:</strong> Retained in aggregated or anonymised
                  form for up to twenty-four months.
                </li>
              </ul>
              <p>
                When we no longer need personal data, we securely delete or anonymise it.
              </p>
            </section>

            <hr className="my-8 border-gray-100" />

            {/* 6 */}
            <section id="your-rights" className="scroll-mt-[calc(var(--header-offset)+1.5rem)]">
              <h2>6. Your rights</h2>
              <p>
                Under the Digital Personal Data Protection Act 2023 (DPDP Act), you have the
                following rights as a Data Principal:
              </p>
              <ul>
                <li>
                  <strong>Right to access:</strong> You can request a summary of the personal
                  data we hold about you and how it is being processed.
                </li>
                <li>
                  <strong>Right to correction:</strong> You can ask us to correct inaccurate or
                  incomplete personal data.
                </li>
                <li>
                  <strong>Right to erasure:</strong> You can request the deletion of your
                  personal data where we no longer need it for the purpose for which it was
                  collected, subject to our legal retention obligations.
                </li>
                <li>
                  <strong>Right to grievance redressal:</strong> You can raise a complaint about
                  how we have handled your personal data by contacting us at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will acknowledge
                  your complaint within 72 hours and resolve it within 30 days.
                </li>
                <li>
                  <strong>Right to nominate:</strong> You may nominate another individual to
                  exercise your rights on your behalf in the event of your incapacity or death.
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> Where processing is based on your
                  consent, you may withdraw it at any time. Withdrawal does not affect the
                  lawfulness of processing before withdrawal.
                </li>
              </ul>
              <p>
                To exercise any of these rights, please email us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with a clear description
                of your request. We may need to verify your identity before fulfilling the request.
              </p>
            </section>

            <hr className="my-8 border-gray-100" />

            {/* 7 */}
            <section id="cookies" className="scroll-mt-[calc(var(--header-offset)+1.5rem)]">
              <h2>7. Cookies and tracking</h2>
              <p>
                We use cookies and similar tracking technologies to improve your experience on
                our website and to understand how it is being used.
              </p>
              <ul>
                <li>
                  <strong>Strictly necessary cookies:</strong> Required for the website to
                  function. These cannot be disabled.
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Used to collect information about how
                  visitors use the site (for example, pages visited and time spent). We use
                  tools like Google Analytics. Data collected is anonymised or aggregated.
                </li>
                <li>
                  <strong>Preference cookies:</strong> Used to remember choices you make to
                  provide a more personalised experience.
                </li>
              </ul>
              <p>
                You can control cookies through your browser settings. Disabling cookies may
                affect some functionality of the website.
              </p>
            </section>

            <hr className="my-8 border-gray-100" />

            {/* 8 */}
            <section id="third-party" className="scroll-mt-[calc(var(--header-offset)+1.5rem)]">
              <h2>8. Third-party services</h2>
              <p>
                Our website may contain links to third-party websites. This privacy policy does
                not apply to those websites, and we are not responsible for their privacy
                practices. We encourage you to review the privacy policy of any third-party
                website you visit.
              </p>
              <p>
                We use third-party services including but not limited to Google Analytics,
                communication tools, and CRM platforms. Each of these services operates under
                its own terms and privacy policy.
              </p>
            </section>

            <hr className="my-8 border-gray-100" />

            {/* 9 */}
            <section id="security" className="scroll-mt-[calc(var(--header-offset)+1.5rem)]">
              <h2>9. Data security</h2>
              <p>
                We implement reasonable technical and organisational measures to protect personal
                data against unauthorised access, disclosure, alteration, or destruction. These
                measures include encrypted communications, access controls, and regular security
                reviews of our systems and practices.
              </p>
              <p>
                While we take every reasonable precaution, no transmission over the internet or
                electronic storage system is entirely secure. In the event of a personal data
                breach that is likely to cause harm to Data Principals, we will notify the Data
                Protection Board of India and affected individuals as required under the DPDP
                Act 2023.
              </p>
            </section>

            <hr className="my-8 border-gray-100" />

            {/* 10 */}
            <section id="children" className="scroll-mt-[calc(var(--header-offset)+1.5rem)]">
              <h2>10. Children's privacy</h2>
              <p>
                Our website and services are directed at businesses and professionals and are
                not intended for individuals under the age of 18. We do not knowingly collect
                personal data from children. If you believe we have inadvertently collected
                information from a person under 18, please contact us immediately and we will
                take steps to delete it.
              </p>
            </section>

            <hr className="my-8 border-gray-100" />

            {/* 11 */}
            <section id="changes" className="scroll-mt-[calc(var(--header-offset)+1.5rem)]">
              <h2>11. Changes to this policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes in our
                practices, services, or applicable law. When we make material changes, we will
                update the "Last updated" date at the top of this page. We encourage you to
                review this policy periodically.
              </p>
              <p>
                Continued use of our website or services after the effective date of an updated
                policy constitutes acceptance of the revised terms, subject to applicable law.
              </p>
            </section>

            <hr className="my-8 border-gray-100" />

            {/* 12 */}
            <section id="contact" className="scroll-mt-[calc(var(--header-offset)+1.5rem)]">
              <h2>12. Contact us</h2>
              <p>
                If you have any questions about this privacy policy, wish to exercise your rights
                under the DPDP Act 2023, or wish to raise a grievance, please contact us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <strong>Address:</strong> {CONTACT_ADDRESS}
                </li>
              </ul>
              <p>
                We will acknowledge all data protection queries within 72 hours and aim to
                resolve them within 30 days.
              </p>
              <p>
                If you are not satisfied with our response, you may escalate your complaint to
                the{" "}
                <strong className="font-semibold text-heading">
                  Data Protection Board of India
                </strong>{" "}
                once the Board is constituted and operational under the DPDP Act 2023.
              </p>
            </section>

          </article>
        </div>

        {/* ── Footer nav ──────────────────────────────────────────── */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-paragraph-secondary">
            Last updated: {LAST_UPDATED}
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/terms-of-service" className="font-medium text-heading hover:underline">
              Terms of Service →
            </Link>
            <Link href="/contact" className="font-medium text-brand-secondary hover:underline">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
