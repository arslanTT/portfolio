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
    id: "video-streaming",
    title: "Video Streaming Platform",
    description:
      "A video platform with authentication and authorization. Users can upload their own videos within set limits, and stream videos uploaded by themselves or other users.",
    images: ["/projects/p1-1.png", "/projects/p1-2.png", "/projects/p1-3.png"],
    tags: ["Next.js", "TypeScript", "MongoDB", "Auth"],
    liveUrl: "videos-five-plum.vercel.app",
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
