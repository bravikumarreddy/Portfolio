import React from 'react';
import { hot } from 'react-hot-loader/root';
import './App.css';

const timeline = [
  {
    period: 'Oct 2025 – Present',
    title: 'Senior Embedded Developer · Wabtec Corporation',
    location: 'Erie, PA',
    description:
      'Owning the modernization of Trip Optimizer’s embedded platform by shipping Linux-first services, GPU-accelerated analytics, and resilient comms stacks.',
    highlights: [
      'Ported legacy infra (configuration, diagnostics, socket systems) to Yocto Linux using Modern C++20.',
      'Built CI/CD pipelines plus automated unit frameworks in GitLab for every firmware drop.',
      'Integrated ZeroMQ + gRPC/Protobuf and CUDA/TensorRT flows to keep telemetry real-time and ML-ready.',
    ],
  },
  {
    period: 'Jul 2023 – Oct 2025',
    title: 'C++ Developer · Wabtec Corporation',
    location: 'Melbourne, FL',
    description:
      'Architected mission-critical dispatching software while tightening latency budgets across UI, APIs, and data pipelines.',
    highlights: [
      'Developed Modern C++17 backend services with REST + WebSocket interfaces and Kafka sync.',
      'Shipped operator tooling in Java Swing plus dashboards that cut decision time by 25%.',
      'Containerized workloads with Docker/Kubernetes and automated deploys through Jenkins/GitLab CI.',
    ],
  },
  {
    period: 'Sep 2022 – Feb 2023',
    title: 'Software Developer Intern · Global Health Impact Project',
    location: 'Binghamton, NY',
    description:
      'Partnered with researchers to translate health impact models into interactive tooling.',
    highlights: [
      'Created a Python + Flask forecasting tool with Plotly visualizations for impact scoring.',
      'Built a React microsite and blog experience with accessible components and CI/CD automation.',
      'Integrated REST APIs for live data refresh and automated testing via GitHub Actions + Docker.',
    ],
  },
  {
    period: 'Aug 2018 – Mar 2020',
    title: 'Software Engineer · Samsung R&D Institute',
    location: 'Bangalore, India',
    description:
      'Strengthened Android Wi-Fi subsystems and mesh router firmware for next-gen devices.',
    highlights: [
      'Enhanced Wi-Fi 6 roaming, auto-reconnect, and power efficiency within Android HAL layers.',
      'Developed TR-069 remote management modules and optimized OpenWRT/Linux kernels.',
      'Automated firmware validation through CI/CD, cutting regressions by 40%.',
    ],
  },
  {
    period: 'Jan 2018 – Jun 2018',
    title: 'Research Intern · Samsung R&D Institute',
    location: 'Bangalore, India',
    description:
      'Experimented with mesh-router placement intelligence and indoor positioning systems.',
    highlights: [
      'Built PSO-driven prototypes that optimized QoS based on live router telemetry.',
      'Created Android proof-of-concepts for indoor positioning using Wi-Fi fingerprints and KNN.',
      'Published findings at IEEE CONECCT 2019.',
    ],
  },
];

const projects = [
  {
    name: 'Devstral AI Coding Companion',
    summary:
      'Integrated the open-source Devstral LLM into internal workflows, trimming boilerplate and accelerating feature delivery across languages.',
    stack: ['C++', 'Python', 'RTX 4090', 'Mistral AI'],
    link: 'https://github.com/mistralai/mistral-src',
  },
  {
    name: 'Retrieval-Augmented Chatbot Agent',
    summary:
      'Built a multi-agent RAG pipeline using ChatGPT + custom extract/evaluate/summarize agents to review resumes with 90% parity to HR scores.',
    stack: ['Python', 'LangChain', 'OpenAI API', 'Pinecone'],
    link: 'https://github.com/bravikumarreddy',
  },
  {
    name: 'Health Impact Forecaster',
    summary:
      'Forecasting tool for Global Health Impact that lets researchers tune inputs and visualize outcomes through Flask APIs and Plotly charts.',
    stack: ['Python', 'Flask', 'React', 'Plotly'],
    link: 'https://globalhealthimpact.org',
  },
];

const App = () => {
  return (
    <div className="app-shell">
      <nav className="site-nav">
        <div className="logo">Ravi Kumar Reddy Bangaru</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#timeline">Timeline</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="about" className="hero">
        <p className="eyebrow">C++ developer for rail, health, and platform teams</p>
        <h1>
          I craft modern C++ services that keep fleets synchronized, telemetry
          trustworthy, and operators confident.
        </h1>
        <p className="lede">
          With 6+ years across Wabtec, Samsung, and mission-driven labs, I own
          the C++ core—multithreading, Linux services, GPU offload, and cloud
          APIs—while pairing it with Python tooling and thoughtful UI layers.
        </p>
        <div className="hero-actions">
          <a className="primary" href="mailto:b.ravi.kumar.96@gmail.com">
            Let&apos;s work together
          </a>
          <a className="ghost" href="#timeline">
            See the timeline
          </a>
        </div>
        <div className="hero-meta">
          <div>
            <span>Now</span>
            <strong>Erie, PA · Open to remote</strong>
          </div>
          <div>
            <span>Experience</span>
            <strong>6+ yrs · C++ · Cloud · ML inference</strong>
          </div>
          <div>
            <span>Toolbox</span>
            <strong>C++20 · Python · Linux · Azure/AWS · CUDA</strong>
          </div>
        </div>
      </header>

      <section id="timeline" className="timeline-section">
        <div className="section-heading">
          <p className="eyebrow">Journey</p>
          <h2>A timeline of building things that matter</h2>
        </div>
        <div className="timeline">
          {timeline.map((event, index) => (
            <article
              key={event.title}
              className={`timeline-item ${
                index % 2 === 0 ? 'left' : 'right'
              }`}
            >
              <div className="timeline-card">
                <p className="timeline-period">{event.period}</p>
                <h3>{event.title}</h3>
                <p className="location">{event.location}</p>
                <p className="timeline-description">{event.description}</p>
                <ul>
                  {event.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-heading">
          <p className="eyebrow">Side quests &amp; Labs</p>
          <h2>Projects that keep my curiosity sharp</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-header">
                <h3>{project.name}</h3>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Visit ↗
                </a>
              </div>
              <p>{project.summary}</p>
              <div className="stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s map your next chapter</h2>
        </div>
        <p>
          Need someone to modernize embedded stacks, stand up forecasting tools,
          or guide ML-friendly data pipelines? Let&apos;s chat about how I can help
          your team move faster with safe, observable systems.
        </p>
        <div className="contact-actions">
          <a className="primary" href="mailto:b.ravi.kumar.96@gmail.com">
            Email me
          </a>
          <a className="ghost" href="https://www.linkedin.com/in/b-ravi-kumar3020/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="ghost" href="https://github.com/bravikumarreddy">
            GitHub
          </a>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Ravi Kumar Reddy Bangaru · Crafting C++ systems with care.</p>
      </footer>
    </div>
  );
};

export default hot(App);
