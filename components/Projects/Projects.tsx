import ProjectCard from './ProjectCard';
import docpilotImg from '../docpilot.png';
import githubImg from '../github.png';

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-24 text-white">
      <h2 className="mb-12 border-b border-neutral-800 pb-4 text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ProjectCard
          title="DOCPILOT: AI WORKSPACE ASSISTANT"
          category="Desktop App"
          year="2026"
          link="https://github.com/nandinii26/Docpilot"
          image={docpilotImg}
        />
        <ProjectCard
          title="GITHUB INTELLIGENCE"
          category="WEB APP"
          year="2026"
          link="https://github-intelligence-one.vercel.app/"
          image={githubImg}
        />
      </div>
    </section>
  );
}