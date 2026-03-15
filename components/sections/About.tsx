import { about } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell">
      <Card>
        <SectionHeading eyebrow="01" title={about.title} />
        <p className="section-paragraph">{about.content}</p>
      </Card>
    </section>
  );
}
