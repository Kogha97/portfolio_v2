import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {

  const projects = [
    {
      name:'Catering By Pintxos',
      imageUrl:'https://res.cloudinary.com/dqknxcs3x/image/upload/v1731763380/portfolio/pintxos_website_xcfqfx.jpg',
      functionality:"A Next.js-based catering website that delivers a visually engaging user experience, featuring smooth navigation, dynamic content sections, and interactive elements. The design incorporates responsive layouts and mobile-friendly functionality to ensure accessibility across all devices. Key elements include a custom video banner, optimized image loading, and a quote request feature that allows clients to easily connect with the business.",
      technologies:['Next.js','CSS','GitHub'],
      url:'https://catering-by-pintxos.vercel.app/',
      github:'https://github.com/Kogha97/catering_by-_pintxos'

    },
    {
      name:'Budgeting app',
      imageUrl:'https://res.cloudinary.com/dqknxcs3x/image/upload/fl_preserve_transparency/v1712224603/portfolio/hfkwtbjtp7ec9ef0ccxg.jpg?_s=public-apps',
      functionality:"A React-based budgeting tool that securely syncs with bank accounts to track expenses and manage finances. It features robust security measures for safe data fetching and transaction management, utilizing Express.js and MongoDB for backend operations, and OAuth for secure authentication. This project highlights my ability to integrate high-security standards in web applications, ensuring user data protection while providing a comprehensive financial overview.",
      technologies:['React','CSS','GitHub','Express.js','MongoDB','OAuth'],
      url:'',
      github:'https://github.com/Kogha97/BudgetingProject'

    },
    {
      name: "Portfolio v2",
      imageUrl: "https://res.cloudinary.com/dqknxcs3x/image/upload/fl_preserve_transparency/v1712225144/portfolio/mits9enp4nw3lv7l30vh.jpg?_s=public-apps",
      functionality: "This version of my portfolio builds upon the original's design while significantly enhancing user experience. With React at its core, it features optimized navigation, improved load times, and dynamic, interactive elements, all woven into the design's original aesthetic. The update focuses on refined CSS for fluid transitions and better responsiveness, demonstrating my commitment to creating an engaging, accessible online presence.",
      technologies: ["React", "CSS", "Express.js"],
      url:'https://portfolio-v2-woad-three.vercel.app/',
      github:'https://github.com/Kogha97/portfolio_v2'
    },
    {
      name:'Mini-Yelp',
      imageUrl:'https://res.cloudinary.com/dqknxcs3x/image/upload/fl_preserve_transparency/v1712224603/portfolio/lbbq8wdsvi0bmsdjb91t.jpg?_s=public-apps',
      functionality:'A collaborative project modeled after Yelp, focusing on user-generated reviews for local businesses. My involvement spanned both front and backend development, utilizing React and Leaflet for an interactive map interface, and back-end construction with Express.js and MongoDB for data handling. This dual-phase participation underscored the importance of effective team communication and the seamless integration of front-end and back-end workflows.',
      technologies:['React','CSS','GitHub','Leaflet','Express.js','MongoDB'],
      url:'',
      github:'https://github.com/Kogha97/yelp-backend-2'
    },
    {
      name:'Cookbook v3',
      imageUrl:'https://res.cloudinary.com/dqknxcs3x/image/upload/fl_preserve_transparency/v1712224603/portfolio/eszjrzjkbmyybkpcnqbq.jpg?_s=public-apps',
      functionality:"Cookbook v3 evolves into a full-stack application, leveraging Next.js for enhanced SEO and performance, and TailwindCSS for responsive design. Features like user authentication, personalized recommendations, and the ability to manage recipes are powered by an Express.js and MongoDB backend. This version underscores my proficiency in full-stack development, offering users a dynamic, interactive culinary platform.",
      technologies:['Next.js','Tailwind','GitHub','Express.js','MongoDB'],
      url:'',
      github:'https://github.com/Kogha97/express-Project'
    },      
    {
      name: "Cookbook v2",
      imageUrl: "https://res.cloudinary.com/dqknxcs3x/image/upload/fl_preserve_transparency/v1712224604/portfolio/astqcvyqxspkmlfkwwey.jpg?_s=public-apps",
      functionality: "The second iteration of Cookbook elevates user experience with intuitive navigation and responsive layouts using React and TailwindCSS. It allows users to explore, search, and filter recipes with ease. Contentful integration facilitates efficient recipe management and updates, showcasing my adeptness in building and scaling modern web applications and integrating content services.",
      technologies: ["React", "Tailwind", "GitHub", "Contentful"],
      url:'https://contetfull-cookbook.vercel.app/',
      github:'https://github.com/Kogha97/contetfull-cookbook',
    },    
    {
      name:'What is my Ip Adress',
      imageUrl:'https://res.cloudinary.com/dqknxcs3x/image/upload/fl_preserve_transparency/v1712224604/portfolio/lipjcgo27rxjr8s0dds2.jpg?_s=public-apps',
      functionality: "A web application that provides users with their current IP address and geographical location information, built using React and styled with CSS. It leverages the Leaflet library for rendering an interactive map that visually displays the user's location based on their IP address. This project highlights my ability to integrate external APIs for real-time data retrieval and my skills in creating user-friendly, informative web tools.",
      technologies:['React','CSS','Leaflet', 'GitHub'],
      url:'https://whats-my-ip-kappa.vercel.app/',
      github: 'https://github.com/Kogha97/whats-my-ip'
    },
    {
      name:'Calculator App',
      imageUrl:'https://res.cloudinary.com/dqknxcs3x/image/upload/fl_preserve_transparency/v1712224603/portfolio/ixjm1tcve9s6ym6g2cla.jpg?_s=public-apps',
      functionality:'A sleek calculator built using React, showcasing proficiency in state management and responsive UI design. It supports basic arithmetic operations and user-friendly interaction, demonstrating my skills in developing interactive applications with React.',
      technologies:['React', 'CSS', 'GitHub'],
      url: 'https://calculator-project-rouge.vercel.app/',
      github: 'https://github.com/Kogha97/calculator'
    },
    {
      name:'Porfolio v1',
      imageUrl:'https://res.cloudinary.com/dqknxcs3x/image/upload/fl_preserve_transparency/v1712224604/portfolio/suolpuhi3penw1jzjnhr.jpg?_s=public-apps',
      functionality:"A personal portfolio website designed to showcase my web development projects and skills. Developed with HTML and CSS for structure and styling, JavaScript for interactivity, and PHP for backend integration. This portfolio demonstrates my foundational web development skills and my ability to create a fully functional, visually appealing web presence.",
      technologies:['HTML','CSS','JavaScript','PHP'],
      url: 'https://kogha97.github.io/portfolio/',
      github: 'https://github.com/Kogha97/portfolio'
    },
    {
      name:'Ordering App',
      imageUrl:'https://res.cloudinary.com/dqknxcs3x/image/upload/fl_preserve_transparency/v1712224604/portfolio/enesf4xwaufn0kaglrhx.jpg?_s=public-apps',
      functionality:'In the development of the ordering app, I integrated HTML for structure, CSS for design, and JavaScript for dynamic functionality. Users can effortlessly add, delete, order, and pay for dishes, highlighting my expertise in creating a responsive and interactive web application. This project significantly enriched my practical experience in web development.',
      technologies:['HTML', 'CSS','GitHub','JavaScript'],
      url:'https://ordering-app-plum.vercel.app/',
      github:'https://github.com/Kogha97/ordering_app'
    },
    {
      name:'To do List',
      imageUrl:'https://res.cloudinary.com/dqknxcs3x/image/upload/fl_preserve_transparency/v1712224604/portfolio/cvuucqegq4nhqcroodet.jpg?_s=public-apps',
      functionality:'Create a minimalist To-Do List application using HTML, CSS, and JavaScript to help users organize tasks efficiently. The user-friendly interface allows for easy entry, completion, removal of tasks and it allows for the user to organize it daily.',
      technologies:['HTML','CSS','GitHub','JavaScript'],
      url:'https://kogha97.github.io/ToDoList/',
      github: 'https://github.com/Kogha97/ToDoList'
    },
    {
      name:'Cooking with Tayfun & João',
      imageUrl:'https://res.cloudinary.com/dqknxcs3x/image/upload/fl_preserve_transparency/v1712224603/portfolio/a4vt5kpiltqmjsjgzpdd.jpg?_s=public-apps',
      functionality:'In my cooking book project using HTML and CSS, I learned valuable skills in organization, planning for responsiveness, and creating CSS-only hamburger menus. This project deepened my understanding of web development and showcased my proficiency in crafting interactive elements without JavaScript.',
      technologies:['HTML','CSS','GitHub'],
      url:'https://wbs-cook-book.vercel.app/',
      github:'https://github.com/Kogha97/wbs-cook-book'
    },
    {
      name: 'Lorem Impsum Website',
      imageUrl:'https://res.cloudinary.com/dqknxcs3x/image/upload/fl_preserve_transparency/v1712224603/portfolio/ujbz1bkcksxotxafxpd7.jpg?_s=public-apps',
      functionality:'This was my first ever project, to recreate a already made website, with this project I learned a lot a valuable skills and worked on the basics of HTML and CSS, such has padding, backgound images, flexbox and grid containers.',
      technologies:['HTML', 'CSS'],
      url:'https://bgk-design.vercel.app/',
      github:'https://github.com/Kogha97/bgk_design'
    },

  ];
  const [selectedTechs, setSelectedTechs] = useState([])

  const handleTechSelect = (tech) => {
    if(selectedTechs.includes(tech)) {
      setSelectedTechs(selectedTechs.filter(t => t !== tech))
    } else {
      setSelectedTechs([...selectedTechs, tech])
    }
  }
  
  const filteredProjects = selectedTechs.length > 0
    ? projects.filter(project => selectedTechs.every(tech => project.technologies.includes(tech)))
    : projects;

  
  return (
    <div className='projectContainer'>
      <div className="techFilters">
        {["React", "Next.js", "CSS", "Tailwind", "Express.js", "MongoDB"]
          .map((tech, index) => (
            <button key={index} onClick={() => handleTechSelect(tech)}
              className={selectedTechs.includes(tech) ? "selected" : ""}>
              {tech}
            </button>
          ))
        }
      </div>
      <div className="projectGrid">
        {filteredProjects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
