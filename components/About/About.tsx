
import SkillCard from "./skillcard";
import {
  Code2,
  Server,
  Database,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    number: "01",
    title: "Frontend",
    description: "Crafting responsive and intuitive interfaces.",
    tools: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    icon: <Code2 size={30} />,
  },
  {
    number: "02",
    title: "Backend",
    description: "Building APIs and application logic.",
    tools: [ "FASTAPI","Express", "REST APIs"],
    icon: <Server size={30} />,
  },
  {
    number: "03",
    title: "Databases",
    description: "Managing data and application storage.",
    tools: ["SQL", "PostgreSQL"],
    icon: <Database size={30} />,
  },
  {
    number: "04",
    title: "Developer Tools",
    description: "Tools I use to build and ship projects.",
    tools: ["Git", "GitHub", "VS Code", "Postman"],
    icon: <GitBranch size={30} />,
  },
];

export default function Skills() {
  return (
    <section
      id="about"
      className="bg-black px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <span id="skills" className="sr-only" />
      <p className="mb-5 text-xs tracking-[0.2em] text-white/40">
        02 / CAPABILITIES
      </p>

      <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
        TOOLS I BUILD WITH<span className="text-white/40">.</span>
      </h2>

      <p className="mb-10 mt-4 max-w-lg text-sm leading-6 text-white/50">
        The technologies behind my ideas, experiments, and projects.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skills.map((skill) => (
          <SkillCard key={skill.number} {...skill} />
        ))}
      </div>
    </section>
  );
}
