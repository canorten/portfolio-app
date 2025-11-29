"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Command {
    cmd: string;
    output: React.ReactNode;
}

const commands: Command[] = [
    {
        cmd: "whoami",
        output: (
            <div className="text-gray-300">
                <span className="text-neon-blue">user@devops:~$</span> Junior DevOps Engineer
                <br />
                Passionate about automation, cloud infrastructure, and scalable systems.
            </div>
        ),
    },
    {
        cmd: "cat skills.txt",
        output: (
            <div className="text-gray-300">
                <span className="text-neon-blue">user@devops:~$</span>
                <br />
                - AWS / GCP
                <br />
                - Docker / Kubernetes
                <br />
                - Terraform / Ansible
                <br />
                - CI/CD (Jenkins, GitLab)
                <br />
                - Python / Bash
            </div>
        ),
    },
    {
        cmd: "echo 'Hello World!'",
        output: (
            <div className="text-gray-300">
                <span className="text-neon-blue">user@devops:~$</span> Hello World!
                <br />
                Ready to build the future of infrastructure.
            </div>
        ),
    },
];

export default function TerminalWindow() {
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [history, setHistory] = useState<React.ReactNode[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (lineIndex >= commands.length) return;

        const currentCmd = commands[lineIndex].cmd;

        if (charIndex < currentCmd.length) {
            const timeout = setTimeout(() => {
                setCharIndex((prev) => prev + 1);
            }, 100); // Typing speed
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setHistory((prev) => [...prev, commands[lineIndex].output]);
                setLineIndex((prev) => prev + 1);
                setCharIndex(0);
            }, 1000); // Delay before next command
            return () => clearTimeout(timeout);
        }
    }, [charIndex, lineIndex]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history, charIndex]);

    return (
        <motion.div
            className="w-full max-w-lg mx-auto bg-dark-bg/90 border border-white/10 rounded-lg shadow-2xl backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-2 bg-white/5 border-b border-white/10">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-4 text-xs text-gray-400 font-mono">user@devops:~</div>
            </div>

            {/* Terminal Body */}
            <div
                ref={scrollRef}
                className="p-4 h-80 overflow-y-auto font-mono text-sm space-y-2 scrollbar-hide"
            >
                {history.map((item, i) => (
                    <div key={i}>{item}</div>
                ))}

                {lineIndex < commands.length && (
                    <div className="text-gray-300">
                        <span className="text-terminal-green">user@devops:~$</span>{" "}
                        {commands[lineIndex].cmd.substring(0, charIndex)}
                        <span className="animate-pulse">_</span>
                    </div>
                )}

                {lineIndex >= commands.length && (
                    <div className="text-gray-300">
                        <span className="text-terminal-green">user@devops:~$</span>{" "}
                        <span className="animate-pulse">_</span>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
