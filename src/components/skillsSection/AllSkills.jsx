import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiNodedotjs,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiFastapi,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "React Native", icon: TbBrandReactNative },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "NodeJS", icon: SiNodedotjs },
  { skill: "Python", icon: FaPython },
  { skill: "FastAPI", icon: SiFastapi },
  { skill: "Django", icon: SiDjango },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "PostgreSQL", icon: SiPostgresql },
  { skill: "Docker", icon: FaDocker },
  { skill: "Git", icon: FaGitAlt },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center relative gap-4 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
