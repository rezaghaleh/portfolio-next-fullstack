import { experience } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <Card>
        <SectionHeading eyebrow="04" title="Experience" />
        <div className="timeline-grid">
          {experience.map((item) => (
            <article key={`${item.role}-${item.company}`} className="timeline-card">
              <h3>{item.role}</h3>
              <p className="muted-text">{item.company}</p>
              <p className="muted-text">{item.duration}</p>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Card>
    </section>
  );
}
