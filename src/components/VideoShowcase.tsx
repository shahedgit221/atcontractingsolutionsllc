import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import thumb1 from "@/assets/video-1.jpg";
import thumb2 from "@/assets/project-3.jpg";
import thumb3 from "@/assets/project-2.jpg";

/**
 * Replace `src` with a real video file URL (mp4) for each item,
 * and swap `thumbnail` with a real still from the video.
 */
type VideoItem = {
  title: string;
  description: string;
  thumbnail: string;
  src: string;
};

const videos: VideoItem[] = [
  {
    title: "Video Title",
    description: "Short description of this project video.",
    thumbnail: thumb1,
    src: "",
  },
  {
    title: "Video Title",
    description: "Short description of this project video.",
    thumbnail: thumb2,
    src: "",
  },
  {
    title: "Video Title",
    description: "Short description of this project video.",
    thumbnail: thumb3,
    src: "",
  },
];

function VideoCard({ video, featured = false }: { video: VideoItem; featured?: boolean }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card">
      <div className={`relative ${featured ? "aspect-[16/10]" : "aspect-video"} overflow-hidden`}>
        {playing && video.src ? (
          <video
            src={video.src}
            controls
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <>
            <img
              src={video.thumbnail}
              alt={video.title}
              loading="lazy"
              width={1280}
              height={720}
              className="h-full w-full object-cover opacity-80 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.7))]" />
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${video.title}`}
              className="absolute inset-0 grid place-items-center"
            >
              <span className="bg-gradient-purple grid h-16 w-16 place-items-center rounded-full text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 glow-purple">
                <span className="ml-1 block border-y-[9px] border-l-[14px] border-y-transparent border-l-white" />
              </span>
            </button>
          </>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{video.title}</h3>
        <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">{video.description}</p>
        {!video.src ? (
          <p className="text-purple-soft/70 mt-3 text-xs">Video placeholder — add a video URL.</p>
        ) : null}
      </div>
    </article>
  );
}

export function VideoShowcase() {
  return (
    <section id="video" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Video Showcase"
          title="See the Work in Motion."
          description="Walkthroughs and on-site clips. Thumbnails and video links are easy to swap for real footage."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <VideoCard video={videos[0]!} featured />
          </Reveal>
          <div className="grid gap-5">
            {videos.slice(1).map((v, i) => (
              <Reveal key={i} delay={(i + 1) * 120}>
                <VideoCard video={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoShowcase;
