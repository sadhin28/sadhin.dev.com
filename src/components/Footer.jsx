import { Heart, Linkedin, Mail } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-500/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <button
                            onClick={scrollToTop}
                            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
                        >
                            <h1>T.B SADHIN</h1>
                        </button>
                        <p className="text-muted-foreground">
                            MERN Stack Developer crafting beautiful and functional web experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                                <button
                                    key={link}
                                    onClick={() => {
                                        const element = document.getElementById(link.toLowerCase());
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                                >
                                    {link}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Connect */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Connect</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/sadhin28"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-card hover:bg-green-500/20 rounded-lg transition-all duration-300 hover:scale-110 border border-border hover:border-primary"
                            >
                                <BsGithub className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/taosif-bin-sadhin-527899368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-card hover:bg-green-500/20 rounded-lg transition-all duration-300 hover:scale-110 border border-border hover:border-primary"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                target="_blank"
                                title="Email"
                                value="taosifbinsadhincse@gmail.com"
                                href="mailto:hello@developer.com"
                                className="p-2 bg-card hover:bg-green-500/20 rounded-lg transition-all duration-300 hover:scale-110 border border-border hover:border-primary"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                       
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 text-center border-t border-border">
                  
                        <p className="text-muted-foreground text-sm">
                            © {currentYear} Taosif Bin Sadhin. All rights reserved.
                        </p>
                        
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;