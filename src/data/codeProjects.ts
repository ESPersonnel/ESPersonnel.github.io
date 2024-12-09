import { CodeProject } from '../types/project';

export const codeProjects: CodeProject[] = [
  {
    id: 'portfolio',
    title: '3D Portfolio Website',
    description: 'A modern portfolio website built with React and Framer Motion to showcase 3D artwork and development projects.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/ESPersonnel/ESPersonnel.github.io',
    liveUrl: 'https://espersonnel.github.io',
    features: [
      'Project showcasing',
      'Responsive masonry layout',
      'Smooth loading animations',
      'YouTube video integration',
    ]
  },
  {
    id: 'earthCurvature',
    title: 'Distance Visibility Calculator',
    description: 'A simple react app that calculates whether you can see a subject from a certain distance, incorporating the curvature of Earth.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ESPersonnel/Distance-Visibility-Calculator',
    liveUrl: 'https://espersonnel.github.io/Distance-Visibility-Calculator/',
    features: [
      'Curvature of Earth calculation',
      'Distance visibility calculation',
      'Responsive design',
    ]
  },
  {
    id: 'imageConverter',
    title: 'Image Converter and Compressor',
    description: 'A web app that converts and compresses images to different formats and sizes.',
    technologies: ['Python', 'CSS'],
    githubUrl: 'https://github.com/ESPersonnel/Image-Converter',
    liveUrl: 'https://image-converter-psi.vercel.app/',
    features: [
      'Image conversion',
      'Image compression',
      'Batch processing',
    ]
  },
  {
    id: 'weatherApp',
    title: 'Skye Weather App',
    description: 'A weather app that displays the current weather and forecast for a location.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/ESPersonnel/Skye-Weather-App',
    liveUrl: 'https://skye-weather-app.vercel.app/',
    features: [
      'Current weather display',
      'Weather forecast',
      'Uses OpenWeatherMap API',
    ]
  },
  {
    id: 'nypdArrestAnalysis',
    title: 'NYPD Arrest Data Analysis',
    description: 'A data analysis project that explores NYPD arrest data from 2019.',
    technologies: ['Python', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/ESPersonnel/NYPD-Arrest-Analysis',
    features: [
      'Data cleaning',
      'Data visualization',
      'Arrest analysis',
    ]
  },
  {
    id: 'videoConverter',
    title: 'Video Converter',
    description: 'A web app that converts videos to different formats.',
    technologies: ['Python', 'Flask', 'FFmpeg'],
    githubUrl: 'https://github.com/ESPersonnel/Video-Converter',
    features: [
      'Video conversion',
      'Video compression',
    ]
  }
];