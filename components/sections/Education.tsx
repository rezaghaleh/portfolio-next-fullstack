import { education } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <Card>
        <SectionHeading eyebrow="05" title="Education" />
        <div className="timeline-grid">
          {education.map((item) => (
            <article key={item.institution} className="timeline-card">
              <h3>{item.institution}</h3>
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
