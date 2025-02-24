"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-2xl mx-auto text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-mono">
          Hi, I&apos;m Andrew Gionfriddo
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-neutral-dark dark:text-neutral-light"
        >
          Former English teacher turned software engineer, bridging the gap
          between technical complexity and human understanding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="prose dark:prose-invert max-w-none"
        >
          <p className="text-lg">
            With 8 years of experience in software development, I specialize in
            creating intuitive web applications that solve real-world problems.
            My background in education gives me a unique perspective on
            communicating complex technical concepts to diverse audiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center md:justify-start pt-6"
        >
          <a
            href="/experience"
            className="px-6 py-3 bg-accent-dark text-primary-light dark:bg-accent-light dark:text-primary-dark rounded-lg hover:opacity-90 transition-opacity"
          >
            View My Experience
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border-2 border-accent-dark dark:border-accent-light rounded-lg hover:bg-accent-dark hover:text-primary-light dark:hover:bg-accent-light dark:hover:text-primary-dark transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
