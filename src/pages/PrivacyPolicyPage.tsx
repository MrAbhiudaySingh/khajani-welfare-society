import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Lock, ArrowLeft, Phone, MapPin } from "lucide-react";

const PrivacyPolicyPage = () => {
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
              <Lock size={13} /> Privacy & Transparency
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif text-white tracking-tight mb-2">
              PRIVACY POLICY
            </h1>
            <p className="text-sm text-stone-400">Last updated: September 2026</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-stone-300 text-sm sm:text-base leading-relaxed">
            <section className="bg-stone-900/60 border border-white/5 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <p className="text-stone-200">
                Khajani Welfare Society respects the privacy of visitors to this website. This Privacy Policy explains how information provided through our website is collected, used and handled.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Information We Collect
              </h2>
              <p>
                When you contact Khajani Welfare Society through this website, submit an enquiry, express interest in volunteering or collaborating, enquire about a programme or donation, or use one of our website forms, you may provide information such as:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-stone-300">
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Nature of your enquiry or interest</li>
                <li>Information you choose to include in your message</li>
              </ul>
              <p className="text-stone-400 text-sm pt-2">
                Please avoid submitting unnecessary sensitive or confidential personal information through general website forms.
              </p>
              <p className="text-stone-400 text-sm">
                Our website may also process limited technical information necessary for its operation, security and understanding website usage.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                How We Use Your Information
              </h2>
              <p>Information provided through this website may be used to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-stone-300">
                <li>Respond to your enquiries and requests</li>
                <li>Communicate with you regarding volunteering or collaboration</li>
                <li>Respond to programme-related enquiries</li>
                <li>Respond to donation-related enquiries</li>
                <li>Provide information requested by you</li>
                <li>Administer and secure our website</li>
                <li>Maintain appropriate records of enquiries and communications</li>
                <li>Understand and improve the use of our website</li>
              </ul>
              <p className="text-stone-400 text-sm pt-2">
                We do not use information submitted for one purpose for unrelated promotional communication without an appropriate basis.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Sharing of Information
              </h2>
              <p>
                Khajani Welfare Society does not sell personal information submitted through this website.
              </p>
              <p>
                Information may be accessed by authorised persons where reasonably necessary to respond to an enquiry or administer the website.
              </p>
              <p className="text-stone-400 text-sm">
                We may use trusted third-party service providers for functions such as website hosting, form processing, security, analytics, maps or embedded media. Information may be processed through these services only to the extent necessary for the relevant service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Cookies and Website Technologies
              </h2>
              <p>
                Our website may use cookies or similar technologies necessary for website functionality, security, analytics or other services used on the website.
              </p>
              <p className="text-stone-400 text-sm">
                Where required, appropriate information or choices regarding such technologies will be provided to website visitors.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Photographs, Videos and Programme Media
              </h2>
              <p>
                Our website includes photographs, videos and other media documenting Khajani Welfare Society's programmes, activities, crafts, events and institutional work.
              </p>
              <p>
                Where identifiable individuals appear, such material is handled in accordance with applicable permissions, consent practices and safeguarding requirements.
              </p>
              <p className="text-stone-400 text-sm">
                Publication of photographs or videos on this website does not grant permission for their unrestricted reproduction or commercial use.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Children and Young People
              </h2>
              <p>
                Some of Khajani Welfare Society's programmes involve children and young people.
              </p>
              <p>
                Our general website forms are not intended to solicit unnecessary personal information directly from children.
              </p>
              <p className="text-stone-400 text-sm">
                Where communication concerning a child is necessary, communication through a parent, guardian, institution or other responsible adult should be used where appropriate.
              </p>
              <p className="text-stone-400 text-sm">
                Photographs, videos or other identifiable information relating to children are handled in accordance with applicable permissions and safeguarding practices.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Data Security
              </h2>
              <p>
                We take reasonable administrative and technical measures to protect information submitted through this website against unauthorised access, loss, misuse or disclosure.
              </p>
              <p className="text-stone-400 text-sm">
                However, no method of electronic transmission or storage can be guaranteed to be completely secure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Data Retention
              </h2>
              <p>
                Information submitted through our website is retained only for as long as reasonably necessary for the purpose for which it was collected, legitimate administrative requirements or applicable legal obligations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Your Choices and Requests
              </h2>
              <p>
                If you have provided personal information through our website, you may contact Khajani Welfare Society to:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-stone-300">
                <li>Ask how information you submitted is being handled</li>
                <li>Request correction or updating of your information where appropriate</li>
                <li>Request deletion of your information where appropriate</li>
                <li>Withdraw consent where applicable</li>
                <li>Raise a privacy-related concern</li>
              </ul>
              <p className="text-stone-400 text-sm pt-2">
                Requests will be considered in accordance with applicable requirements and the circumstances in which the information is held.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                External Links
              </h2>
              <p>
                Our website may contain links to third-party websites, social-media platforms and other external services.
              </p>
              <p className="text-stone-400 text-sm">
                Khajani Welfare Society is not responsible for the privacy practices or content of external websites. We encourage visitors to review the privacy information of those services where appropriate.
              </p>
            </section>

            {/* Contact Box */}
            <section className="bg-stone-900 border border-white/10 rounded-2xl p-6 sm:p-8 mt-12">
              <h2 className="text-xl font-serif text-white font-medium mb-3">Contact Us</h2>
              <p className="text-stone-300 text-sm mb-4">
                For questions or concerns regarding privacy or information submitted through this website, please contact:
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

            <section className="space-y-3">
              <h2 className="text-xl font-serif text-amber-200/90 font-medium">
                Changes to this Privacy Policy
              </h2>
              <p className="text-stone-400 text-sm">
                We may update this Privacy Policy when our website, services, organisational practices or applicable requirements change.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
