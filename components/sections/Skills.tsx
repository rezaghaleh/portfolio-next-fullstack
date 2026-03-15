import { skills } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <Card>
        <SectionHeading eyebrow="02" title="Skills" />

        {skills.map((category) => (
          <div key={category.category} style={{ marginBottom: "20px" }}>
            <h3 className="skill-category">{category.category}</h3>

            <div className="chip-grid">
              {category.items.map((skill) => (
                <div key={skill} className="skill-chip">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
}