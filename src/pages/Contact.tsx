import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Linkedin, Send, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { OrganicBackground, GrowingElement } from "@/components/OrganicElements";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <OrganicBackground />

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <GrowingElement delay="0.1s">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-2xl">
            Let's <span className="gradient-text">connect</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-16">
            Whether it's a project idea, collaboration, or just a conversation — I'd love to hear from you.
          </p>
        </GrowingElement>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <GrowingElement delay="0.2s">
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "khnayeam009@gmail.com", href: "mailto:khnayeam009@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+880 1710 651618", href: "tel:+8801710651618" },
                  { icon: MapPin, label: "Location", value: "132/A, Jahanara Garden, Green Road, Farmgate, Dhaka", href: "#" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </GrowingElement>

            <GrowingElement delay="0.3s">
              <div className="pt-4">
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Social</p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "https://www.facebook.com/share/14JLH3QtAbW/", label: "Facebook" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/kh-nayeam-b46228336", label: "LinkedIn" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </GrowingElement>

            <GrowingElement delay="0.35s">
              <div className="pt-4">
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Portfolio</p>
                <a
                  href="https://khnayeam.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                >
                  khnayeam.vercel.app <ArrowUpRight size={14} />
                </a>
              </div>
            </GrowingElement>
          </div>

          {/* Form */}
          <GrowingElement delay="0.25s">
            <div className="lg:col-span-3 rounded-2xl border border-border/50 bg-card p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">Send a message</h3>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">First Name</label>
                    <Input placeholder="John" className="rounded-xl bg-muted/30 border-border/50" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Last Name</label>
                    <Input placeholder="Doe" className="rounded-xl bg-muted/30 border-border/50" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
                  <Input type="email" placeholder="john@example.com" className="rounded-xl bg-muted/30 border-border/50" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Subject</label>
                  <Input placeholder="What's this about?" className="rounded-xl bg-muted/30 border-border/50" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message</label>
                  <Textarea placeholder="Tell me about your project or idea..." rows={5} className="rounded-xl bg-muted/30 border-border/50 resize-none" />
                </div>
                <Button size="lg" className="w-full rounded-xl">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </GrowingElement>
        </div>
      </div>
    </div>
  );
};

export default Contact;
