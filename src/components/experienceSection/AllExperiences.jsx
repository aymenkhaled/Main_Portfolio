import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Web Developer",
    company: "Everything to Gain",
    date: "Feb 2025 – Present",
    responsibilities: [
      "Led development of multiple SaaS & AI tools (Strategy Navigator, JourneyAI, SaleSide AI).",
      "Built multi-tenant platform with RBAC, integrated 65+ AI tools (GPT-4o, Groq Llama) and billing (Stripe/PayPal).",
      "Developed Slack, Asana & Basecamp integrations and real-time WebSocket features.",
    ],
  },
  {
    job: "Full Stack Developer (Intern)",
    company: "Aziin Engineering Solution",
    date: "2024",
    responsibilities: [
      "Developed e-learning platform with AI chatbot and real-time WebSockets.",
      "Built MERN backend for dynamic content, authentication and performance optimization.",
      "Integrated AI features to enhance platform intelligence.",
    ],
  },
  {
    job: "Mobile Developer (Intern)",
    company: "SAC Marquage",
    date: "Sep 2024 – Oct 2024",
    responsibilities: [
      "Built React Native RFID mobile app with IoT device communication.",
      "Created Django REST APIs for tag management and device synchronization.",
      "Designed RESTful APIs for real-time data handling.",
    ],
  },
  {
    job: "Full Stack Web Developer (Intern)",
    company: "Proged",
    date: "Jul 2022 – Aug 2022",
    responsibilities: [
      "Developed e-commerce system with .NET, React, SQL Server and MongoDB.",
      "Implemented payments, product catalog and order workflows.",
      "Participated in deployment and maintenance of web apps.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col flex-wrap items-start justify-center gap-6">
      {experiences.map((experience, index) => {
        return (
          <div key={index} className="flex flex-col md:flex-row items-center gap-6">
            <SingleExperience experience={experience} />
            {index < experiences.length - 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-4xl text-orange lg:block sm:hidden rotate-90 md:rotate-0" />
              </motion.div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default AllExperiences;
