import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section className="stack-section" id="stack">
      <div className="container">
        <p className="section-subtitle" data-translate="stack_subtitle">
          الأدوات اللي بشتغل بيها من الفكرة لحد التشغيل
        </p>
        <div className="stack-grid">
          {techStack.map((group, i) => (
            <div className="stack-group" key={group.group}>
              <h3>
                <i className={group.icon}></i>{" "}
                <span data-translate={`stack${i + 1}_title`}>{group.group}</span>
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
