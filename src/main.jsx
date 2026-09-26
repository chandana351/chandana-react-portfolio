import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  Menu,
  X,
  Code2,
  Smartphone,
  Layers3,
  ExternalLink,
  Moon,
  Sun,
  ChevronRight
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Chandana",
  fullName: "SR CHANDHANA",
  title: "Frontend Developer",
  subtitle: "React.js • JavaScript • Responsive UI",
  location: "Bengaluru, India",
  email: "chanduzz9568@gmail.com",
  phone: "+91 6363186470",
  github: "https://github.com/chandana351",
  linkedin: "https://linkedin.com/in/sr-chandana",
  portfolio: "https://chandana351.github.io/myportfolio-web"
};

const projects = [
  {
    title: "QuickBasket",
    category: "React",
    description:
      "Responsive grocery shopping interface with product categories, cart-focused interactions and mobile-friendly layouts.",
    stack: ["React.js", "JavaScript", "CSS"],
    live: "https://chandana351.github.io/quick-basket/",
    code: profile.github,
    featured: true
  },
  {
    title: "Movie Search App",
    category: "React",
    description:
      "Movie discovery experience with search, genre filtering, sorting, responsive cards and GitHub Pages deployment.",
    stack: ["React.js", "Vite", "JavaScript"],
    live: "https://chandana351.github.io/movie-search-app/",
    code: profile.github,
    featured: true
  },
  {
    title: "Pizza Pie",
    category: "Frontend",
    description:
      "Responsive pizza website with menu cards, cart page, search/filter interactions and polished UI styling.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://chandana351.github.io/pizza-pie/",
    code: profile.github,
    featured: true
  },
  {
    title: "Mini Student Management App",
    category: "JavaScript",
    description:
      "Frontend student-management interface designed to practice forms, dynamic UI updates and responsive layouts.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://chandana351.github.io/mini-student-management-app/",
    code: profile.github
  },
  {
    title: "To-Do List App",
    category: "JavaScript",
    description:
      "Clean task-management interface built around practical DOM manipulation and responsive frontend styling.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://chandana351.github.io/todo-list-app/",
    code: profile.github
  },
  {
    title: "Basic Calculator",
    category: "React",
    description:
      "Responsive calculator with arithmetic operations, clear/delete actions and keyboard-friendly interaction.",
    stack: ["React.js", "Vite", "JavaScript"],
    live: "https://chandana351.github.io/basic-calculator/",
    code: profile.github
  }
];

const skills = [
  { name: "HTML5", group: "Frontend" },
  { name: "CSS3", group: "Frontend" },
  { name: "JavaScript ES6+", group: "Frontend" },
  { name: "React.js", group: "Frontend" },
  { name: "Tailwind CSS", group: "Frontend" },
  { name: "Bootstrap", group: "Frontend" },
  { name: "Git", group: "Tools" },
  { name: "GitHub", group: "Tools" },
  { name: "VS Code", group: "Tools" },
  { name: "Vite", group: "Tools" },
  { name: "npm", group: "Tools" },
  { name: "GitHub Pages", group: "Deployment" },
  { name: "Netlify", group: "Deployment" }
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="nav">
        <button className="brand" onClick={() => go("home")} aria-label="Go home">
          <span className="brand-mark">C</span>
          <span>Chandana<span className="brand-dot">.</span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
            <button key={item} onClick={() => go(item)}>
              {item}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-button" onClick={() => setDark((v) => !v)} aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="nav-resume" href="/resume.pdf" download>
            <Download size={16} /> Resume
          </a>
          <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span /> AVAILABLE FOR FRONTEND OPPORTUNITIES</div>
            <h1>
              I build <span>clean, responsive</span> web experiences.
            </h1>
            <p className="hero-lead">
              I'm <strong>Chandana</strong>, a fresher Frontend Developer focused on
              React.js, JavaScript and modern responsive interfaces.
            </p>

            <div className="hero-actions">
              <button className="primary-button" onClick={() => go("projects")}>
                Explore my work <ArrowUpRight size={18} />
              </button>
              <a className="secondary-button" href={profile.github} target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
            </div>

            <div className="hero-meta">
              <span><MapPin size={16} /> {profile.location}</span>
              <span><Mail size={16} /> {profile.email}</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="profile-card">
              <img className="profile-photo" src="/profile.png" alt="Chandana - Frontend Developer" />
              <div>
                <p className="small-label">FRONTEND DEVELOPER</p>
                <h3>React.js • JavaScript</h3>
                <p>Building responsive interfaces with attention to usability and detail.</p>
              </div>
              <div className="code-window">
                <span>const</span> developer = {"{"}
                <br />
                &nbsp;&nbsp;focus: <b>"frontend"</b>,
                <br />
                &nbsp;&nbsp;stack: <b>"React.js"</b>
                <br />
                {"}"};
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <p className="kicker">01 — ABOUT</p>
            <h2>Turning ideas into <span>usable interfaces.</span></h2>
          </div>
          <div className="about-grid">
            <div>
              <p className="large-copy">
                I'm a Computer Science graduate and fresher Frontend Developer who enjoys
                turning designs and ideas into responsive, user-friendly web experiences.
              </p>
              <p>
                My current focus is frontend development with HTML, CSS, JavaScript and React.js.
                I enjoy building practical projects, improving UI details and learning through
                hands-on development.
              </p>
            </div>
            <div className="about-cards">
              <div className="info-card">
                <Code2 size={22} />
                <h3>Frontend First</h3>
                <p>Clean components, responsive layouts and practical JavaScript.</p>
              </div>
              <div className="info-card">
                <Smartphone size={22} />
                <h3>Responsive UI</h3>
                <p>Interfaces designed to work across desktop, tablet and mobile.</p>
              </div>
              <div className="info-card">
                <Layers3 size={22} />
                <h3>Hands-on Projects</h3>
                <p>Real portfolio projects that demonstrate my learning and implementation.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="kicker">02 — SKILLS</p>
            <h2>Tools I use to <span>build.</span></h2>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <div className="skill-pill" key={skill.name}>
                <span className="skill-dot" />
                <span>{skill.name}</span>
                <small>{skill.group}</small>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading projects-heading">
            <div>
              <p className="kicker">03 — PROJECTS</p>
              <h2>Selected <span>work.</span></h2>
            </div>
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-link">
              View GitHub <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="filters">
            {["All", "React", "Frontend", "JavaScript"].map((item) => (
              <button
                key={item}
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filtered.map((project, index) => (
              <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.title}>
                <div className="project-top">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo <ExternalLink size={15} />
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    GitHub <Github size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-heading">
            <p className="kicker">04 — EXPERIENCE & EDUCATION</p>
            <h2>A foundation built through <span>learning and practice.</span></h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p className="timeline-date">12 MAR 2024 — 12 APR 2024</p>
                <h3>Front-End Developer Intern</h3>
                <h4>Global Quest Technology (GQT) • Bengaluru</h4>
                <p>
                  Built and styled responsive web interfaces using HTML, CSS, JavaScript and Bootstrap.
                  Practiced layout building, form handling, browser testing and UI improvements.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p className="timeline-date">2024</p>
                <h3>B.E. in Computer Science</h3>
                <h4>Sai Vidya Institute of Technology • Bengaluru</h4>
                <p>CGPA: 6.9</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-card">
            <div>
              <p className="kicker">05 — CONTACT</p>
              <h2>Let's build something <span>useful.</span></h2>
              <p>
                I'm open to fresher Frontend Developer opportunities, internships and
                conversations around web development.
              </p>
            </div>
            <div className="contact-actions">
              <a className="primary-button" href={`mailto:${profile.email}`}>
                <Mail size={18} /> Email me
              </a>
              <a className="secondary-button" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Chandana<span className="brand-dot">.</span></strong>
          <span>Frontend Developer</span>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
          <a href={`mailto:${profile.email}`}><Mail size={17} /></a>
        </div>
        <p>© {new Date().getFullYear()} Chandana. Built with React.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
