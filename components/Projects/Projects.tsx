import ProjectCard from './ProjectCard';
import docpilotImg from '../docpilot.png';
import githubImg from '../github.png';
import revive from '../revivepay.png'
import self from '../Self back.png'

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-8 py-24 text-white">
      <span id="project" className="sr-only" />
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
        <ProjectCard
          title="REVENUE RECOVERY SYSTEM "
          category="WEB APP"
          year="2026"
          link="https://github.com/nandinii26/Revive-pay/"
          image={revive}
        />
        <ProjectCard
          title="SELF HEALING BACKEND SYSTEM "
          category="WEB APP"
          year="2026"
          link="https://github.com/nandinii26/self-healing-backend"
          image={self}
        />
      </div>
    </section>
  );
}