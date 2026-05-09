import { lifeCards } from "../data/projects";
import LifeCard from "./LifeCard";
import SectionTitle from "./SectionTitle";

export default function LifeSection() {
  const portfolioUrl = typeof window === "undefined" ? "" : window.location.origin;

  return (
    <section id="life" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="生活里的我" subtitle="创作之外，我也在生活里收集灵感。" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lifeCards.map(([title, text, image], index) => (
            <LifeCard key={title} title={title} text={text} image={image} index={index} />
          ))}
        </div>

        <div id="contact" className="mx-auto mt-24 max-w-3xl rounded-[30px] border border-white/80 bg-white/68 p-8 text-center shadow-soft">
          <h3 className="text-3xl font-semibold">谢谢你看到这里。</h3>
          <p className="mt-5 leading-8 text-ink/66">
            如果你也对文化、影像、游戏、体验和创意感兴趣，欢迎联系我。
          </p>

          <div className="mt-8 grid gap-3 text-sm text-ink/72 sm:grid-cols-2">
            <p className="rounded-full bg-mist px-4 py-3">邮箱：1208536219@qq,com</p>
            <p className="rounded-full bg-butter px-4 py-3">微信：Miaooo-30</p>
            <p className="rounded-full bg-peach px-4 py-3">小红书：喵喵捉鱼</p>
            <a
              href={portfolioUrl}
              className="rounded-full bg-leaf px-4 py-3 transition hover:bg-leaf/80"
            >
              作品集链接：{portfolioUrl}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
