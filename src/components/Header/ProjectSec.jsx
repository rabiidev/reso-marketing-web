import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import Marquee from "react-fast-marquee";

const projectsData = [
   {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "/assets/portimg.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
   },

   {
      id: 2,
      title: "Pinterest-Clone Website using Node.js",
      description: "Project 2 description",
      image: "/assets/imgweb.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
   },

   {
      id: 3,
      title: "Rest-API using React",
      description: "Project 3 description",
      image: "/assets/portweb2.jpeg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
   },
   {
      id: 4,
      title: "E-commerce Website",
      description: "Project 4 description",
      image: "/assets/imgweb.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
   },
   {
      id: 5,
      title: "Counter App",
      description: "Project 4 description",
      image: "/assets/appimg.webp",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/"
   },
   {
      id: 6,
      title: "Expense Tracker",
      description: "Project 4 description",
      image: "/assets/portweb2.jpeg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
   }
]

// const UserContext = createContext();


const ProjectSec = () => {

   // const projectsData = useContext(UserContext);

   const [tag, setTag] = useState("All");

   const handleTagChange = (newTag) => {
      setTag(newTag);
   };

   const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)


   );
   return (
      <>
         {/* <UserContext.Provider value={tag}> */}
 
         <h2 className="text-center text-md font-bold text-[#119d60] mt-44 mb-8 ">
            My Projects
         </h2>
         <p className='text-center text-2xl text-gray-300 mt-4 mb-4' >We Provides Best Advice For Your Business.
         </p>
         <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mx-8">
            <ProjectTag
               onClick={handleTagChange}
               name="All"
               isSelected={tag === "All"}
            />
            <ProjectTag
               onClick={handleTagChange}
               name="Web"
               isSelected={tag === "Web"}
            />
            <ProjectTag
               onClick={handleTagChange}
               name="Mobile"
               isSelected={tag === "Mobile"}
            />
            {/* <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">All</button>
      <button className="rounded-full border-2 border-slate-600  hover:border-white px-6 py-3 text-xl cursor-pointer">Web</button> */}
         </div>
         <div className="grid md:grid-cols-3 gap-8 md:gap-12 mx-14">
            {filteredProjects.map((project) => (
               <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  // tags={project}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
               />
            ))}
         </div>
         {/* </UserContext.Provider> */}

<div className='mt-16'>
         <Marquee autoFill pauseOnClick>
                 <div className="flex space-x-5 p-4 
                 text-7xl font-light cursor-pointer text-[#119d60]">
                 HTML CSS Javascript ReactJS Tailwind CSS NodeJS Firebase Mongodb 
                 </div>

                 {/* <div className="flex space-x-7 p-6 font-bold 
                 text-2xl cursor-pointer text-[#119d60]">
                                   CSS                 

                 </div>

                 <div className="flex space-x-5 p-4 font-bold 
                 text-2xl cursor-pointer text-[#119d60]">
                 javascript
                 </div>

                 <div className="flex space-x-5 p-4 font-bold 
                 text-2xl cursor-pointer text-[#119d60]">
                 ReactJS
                 </div>

                 <div className="flex space-x-5 p-4 font-bold 
                 text-2xl cursor-pointer text-[#119d60]">
                 NodeJS
                 </div>

                 <div className="flex space-x-5 p-4 font-bold 
                 text-2xl cursor-pointer text-[#119d60]">
                 tailwindCSS
                 </div> */}
         </Marquee>

        
         </div>
      </>
   );
};

export default ProjectSec;