import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line" />
      <p>
        © 2025 <Image src="/assets/rg-logo.png" alt="RG logo" width={20} height={20} />. Built with
        {" "}💻, ☕, and a passion for innovation.
      </p>
    </footer>
  );
}
