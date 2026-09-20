import { LinkCard } from "@/components/LinkCard";
import { ProfileCard } from "@/components/ProfileCard";

// TODO: 더미 데이터 — 실제 프로필/링크 데이터로 교체 예정
const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  imageSrc: "/avatar-placeholder.svg",
};

const links = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Blog", href: "https://example.com/blog" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-start justify-center bg-zinc-50 px-4 py-12 dark:bg-black sm:py-20">
      <main className="flex w-full max-w-sm flex-col items-center gap-8">
        <ProfileCard {...profile} />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.label} {...link} />
          ))}
        </div>
      </main>
    </div>
  );
}
