import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Home, Compass, ArrowRight, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 Not Found: Path accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO
        title="Page Not Found (404) · Khajani Welfare Society"
        description="The page you are looking for does not exist or has been moved. Explore our craft initiatives, education programmes, or return home."
        noindex={true}
      />
      <section className="py-24 sm:py-32 bg-background flex items-center justify-center min-h-[70vh]">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-500/10 text-amber-700 border border-amber-500/20 inline-block mb-4">
            Error 404 · Destination Not Found
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-primary tracking-tight mb-4">
            Page Not Found
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light mb-8 max-w-lg mx-auto">
            The link you followed may be broken, outdated, or the address may have moved. You can explore our primary initiatives or return to the homepage below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
            >
              <Home size={15} />
              <span>Return to Home</span>
            </Link>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-105"
            >
              <Compass size={15} />
              <span>Explore Our Work</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted hover:bg-muted/80 text-primary font-semibold text-xs uppercase tracking-wider border border-border transition-all"
            >
              <Phone size={14} />
              <span>Contact Us</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-border/60 text-xs text-muted-foreground">
            Looking for something specific? Discover our{" "}
            <Link to="/gi-recognition" className="text-accent underline font-medium">
              GI Recognized Mathura Zari Poshak
            </Link>
            ,{" "}
            <Link to="/our-work/up-international-trade-show-2026" className="text-accent underline font-medium">
              UPITS 2026 Exhibition
            </Link>
            , or{" "}
            <Link to="/about" className="text-accent underline font-medium">
              About Khajani
            </Link>
            .
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
