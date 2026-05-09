import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categoryLabels, projects, publicAsset } from "../data/projects";

const projectsWithoutVideo = new Set(["ningyuan", "autonomous"]);

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const project = projects.find((item) => item.id === id);
  const goBack = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
      return;
    }

    navigate("/", { replace: true });
  };

  if (!project) {
    return (
      <section className="grid min-h-screen place-items-center px-6 text-center">
        <div>
          <p className="text-sm text-ink/50">没有找到这个作品</p>
          <button
            type="button"
            onClick={goBack}
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm shadow-soft"
          >
            返回
          </button>
        </div>
      </section>
    );
  }

  const hasVideo = !projectsWithoutVideo.has(project.id);
  const media = [
    ...(hasVideo ? [{ type: "video", src: publicAsset(`/assets/projects/${project.assetDir}/video-preview.mp4`) }] : []),
    { type: "image", src: project.cover },
    ...Array.from({ length: 20 }, (_, index) => ({
      type: "image",
      src: publicAsset(`/assets/projects/${project.assetDir}/detail-${String(index + 1).padStart(2, "0")}.jpg`)
    }))
  ];

  return (
    <section className="min-h-screen bg-cream lg:grid lg:grid-cols-[40%_60%]">
      <aside className="paper-texture px-6 py-24 sm:px-10 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:px-14">
        <button
          type="button"
          onClick={goBack}
          className="mb-12 inline-flex rounded-full bg-white/78 px-4 py-2 text-sm shadow-sm"
        >
          返回
        </button>

        <p className="mb-4 text-sm font-medium text-sky">{categoryLabels[project.category]}</p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{project.title}</h1>

        <p className="mt-8 max-w-xl whitespace-pre-wrap text-base leading-[1.8] text-ink/70">{project.fullDesc}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/82 px-3 py-1 text-xs text-ink/68 shadow-sm">
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-12 text-sm leading-7 text-ink/46">
          {hasVideo ? "右侧可放项目视频、过程图与效果图。" : "这个项目当前按图片流展示，适合补充过程图、界面图、地图图、落地物料和研究说明。"}
        </p>
      </aside>

      <div className="space-y-8 px-6 pb-16 sm:px-10 lg:h-screen lg:overflow-y-auto lg:px-12 lg:py-10">
        {media.map((item, index) =>
          item.type === "video" ? (
            <figure key={item.src} className="overflow-hidden rounded-[28px] border border-white/80 bg-white/64 shadow-soft">
              <video
                src={item.src}
                className="image-placeholder aspect-video w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </figure>
          ) : (
            <button
              key={item.src}
              type="button"
              className="block w-full overflow-hidden rounded-[28px] border border-white/80 bg-white/64 text-left shadow-soft transition hover:-translate-y-1"
              onClick={() => setPreviewImage(item.src)}
            >
              <img
                src={item.src}
                alt={`${project.title} 展示 ${index + 1}`}
                className="image-placeholder w-full object-cover"
                onError={(event) => {
                  event.currentTarget.closest("button")?.remove();
                }}
              />
            </button>
          )
        )}
      </div>

      {previewImage ? (
        <button
          type="button"
          className="fixed inset-0 z-50 grid cursor-zoom-out place-items-center bg-ink/70 p-4 backdrop-blur-sm"
          onClick={() => setPreviewImage(null)}
          aria-label="关闭图片预览"
        >
          <img src={previewImage} alt="放大预览" className="max-h-[88vh] max-w-[92vw] rounded-[24px] object-contain shadow-soft" />
        </button>
      ) : null}
    </section>
  );
}
