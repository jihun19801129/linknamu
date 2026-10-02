type LinkCardProps = {
  label: string;
  href: string;
  clickCount: number;
  onClick?: () => void;
};

export function LinkCard({ label, href, clickCount, onClick }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center justify-between gap-3 rounded-3xl border border-white/50 bg-white/40 px-5 py-4 text-base font-medium text-stone-700 shadow-[0_8px_30px_-14px_rgba(120,70,30,0.3)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_12px_34px_-14px_rgba(120,70,30,0.35)] active:translate-y-0 active:scale-[0.99] dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
    >
      <span>{label}</span>
      <span className="text-xs font-normal text-stone-400 dark:text-stone-400">
        {clickCount}회
      </span>
    </a>
  );
}
