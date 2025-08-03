import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Hi, I’m Aymen. I build full stack web applications using the MERN stack and Next.js. I’ve been lucky to work on projects that use AI to make apps smarter and real-time data to keep everything running smoothly. Whether it’s developing chatbots or connecting IoT devices, I enjoy turning ideas into interactive, easy-to-use websites.

I’m passionate about making sure the frontend and backend work perfectly together, and I care a lot about clean code and great performance. I’m always eager to learn new things and grow as a developer. I’m excited to be part of teams that create innovative solutions and deliver great experiences for users.
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
