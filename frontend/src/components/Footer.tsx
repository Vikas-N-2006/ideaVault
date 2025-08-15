import { Link } from "react-router-dom";
import { Home, BookOpen, Info, Heart, Github, Shield, ScrollText, Twitter, Linkedin, LucideIcon } from "lucide-react";
import { ReactElement } from "react";

interface SocialLink {
    name: string;
    icon: ReactElement;
    to: string;
}

interface QuickLink {
    name: string;
    href: string;
    icon: LucideIcon;
    color: string;
}

interface LegalLink {
    name: string;
    href: string;
    icon: LucideIcon;
    color: string;
}

const Footer: React.FC = () => {
    const currentYear: number = new Date().getFullYear();

    const socialLinks: SocialLink[] = [
        {
            name: "Github",
            icon: <Github className="w-6 h-6" />,
            to: "https://github.com/vinit105/ideaVault"
        },
        {
            name: "Twitter",
            icon: <Twitter className="size-6" />,
            to: "#"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="size-6" />,
            to: "#"
        }
    ];

    const quickLinks: QuickLink[] = [
        {
            name: "Home",
            href: "/",
            icon: Home,
            color: "text-blue-500",
        },
        {
            name: "Browse Ideas",
            href: "/ideas",
            icon: BookOpen,
            color: "text-indigo-500",
        },
        {
            name: "About",
            href: "/about",
            icon: Info,
            color: "text-purple-500",
        },
    ];

    const legalLinks: LegalLink[] = [
        {
            name: "Privacy Policy",
            href: "/privacy",
            icon: Shield,
            color: "text-red-400",
        },
        {
            name: "Terms & Conditions",
            href: "/terms",
            icon: ScrollText,
            color: "text-yellow-400",
        },
    ];

    return (
        <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 pt-12 pb-6">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Info */}
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold text-blue-600 dark:text-violet-500 bg-clip-text">
                            IdeaVault
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md">
                            IdeaVault is a platform to license your software project ideas with proof and attribution.
                            Protect your creativity and earn recognition with our 1% model.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map((socialLink: SocialLink) => (
                                <a
                                    key={socialLink.name}
                                    href={socialLink.to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-black dark:text-gray-200 dark:hover:text-white transition-colors duration-200"
                                >
                                    {socialLink.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-800 dark:text-gray-100 font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link: QuickLink) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <link.icon className={`w-4 h-4 ${link.color}`} />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-gray-800 dark:text-gray-100 font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {legalLinks.map((link: LegalLink) => (
                                <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2 group"
                                        >
                                            <link.icon className={`w-4 h-4 ${link.color}`} />
                                            <span>{link.name}</span>
                                        </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left text-sm text-gray-500 dark:text-gray-50">
                            <p>© {currentYear} IdeaVault. All rights reserved.</p>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-50">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 mx-1 text-red-500" />
                            <span>
                                by{" "}
                                <a
                                    href="https://github.com/vinit105/ideaVault"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600 transition-colors"
                                >
                                    Vinit
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;