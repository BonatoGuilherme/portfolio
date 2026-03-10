"use client";
import { Mail, MapPin, Phone } from "lucide-react";

const portfolio = {
  name: "Guilherme Dos Santos Bonato",
  title: "Desenvolvedor Front-End",
  location: "Água Doce, SC",
  phone: "(49) 99836-0618",
  email: "guilhermebonato344@gmail.com",
  about:
    "Desenvolvedor Front-End com experiência em React.js e Next.js. Busco oportunidades para aplicar e aprimorar meus conhecimentos em programação, contribuindo para o desenvolvimento de soluções eficientes.",
  experience: [
    {
      role: "Desenvolvedor Front-End Freelancer",
      company: "Options Tech",
      period: "2024 - Atual",
      description: [
        "Desenvolvimento de novas funcionalidades utilizando React.js e Next.js",
        "Correção de bugs e manutenção contínua do sistema",
        "Refatoração de código visando melhoria de performance e escalabilidade",
        "Implementação de boas práticas de desenvolvimento, incluindo componentização e tipagem com TypeScript",
        "Otimização de responsividade e experiência do usuário",
      ],
      stack: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
  ],
  education: [
    {
      course: "Técnico em Desenvolvimento de Sistemas",
      institution: "SESI/SENAI",
      year: "2024 - 2025 (em andamento)",
    },
    {
      course: "Aprendizagem Industrial - Suporte e Manutenção em Microcomputadores e Redes Locais",
      institution: "SESI/SENAI",
      year: "2021",
    },
    {
      course: "Ensino Médio",
      institution: "",
      year: "2024",
    },
  ],
  skills: {
    languages: ["JavaScript", "TypeScript"],
    frameworks: ["React.js", "Next.js"],
    frontend: ["HTML5", "CSS3", "Tailwind CSS"],
    tools: ["Git", "GitHub", "VS Code"],
    other: ["Pacote Office", "Inglês (básico)"],
  },
};

function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          GB
        </div>
        <ul className="hidden md:flex gap-8 text-sm">
          <li>
            <a
              href="#sobre"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#experiencia"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Experiência
            </a>
          </li>
          <li>
            <a
              href="#educacao"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Educação
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
          <span className="text-blue-400 text-sm font-medium">Bem-vindo ao meu portfólio</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Olá, sou{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {portfolio.name}
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-400 mb-6">
          {portfolio.title}
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          {portfolio.about}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Entrar em Contato
          </a>
          <a
            href="#experiencia"
            className="px-8 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-lg font-semibold transition-colors duration-200"
          >
            Conhecer Meu Trabalho
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Sobre Mim</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Sou um desenvolvedor Front-End apaixonado por criar experiências web
              modernas e responsivas. Com experiência em React.js e Next.js, busco
              constantemente melhorar minhas habilidades e contribuir para projetos
              desafiadores.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Meu objetivo é trabalhar em um ambiente dinâmico onde possa aplicar
              meus conhecimentos e crescer profissionalmente.
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">{portfolio.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <a
                  href={`tel:${portfolio.phone}`}
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {portfolio.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${portfolio.email}`}
                  className="text-slate-300 hover:text-blue-400 transition-colors break-all"
                >
                  {portfolio.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experiência Profissional</h2>
        <div className="space-y-8">
          {portfolio.experience.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-600/50 transition-colors duration-200"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
                  <p className="text-slate-400">{exp.company}</p>
                </div>
                <span className="text-slate-500 text-sm">{exp.period}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-300 flex gap-3">
                    <span className="text-blue-400 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="educacao" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Formação Acadêmica</h2>
        <div className="space-y-6">
          {portfolio.education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-600/50 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                {edu.course}
              </h3>
              {edu.institution && (
                <p className="text-slate-400 mb-2">{edu.institution}</p>
              )}
              <p className="text-slate-500 text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    { label: "Linguagens", skills: portfolio.skills.languages },
    { label: "Frameworks", skills: portfolio.skills.frameworks },
    { label: "Frontend", skills: portfolio.skills.frontend },
    { label: "Ferramentas", skills: portfolio.skills.tools },
    { label: "Outros", skills: portfolio.skills.other },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Habilidades</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-blue-400 mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:border-blue-600/50 hover:text-blue-400 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade
          para entrar em contato!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={`mailto:${portfolio.email}`}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Email
          </a>
          <a
            href={`tel:${portfolio.phone}`}
            className="px-8 py-4 border border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            Telefone
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-900/30">
      <div className="max-w-4xl mx-auto text-center text-slate-500 text-sm">
        <p>© 2024 Guilherme Bonato. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
