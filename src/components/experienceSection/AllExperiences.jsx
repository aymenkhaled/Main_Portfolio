import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Web Developer Intern",
    company: "Aziin Engineering Solution",
    date: "Feb 2025 - May 2025",
    responsibilities: [
      "Developed full-stack web applications using the MERN stack.",
      "Integrated AI features to enhance platform intelligence.",
      "Collaborated on real-time data processing and APIs.",
     
    ],
  },
  {
    job: "Full Stack Developer Intern",
    company: "SAC Marquage",
    date: "Sep 2024 - Oct 2024",
    responsibilities: [
      "Built RFID data management solutions with React and Django.",
      "Designed and developed RESTful APIs for real-time data handling.",
      "Worked on frontend-backend integration and UI improvements.",
    ],
  },
  {
    job: "Full Stack Web Developer Intern",
    company: "Proged",
    date: "Jul 2022 - Aug 2022",
    responsibilities: [
      "Created e-commerce applications with .NET Core and React.",
      "Managed SQL Server and MongoDB databases.",
      "Participated in deployment and maintenance of web apps.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < experiences.length - 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
