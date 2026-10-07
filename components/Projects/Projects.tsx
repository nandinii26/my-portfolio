import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-24 text-white">
      <h2 className="mb-12 border-b border-neutral-800 pb-4 text-3xl font-bold">Selected Works</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ProjectCard title="Project Title" category="Web App" year="2026" />
        <ProjectCard title="Another Perspective" category="Creative Development" year="2026" />
      </div>
    </section>
  );
}