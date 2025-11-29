"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

const articles = [
    {
        title: "Scaling Kubernetes Clusters for High Traffic",
        excerpt: "Best practices for autoscaling, resource quotas, and monitoring in a production K8s environment.",
        date: "Oct 15, 2023",
        readTime: "8 min read",
        link: "#",
    },
    {
        title: "Terraform State Management Strategies",
        excerpt: "How to effectively manage remote state, locking, and team collaboration with Terraform.",
        date: "Sep 28, 2023",
        readTime: "6 min read",
        link: "#",
    },
    {
        title: "Zero-Downtime Deployments with Blue/Green",
        excerpt: "Implementing blue/green deployment strategies using AWS CodeDeploy and ALB.",
        date: "Aug 10, 2023",
        readTime: "10 min read",
        link: "#",
    },
];

export default function Blog() {
    return (
        <section id="blog" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12"
                >
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Latest <span className="text-neon-blue">Insights</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl">
                            Thoughts on DevOps culture, automation patterns, and new technologies.
                        </p>
                    </div>
                    <Button variant="outline" className="gap-2">
                        View All Articles <ArrowRight size={16} />
                    </Button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-card-bg border border-white/5 rounded-xl p-6 hover:border-neon-blue/30 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-2 text-terminal-green text-sm font-mono mb-4">
                                <BookOpen size={14} />
                                <span>{article.date}</span>
                                <span className="w-1 h-1 rounded-full bg-gray-600" />
                                <span>{article.readTime}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                                {article.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                {article.excerpt}
                            </p>

                            <a href={article.link} className="inline-flex items-center text-neon-blue text-sm font-medium hover:underline underline-offset-4">
                                Read Article <ArrowRight size={14} className="ml-1" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
