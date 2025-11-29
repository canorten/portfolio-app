"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Server, Database, Cloud } from "lucide-react";
import { Button } from "@/components/ui/Button";

const projects = [
    {
        title: "Cloud-Native Microservices",
        description: "A scalable e-commerce backend built with Node.js microservices, deployed on Kubernetes with Istio service mesh.",
        tags: ["Kubernetes", "Istio", "AWS EKS", "Terraform"],
        github: "#",
        demo: "#",
        architecture: "Microservices Architecture",
    },
    {
        title: "Automated CI/CD Pipeline",
        description: "End-to-end CI/CD pipeline for a React application using Jenkins and Docker, achieving zero-downtime deployments.",
        tags: ["Jenkins", "Docker", "Nginx", "Shell Scripting"],
        github: "#",
        demo: "#",
        architecture: "CI/CD Workflow",
    },
    {
        title: "Serverless Image Processor",
        description: "Event-driven image processing system using AWS Lambda, S3, and DynamoDB for metadata storage.",
        tags: ["AWS Lambda", "S3", "DynamoDB", "Serverless Framework"],
        github: "#",
        demo: "#",
        architecture: "Serverless Pattern",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative bg-dark-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Featured <span className="text-neon-blue">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Showcasing infrastructure as code, automation, and cloud-native solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-card-bg border border-white/5 rounded-xl overflow-hidden hover:border-neon-blue/30 transition-all duration-300 group flex flex-col"
                        >
                            {/* Architecture Diagram Placeholder */}
                            <div className="h-48 bg-white/5 relative overflow-hidden flex items-center justify-center border-b border-white/5 group-hover:bg-white/10 transition-colors">
                                <div className="absolute inset-0 bg-grid-white/[0.05]" />
                                <div className="text-center z-10">
                                    <div className="flex justify-center mb-2 space-x-2 text-gray-500">
                                        <Cloud size={24} />
                                        <Server size={24} />
                                        <Database size={24} />
                                    </div>
                                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider border border-gray-700 px-2 py-1 rounded">
                                        {project.architecture}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-mono text-terminal-green bg-terminal-green/10 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 mt-auto">
                                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                                        <Github size={16} /> Code
                                    </Button>
                                    <Button variant="ghost" size="sm" className="flex-1 gap-2">
                                        <ExternalLink size={16} /> Demo
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
