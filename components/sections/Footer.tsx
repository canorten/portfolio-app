import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-card-bg border-t border-white/10 py-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400 text-sm font-mono">
                            © {new Date().getFullYear()} DevOps Portfolio. Built with Next.js & Tailwind.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
