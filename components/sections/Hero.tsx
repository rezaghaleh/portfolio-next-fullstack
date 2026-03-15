import Image from "next/image";
import { socials } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="hero-kicker">Software Developer</p>
        <h1>
          Hi, I&apos;m <span>Reza Ghaleh</span>
        </h1>
        <p className="hero-bio">
          Software Developer | Crafting Scalable, User-Centric Solutions
        </p>
        <div className="hero-actions">
          <a href="#contact" className="primary-button">
            Get in Touch
          </a>
          <a href="#dev-quiz" className="secondary-button">
            Try My Dev Quiz
          </a>
        </div>
        <div className="social-grid">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="social-tile"
              aria-label={social.name}
            >
              <Image src={social.icon} alt={`${social.name} logo`} width={40} height={40} />
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="hex-frame">
          <div className="aura-ring aura-ring-1" />
          <div className="aura-ring aura-ring-2" />
          <div className="aura-ring aura-ring-3" />
          <Image
            src="/assets/profile.png"
            alt="Reza Ghaleh, Software Developer"
            width={540}
            height={540}
            priority
          />
        </div>
      </div>
    </section>
  );
}
