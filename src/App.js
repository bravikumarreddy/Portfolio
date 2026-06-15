import React from 'react';
import { hot } from 'react-hot-loader/root';
import './App.css';

const skills = [
  {
    title: 'Languages',
    summary: 'Python, C/C++ (C++17), Java, Go, SQL, Bash.',
    tags: ['Python', 'C/C++ (C++17)', 'Java', 'Go', 'SQL', 'Bash'],
  },
  {
    title: 'Infrastructure',
    summary:
      'AWS, Kubernetes, Docker, Terraform, PostgreSQL, Redis, Linux, and Git.',
    tags: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'PostgreSQL', 'Redis', 'Linux', 'Git'],
  },
  {
    title: 'Backend & Data',
    summary:
      'REST, gRPC, Kafka, Spark, Airflow, and CI/CD with Jenkins and GitHub Actions.',
    tags: ['REST', 'gRPC', 'Kafka', 'Spark', 'Airflow', 'CI/CD'],
  },
  {
    title: 'ML & Testing',
    summary:
      'scikit-learn, TensorFlow, TFLite, model serving, GTest/GMock, and pytest.',
    tags: ['scikit-learn', 'TensorFlow', 'TFLite', 'GTest/GMock', 'pytest'],
  },
];

const timeline = [
  {
    period: 'Oct 2025 – Present',
    title: 'Senior C++ Developer · Wabtec Corporation',
    location: 'Trip Optimizer Platform · Erie, PA',
    description:
      'Building the real-time optimization engine that runs across the locomotive fleet.',
    highlights: [
      'Engineered a real-time C++ optimization engine deployed on 12,000+ locomotives, ingesting throttle/brake/terrain telemetry with <50ms end-to-end latency using memory pooling and custom allocators.',
      'Designed thread-safe, lock-free sensor fusion (atomic operations, hazard pointers) merging multi-rate sensor streams into a consistent locomotive state snapshot.',
      'Implemented convex optimization algorithms for real-time fuel minimization, contributing to EPA-certified fuel and emissions savings across the fleet.',
      'Built a socket-based inter-service communication layer (UDP, TCP, WebSocket) and a GTest/GMock suite with >95% coverage on critical paths.',
    ],
  },
  {
    period: 'Jul 2023 – Oct 2025',
    title: 'Full Stack Developer · Wabtec Corporation',
    location: 'Precision Dispatch System (NS) · Melbourne, FL',
    description:
      'Owned a mission-critical distributed platform for real-time train dispatch.',
    highlights: [
      'Architected a distributed platform in C++17 processing real-time train movement authorities and signal state transitions from hundreds of concurrent trains with sub-second latency.',
      'Led system design — decomposed a monolith into bounded service domains with API contracts and an event-driven (Kafka) architecture.',
      'Developed highly concurrent, multithreaded C++17 services and diagnosed threading bugs, memory pressure, and latency spikes under sustained load.',
      'Designed PostgreSQL schemas with connection pooling, materialized views, and targeted indexes for peak dispatch query loads.',
    ],
  },
  {
    period: 'Jan 2018 – Mar 2020',
    title: 'Software Engineer · Samsung R&D Institute',
    location: 'SmartThings Mesh Router & On-Device AI · Bangalore, India',
    description:
      'Built data and ML pipelines for IoT device fleets at scale.',
    highlights: [
      'Developed data ingestion pipelines processing millions of telemetry records daily from IoT device fleets.',
      'Built ML training and inference pipelines (scikit-learn, TensorFlow) for Wi-Fi optimization and anomaly detection on constrained ARM hardware.',
      'Implemented model compression and serving — quantization, pruning, and knowledge distillation — reducing model sizes by 10x for edge deployment.',
      'Debugged multithreaded C/C++ networking code and contributed to OTA and CI/CD pipelines. Published research at 2019 IEEE CONECCT.',
    ],
  },
];

const projects = [
  {
    name: 'Real-Time Trip Optimizer Engine',
    summary:
      'Low-latency C++ optimization engine on 12,000+ locomotives: lock-free sensor fusion and convex fuel-minimization with deterministic <50ms latency.',
    stack: ['C++17', 'Lock-free', 'Convex Optimization', 'GTest/GMock'],
    link: 'https://www.linkedin.com/in/b-ravi-kumar3020/',
  },
  {
    name: 'Precision Dispatch System',
    summary:
      'Distributed C++17 platform handling real-time train movement authorities from hundreds of trains with an event-driven Kafka architecture and tuned PostgreSQL.',
    stack: ['C++17', 'Kafka', 'PostgreSQL', 'Kubernetes', 'AWS'],
    link: 'https://www.linkedin.com/in/b-ravi-kumar3020/',
  },
  {
    name: 'On-Device AI & Mesh Router',
    summary:
      'ML pipelines for Wi-Fi optimization on IoT fleets, with model compression (quantization, pruning, distillation) cutting model sizes 10x for edge ARM devices.',
    stack: ['Python', 'TensorFlow', 'scikit-learn', 'C/C++'],
    link: 'https://github.com/bravikumarreddy',
  },
];

const education = [
  {
    title: 'M.S. in Computer Science',
    summary: 'Binghamton University, SUNY · Jan 2022 – May 2023 · GPA 3.70/4.00.',
    tags: ['Binghamton, NY'],
  },
  {
    title: 'B.Tech in Computer Science',
    summary: 'PES University · Aug 2014 – Jun 2018 · GPA 8.21/10.00.',
    tags: ['Bangalore, India'],
  },
];

const App = () => {
  return (
    <div className="app-shell">
      <nav className="site-nav">
        <div className="logo">Ravi Kumar Reddy Bangaru</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#timeline">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="about" className="hero">
        <p className="eyebrow">Senior C++ Developer · real-time systems · distributed data · ML</p>
        <h1>
          I build real-time, safety-critical C++ systems for rail and edge
          platforms.
        </h1>
        <p className="lede">
          6+ years shipping high-performance C++ and Python on Linux — from a
          real-time locomotive optimization engine and distributed dispatch
          platforms to on-device ML pipelines. I pair low-latency, concurrent
          systems work with strong testing, system design, and DevOps
          automation.
        </p>
        <div className="hero-actions">
          <a className="primary" href="mailto:b.ravi.kumar.96@gmail.com">
            Let&apos;s work together
          </a>
          <a className="ghost" href="#skills">
            See my skills
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
            <strong>6+ yrs · C++17 · Python · Linux</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>Real-time systems · distributed data · ML</strong>
          </div>
          <div>
            <span>Education</span>
            <strong>MS CS (Binghamton) · B.Tech CS (PES)</strong>
          </div>
        </div>
      </header>

      <section id="skills" className="resume-section">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Technologies I work with</h2>
          <p className="subtext">
            A snapshot of the languages, infrastructure, and tooling I use to
            ship reliable systems day to day.
          </p>
        </div>
        <div className="project-grid resume-grid">
          {skills.map((skill) => (
            <article key={skill.title} className="project-card resume-card">
              <h3>{skill.title}</h3>
              <p className="resume-summary">{skill.summary}</p>
              <div className="stack">
                {skill.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="timeline" className="timeline-section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
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
          <p className="eyebrow">Selected work</p>
          <h2>Systems I&apos;ve shipped and shaped</h2>
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

      <section id="education" className="resume-section">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Where I trained</h2>
        </div>
        <div className="project-grid resume-grid">
          {education.map((item) => (
            <article key={item.title} className="project-card resume-card">
              <h3>{item.title}</h3>
              <p className="resume-summary">{item.summary}</p>
              <div className="stack">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something reliable</h2>
        </div>
        <p>
          Need someone to build low-latency C++ services, design distributed
          data platforms, or productionize ML pipelines? Let&apos;s talk about how
          I can help your team ship safe, fast, well-tested systems.
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
        <p>© {new Date().getFullYear()} Ravi Kumar Reddy Bangaru · Building reliable C++ systems.</p>
      </footer>
    </div>
  );
};

export default hot(App);
