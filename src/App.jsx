import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      title: "Microservices Banking Platform",
      description:
        "Designed a banking system using Dockerized microservices, deployed on AWS, with GitLab CI/CD and Kafka + Prometheus for observability.",
    },
    {
      title: "Farm Fresh E-commerce Infra",
      description:
        "Built scalable Kubernetes infra for e-commerce with IAM policies, GitLab CI/CD security hardening, and 99.9% uptime.",
    },
    {
      title: "Distributed KV Store (Raft)",
      description:
        "Developed a fault-tolerant distributed key-value store using Raft in Go, with Docker and Prometheus for containerization and monitoring.",
    },
  ];

  return (
    <div className={`${darkMode ? 'bg-neutral-950 text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-500`}> 
      {/* Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 rounded-full shadow-lg font-bold border border-neutral-700">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.h1 className="text-5xl font-extrabold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Vamsi Krishna Bhavana
        </motion.h1>
        <motion.p className="text-xl text-neutral-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          🚀 DevOps Engineer | Cloud | CI/CD | AWS | Docker | Kubernetes
        </motion.p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/vamsikrishnabhavana" target="_blank" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
            LinkedIn
          </a>
          <a href="https://drive.google.com/file/d/1H9nwuAVaBkWPFk6DV38RKK5jIBPgel25/view?usp=drive_link" target="_blank" className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-lg font-semibold">
            View Resume
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-neutral-900 border border-neutral-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">{project.title}</h3>
              <p className="text-neutral-300 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Testimonials</h2>
        <div className="space-y-6">
          <blockquote className="border-l-4 pl-4 italic text-neutral-300">
            "Vamsi's infrastructure automation significantly boosted our team’s velocity. He’s a reliable, innovative, and technically sharp engineer."
            <div className="mt-2 text-sm text-neutral-500">— Engineering Manager, Trine University Labs</div>
          </blockquote>
          <blockquote className="border-l-4 pl-4 italic text-neutral-300">
            "His DevSecOps strategies brought a noticeable improvement to our deployment pipeline. We could always count on him."
            <div className="mt-2 text-sm text-neutral-500">— Senior DevOps Lead, Fabhost Solutions</div>
          </blockquote>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">Certifications</h2>
        <ul className="list-disc list-inside text-lg text-neutral-300">
          <li>AWS Certified Cloud Practitioner – Amazon Web Services</li>
        </ul>
      </section>
    </div>
  );
}
