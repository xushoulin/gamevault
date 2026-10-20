import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/lib/queries";

export default function GameCard({ game, priority = false }: { game: Game; priority?: boolean }) {
  const isRemote = game.thumb.startsWith("http");
  return (
    <Link
      href={`/game/${game.slug}`}
      className="group block rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-violet-400 hover:shadow-lg transition-all"
    >
      <div className="relative aspect-[4/3] bg-slate-100">
        {isRemote ? (
          <Image
            src={game.thumb}
            alt={`${game.title} - play free online`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
            className="object-cover group-hover:scale-105 transition-transform"
            loading={priority ? "eager" : "lazy"}
            priority={priority}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={game.thumb}
            alt={`${game.title} - play free online`}
            width={512}
            height={384}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform"
            loading={priority ? "eager" : "lazy"}
          />
        )}
        <span className="absolute bottom-1.5 right-1.5 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded">
          {game.source === "local" ? "Instant Play" : "HTML5"}
        </span>
      </div>
      <div className="p-2.5">
        <h3 className="text-sm font-semibold text-slate-800 truncate group-hover:text-violet-700">
          {game.title}
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">{game.category_name ?? "Game"}</p>
      </div>
    </Link>
  );
}
