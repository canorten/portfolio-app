"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        company: "TechSolutions Inc.",
        role: "Junior DevOps Engineer",
        period: "2023 - Present",
        description: [
            "Managed AWS infrastructure using Terraform, reducing provisioning time by 40%.",
            "Implemented CI/CD pipelines with Jenkins and GitLab CI, automating deployment processes.",
            "Containerized legacy applications using Docker and orchestrated them with Kubernetes.",
        ],
    },
    {
        company: "StartUp Co.",
        role: "System Administrator Intern",
        period: "2022 - 2023",
        description: [
            "Monitored server health and performance using Prometheus and Grafana.",
            "Automated routine maintenance tasks with Bash and Python scripts.",
            "Assisted in migrating on-premise servers to Google Cloud Platform.",
        ],
    },
    {
        company: "University Project",
        role: "Backend Developer & Ops",
        period: "2021 - 2022",
        description: [
            "Built a microservices-based application using Node.js and MongoDB.",
            "Set up Nginx as a reverse proxy and load balancer.",
            "Configured automated testing and linting workflows with GitHub Actions.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Professional <span className="text-neon-blue">Journey</span>
                    </h2>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(0,243,255,0.5)]" />

                            <div className="bg-card-bg border border-white/5 rounded-xl p-6 hover:border-neon-blue/30 transition-colors duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            <Briefcase size={18} className="text-neon-blue" />
                                            {exp.role}
                                        </h3>
                                        <div className="text-terminal-green font-mono text-sm mt-1">
                                            {exp.company}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm font-mono mt-2 md:mt-0">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                            <span className="text-neon-blue mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-neon-blue/50" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
