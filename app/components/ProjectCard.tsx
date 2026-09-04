"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl">
      {/* Project image */}
      <div className="relative h-56 w-full">
        <Image
          src={project.images[activeImage]}
          alt={project.title}
          sizes="16"
          fill
          className="object-cover"
        />
      </div>

      {/* Image selector */}
      {project.images.length > 1 && (
        <div className="flex gap-2 px-4 pt-3">
          {project.images.map((img, index) => (
            <button
              key={img}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-200 ${
                index === activeImage ? "bg-black" : "bg-gray-200"
              }`}
              aria-label={`Show image ${index + 1}`}
              aria-pressed={index === activeImage}
            />
          ))}
        </div>
      )}

      {/* Project information */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>

        <p className="mt-2 text-sm text-gray-600">{project.description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project links */}
        <div className="mt-6 flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Live Demo
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black px-4 py-2 text-sm font-medium transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
