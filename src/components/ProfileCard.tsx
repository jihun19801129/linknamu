type ProfileCardProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export function ProfileCard({ name, bio, imageSrc }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="h-24 w-24 overflow-hidden rounded-full ring-1 ring-black/10 sm:h-28 sm:w-28 dark:ring-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element -- local SVG placeholder, swapped for a real photo later */}
        <img
          src={imageSrc}
          alt={`${name} 프로필 사진`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {name}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
