"use client";

import { motion } from "framer-motion";
import { Cloud, Container, GitBranch, Server, Terminal, Code, Database, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
    {
        category: "Cloud & Infrastructure",
        items: [
            { name: "AWS", icon: Cloud, level: "Advanced" },
            { name: "Google Cloud", icon: Cloud, level: "Intermediate" },
            { name: "Terraform", icon: Server, level: "Advanced" },
            { name: "Ansible", icon: Terminal, level: "Intermediate" },
        ],
    },
    {
        category: "Containerization & Orchestration",
        items: [
            { name: "Docker", icon: Container, level: "Advanced" },
            { name: "Kubernetes", icon: Globe, level: "Intermediate" }, // Using Globe as placeholder for K8s
            { name: "Helm", icon: Container, level: "Intermediate" },
        ],
    },
    {
        category: "CI/CD & DevOps Tools",
        items: [
            { name: "Jenkins", icon: GitBranch, level: "Advanced" },
            { name: "GitLab CI", icon: GitBranch, level: "Advanced" },
            { name: "GitHub Actions", icon: GitBranch, level: "Intermediate" },
        ],
    },
    {
        category: "Scripting & Programming",
        items: [
            { name: "Python", icon: Code, level: "Advanced" },
            { name: "Bash", icon: Terminal, level: "Advanced" },
            { name: "Go", icon: Code, level: "Beginner" },
            { name: "TypeScript", icon: Code, level: "Intermediate" },
        ],
    },
];

export default function TechStack() {
    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Technical <span className="text-neon-blue">Arsenal</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building, deploying, and managing scalable infrastructure.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-card-bg border border-white/5 rounded-xl p-6 hover:border-neon-blue/30 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-mono text-white mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-terminal-green rounded-full" />
                                {category.category}
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {category.items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.1)] border border-transparent hover:border-neon-blue/20"
                                    >
                                        <div className="p-2 rounded-md bg-dark-bg text-neon-blue group-hover:text-terminal-green transition-colors">
                                            <skill.icon size={20} />
                                        </div>
                                        <div>
                                            <div className="text-gray-200 font-medium text-sm">{skill.name}</div>
                                            <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                                {skill.level}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
