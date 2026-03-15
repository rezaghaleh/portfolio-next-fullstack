import { projects } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <Card>
        <SectionHeading eyebrow="03" title="Projects" />
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-footer">
                <ul className="tech-list">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    {project.liveUrl ? "Source / Link" : "GitHub"}
                  </a>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Card>
    </section>
  );
}
