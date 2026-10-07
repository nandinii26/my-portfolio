type ProjectCardProps = {
  title: string;
  category: string;
  year: string;
};

export default function ProjectCard({ title, category, year }: ProjectCardProps) {
  return (
    <article className="group relative flex h-80 items-end overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 p-6">
      <div className="absolute inset-0 bg-neutral-800 opacity-20 transition-opacity group-hover:opacity-40" />
      <div className="relative z-10">
        <span className="text-xs uppercase tracking-widest text-neutral-400">
          {category} / {year}
        </span>
        <h3 className="mt-1 text-2xl font-bold">{title}</h3>
      </div>
    </article>
  );
}