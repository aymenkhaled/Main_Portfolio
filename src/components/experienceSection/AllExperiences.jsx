import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Web Developer",
    company: "Everything to Gain",
    date: "Feb 2025 – Present",
    responsibilities: [
      "Led development of Strategy Navigator, JourneyAI and SaleSide AI — all live SaaS products.",
      "Built multi-tenant RBAC platform; integrated 65+ AI tools (GPT-4o, Groq Llama) with Stripe/PayPal billing.",
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
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-4">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <SingleExperience experience={experience} />
        </motion.div>
      ))}
    </div>
  );
};

export default AllExperiences;
