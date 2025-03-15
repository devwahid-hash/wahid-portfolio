import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Mail } from "lucide-react";

const socialLinks = [
  {
    icon: SiGithub,
    href: "https://github.com/devwahid-hash",
    label: "GitHub"
  },
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/wahid-ali-4b5bb830b",
    label: "LinkedIn"
  },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/wahiddev4",
    label: "Instagram"
  },
  {
    icon: Mail,
    href: "mailto:devwahid4@gmail.com",
    label: "Email"
  }
];

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
          aria-label={link.label}
        >
          <link.icon className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  );
}
