import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "E-commerce Dashboard",
    year: "2023",
    align: "right",
    image: "/images/dash.PNG",
    liveDemo: "https://dashboard-rho-gray-61.vercel.app/dashboard",
    github: "https://github.com/aymenkhaled/dashboard",
  },
  {
    name: "LMS with AI Integration & WebSocket",
    year: "2024",
    align: "left",
    image: "/images/lms.PNG",
    liveDemo: "https://e-learning-five-tau.vercel.app",
  },
  {
    name: "MERN Redux Toolkit E-commerce",
    year: "2023",
    align: "right",
    image: "/images/ecom 1.webp",
    github: "https://github.com/aymenkhaled/mern-redux-toolkit-ecommerce",
  },
  {
    name: "MERN Blog App",
    year: "2023",
    align: "left",
    image: "/images/blog.jpg",
    github: "https://github.com/aymenkhaled/mern-blog-app",
  },
  {
    name: "MERN E-commerce",
    year: "2022",
    align: "right",
    image: "/images/ecom2.jpg",
    github: "https://github.com/aymenkhaled/mern-e-commerce",
  },
  {
    name: "MERN E-Book",
    year: "2023",
    align: "left",
    image: "/images/website-img-2.webp",
    github: "https://github.com/aymenkhaled/mern-e-book",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            liveDemo={project.liveDemo}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
