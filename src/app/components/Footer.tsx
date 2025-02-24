"use client";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/andrew-gionfriddo-2bbb0618/",
      label: "LinkedIn",
      icon: "👔",
    },
    {
      href: "https://github.com/agionfriddo",
      label: "GitHub",
      icon: "💻",
    },
  ];

  return (
    <footer className="bg-primary-light dark:bg-primary-dark border-t border-neutral-light dark:border-neutral-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Andrew Gionfriddo. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-dark dark:hover:text-accent-light transition-colors"
                aria-label={label}
              >
                <span className="sr-only">{label}</span>
                <span className="text-xl">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
