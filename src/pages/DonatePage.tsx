import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import {
  ShieldCheck,
  Shield,
  Copy,
  CheckCircle2,
  ArrowDown,
  ArrowRight,
  Building2,
  Mail,
  FileCheck,
  QrCode,
  HeartHandshake,
  Scale,
  Sparkles
} from "lucide-react";

const DonatePage = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 1 — DONATE · SUPPORT KHAJANI
          Support work that continues on the ground.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="donate-hero" className="relative bg-[#FAF7F2] overflow-hidden pt-16 lg:pt-24 pb-20 border-b border-[#EAE2D5]">
        <AuroraBackground variant="light" intensity={0.6} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimeReveal variant="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE7DC] border border-[#DFCFC0] text-[#A6623B] text-xs font-bold tracking-[0.22em] uppercase mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A6623B]" />
              DONATE · SUPPORT KHAJANI
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#142033] tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
              Support work that continues on the ground.
            </h1>

            <p className="text-base sm:text-lg text-[#55606E] font-sans font-light leading-relaxed max-w-2xl mx-auto mb-10">
              At Khajani Welfare Society, our work is rooted in Mathura and the Braj region.
              Your contributions directly sustain ongoing programmes in women’s vocational skills,
              girl-child education, traditional artisanal craft preservation, and essential community welfare initiatives.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("upi-contribution")}
                className="btn-3d-accent inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
              >
                Donate via UPI <ArrowDown size={14} className="animate-bounce" />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("bank-transfer")}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white border border-[#D8C7B0] text-[#142033] hover:bg-[#F5EFE6] transition-colors shadow-xs cursor-pointer"
              >
                Bank Transfer Details <ArrowDown size={14} />
              </button>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 2 — MAKE A CONTRIBUTION
          Choose a convenient way to give.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="upi-contribution" className="py-20 lg:py-24 bg-white border-b border-[#EAE2D5] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A6623B]">
                MAKE A CONTRIBUTION
              </span>
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#142033] tracking-tight">
              Choose a convenient way to give.
            </h2>
            <p className="text-sm sm:text-base text-[#55606E] font-light mt-4 leading-relaxed">
              Instant and secure payment through any standard UPI application. Direct, fee-free transfer to Khajani Welfare Society.
            </p>
          </AnimeReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-4xl mx-auto">
            
            {/* Visual Centerpiece: Pinned QR Code Card (7 cols) */}
            <AnimeReveal variant="fade-left" className="lg:col-span-7 flex justify-center">
              <div className="bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-[#EAE2D5] shadow-[0_16px_36px_rgba(20,32,51,0.07)] text-center relative max-w-md w-full">
                
                {/* Verified Header */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#EAE2D5]">
                  <div className="flex items-center gap-2 text-left">
                    <div className="w-8 h-8 rounded-full bg-[#A6623B]/10 flex items-center justify-center text-[#A6623B]">
                      <QrCode size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#142033]">
                        Khajani Welfare Society
                      </h4>
                      <p className="text-[11px] text-[#7A7165]">Official Verified UPI QR</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 size={12} /> Verified
                  </span>
                </div>

                {/* QR Image */}
                <div className="w-64 h-64 mx-auto bg-white p-4 rounded-2xl border-2 border-dashed border-[#D8C7B0] shadow-inner mb-6 flex items-center justify-center">
                  <img
                    src="/images/donate/upi-qr.jpg"
                    alt="Khajani Welfare Society Official UPI QR Code"
                    className="w-full h-full object-contain select-none"
                  />
                </div>

                <p className="text-xs text-[#55606E] font-medium mb-1">
                  Scan using Google Pay, PhonePe, Paytm, BHIM or mobile banking app
                </p>
              </div>
            </AnimeReveal>

            {/* Beside/Below: UPI ID Display & Copy Controls (5 cols) */}
            <AnimeReveal variant="fade-right" delay={150} className="lg:col-span-5 flex flex-col justify-center space-y-6">
              
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EAE2D5]">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7A7165] block mb-2">
                  Direct UPI ID
                </span>
                
                <div className="flex items-center justify-between gap-3 p-3.5 bg-white rounded-xl border border-[#D8C7B0] shadow-xs">
                  <code className="text-base sm:text-lg font-mono font-bold text-[#142033] tracking-wide select-all">
                    q353936413@ybl
                  </code>
                  <button
                    type="button"
                    onClick={() => handleCopy("q353936413@ybl", "upi")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#FAF7F2] hover:bg-[#F2ECE1] text-[#A6623B] border border-[#DFCFC0] transition-colors cursor-pointer shrink-0"
                    title="Copy UPI ID"
                  >
                    {copiedField === "upi" ? (
                      <>
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-[#7A7165] mt-2.5 italic">
                  Supported by all NPCI-compliant payment applications.
                </p>
              </div>

              {/* Receipt & UTR Instructions */}
              <div className="p-6 rounded-2xl bg-[#F4EFE6]/70 border border-[#E8E1D4]">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#B86E45]/15 flex items-center justify-center text-[#B86E45] shrink-0 mt-0.5">
                    <FileCheck size={15} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#142033] mb-1">
                      Tax Exemption Receipt
                    </h4>
                    <p className="text-xs text-[#55606E] leading-relaxed">
                      To receive your official 80G tax receipt, please email your transaction reference (UTR / screenshot), full name, and PAN number to{" "}
                      <a
                        href="mailto:info@khajaniwelfaresociety.com"
                        className="text-[#A9442A] font-semibold underline hover:text-[#88351F]"
                      >
                        info@khajaniwelfaresociety.com
                      </a>.
                    </p>
                  </div>
                </div>
              </div>

            </AnimeReveal>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 3 — BANK TRANSFER
          Prefer a direct bank transfer?
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="bank-transfer" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#EAE2D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A6623B]">
                BANK TRANSFER
              </span>
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#142033] tracking-tight">
              Prefer a direct bank transfer?
            </h2>
            <p className="text-sm sm:text-base text-[#55606E] font-light mt-4 leading-relaxed">
              For direct NEFT, RTGS, or IMPS transactions. All details correspond to the verified institutional banking account of Khajani Welfare Society.
            </p>
          </AnimeReveal>

          {/* Institutional Panel */}
          <AnimeReveal variant="fade-up" delay={100}>
            <div className="bg-white rounded-3xl border border-[#EAE2D5] shadow-[0_12px_28px_rgba(20,32,51,0.06)] overflow-hidden">
              
              <div className="px-6 py-5 bg-[#F5EFE6] border-b border-[#EAE2D5] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <Building2 size={17} className="text-[#A6623B]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#142033]">
                    Verified Institutional Banking Record
                  </span>
                </div>
                <span className="text-[11px] font-mono tracking-wider text-[#7A7165] uppercase">
                  Current Account · Yes Bank
                </span>
              </div>

              <div className="divide-y divide-[#EAE2D5]">
                
                {/* 1. Account Name */}
                <div className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF7F2]/50 transition-colors">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#7A7165] block mb-1">
                      Account Name
                    </span>
                    <p className="text-base sm:text-lg font-display font-bold text-[#142033]">
                      Khajani Welfare Society
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("Khajani Welfare Society", "name")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#FAF7F2] hover:bg-[#EFE7DC] text-[#7A7165] border border-[#DFCFC0] transition-colors cursor-pointer self-start sm:self-center"
                  >
                    {copiedField === "name" ? (
                      <>
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 2. Bank & Branch */}
                <div className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF7F2]/50 transition-colors">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#7A7165] block mb-1">
                      Bank &amp; Branch
                    </span>
                    <p className="text-base sm:text-lg font-display font-bold text-[#142033]">
                      Yes Bank, Dampier Nagar, Mathura
                    </p>
                    <p className="text-xs text-[#7A7165] mt-0.5">Mathura, Uttar Pradesh, India</p>
                  </div>
                  <span className="text-xs font-medium text-[#7A7165] bg-[#FAF7F2] px-3 py-1 rounded-md border border-[#EAE2D5] self-start sm:self-center">
                    Branch Code: 000072
                  </span>
                </div>

                {/* 3. Account Number */}
                <div className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF7F2]/50 transition-colors">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#7A7165] block mb-1">
                      Account Number
                    </span>
                    <p className="text-lg sm:text-xl font-mono font-bold text-[#142033] tracking-wider select-all">
                      007294600000533
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("007294600000533", "account")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#FAF7F2] hover:bg-[#EFE7DC] text-[#7A7165] border border-[#DFCFC0] transition-colors cursor-pointer self-start sm:self-center"
                  >
                    {copiedField === "account" ? (
                      <>
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 4. IFSC Code */}
                <div className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF7F2]/50 transition-colors">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#7A7165] block mb-1">
                      IFSC Code (RTGS / NEFT / IMPS)
                    </span>
                    <p className="text-lg sm:text-xl font-mono font-bold text-[#142033] tracking-wider select-all">
                      YESB0000072
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("YESB0000072", "ifsc")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#FAF7F2] hover:bg-[#EFE7DC] text-[#7A7165] border border-[#DFCFC0] transition-colors cursor-pointer self-start sm:self-center"
                  >
                    {copiedField === "ifsc" ? (
                      <>
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

              {/* Advisory note */}
              <div className="p-5 bg-[#FAF7F2] border-t border-[#EAE2D5] text-center">
                <p className="text-xs text-[#7A7165] italic">
                  Institutional supporters may confirm these bank details directly against the organisation’s current banking records before initiating major transfers.
                </p>
              </div>

            </div>
          </AnimeReveal>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 4 — YOUR CONTRIBUTION, RESPONSIBLY RECEIVED
          Verifiable credentials such as 80G / 12A or 12AB, receipts, accountability.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="accountability" className="py-20 lg:py-24 bg-white border-b border-[#EAE2D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A6623B]">
                ACCOUNTABILITY &amp; CREDENTIALS
              </span>
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#142033] tracking-tight">
              Your contribution, responsibly received.
            </h2>
            <p className="text-sm sm:text-base text-[#55606E] font-light mt-4 leading-relaxed">
              Khajani Welfare Society operates under formal non-profit registration and regulatory compliance in India.
              We adhere to strict standards of institutional transparency and fiscal stewardship.
            </p>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. 80G Tax Exemption */}
            <AnimeReveal variant="fade-up" delay={0}>
              <div className="p-7 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D5] h-full flex flex-col justify-between hover:border-[#D8C7B0] transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-5">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#142033] mb-2">
                    80G Tax Exemption
                  </h3>
                  <p className="text-xs text-[#55606E] leading-relaxed">
                    Donations are eligible for tax deduction benefits under Section 80G of the Income Tax Act for Indian citizens and resident entities.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#EAE2D5]">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-800 uppercase">
                    INCOME TAX ACT · 80G
                  </span>
                </div>
              </div>
            </AnimeReveal>

            {/* 2. 12A / 12AB Registration */}
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="p-7 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D5] h-full flex flex-col justify-between hover:border-[#D8C7B0] transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-800 flex items-center justify-center mb-5">
                    <Shield size={20} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#142033] mb-2">
                    12A / 12AB Registration
                  </h3>
                  <p className="text-xs text-[#55606E] leading-relaxed">
                    Formally registered and recognized as an institutional charitable non-profit trust with perpetual charitable status in India.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#EAE2D5]">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-blue-800 uppercase">
                    CHARITABLE STATUS · 12A/12AB
                  </span>
                </div>
              </div>
            </AnimeReveal>

            {/* 3. Official Receipts */}
            <AnimeReveal variant="fade-up" delay={200}>
              <div className="p-7 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D5] h-full flex flex-col justify-between hover:border-[#D8C7B0] transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center mb-5">
                    <FileCheck size={20} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#142033] mb-2">
                    Verified Receipts
                  </h3>
                  <p className="text-xs text-[#55606E] leading-relaxed">
                    Digitally verifiable, signed donation receipts containing your PAN and transaction UTR are issued against every confirmed contribution.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#EAE2D5]">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-amber-800 uppercase">
                    DIGITAL RECEIPT ISSUED
                  </span>
                </div>
              </div>
            </AnimeReveal>

            {/* 4. Audited Accounts */}
            <AnimeReveal variant="fade-up" delay={300}>
              <div className="p-7 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D5] h-full flex flex-col justify-between hover:border-[#D8C7B0] transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-100/70 text-purple-800 flex items-center justify-center mb-5">
                    <Scale size={20} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#142033] mb-2">
                    Audited Accounts
                  </h3>
                  <p className="text-xs text-[#55606E] leading-relaxed">
                    Annual financial statements and programme accounts are audited by independent chartered accountants in full statutory compliance.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#EAE2D5]">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-purple-800 uppercase">
                    ANNUAL STATUTORY AUDIT
                  </span>
                </div>
              </div>
            </AnimeReveal>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 5 — NEED ASSISTANCE?
          For institutional or larger contributions.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="assistance" className="py-20 bg-[#FAF7F2] border-b border-[#EAE2D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EAE2D5] shadow-[0_12px_28px_rgba(20,32,51,0.06)] flex flex-col sm:flex-row items-center justify-between gap-8">
              
              <div className="max-w-xl text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A6623B] block mb-2">
                  NEED ASSISTANCE?
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#142033] mb-3">
                  For institutional or larger contributions.
                </h3>
                <p className="text-sm text-[#55606E] leading-relaxed">
                  Looking to support through corporate social responsibility (CSR) grants, institutional MoUs, programmatic sponsorship, or tailored partnership agreements?
                  We welcome direct dialogue with our leadership team.
                </p>
              </div>

              <div className="shrink-0 flex flex-col items-center sm:items-end gap-3">
                <Link
                  to="/contact"
                  className="btn-3d-accent inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md whitespace-nowrap"
                >
                  Contact Khajani <ArrowRight size={14} />
                </Link>
                <a
                  href="mailto:info@khajaniwelfaresociety.com"
                  className="text-xs text-[#7A7165] hover:text-[#A6623B] flex items-center gap-1.5 transition-colors"
                >
                  <Mail size={13} /> info@khajaniwelfaresociety.com
                </a>
              </div>

            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          RESTRAINED CLOSING
          Every contribution becomes part of the work.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#142033] text-white relative overflow-hidden text-center">
        <AuroraBackground variant="dark" intensity={0.7} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimeReveal variant="fade-up">
            
            <p className="font-handwriting text-3xl sm:text-4xl text-[#D8C7B0] italic mb-4">
              Real Impact · Real Roots
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-6 leading-tight">
              Every contribution becomes part of the work.
            </h2>

            <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto font-light leading-relaxed mb-10">
              Together, we build skilled hands, resilient households, and dignified futures across Mathura and Braj.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("upi-contribution")}
                className="btn-3d-accent inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg cursor-pointer"
              >
                Donate via UPI <ArrowRight size={14} />
              </button>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors backdrop-blur-md shadow-sm"
              >
                Explore Our Work <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-14 pt-8 border-t border-white/10">
              <p className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase">
                PEOPLE · HERITAGE · OPPORTUNITY · KHAJANI WELFARE SOCIETY
              </p>
            </div>

          </AnimeReveal>
        </div>
      </section>
    </Layout>
  );
};

export default DonatePage;
