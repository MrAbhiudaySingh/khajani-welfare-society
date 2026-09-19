import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Handshake, Building2, Users, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PartnershipInquiryPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwsyp9fQCwlCDmid51E8yI2vp6q2dYj-TJe4bo-4iKuzu3AcvsyqbuW-RlVnWAr0UAt/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      toast({ title: "Inquiry Sent!", description: "Thank you! We will get back to you soon." });
      setFormData({ name: "", organization: "", email: "", phone: "", message: "" });
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const perks = [
    { icon: Handshake, title: "Direct Impact", desc: "Your partnership funds programs that directly reach rural communities." },
    { icon: Building2, title: "CSR Compliance", desc: "We are CSR-registered (CSR00005014) — contributions qualify for corporate requirements." },
    { icon: Users, title: "Joint Visibility", desc: "Co-brand with a trusted NGO that has 18+ years of credibility." },
    { icon: Globe, title: "Global Reach", desc: "Access World Bank & NSDC networks through our institutional connections." },
  ];

  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground min-h-[80vh] relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.8} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <AnimeReveal variant="fade-right">
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-6 glass-dark px-4 py-1.5 rounded-full border border-white/10 inline-block">
                Join the Network
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight mt-4">
                Partner With<br /><span className="text-secondary italic">Khajani Welfare Society</span>
              </h1>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
                We welcome collaborations with institutions, corporates, foundations, and individuals who wish to contribute towards empowering girls and preserving the cultural strength of Brij.
              </p>
              <p className="text-secondary font-display italic text-xl mb-12">
                Together, we can create meaningful change.
              </p>

              {/* Perks grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {perks.map((p, i) => (
                  <AnimeReveal key={p.title} variant="fade-up" delay={i * 100}>
                    <TiltCard maxTilt={8} className="h-full">
                      <div className="clay-card-navy p-6 group hover:border-secondary/40 transition-colors h-full flex flex-col justify-between">
                        <div>
                          <div className="glass-dark w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-secondary/10 transition-colors">
                            <p.icon size={18} className="text-secondary" />
                          </div>
                          <h3 className="text-base font-bold text-primary-foreground mb-1">{p.title}</h3>
                          <p className="text-primary-foreground/60 text-xs leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    </TiltCard>
                  </AnimeReveal>
                ))}
              </div>
            </AnimeReveal>

            {/* Right — form */}
            <AnimeReveal variant="fade-left" delay={150}>
              <div className="clay-card text-foreground p-8 md:p-10">
                <h3 className="text-2xl font-bold text-primary mb-1 font-display">Send a Partnership Inquiry</h3>
                <p className="text-muted-foreground text-sm mb-8">Fill in your details and we'll be in touch within 48 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5 block">Your Name</label>
                      <Input required placeholder="Jane Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5 block">Organization</label>
                      <Input placeholder="Your organization" value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5 block">Email Address</label>
                      <Input required type="email" placeholder="you@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5 block">Phone Number</label>
                      <Input required type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5 block">Message</label>
                    <Textarea placeholder="How would you like to collaborate?" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-3d-accent w-full flex items-center justify-center gap-2 py-4 text-sm font-bold uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnershipInquiryPage;
