import Image, { StaticImageData } from 'next/image';

type ProjectCardProps = {
  title: string;
  category: string;
  year: string;
  link: string;
  image?: StaticImageData | string;
};

export default function ProjectCard({ title, category, year, link, image }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-80 items-end overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all duration-300 hover:border-neutral-600 hover:shadow-2xl hover:shadow-white/5 cursor-pointer"
    >
      {image ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top opacity-250 transition-all duration-500 group-hover:scale-105 group-hover:opacity-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/30" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-neutral-800 opacity-20 transition-opacity group-hover:opacity-40" />
      )}
      <span className="project-arrow z-10 text-neutral-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
        ↗
      </span>
      <div className="relative z-10">
        <span className="text-xs uppercase tracking-widest text-neutral-400">
          {category} / {year}
        </span>
        <h3 className="mt-1 text-2xl font-bold text-white transition-colors group-hover:text-neutral-100">
          {title}
        </h3>
      </div>
    </a>
  );
}