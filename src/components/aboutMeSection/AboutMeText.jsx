import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I&apos;m Aymen — a Full Stack Developer specialized in building SaaS platforms and integrating AI into real-world products. I&apos;ve shipped production tools used by real teams, including a multi-tenant AI strategy platform, a real-time AI assistant suite, and an automated sales meeting tool.
      </p>
      <p className="mt-4">
        I work across the full stack: React and Next.js on the frontend, Node.js, FastAPI and Django on the backend, and OpenAI and Groq for AI integrations. I care deeply about clean architecture, scalable APIs and delivering products that actually solve problems — not just demo well.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
