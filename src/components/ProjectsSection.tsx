import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  images?: string[];
  videoUrl?: string;
  liveUrl?: string;
}

const PROJECTS: ProjectData[] = [
  {
    id: '01',
    title: 'E-Commerce with MongoDB',
    category: 'Full-Stack / Database',
    description:
      'Full-stack luxury jewelry e-commerce platform with dynamic product catalogs, MongoDB aggregation pipelines, cart persistence, and secure checkout processing.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    col1Img1: '/projects/ecommerce/aurelia-categories.jpg',
    col1Img2: '/projects/ecommerce/aurelia-auth-modal.jpg',
    col2Img: '/projects/ecommerce/aurelia-products.jpg',
    images: [
      '/projects/ecommerce/aurelia-categories.jpg',
      '/projects/ecommerce/aurelia-products.jpg',
      '/projects/ecommerce/aurelia-auth-modal.jpg',
      '/projects/ecommerce/aurelia-footer.jpg',
    ],
    liveUrl: 'https://jewellary-pi.vercel.app/',
  },
  {
    id: '02',
    title: 'AI Chatbot Assistant',
    category: 'Artificial Intelligence',
    description:
      'Intelligent conversational assistant featuring streaming LLM responses, contextual chat history, WebSockets, and real-time query handling.',
    tags: ['OpenAI API', 'Python', 'WebSockets', 'React'],
    col1Img1: '/projects/chatbot/chatbot-workflow.jpg',
    col1Img2: '/projects/chatbot/chatbot-workflow.jpg',
    col2Img: '/projects/chatbot/chatbot-interface.jpg',
    images: [
      '/projects/chatbot/chatbot-workflow.jpg',
      '/projects/chatbot/chatbot-interface.jpg',
    ],
    liveUrl: '#',
  },
  {
    id: '03',
    title: 'TaskFlow!',
    category: 'Productivity & Task Management',
    description:
      'Intuitive task and workflow management suite featuring interactive Kanban boards, streak tracking, priority filtering, and productivity insights.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Kanban'],
    col1Img1: '/projects/taskflow/taskflow-sidebar.jpg',
    col1Img2: '/projects/taskflow/taskflow-insights.jpg',
    col2Img: '/projects/taskflow/taskflow-todo.jpg',
    images: [
      '/projects/taskflow/taskflow-sidebar.jpg',
      '/projects/taskflow/taskflow-todo.jpg',
      '/projects/taskflow/taskflow-inprogress.jpg',
      '/projects/taskflow/taskflow-done.jpg',
      '/projects/taskflow/taskflow-insights.jpg',
    ],
    liveUrl: '#',
  },
  {
    id: '04',
    title: 'Secure Login & Auth System',
    category: 'Security & Backend',
    description:
      'Robust enterprise authentication architecture with JWT token rotation, Bcrypt password hashing, session lifecycle security, and OAuth integrations.',
    tags: ['JWT Auth', 'Bcrypt', 'Node.js', 'OAuth 2.0'],
    videoUrl: '/projects/auth/auth-demo.mp4',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img: 'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
    liveUrl: '#',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 w-full max-w-6xl shadow-2xl relative overflow-hidden"
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="font-black text-[#D7E2EA] text-[clamp(2.5rem,7vw,110px)] leading-none select-none">
              {project.id}
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-medium">
                  {project.category}
                </span>
                <span className="text-white/20">&bull;</span>
                <div className="flex gap-1.5 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] sm:text-xs text-[#D7E2EA]/80 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.2rem,2.8vw,2.5rem)] leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="self-start sm:self-center">
            <LiveProjectButton href={project.liveUrl} />
          </div>
        </div>

        {/* Bottom row: Video or Image showcase */}
        {project.videoUrl ? (
          <div className="w-full h-[clamp(240px,42vh,460px)] overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[46px] bg-[#0A0A0A] border border-white/10 relative shadow-2xl flex items-center justify-center">
            <video
              src={project.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-contain rounded-[24px] sm:rounded-[36px] md:rounded-[46px]"
            />
          </div>
        ) : project.images && project.images.length === 5 ? (
          <div className="flex md:grid md:grid-cols-5 gap-2.5 sm:gap-3 md:gap-3.5 w-full overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {project.images.map((imgSrc, imgIdx) => (
              <div
                key={imgIdx}
                className="h-[clamp(150px,22vh,220px)] md:h-[clamp(260px,38vh,420px)] w-[140px] sm:w-[160px] md:w-full flex-shrink-0 md:flex-shrink overflow-hidden rounded-[20px] sm:rounded-[26px] md:rounded-[34px] bg-[#181818] border border-white/5 relative group shadow-lg"
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} screenshot ${imgIdx + 1}`}
                  className="w-full h-full object-cover object-top rounded-[20px] sm:rounded-[26px] md:rounded-[34px] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : project.images && project.images.length === 4 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 w-full">
            {project.images.map((imgSrc, imgIdx) => (
              <div
                key={imgIdx}
                className="h-[clamp(150px,22vh,220px)] md:h-[clamp(270px,40vh,430px)] w-full overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[42px] bg-[#181818] border border-white/5 relative group shadow-lg"
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} screenshot ${imgIdx + 1}`}
                  className="w-full h-full object-cover object-top rounded-[24px] sm:rounded-[32px] md:rounded-[42px] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : project.images && project.images.length === 2 ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 w-full">
            {/* Left column (portrait workflow + device, 5 cols) */}
            <div className="md:col-span-5 h-[240px] sm:h-[300px] md:h-[clamp(270px,40vh,430px)] w-full overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[45px] bg-[#181818] border border-white/5 shadow-lg group">
              <img
                src={project.images[0]}
                alt={`${project.title} workflow preview`}
                className="w-full h-full object-cover object-top rounded-[24px] sm:rounded-[36px] md:rounded-[45px] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            {/* Right column (landscape chat interface, 7 cols) */}
            <div className="md:col-span-7 h-[240px] sm:h-[300px] md:h-[clamp(270px,40vh,430px)] w-full overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[45px] bg-[#181818] border border-white/5 shadow-lg group">
              <img
                src={project.images[1]}
                alt={`${project.title} chat interface preview`}
                className="w-full h-full object-cover object-center rounded-[24px] sm:rounded-[36px] md:rounded-[45px] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 w-full">
            {/* Left column (40% width / 5 cols on 12-col grid) */}
            <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4 md:gap-6">
              <div className="h-[clamp(130px,16vw,230px)] w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#181818] border border-white/5">
                <img
                  src={project.col1Img1}
                  alt={`${project.title} preview 1`}
                  className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="h-[clamp(160px,22vw,340px)] w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#181818] border border-white/5">
                <img
                  src={project.col1Img2}
                  alt={`${project.title} preview 2`}
                  className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right column (60% width / 7 cols on 12-col grid) */}
            <div className="md:col-span-7 h-[280px] sm:h-[350px] md:h-full min-h-[290px] overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#181818] border border-white/5">
              <img
                src={project.col2Img}
                alt={`${project.title} showcase primary`}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-44"
    >
      <div className="max-w-6xl mx-auto w-full mb-12 sm:mb-16 md:mb-20">
        {/* Heading: "Project" */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight text-[clamp(3rem,12vw,160px)] select-none">
            Project
          </h2>
        </FadeIn>
      </div>

      {/* Sticky stacking cards */}
      <div className="relative w-full">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
