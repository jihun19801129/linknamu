"use client";

import { useEffect, useState } from "react";
import { LinkCard } from "./LinkCard";

type Link = {
  label: string;
  href: string;
};

export function LinkList({ links }: { links: Link[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: { counts: Record<string, number> }) => {
        if (!cancelled) setCounts(data.counts);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  function handleClick(href: string) {
    setCounts((prev) => ({ ...prev, [href]: (prev[href] ?? 0) + 1 }));

    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ href }),
    })
      .then((res) => res.json())
      .then((data: { count: number }) => {
        setCounts((prev) => ({ ...prev, [href]: data.count }));
      })
      .catch(() => {});
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.label}
          {...link}
          clickCount={counts[link.href] ?? 0}
          onClick={() => handleClick(link.href)}
        />
      ))}
    </div>
  );
}
