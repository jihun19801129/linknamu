import { LinkList } from "@/components/LinkList";
import { ProfileCard } from "@/components/ProfileCard";

// TODO: 더미 데이터 — 실제 프로필/링크 데이터로 교체 예정
const profile = {
  name: "김개발",
  bio: "풀 스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageSrc: "https://placehold.co/150x150/orange/white",
};

const links = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Blog", href: "https://example.com/blog" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-start justify-center px-6 py-16 sm:px-8 sm:py-24">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <ProfileCard {...profile} />
        <LinkList links={links} />
      </main>
    </div>
  );
}
