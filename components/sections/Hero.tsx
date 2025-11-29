"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import TerminalWindow from "@/components/terminal/TerminalWindow";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-terminal-green/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-neon-blue font-mono mb-4 text-lg">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Can <span className="text-gray-500">O.</span>
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                        Junior <span className="text-terminal-green font-mono">DevOps Engineer</span>
                    </h3>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                        Building reliable infrastructure, automating workflows, and bridging the gap between development and operations.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="gap-2">
                            View Projects <ArrowRight size={18} />
                        </Button>
                        <Button variant="outline" size="lg" className="gap-2">
                            Download CV <Download size={18} />
                        </Button>
                    </div>
                </motion.div>

                {/* Right Content (Terminal) */}
                <div className="w-full">
                    <TerminalWindow />
                </div>
            </div>
        </section>
    );
}
