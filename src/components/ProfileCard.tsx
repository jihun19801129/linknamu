type ProfileCardProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export function ProfileCard({ name, bio, imageSrc }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative h-28 w-28 sm:h-32 sm:w-32">
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-white/70 to-orange-200/50 blur-md"
          aria-hidden
        />
        <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_10px_28px_-8px_rgba(166,89,38,0.4),0_2px_6px_rgba(0,0,0,0.08)] ring-4 ring-white/80 dark:ring-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element -- local SVG placeholder, swapped for a real photo later */}
          <img
            src={imageSrc}
            alt={`${name} 프로필 사진`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-stone-800 dark:text-stone-50">
          {name}
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-300">{bio}</p>
      </div>
    </div>
  );
}
