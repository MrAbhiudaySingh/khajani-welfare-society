import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft, Phone, MapPin } from "lucide-react";

const TermsPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 text-stone-200 min-h-screen pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-xs tracking-wider uppercase text-amber-400/80 hover:text-amber-300 transition-colors gap-1.5"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="border-b border-white/10 pb-8 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium mb-4">
              <Shield size={13} /> Legal Information
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif text-white tracking-tight mb-2">
              TERMS & CONDITIONS
            </h1>
            <p className="text-sm text-stone-400">Last updated: September 2026</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-stone-300 text-sm sm:text-base leading-relaxed">
            <section className="bg-stone-900/60 border border-white/5 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <p className="text-stone-200">
                Welcome to the website of Khajani Welfare Society.
              </p>
              <p className="mt-3 text-stone-300">
                These Terms & Conditions govern the use of this website. By using the website, you agree to use it in accordance with these terms and applicable law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Purpose of this Website
              </h2>
              <p>
                This website provides information about Khajani Welfare Society, its work, programmes, heritage initiatives, activities, institutional identity and opportunities for participation and support.
              </p>
              <p className="text-stone-400 text-sm">
                The website is primarily intended for information and communication.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Accuracy of Information
              </h2>
              <p>
                Khajani Welfare Society takes reasonable care to present accurate and useful information on this website.
              </p>
              <p>
                However, programmes, activities, collaborations, contact information and other organisational information may change over time. We may therefore correct, update, add or remove website content when necessary.
              </p>
              <p className="text-stone-400 text-sm">
                Unless expressly stated otherwise, information published on this website does not by itself create a contractual commitment.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Intellectual Property
              </h2>
              <p>
                Unless otherwise indicated, content created for and owned by Khajani Welfare Society is protected by applicable intellectual-property laws.
              </p>
              <p>
                Certain photographs, documents, trademarks, logos, media extracts, government records and other materials displayed on this website may belong to their respective owners and are used for informational, documentary or other authorised purposes, as applicable.
              </p>
              <p>
                Nothing on this website transfers ownership of third-party material to Khajani Welfare Society.
              </p>
              <p>
                Khajani-owned material may not be copied, reproduced, commercially exploited or presented as the work of another person or organisation without appropriate permission.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Khajani Name and Identity
              </h2>
              <p>
                The name Khajani Welfare Society, its logo and organisational identity may not be used in a manner that falsely suggests endorsement, partnership, authorisation or association with Khajani Welfare Society.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Photographs and Videos
              </h2>
              <p>
                Photographs and videos appearing on this website form part of Khajani Welfare Society's documentation of its work or are otherwise displayed with applicable rights or permissions.
              </p>
              <p>
                Their publication on this website does not automatically grant permission for unrestricted reproduction, republication or commercial use.
              </p>
              <p className="text-stone-400 text-sm">
                For permission relating to specific Khajani-owned photographs, videos or other media, please contact Khajani Welfare Society.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Geographical Indication and Official Material
              </h2>
              <p>
                This website may contain information and documentary material relating to Mathura Zari Poshak, its Geographical Indication registration and associated official records.
              </p>
              <p>
                Government documents, official marks, Geographical Indications, certificates, third-party logos and other official material remain subject to applicable laws and the rights of the relevant authorities or rights holders.
              </p>
              <p className="text-stone-400 text-sm">
                Their display on this website does not alter those rights.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                External Links
              </h2>
              <p>
                Our website may contain links to external websites, social-media platforms, maps, videos and other third-party services.
              </p>
              <p>
                Khajani Welfare Society does not control all such external services and is not responsible for their availability, security, privacy practices or independently published content.
              </p>
              <p className="text-stone-400 text-sm">
                A link to an external website does not necessarily constitute endorsement of all content appearing on that website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Website Forms and Enquiries
              </h2>
              <p>
                Visitors should provide information that is accurate to the best of their knowledge when submitting website forms.
              </p>
              <p>
                Submitting an enquiry, volunteer expression of interest, collaboration request, institutional enquiry or other form does not by itself create an employment, appointment, partnership, contractual or other formal relationship with Khajani Welfare Society.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Donations
              </h2>
              <p>
                Where official donation details are provided on this website, contributors should ensure that they are using the payment details officially displayed by Khajani Welfare Society.
              </p>
              <p>
                Information regarding applicable tax benefits, acknowledgements or receipts will be provided in accordance with Khajani Welfare Society's valid registrations and applicable requirements.
              </p>
              <p className="text-stone-400 text-sm">
                If you require clarification before making a contribution, please contact Khajani Welfare Society through the official contact details provided on this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Appropriate Use
              </h2>
              <p>Visitors must not knowingly:</p>
              <ul className="list-disc pl-6 space-y-2 text-stone-300">
                <li>Interfere with the operation or security of the website</li>
                <li>Attempt unauthorised access to website systems</li>
                <li>Submit malicious or harmful material</li>
                <li>Misuse website forms</li>
                <li>Impersonate Khajani Welfare Society or another person</li>
                <li>Use the website in violation of applicable law</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Website Availability
              </h2>
              <p>
                We aim to keep our website accessible and functional but cannot guarantee uninterrupted or error-free availability.
              </p>
              <p className="text-stone-400 text-sm">
                Parts of the website may occasionally be modified or temporarily unavailable for maintenance, security, technical or operational reasons.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Limitation of Responsibility
              </h2>
              <p>
                This website is primarily provided for informational purposes.
              </p>
              <p>
                While reasonable care is taken in preparing its content, Khajani Welfare Society cannot guarantee that every item will remain current at all times or that third-party websites and services linked from this website will remain available, accurate or unchanged.
              </p>
              <p className="text-stone-400 text-sm">
                Nothing in these Terms & Conditions is intended to exclude or limit any responsibility that cannot lawfully be excluded or limited under applicable law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Changes to These Terms
              </h2>
              <p>Khajani Welfare Society may update these Terms & Conditions.</p>
            </section>

            {/* Contact Box */}
            <section className="bg-stone-900 border border-white/10 rounded-2xl p-6 sm:p-8 mt-12">
              <h2 className="text-xl font-serif text-white font-medium mb-3">Contact Us</h2>
              <p className="text-stone-300 text-sm mb-4">
                For questions regarding these Terms & Conditions, please contact:
              </p>
              <div className="space-y-2 text-sm text-stone-300">
                <div className="font-semibold text-white">Khajani Welfare Society</div>
                <div className="flex items-start gap-2 text-stone-400">
                  <MapPin size={15} className="text-amber-400 mt-0.5 shrink-0" />
                  <span>Mathura, Uttar Pradesh, India</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:gap-6 gap-2 text-stone-400">
                  <a
                    href="tel:+918126511999"
                    className="flex items-center gap-2 hover:text-amber-300 transition-colors"
                  >
                    <Phone size={14} className="text-amber-400" /> +91 81265 11999
                  </a>
                  <a
                    href="tel:+919358844900"
                    className="flex items-center gap-2 hover:text-amber-300 transition-colors"
                  >
                    <Phone size={14} className="text-amber-400" /> +91 93588 44900
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;
