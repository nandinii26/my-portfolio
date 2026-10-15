
type SkillCardProps = {
  number: string;
  title: string;
  description: string;
  tools: string[];
  icon?: React.ReactNode;
  className?: string;
};

export default function SkillCard({
  number,
  title,
  description,
  tools,
  icon,
  className = "",
}: SkillCardProps) {
  return (
    <article
      className={`
        group relative flex min-h-[230px] flex-col
        justify-between overflow-hidden rounded-2xl
        border border-white/10 bg-[#171717] p-6
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-white/25
        hover:bg-[#1d1d1d]
        ${className}
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="text-3xl text-white/90">
          {icon}
        </div>

        <span className="font-mono text-xs tracking-widest text-white/40">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {title}
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-white/50">
          {description}
        </p>

        {/* Technology tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10
                bg-white/[0.03] px-3 py-1.5 text-xs
                text-white/70 transition-colors
                group-hover:border-white/20"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Hover arrow */}
      <span
        aria-hidden="true"
        className="absolute right-6 top-6 text-xl
          text-white/40 opacity-0 transition-all
          duration-300 group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
          group-hover:text-white group-hover:opacity-100"
      >
        ↗
      </span>
    </article>
  );
}
