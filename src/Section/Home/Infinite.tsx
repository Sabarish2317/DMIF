import { useNavigate } from "react-router-dom";

type Item = {
  title: string;
};

export default function TopInfiniteBanner({
  speed = 60,
  items = defaultItems,
}: {
  speed?: number;
  items?: Item[];
}) {
  const navigate = useNavigate();

  const duplicated = [...items, ...items];

  const estimatedWidthPerItem = 250;
  const totalWidth = estimatedWidthPerItem * duplicated.length;
  const duration = Math.max(10, Math.round(totalWidth / speed));

  return (
    <div
      className="w-full bg-blue-900 backdrop-blur-md border-b border-white/10 py-2 overflow-hidden cursor-pointer"
      onClick={() => navigate("/certifications")}
    >
      <div
        className="flex whitespace-nowrap text-sm sm:text-base text-white tracking-wide font-medium will-change-transform"
        style={{ animation: `scroll-left ${duration}s linear infinite` }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = "running";
        }}
      >
       {duplicated.map((it, i) => (
  <span key={i} className="mx-8 opacity-100 text-sm text-white">
    {it.title}
    <span className="text-yellow-400 font-bold">Launched!</span>
  </span>
))}

      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .will-change-transform { transform: translateZ(0); }
      `}</style>
    </div>
  );
}

const defaultItems: Item[] = [
  { title: " New AI Certifications - " },
  { title: " New AI Certifications - " },
  { title: " New AI Certifications - " },
  { title: " New AI Certifications - " },
  { title: " New AI Certifications - " },
  { title: " New AI Certifications - " },
  
];

