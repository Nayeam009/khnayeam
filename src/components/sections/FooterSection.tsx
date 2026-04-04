const FooterSection = () => (
  <footer className="py-8 section-padding border-t border-border/50">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} KH. Nayeam Ibna Nasir. All rights reserved.
      </p>
      <p className="text-[10px] text-muted-foreground/60">
        Built with passion for agriculture & technology
      </p>
    </div>
  </footer>
);

export default FooterSection;
