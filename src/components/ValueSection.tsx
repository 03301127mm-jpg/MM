import { values } from "../data/projects";
import SectionTitle from "./SectionTitle";
import ValueCard from "./ValueCard";

export default function ValueSection() {
  return (
    <section id="values" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="我能为团队带来什么"
          subtitle="我不是只完成单一视觉输出，而是能把问题、内容、视觉和体验连接起来。"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, description], index) => (
            <ValueCard key={title} title={title} description={description} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
