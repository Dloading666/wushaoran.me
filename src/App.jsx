import {
  ArrowRight,
  ArrowUpRight,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  List,
  X,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const photos = {
  resumeChat: "/photos/ai-resume-chat.png",
  resumeEditor: "/photos/ai-resume-editor.png",
  contract: "/photos/contract-review.png",
  clinical: "/photos/clinical-graphrag.png",
};

const projects = [
  {
    id: "careerforge",
    no: "01",
    title: "AI 简历助手",
    subtitle: "FastAPI + Agent Loop + Function Calling",
    role: "负责 AI 简历助手和简历编辑模块",
    summary:
      "把岗位 JD、个人档案和原简历转成可编辑、可校验、可导出的简历工作流。",
    images: [
      { src: photos.resumeChat, alt: "AI 简历助手对话生成界面", crop: "chat" },
      { src: photos.resumeEditor, alt: "AI 简历助手编辑器界面", crop: "editor" },
    ],
    metrics: ["4 类工具", "10 套模板", "6 类 AI 改写", "30 秒自动保存"],
    work: [
      "封装简历生成、优化、更新与 PDF 导出工具",
      "加入事实校验、JD GAP、版本快照与冲突检测",
      "完成结构化编辑、实时预览、自动保存和导出闭环",
    ],
    github: "https://github.com/Dloading666/CareerForge-AI/tree/master",
  },
  {
    id: "contract",
    no: "02",
    title: "合同审查助手",
    subtitle: "FastAPI + LangGraph + pgvector + Redis",
    role: "多 Agent 合同风险识别与报告交付",
    summary:
      "围绕合同上传、条款定位、风险判断、法律依据和报告导出，做成完整审查流程。",
    images: [{ src: photos.contract, alt: "合同审查助手风险定位界面", crop: "contract" }],
    metrics: ["18 条规则", "25 个评测案例", "4 类输入", "SSE 流式反馈"],
    work: [
      "设计多 Agent 审查流程和路由策略",
      "结合规则审查、模型审查和聚合机制输出风险",
      "支持合同风险定位、法律依据展示和报告导出",
    ],
    github: "https://github.com/Dloading666/Contract-Review-Copilot",
    live: "https://ctsafe.top",
  },
  {
    id: "clinical",
    no: "03",
    title: "临床诊疗问答助手",
    subtitle: "FastAPI + LangGraph + PostgreSQL + Neo4j",
    role: "GraphRAG 问答、知识图谱和证据追踪",
    summary:
      "把检索策略、向量库和知识图谱结合起来，让医学问答结果能看到证据来源。",
    images: [{ src: photos.clinical, alt: "临床诊疗问答助手 GraphRAG 界面", crop: "clinical" }],
    metrics: ["5 种 RAG 策略", "10 类实体", "10 类关系", "证据可追溯"],
    work: [
      "实现 Naive、Graph、Hybrid、Fusion 与 Deep Research 策略",
      "构建医学实体关系抽取与 PostgreSQL、Neo4j 存储链路",
      "展示回答依据、知识图谱关系和流式生成过程",
    ],
    github: "https://github.com/Dloading666/Clinica-GraphRag-Agent",
    live: "https://clinirag.top",
  },
];

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "FastAPI",
  "LangGraph",
  "Function Calling",
  "RAG / GraphRAG",
  "React",
  "PostgreSQL",
  "Neo4j",
  "Docker",
];

function scrollToSection(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

function Header() {
  const [open, setOpen] = useState(false);
  const go = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="glass-nav">
      <a className="brand" href="#top" onClick={(event) => { event.preventDefault(); go("#top"); }}>
        吴少然
      </a>
      <nav className={open ? "is-open" : ""} aria-label="主导航">
        <button type="button" onClick={() => go("#projects")}>作品</button>
        <button type="button" onClick={() => go("#skills")}>技能</button>
        <button type="button" onClick={() => go("#contact")}>联系</button>
      </nav>
      <a className="resume-button" href="/doc/resume.pdf" download>
        简历 <DownloadSimple size={16} weight="bold" />
      </a>
      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "关闭导航" : "打开导航"}
      >
        {open ? <X size={20} /> : <List size={20} />}
      </button>
    </header>
  );
}

function PhotoFrame({ image, onOpen, className = "" }) {
  return (
    <button
      className={`photo-frame ${className} photo-frame--${image.crop}`}
      type="button"
      onClick={onOpen}
      aria-label={`放大查看${image.alt}`}
    >
      <img src={image.src} alt={image.alt} />
      <span className="glass-sheen" aria-hidden="true" />
      <span className="zoom-label">查看大图</span>
    </button>
  );
}

function Hero({ onOpen }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">AI Agent Developer · 可快速到岗 · 可实习 6 个月以上</p>
        <h1>把 Agent 项目做成可展示、可验证、可交付的产品。</h1>
        <p>
          我做过 AI 简历助手、合同审查助手、临床诊疗问答助手，覆盖 FastAPI 后端、
          Agent 编排、Function Calling、RAG / GraphRAG、前端交互和文档导出。
        </p>
        <div className="hero-actions">
          <button type="button" onClick={() => scrollToSection("#projects")}>
            看作品 <ArrowRight size={17} />
          </button>
          <a href="mailto:wushaoran72@gmail.com">
            联系我 <EnvelopeSimple size={17} />
          </a>
        </div>
      </div>

      <div className="hero-glass" aria-label="作品照片预览">
        <div className="stage-topline">
          <span>(CAREERFORGE_AI)</span>
          <span>001 / 003</span>
        </div>
        <div className="stage-links" aria-label="首屏项目标签">
          <span>agent loop ↗</span>
          <span>function calling ↗</span>
          <span>pdf export ↗</span>
        </div>
        <PhotoFrame image={{ src: photos.resumeChat, alt: "AI 简历助手对话界面", crop: "hero" }} onOpen={() => onOpen(photos.resumeChat, "AI 简历助手对话界面")} />
        <div className="stage-footer">
          <span>WHERE AGENT WORKFLOWS BECOME PRODUCTS</span>
          <span>FastAPI · SSE · Resume Editor</span>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card" id={project.id}>
      <div className="project-copy">
        <span className="project-no">{project.no}</span>
        <p className="eyebrow">{project.subtitle}</p>
        <h2>{project.title}</h2>
        <p className="role">{project.role}</p>
        <p className="summary">{project.summary}</p>
        <div className="metric-pills">
          {project.metrics.map((metric) => <span key={metric}>{metric}</span>)}
        </div>
        <ul>
          {project.work.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="project-links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              在线体验 <ArrowUpRight size={15} />
            </a>
          )}
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub <GithubLogo size={15} weight="fill" />
          </a>
        </div>
      </div>

      <div className={`project-photos project-photos--${project.images.length}`}>
        {project.images.map((image) => (
          <PhotoFrame
            image={image}
            onOpen={() => onOpen(image.src, image.alt)}
            key={image.src}
          />
        ))}
      </div>
    </article>
  );
}

function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div>
        <p className="eyebrow">Professional Skills</p>
        <h2>基础语言和 Agent 工程链路都能接上。</h2>
      </div>
      <div className="skill-glass">
        {skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glass">
        <p className="eyebrow">Open To Internship</p>
        <h2>可快速到岗，稳定实习 6 个月以上。</h2>
        <p>
          适合 AI Agent 开发、大模型应用工程、RAG / GraphRAG、FastAPI 后端和 React 前端相关岗位。
        </p>
        <div className="contact-links">
          <a href="mailto:wushaoran72@gmail.com"><EnvelopeSimple size={18} />wushaoran72@gmail.com</a>
          <a href="https://github.com/Dloading666" target="_blank" rel="noreferrer"><GithubLogo size={18} />github.com/Dloading666</a>
        </div>
      </div>
    </section>
  );
}

function ImageViewer({ viewer, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.classList.add("viewer-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("viewer-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="viewer" role="presentation" onMouseDown={onClose}>
      <section
        className="viewer-card"
        role="dialog"
        aria-modal="true"
        aria-label={viewer.alt}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button type="button" onClick={onClose} aria-label="关闭大图" autoFocus><X size={20} /></button>
        <img src={viewer.src} alt={viewer.alt} />
      </section>
    </div>
  );
}

export function App() {
  const [viewer, setViewer] = useState(null);
  const openImage = (src, alt) => setViewer({ src, alt });

  return (
    <div className="site-shell">
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />
      <Header />
      <main>
        <Hero onOpen={openImage} />
        <section className="projects" id="projects" aria-label="作品项目">
          {projects.map((project) => (
            <ProjectCard project={project} onOpen={openImage} key={project.id} />
          ))}
        </section>
        <SkillsSection />
        <ContactSection />
      </main>
      <footer>
        <span>© 2026 吴少然</span>
        <span>wushaoran.me</span>
      </footer>
      {viewer && <ImageViewer viewer={viewer} onClose={() => setViewer(null)} />}
    </div>
  );
}
