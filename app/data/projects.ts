export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "ai-design-critique",
    title: "AI Design Critique Platform",
    description:
      "Users upload a website design image, which is sent to an AI model for critique. The critique is saved and posted publicly along with the image, where other users can comment and give suggestions.",
    images: ["/projects/p3-1.png", "/projects/p3-2.png", "/projects/p3-3.png"],
    tags: ["React", "Express", "Node.js", "MongoDB", "AI API"],
    liveUrl: "https://ai-design-review-frontend.vercel.app",
    githubUrl: "https://github.com/arslanTT/AI-Design-Review-Frontend.git",
  },
  {
  id: "aeterna",
  title: "AETERNA — Luxury Watch Showcase",
  description:
    "A cinematic single-page 3D experience showcasing a luxury watch. Users scroll through five scenes — assembly, exploded exploration, movement anatomy, real-time customization, and a cart animation — with smooth scroll-driven interactions and Web Audio sound design.",
  images: ["/projects/aeterna-1.png", "/projects/aeterna-2.png", "/projects/aeterna-3.png"],
  tags: ["Next.js", "TypeScript", "React Three Fiber", "Three.js", "GSAP", "Zustand"],
  liveUrl: "https://aeterna-xi.vercel.app/",
  githubUrl: "https://github.com/arslanTT/portfolio.git",
},
  {
    id: "video-streaming",
    title: "Video Streaming Platform",
    description:
      "A video platform with authentication and authorization. Users can upload their own videos within set limits, and stream videos uploaded by themselves or other users.",
    images: ["/projects/p1-1.png", "/projects/p1-2.png", "/projects/p1-3.png"],
    tags: ["Next.js", "TypeScript", "MongoDB", "Auth"],
    liveUrl: "https://videos-five-plum.vercel.app",
    githubUrl: "https://github.com/arslanTT/videos.git",
  },
  {
    id: "file-storage",
    title: "File Storage & Sharing App",
    description:
      "An app with authentication and authorization where users can upload images and PDFs to cloud storage and download them later.",
    images: ["/projects/p2-1.png", "/projects/p2-2.png", "/projects/p2-3.png"],
    tags: ["Next.js", "TypeScript", "ImageKit", "Cloud Storage"],
    liveUrl: "https://cloudnext-eight.vercel.app",
    githubUrl: "https://github.com/arslanTT/drop.git",
  },
];
