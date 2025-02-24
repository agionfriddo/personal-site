"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Justworks",
    location: "New York, NY",
    position: "Senior Software Engineer",
    period: "Present",
    description:
      "Leading development teams in creating intuitive web applications, focusing on full-stack development and mentoring junior developers.",
    highlights: [
      "Specializing in building scalable web applications",
      "Mentoring and leading development teams",
      "Implementing best practices for accessibility and performance",
    ],
  },
  {
    company: "Cerebral, Inc.",
    location: "New York, NY",
    position: "Lead Software Engineer",
    period: "2023",
    description:
      "Lead software development team of four engineers and two interns on several projects by delineating tasks, writing design documents, collaborating with product and design teams, reviewing source code, along with writing code myself.",
    highlights: [
      "Implemented a full rewrite of our marketing integrations in a HIPAA compliant way using Segment and various marketing partner APIs including Meta and TikTok, resulting in an increase of thousands of impressions and leads for our product",
      "Lead team in rewrite of product onboarding funnel by writing tickets in Jira, delineating tasks, and collaborating with design and product teams, resulting in launch a month ahead of schedule",
      "Advised as domain expert on product onboarding funnel for up to three other teams by providing guidance and direction through code and technical design document reviews in order to maintain high quality of code and adhere to best practices",
      "Mentored interns through weekly 1:1s, code reviews, and pair programming exercises",
      "Built several reusable UI components in React for company design system to be used by five other teams in the company in a composable way",
    ],
  },
  {
    company: "Teachers Pay Teachers",
    location: "New York, NY",
    position: "Senior Software Engineer",
    period: "2022 - 2023",
    description:
      "Acted as lead on several projects including a direct messaging beta by evaluating vendor options, writing design documents, delineating tasks, and writing code. Collaborated with customer service team to triage user issues.",
    highlights: [
      "Launched Direct Messaging product in 50 stores after 2 months and elevated beta within 1 week to 7M customers, improving engagement between buyers and sellers",
      "Led presentation to 20 developers on Apollo client hooks and GraphQL to help spur adoption throughout code base",
      "Mentored junior developers via 1:1s, code reviews, and pairing sessions, leading to promotion",
      "Built several features across stack including both frontend and backend work by partnering with product and design teams",
      "Exceeded pace of previous quarter OKRs by enabling teachers to create over 3000 enhanced interactive assignments for students with auto-grading activities",
    ],
  },
  {
    company: "BetterHealthcare",
    location: "New York, NY",
    position: "Lead Frontend Engineer",
    period: "2017 - 2021",
    description:
      "Managed 2 developers, facilitated bi-weekly sprint meetings, and communicated and delineated tasks via Jira tickets.",
    highlights: [
      "Generated additional revenue by creating a telehealth product with 10k weekly calls by guiding team in development of web application within 3-week deadline",
      "Recommended solution to CEO and COO to build custom confirmation page, allowing specific client to obtain data and insights, avoiding security breach",
      "Developed several web apps via modern frontend frameworks and TypeScript for scalability by partnering with product and design teams",
      "Increased test coverage for pertinent user flows and created custom reusable component library to use in current and future web applications",
      "Mentored new hires in best practices through pull requests and code reviews",
    ],
  },
  {
    company: "Fullstack Academy of Code",
    position: "Software Engineer",
    period: "2016",
    description:
      "Transitioned into software engineering through an intensive coding bootcamp, focusing on full-stack JavaScript development.",
    highlights: [
      "Developed full-stack applications using Node.js and React",
      'Created Border Buddy, awarded "Hack of the Month" by NYC Tech Meetup',
      "Collaborated on real-time communication tools for classrooms",
    ],
  },
  {
    company: "Windham Public Schools",
    location: "Windham, CT",
    position: "High School English Teacher",
    period: "2012 - 2016",
    description:
      "Served as an English teacher and faculty advisor for the Writing Center, developing strong communication and leadership skills.",
    highlights: [
      "Faculty advisor for the Writing Center",
      "Trained students in peer tutoring and effective feedback",
      "Organized annual literacy and culture events",
    ],
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-16 md:mb-24 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-primary-dark dark:text-primary-light transition-colors duration-200">
            Experience
          </h1>
          <p className="text-lg md:text-xl text-primary-dark dark:text-primary-light transition-colors duration-200 max-w-2xl">
            A journey from teaching to tech, focusing on building scalable
            solutions and leading development teams.
          </p>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16 md:space-y-24"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.company + exp.period}
              variants={itemVariants}
              className="group relative pl-8 md:pl-12"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-dark/40 to-accent-dark/10 dark:from-accent-light/40 dark:to-accent-light/10 transition-colors duration-200" />

              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-[28px] md:top-[32px] w-[10px] h-[10px] rounded-full bg-accent-dark dark:bg-accent-light ring-4 ring-primary-light dark:ring-primary-dark transition-all duration-200" />

              <div className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-accent-dark dark:text-accent-light transition-colors duration-200">
                      {exp.position}
                    </h2>
                    <span className="text-sm md:text-base font-mono text-primary-dark dark:text-primary-light transition-colors duration-200">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-lg md:text-xl">
                    <span className="font-semibold text-primary-dark dark:text-primary-light transition-colors duration-200">
                      {exp.company}
                    </span>
                    {exp.location && (
                      <>
                        <span className="text-primary-dark dark:text-primary-light transition-colors duration-200">
                          •
                        </span>
                        <span className="text-primary-dark dark:text-primary-light transition-colors duration-200">
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-base md:text-lg text-primary-dark dark:text-primary-light transition-colors duration-200 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm md:text-base"
                    >
                      <span className="text-accent-dark dark:text-accent-light transition-colors duration-200 mt-1.5">
                        •
                      </span>
                      <span className="flex-1 text-primary-dark dark:text-primary-light transition-colors duration-200">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
