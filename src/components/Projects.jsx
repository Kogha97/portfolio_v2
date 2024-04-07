import React, { useState } from 'react';

export default function Projects() {

  const projects = [
    {
      name:'Budgeting app',
      imageUrl:'https://res-console.cloudinary.com/dqknxcs3x/media_explorer_thumbnails/ca102c748def9543cbc8597056e61750/detailed',
      functionality:"A React-based budgeting tool that securely syncs with bank accounts to track expenses and manage finances. It features robust security measures for safe data fetching and transaction management, utilizing Express.js and MongoDB for backend operations, and OAuth for secure authentication. This project highlights my ability to integrate high-security standards in web applications, ensuring user data protection while providing a comprehensive financial overview.",
      technologies:['React','CSS','GitHub','Express.js','MongoDB','OAuth']
    },
    {
      name: "Portfolio v2",
      imageUrl: "https://res-console.cloudinary.com/dqknxcs3x/media_explorer_thumbnails/943fae5d7d0e8cf370495940f3027dba/detailed",
      functionality: "This version of my portfolio builds upon the original's design while significantly enhancing user experience. With React at its core, it features optimized navigation, improved load times, and dynamic, interactive elements, all woven into the design's original aesthetic. The update focuses on refined CSS for fluid transitions and better responsiveness, demonstrating my commitment to creating an engaging, accessible online presence.",
      technologies: ["React", "CSS", "Express.js"]
    },
    {
      name:'Mini-Yelp',
      imageUrl:'https://res-console.cloudinary.com/dqknxcs3x/media_explorer_thumbnails/7b2ee223d3ed6c6748f630fee1ec6ffa/detailed',
      functionality:'A collaborative project modeled after Yelp, focusing on user-generated reviews for local businesses. My involvement spanned both front-end development, utilizing React and Leaflet for an interactive map interface, and back-end construction with Express.js and MongoDB for data handling. This dual-phase participation underscored the importance of effective team communication and the seamless integration of front-end and back-end workflows.',
      technologies:['React','CSS','GitHub','Leaflet','Express.js','MongoDB']
    },
    {
      name:'Cookbook v3',
      imageUrl:'https://res-console.cloudinary.com/dqknxcs3x/media_explorer_thumbnails/daa27da03533304cf88cd34c4b207288/detailed',
      functionality:"Cookbook v3 evolves into a full-stack application, leveraging Next.js for enhanced SEO and performance, and TailwindCSS for responsive design. Features like user authentication, personalized recommendations, and the ability to manage recipes are powered by an Express.js and MongoDB backend. This version underscores my proficiency in full-stack development, offering users a dynamic, interactive culinary platform.",
      technologies:['Next.js','Tailwind','GitHub','Express.js','MongoDB']  
    },      
    {
      name: "Cookbook v2",
      imageUrl: "https://res-console.cloudinary.com/dqknxcs3x/media_explorer_thumbnails/c10b9c22d15c271e9071c8234f77a86b/detailed",
      functionality: "The second iteration of Cookbook elevates user experience with intuitive navigation and responsive layouts using React and TailwindCSS. It allows users to explore, search, and filter recipes with ease. Contentful integration facilitates efficient recipe management and updates, showcasing my adeptness in building and scaling modern web applications and integrating content services.",
      technologies: ["React", "Tailwind", "GitHub", "Contentful"]
    },    
    {
      name:'What is my Ip Adress',
      imageUrl:'https://res-console.cloudinary.com/dqknxcs3x/media_explorer_thumbnails/9682e79bc2a11e3bbcab366879e36b30/detailed',
      functionality: "A web application that provides users with their current IP address and geographical location information, built using React and styled with CSS. It leverages the Leaflet library for rendering an interactive map that visually displays the user's location based on their IP address. This project highlights my ability to integrate external APIs for real-time data retrieval and my skills in creating user-friendly, informative web tools.",
      technologies:['React','CSS','Leaflet', 'GitHub']
    },
    {
      name:'Calculator App',
      imageUrl:'https://res-console.cloudinary.com/dqknxcs3x/media_explorer_thumbnails/0f451f345d6ef628a457a49aa0412306/detailed',
      functionality:'A sleek calculator built using React, showcasing proficiency in state management and responsive UI design. It supports basic arithmetic operations and user-friendly interaction, demonstrating my skills in developing interactive applications with React.',
      technologies:['React', 'CSS', 'GitHub']
    },
    {
      name:'Porfolio v1',
      imageUrl:'https://res-console.cloudinary.com/dqknxcs3x/media_explorer_thumbnails/94efde1c4ae2a67408306e54e803730c/detailed',
      functionality:"A personal portfolio website designed to showcase my web development projects and skills. Developed with HTML and CSS for structure and styling, JavaScript for interactivity, and PHP for backend integration. This portfolio demonstrates my foundational web development skills and my ability to create a fully functional, visually appealing web presence.",
      technologies:['HTML','CSS','JavaScript','PHP']
    },
    {
      name:'Ordering App',
      imageUrl:'https://res-console.cloudinary.com/dqknxcs3x/media_explorer_thumbnails/2a11e1a0fdfa6614ba7bd1bc02ec484e/detailed',
      functionality:'In the development of the ordering app, I integrated HTML for structure, CSS for design, and JavaScript for dynamic functionality. Users can effortlessly add, delete, order, and pay for dishes, highlighting my expertise in creating a responsive and interactive web application. This project significantly enriched my practical experience in web development.',
      technologies:['HTML', 'CSS','GitHub','JavaScript']
    },
    {
      name:'To do List',
      imageUrl:'https://res-console.cloudinary.com/dqknxcs3x/media_explorer_thumbnails/5366d6675033f636a918ed2d26dc1883/detailed',
      functionality:'Create a minimalist To-Do List application using HTML, CSS, and JavaScript to help users organize tasks efficiently. The user-friendly interface allows for easy entry, completion, removal of tasks and it allows for the user to organize it daily.',
      technologies:['HTML','CSS','GitHub','JavaScript']
    },
    {
      name:'Cooking with Tayfun & João',
      imageUrl:'https://res-console.cloudinary.com/dqknxcs3x/media_explorer_thumbnails/0f753eb636535c63daaeaaa4ac85c34a/detailed',
      functionality:'In my cooking book project using HTML and CSS, I learned valuable skills in organization, planning for responsiveness, and creating CSS-only hamburger menus. This project deepened my understanding of web development and showcased my proficiency in crafting interactive elements without JavaScript.',
      technologies:['HTML','CSS','GitHub']
    },
    {
      name: 'Lorem Impsum Website',
      imageUrl:'https://res-console.cloudinary.com/dqknxcs3x/media_explorer_thumbnails/cd476eb4d922bad382e06072d8d8bef7/detailed',
      functionality:'This was my first ever project, to recreate a already made website, with this project I learned a lot a valuable skills and worked on the basics of HTML and CSS, such has padding, backgound images, flexbox and grid containers.',
      technologies:['HTML', 'CSS']
    },

  ];

  const [current, setCurrent] = useState(0);
  const length = projects.length; 

  const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1); 
  };

  const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (projects.length <= 0) { 
      return null;
  }

  return (
    <div className='projectContainer'>
        <button className='slideButton' onClick={prevSlide}>&lt;</button>
        {projects.map((project, index) => (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                    <div className='project'>
                        <h2>{project.name}</h2>
                        <img className='projectImage' src={project.imageUrl} alt={project.name} />
                        <p className='functionality'>{project.functionality}</p>
                        <ul className='skills'>
                            {project.technologies.map((tech, techIndex) => ( 
                                <li key={techIndex}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        ))}
        <button className='slideButton' onClick={nextSlide}>&gt;</button>
    </div>
  );
}
