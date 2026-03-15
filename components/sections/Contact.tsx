import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <Card>
        <SectionHeading
          eyebrow="07"
          title="Contact Me"
          description="Interested in collaborating? Reach out!"
        />
        <div className="contact-actions">
          <a href="mailto:rezaghaleh@outlook.com" className="primary-button">
            Email Me
          </a>
          <a href="tel:+16049029050" className="secondary-button">
            Call Me
          </a>
        </div>
      </Card>
    </section>
  );
}
