import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Whitewater Waterfall',
    category: 'Fluid Simulation',
    image: '/src/assets/images/project-1/Camera_001.jpg',
    description: 'A fluid simulation of a waterfall focused on the whitewater effect.',
    software: ['Blender', 'FLIP Fluids'],
    images: [
      '/src/assets/images/project-1/Camera_001.jpg',
      '/src/assets/images/project-1/still_385.jpg',
    ],
    videos: [
      {
        url: 'https://www.youtube.com/watch?v=29HPD33rUQ0',
        type: 'youtube'
      }
    ],
    aspectRatio: 16/9,
  },
  {
    id: '2',
    title: 'Donut Fluid Simulation',
    category: 'Fluid Simulation',
    image: '/src/assets/images/project-2/beaut_sim6.jpg',
    description: 'A fluid simulation of a fluid interacting inside a glass donut.',
    software: ['Blender', 'FLIP Fluids'],
    images: [
      '/src/assets/images/project-2/beaut_sim1.jpg',
      '/src/assets/images/project-2/beaut_sim2.jpg',
      '/src/assets/images/project-2/beaut_sim3.jpg',
      '/src/assets/images/project-2/beaut_sim4.jpg',
      '/src/assets/images/project-2/beaut_sim5.jpg',
      '/src/assets/images/project-2/beaut_sim6.jpg',
    ],
    videos: [
      {
        url: 'https://www.youtube.com/watch?v=X1Gej6yVHeI',
        type: 'youtube'
      },
      {
        url: 'https://www.youtube.com/embed/shorts/sYdrkCy0n1I',
        type: 'youtube'
      }
    ]
  },
  {
    id: '3',
    title: 'Ocean Simulation with Emission Whitewater',
    category: 'Fluid Simulation',
    image: '/src/assets/images/project-3/ocean_min__emission_render1.jpg',
    description: 'An ocean simulation with emission whitewater.',
    software: ['Blender', 'FLIP Fluids'],
    images: [
      '/src/assets/images/project-3/ocean_min__emission_render1.jpg',
      '/src/assets/images/project-3/ocean_min__emission_render2.jpg',
      '/src/assets/images/project-3/ocean_min__emission_render3.jpg',
    ],
    videos: [
      {
        url: 'https://www.youtube.com/watch?v=32zLhHX4IG8',
        type: 'youtube'
      }
    ],
    aspectRatio: 16/9,
  },
  {
    id: '4',
    title: 'A Novel Simulation Solver for Complex Fluid Interactions',
    category: 'Fluid Simulation',
    image: '/src/assets/images/project-4/project-40002.png',
    description: 'A fluid simulation with emission whitewater.',
    software: ['Houdini'],
    images: [
      '/src/assets/images/project-4/project-40001.png',
      '/src/assets/images/project-4/project-40002.png',
    ],
    videos: [
      {
        url: '/src/assets/images/project-4/video10001-0036.mp4',
        type: 'local'
      },
      {
        url: '/src/assets/images/project-4/video20001-0128.mp4',
        type: 'local'
      }
    ],
    aspectRatio: 2,
  },
  {
    id: '5',
    title: 'Hair Fur Test',
    category: 'Hair Dynamics',
    image: '/src/assets/images/project-5/furcycles.jpg',
    description: 'A hair dynamics simulation test.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-5/furcycles.jpg',
    ],
    videos: [
      {
        url: '/src/assets/images/project-5/10001-0100.mkv',
        type: 'local'
      }
    ]
  },
  {
    id: '6',
    title: 'Candleflame Fire Simulation',
    category: 'Pyro Simulation',
    image: '/src/assets/images/project-6/candleflame0068.jpg',
    description: 'A fluid simulation with emission whitewater.',
    software: ['3DS Max', 'Phoenix FD'],
    images: [
      '/src/assets/images/project-6/candleflame0068.jpg',
    ],
    videos: [
      {
        url: '/src/assets/images/project-6/candleflame0001-0101.mp4',
        type: 'local'
      }
    ],
    aspectRatio: 16/9,
  },
  {
    id: '7',
    title: 'Soda Can Fluid Simulation Test',
    category: 'Fluid Simulation',
    image: '/src/assets/images/project-7/rn20089.png',
    description: 'An ad test for a soda can fluid simulation.',
    software: ['Blender', 'FLIP Fluids'],
    images: [
      '/src/assets/images/project-7/rn20089.png',
    ],
    videos: [
      {
        url: '/src/assets/images/project-7/20001-0100.mp4',
        type: 'local'
      },
      {
        url: '/src/assets/images/project-7/10001-0100.mp4',
        type: 'local'
      },
      {
        url: '/src/assets/images/project-7/rn0001-0100.mp4',
        type: 'local'
      }
    ],
    aspectRatio: 16/9,
  },
  {
    id: '8',
    title: 'Truck Climbing Hill',
    category: 'Scene Staging and Lighting',
    image: '/src/assets/images/project-8/truck_botaniq1.jpg',
    description: 'A fire simulation.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-8/truck_botaniq1.jpg',
      '/src/assets/images/project-8/truck_in_cold.jpg',
      '/src/assets/images/project-8/truck_in_mist.jpg',
    ],
    aspectRatio:2.35,
  },
  {
    id: '9',
    title: 'Bubble Bullet Fluid Simulation',
    category: 'Fluid Simulation',
    image: '/src/assets/images/project-9/bubble_bullet_rn1.jpg',
    description: 'A fluid simulation for a bullet passing through a bubble of water.',
    software: ['Blender', 'FLIP Fluids'],
    images: [
      '/src/assets/images/project-9/bubble_bullet_rn1.jpg',
    ],
    videos: [
      {
        url: '/src/assets/images/project-9/render3emissionportrait0001-0120.mp4',
        type: 'local'
      },
      {
        url: '/src/assets/images/project-9/render30001-0120.mp4',
        type: 'local'
      },
      {
        url: '/src/assets/images/project-9/render3emissionlandscape0001-0120.mp4',
        type: 'local'
      }
    ],
    aspectRatio: 16/9,
  },
  {
    id: '10',
    title: 'Car Studio Lighting & Rendering Tests',
    category: 'Scene Staging and Lighting',
    image: '/src/assets/images/project-10/wallpaper0002.jpg',
    description: 'Some car renders I did trying out lighting and rendering cars in studios.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-10/car_lighting_test_001.jpg',
      '/src/assets/images/project-10/car_lighting_test_002.jpg',
      '/src/assets/images/project-10/car_lighting_test_003.jpg',
      '/src/assets/images/project-10/car_lighting_test_004.jpg',
      '/src/assets/images/project-10/wallpaper0001.jpg',
      '/src/assets/images/project-10/wallpaper0002.jpg',
    ],
    videos: [
      {
        url: '/src/assets/images/project-10/10001-0299.mp4',
        type: 'local'
      },
    ],
    aspectRatio: 2.35,
  },
  {
    id: '11',
    title: 'Simple Architectural Lighting',
    category: 'Scene Staging and Lighting',
    image: '/src/assets/images/project-11/archlighting_test2.jpg',
    description: 'Some architectural modeling, lighting, and rendering tests.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-11/archlighting_test1.jpg',
      '/src/assets/images/project-11/archlighting_test2.jpg',
    ],
    videos: [
      {
        url: '/src/assets/images/project-11/10001-0060.mp4',
        type: 'local'
      },
    ],
    aspectRatio: 9/16,
  },
  {
    id: '12',
    title: 'Fluid Simulation Tests',
    category: 'Fluid Simulation',
    image: '/src/assets/images/project-12/spinning_fluid_rn1.png',
    description: 'A simple car animation test.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-12/spinning_fluid_rn1.png',
    ],
    videos: [
      {
        url: '/src/assets/images/project-12/fluid_animation_vp_10001-0150.mp4',
        type: 'local'
      },
      {
        url: '/src/assets/images/project-12/fluid_animation_vp_0001-0120.mkv',
        type: 'local'
      }
    ],
    aspectRatio: 16/9,
  },
  {
    id: '13',
    title: 'Donut Ocean Simulation',
    category: 'Fluid Simulation',
    image: '/src/assets/images/project-13/donut_ocean4.png',
    description: 'A simple character animation test.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-13/donut_ocean4.png',
    ],
    videos: [
      {
        url: '/src/assets/images/project-13/chaos_donut_test20001-0250.mkv',
        type: 'local'
      },
    ],
    aspectRatio: 16/9,
  },
  {
    id: '14',
    title: 'Piano Scene Bokeh',
    category: 'Scene Staging and Lighting',
    image: '/src/assets/images/project-14/piano_macro_new3.png',
    description: 'A cinematic render for a piano, experimenting scene mood.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-14/piano_macro_new3.png',
      '/src/assets/images/project-14/piano_macro.png',
      '/src/assets/images/project-14/piano_macro1.png',
      '/src/assets/images/project-14/piano_macro2.png',
    ],
    aspectRatio: 16/9,
  },
  {
    id: '15',
    title: 'Water Drop Test in Houdini',
    category: 'Fluid Simulation',
    image: '/src/assets/images/project-15/Director.201.png',
    description: 'An obligatory water drop test in Houdini.',
    software: ['Houdini'],
    images: [
      '/src/assets/images/project-15/Director.113.png',
      '/src/assets/images/project-15/Director.201.png',
    ],
    videos: [
      {
        url: '/src/assets/images/project-15/hi-res0001-0240.mp4',
        type: 'local'
      },
    ],
    aspectRatio: 16/9,
  },
  {
    id: '16',
    title: 'Car Storage Scene',
    category: 'Scene Staging and Lighting',
    image: '/src/assets/images/project-16/car_storage_khronos_4k_opt.jpg',
    description: 'A car storage scene with a focus on lighting, volumetrics and rendering.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-16/car_storage_khronos_4k_opt.jpg',
      '/src/assets/images/project-16/car_storage_agx.png',
      '/src/assets/images/project-16/car_storage.png',
    ],
    aspectRatio: 2.35,
  },
  {
    id: '17',
    title: 'Waterfall Simulation in 3DS Max',
    category: 'Animation',
    image: '/src/assets/images/project-17/waterfallrender0001.png',
    description: 'A waterfall simulation made in 3DS Max using Phoenix.',
    software: ['3DS Max', 'Phoenix FD'],
    images: [
      '/src/assets/images/project-17/waterfallrender0001.png',
    ],
    videos: [
      {
        url: 'https://www.youtube.com/watch?v=1-RZ7U8-VtU',
        type: 'youtube'
      },
    ],
    aspectRatio: 1.333,
  },
  {
    id: '18',
    title: 'New Blender BrushStroke Test',
    category: 'Animation',
    image: '/src/assets/images/project-18/0001.png',
    description: 'A simple brushstroke animation test in Blender.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-18/0001.png',
    ],
    videos: [
      {
        url: '/src/assets/images/project-18/0001-0250.mkv',
        type: 'local'
      },
    ],
    aspectRatio: 1,
  },
  {
    id: '19',
    title: 'Interior Archviz Scene',
    category: 'Architectural Visualization',
    image: '/src/assets/images/project-19/hi-res-port-khr_1.jpg',
    description: 'An interior architectural visualization scene made in blender based on an accurate floor plan.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-19/hi-res-port-khr_1.jpg',
      '/src/assets/images/project-19/hiresport_1.jpg',
      '/src/assets/images/project-19/hires_1.jpg',
    ],
    aspectRatio: 9/16,
  },
  {
    id: '20',
    title: 'Particle and Fluid Simulations',
    category: 'Fluid Simulation',
    image: '/src/assets/images/project-20/colortest.jpg',
    description: 'Some particle and fluid simulation tests for force interactions with fluids.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-20/colortest.jpg',
    ],
    videos: [
      {
        url: '/src/assets/images/project-20/render0001-0500.mp4',
        type: 'local'
      },
      {
        url: '/src/assets/images/project-20/rendertest0100-0200.mp4',
        type: 'local'
      }
    ],
    aspectRatio: 9/16,
  },
  {
    id: '21',
    title: 'Planet Renders Concept Art',
    category: 'Modeling and Texturing',
    image: '/src/assets/images/project-21/planet_render10.jpg',
    description: 'Some renders for a concept planet with different atmospheres.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-21/planet_render10.jpg',
      '/src/assets/images/project-21/planet_render9.jpg',
      '/src/assets/images/project-21/planet_render8.jpg',
      '/src/assets/images/project-21/planet_render7.jpg',
      '/src/assets/images/project-21/planet_render6.jpg',
    ],
    aspectRatio: 16/9,
  },
  {
    id: '22',
    title: 'Exterior Archviz Scene',
    category: 'Architectural Visualization',
    image: '/src/assets/images/project-22/HQ_arch_viz7.jpg',
    description: 'Minimalist exterior architectural visualization scene.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-22/HQ_arch_viz7.jpg',
    ],
    aspectRatio: 2.35,
  },
  {
    id: '23',
    title: 'Nuke Explosion Simulation in 3DS Max',
    category: 'Pyro Simulation',
    image: '/src/assets/images/project-23/nuketest2.jpg',
    description: 'A nuke explosion simulation made in 3DS Max using Phoenix.',
    software: ['3DS Max', 'Phoenix FD'],
    images: [
      '/src/assets/images/project-23/nuketest2.jpg',
    ],
    videos: [
      {
        url: '/src/assets/images/project-23/rendervideo0001-0452.mp4',
        type: 'local'
      },
    ],
    aspectRatio: 2.35,
  },
  {
    id: '24',
    title: 'Orange Splash',
    category: 'Fluid Simulation',
    image: '/src/assets/images/project-24/orangesplash0001.png',
    description: 'A simple character animation test.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-24/orangesplash0001.png',
    ],
    videos: [
      {
        url: '/src/assets/images/project-24/10001-0013.mkv',
        type: 'local'
      },
    ],
    aspectRatio: 16/9,
  },
  {
    id: '25',
    title: 'Exterior Archviz Scene',
    category: 'Architectural Visualization',
    image: '/src/assets/images/project-25/modern_house_kuwahara.jpg',
    description: 'An exterior architectural visualization scene made in blender, and testing out the Kuwahara Filter.',
    software: ['Blender'],
    images: [
      '/src/assets/images/project-25/modern_house.jpg',
      '/src/assets/images/project-25/modern_house_kuwahara.jpg',
    ],
    aspectRatio: 2.35,
  },
];