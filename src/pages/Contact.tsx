import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Linkedin, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import { OrganicBackground, GrowingElement } from "@/components/OrganicElements";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1710 651618",
      href: "tel:+8801710651618",
      color: "primary"
    },
    {
      icon: Mail,
      label: "Email",
      value: "khnayeam009@gmail.com", 
      href: "mailto:khnayeam009@gmail.com",
      color: "growth"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "132/A, Jahanara Garden, Green Road, Farmgate, Dhaka, Bangladesh",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/share/14JLH3QtAbW/",
      color: "primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/kh-nayeam-b46228336",
      color: "growth"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <OrganicBackground />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <GrowingElement>
            <h1 className="text-5xl font-bold text-primary mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss opportunities in agricultural research, sustainable farming, or innovative entrepreneurship
            </p>
          </GrowingElement>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <GrowingElement delay="0.3s">
              <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
            </GrowingElement>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <GrowingElement key={index} delay={`${0.5 + index * 0.1}s`}>
                  <Card className="hover:shadow-lg transition-all duration-300 border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          item.color === 'primary' ? 'bg-primary/10 text-primary' :
                          item.color === 'growth' ? 'bg-growth/10 text-growth' :
                          'bg-accent/10 text-accent'
                        }`}>
                          <item.icon size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-1">{item.label}</h4>
                          <a 
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </GrowingElement>
              ))}
            </div>

            {/* Social Links */}
            <GrowingElement delay="0.8s">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-primary">Connect on Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          social.color === 'primary' 
                            ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                            : 'bg-growth text-growth-foreground hover:bg-growth/90'
                        } shadow-lg hover:shadow-xl hover:scale-105`}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </GrowingElement>

            {/* Availability */}
            <GrowingElement delay="1.0s">
              <Card className="border-growth/20 bg-growth/5">
                <CardHeader>
                  <CardTitle className="text-growth">Collaboration Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-growth rounded-full"></div>
                      Agricultural research partnerships
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-growth rounded-full"></div>
                      Sustainable farming consultancy
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-growth rounded-full"></div>
                      Startup mentorship and advisory
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-growth rounded-full"></div>
                      Speaking engagements
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-growth rounded-full"></div>
                      Academic collaborations
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </GrowingElement>
          </div>

          {/* Contact Form */}
          <GrowingElement delay="0.5s">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        First Name
                      </label>
                      <Input 
                        placeholder="Your first name"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Your last name"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Subject
                    </label>
                    <Input 
                      placeholder="What is this about?"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me more about your project, research, or collaboration idea..."
                      rows={6}
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button size="lg" className="w-full shadow-lg">
                    <Send size={20} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </GrowingElement>
        </div>

        {/* Call to Action */}
        <GrowingElement delay="1.2s">
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/10 via-growth/10 to-accent/10 border-primary/20">
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ready to Innovate Together?
                </h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Whether you're interested in agricultural research, sustainable farming solutions, 
                  or entrepreneurial ventures, I'm excited to explore potential collaborations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="mailto:khnayeam009@gmail.com">
                      <Mail size={20} className="mr-2" />
                      Email Me Directly
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+8801710651618">
                      <Phone size={20} className="mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </GrowingElement>
      </div>
    </div>
  );
};

export default Contact;