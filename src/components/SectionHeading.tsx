const SectionHeading = ({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div className={`mt-4 h-0.5 w-16 bg-accent ${centered ? "mx-auto" : ""}`} />
  </div>
);

export default SectionHeading;
