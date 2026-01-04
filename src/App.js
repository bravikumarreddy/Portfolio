import React from 'react';
import { hot } from 'react-hot-loader/root';
import './App.css';

const focusAreas = [
  {
    title: 'AI Systems & Inference',
    summary:
      'Optimized inference runtimes with fused CUDA/OpenCL kernels, quantization, telemetry pipelines, and pybind11 bridges for ML/LLM workloads on constrained hardware.',
    tags: ['C++17', 'CUDA/TensorRT', 'Quantization', 'pybind11'],
  },
  {
    title: 'Distributed Systems & Edge Data',
    summary:
      'Store-and-forward messaging, leader election, LSM buffering, and zero-copy async I/O for rail telemetry gateways and partition-tolerant back-office sync.',
    tags: ['C++20', 'io_uring/Boost.Asio', 'Kafka/MQTT/AMQP', 'gRPC/Protobuf'],
  },
  {
    title: 'Robotics, Autonomy & Simulation',
    summary:
      'ROS 2 / Nav2 navigation plugins, Behavior Trees, zero-copy DDS profiles, MPPI/MPC controllers, and Isaac Sim/Gazebo regression pipelines for sim-to-real.',
    tags: ['ROS 2', 'BehaviorTree.CPP', 'CycloneDDS/FastDDS', 'Isaac Sim/MPPI'],
  },
  {
    title: 'General Platform',
    summary:
      'Yocto/Linux services, CI/CD, hardened socket stacks, and cloud-native delivery that round out the broader C++ platform story.',
    tags: ['C++17/20', 'Linux/Yocto', 'CI/CD', 'Docker/Kubernetes'],
  },
];

const timeline = [
  {
    period: 'Oct 2025 – Present',
    title: 'Senior Software Developer · Wabtec Corporation',
    location: 'Erie, PA',
    description:
      'Steering Trip Optimizer upgrades across safety-critical control, simulation, and data interfaces.',
    highlights: [
      'Built an MPC-based velocity planner plus Kalman-filtered sensor fusion to keep localization steady in GPS-challenged territory.',
      'Engineered MISRA-compliant middleware and fail-safe state machines around the ECU to guarantee sub-10ms responses.',
      'Created a HIL simulation harness (Simulink + C++ glue) with automated regression coverage for braking curves and autonomy edge cases.',
    ],
  },
  {
    period: 'Jul 2023 – Oct 2025',
    title: 'Software Developer · Wabtec Corporation',
    location: 'Melbourne, FL',
    description:
      'Owned the messaging and telemetry layer for locomotive gateways and back-office sync.',
    highlights: [
      'Developed a store-and-forward gateway in Modern C++ with async I/O (io_uring/Boost.Asio) and zero-copy paths to survive radio dropouts.',
      'Bridged MQTT to Kafka/AMQP pipelines with LSM-style buffering and leader election to guarantee delivery of safety messages.',
      'Shipped an OTA agent with mTLS, rollback-safe updates, and CI-backed regression suites to keep field devices stable.',
    ],
  },
  {
    period: 'Sep 2022 – Feb 2023',
    title: 'Software Developer Intern · Global Health Impact Project',
    location: 'Binghamton, NY',
    description:
      'Partnered with researchers to translate health impact models into interactive tooling.',
    highlights: [
      'Built a Flask + Plotly forecasting tool so teams can tune inputs and visualize outcomes in real time.',
      'Delivered a React blog/insights site with accessible components and REST integrations for live updates.',
      'Automated CI/CD (GitHub Actions + Docker) to cut release friction and keep regressions out of production.',
    ],
  },
  {
    period: 'Aug 2018 – Mar 2020',
    title: 'Software Engineer · Samsung R&D Institute',
    location: 'Bangalore, India',
    description:
      'Pushed high-performance C++ pipelines for storage, inference, and connectivity on Samsung devices.',
    highlights: [
      'Offloaded RocksDB-style compaction and filtering to SmartSSD via SPDK-inspired user-space drivers to slash write stalls.',
      'Optimized on-device neural inference with fused CUDA/OpenCL kernels and quantization pipelines for Samsung Neural SDK.',
      'Hardened wireless data paths (Wi-Fi 6/mesh) with profiling, zero-copy IPC, and CI-backed firmware validation.',
    ],
  },
  {
    period: 'Jan 2018 – Jun 2018',
    title: 'Research Intern · Samsung R&D Institute',
    location: 'Bangalore, India',
    description:
      'Explored mesh router placement intelligence and indoor positioning prototypes.',
    highlights: [
      'Ran PSO-based experiments to optimize QoS from live router telemetry.',
      'Built Android proofs-of-concept for Wi-Fi fingerprinting and KNN-based indoor positioning.',
    ],
  },
];

const projects = [
  {
    name: 'Trip Optimizer Control & Energy Mgmt',
    summary:
      'MPC-based velocity planning, Kalman fusion, and a HIL harness for Trip Optimizer; shipped fail-safe ECU middleware with MISRA C++ rigor and regen-aware energy strategy.',
    stack: ['C++17/20', 'MPC', 'Kalman', 'Yocto/Linux', 'HIL'],
    link: 'https://www.linkedin.com/in/b-ravi-kumar3020/',
  },
  {
    name: 'ITCM Edge Messaging Platform',
    summary:
      'Store-and-forward gateway bridging MQTT with Kafka/AMQP using io_uring/Boost.Asio, zero-copy serialization, and LSM buffering to keep vital messages online.',
    stack: ['C++20', 'io_uring/Boost.Asio', 'Kafka/MQTT/AMQP', 'Protobuf/FlatBuffers'],
    link: 'https://www.linkedin.com/in/b-ravi-kumar3020/',
  },
  {
    name: 'Nav2 Autonomy & Sim-to-Real',
    summary:
      'ROS 2 navigation contributions: BehaviorTree-based navigator, zero-copy DDS profiles, MPPI controller experiments, and Isaac Sim regressions for sim-to-real.',
    stack: ['ROS 2 / Nav2', 'BehaviorTree.CPP', 'CycloneDDS/FastDDS', 'Isaac Sim/MPPI'],
    link: 'https://github.com/bravikumarreddy',
  },
  {
    name: 'Neural SDK Inference Runtime',
    summary:
      'Fused CUDA/OpenCL kernels, quantization pipeline, and pybind11 bridges to accelerate on-device transformer inference with tight telemetry/profiling loops.',
    stack: ['C++17', 'CUDA/OpenCL', 'Quantization', 'pybind11'],
    link: 'https://www.linkedin.com/in/b-ravi-kumar3020/',
  },
  {
    name: 'Global Health Impact Forecaster',
    summary:
      'Flask + Plotly tool that lets researchers tune health impact inputs and publish insights via a React microsite with CI/CD automation.',
    stack: ['Python/Flask', 'Plotly', 'React', 'Docker/GitHub Actions'],
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
          <a href="#profiles">Focus Areas</a>
          <a href="#timeline">Timeline</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="about" className="hero">
        <p className="eyebrow">C++ systems engineer · rail · robotics · distributed data</p>
        <h1>
          I build safety-critical C++ platforms for autonomy, telemetry, and
          edge/cloud pipelines.
        </h1>
        <p className="lede">
          6+ years shipping Modern C++17/20 on Linux—MPC control loops and ROS 2
          navigation for autonomy, lock-free/async data planes for edge/cloud,
          and GPU-friendly inference/quantization. I pair safety-critical rigor
          with profiling, simulation/HIL, and DevOps automation.
        </p>
        <div className="hero-actions">
          <a className="primary" href="mailto:b.ravi.kumar.96@gmail.com">
            Let&apos;s work together
          </a>
          <a className="ghost" href="#profiles">
            See focus areas
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
            <strong>6+ yrs · C++17/20 · Linux/ROS 2</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>MPC &amp; controls · io_uring/Boost.Asio · gRPC/Protobuf</strong>
          </div>
          <div>
            <span>Education</span>
            <strong>MS CS (Binghamton) · BS CS (PES)</strong>
          </div>
        </div>
      </header>

      <section id="profiles" className="resume-section">
        <div className="section-heading">
          <p className="eyebrow">Profiles</p>
          <h2>Role-ready focus areas I can step into</h2>
          <p className="subtext">
            Recruiters coming from different resume links will find the same
            depth here—AI systems, distributed data planes, robotics, and a
            general platform track.
          </p>
        </div>
        <div className="project-grid resume-grid">
          {focusAreas.map((focus) => (
            <article key={focus.title} className="project-card resume-card">
              <h3>{focus.title}</h3>
              <p className="resume-summary">{focus.summary}</p>
              <div className="stack">
                {focus.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

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

      <section id="contact" className="contact-section">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s map your next chapter</h2>
        </div>
        <p>
          Need someone to harden telemetry gateways, productionize ROS 2
          navigation, or design async C++ data planes? Let&apos;s chat about how I
          can help your team move faster with safe, observable systems.
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
