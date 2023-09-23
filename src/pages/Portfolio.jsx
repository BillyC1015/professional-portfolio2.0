import Project from "./components/Project.jsx";

function Portfolio() {
    let projects=[
        {
            name: "Project 1", 
            description: "describe here",
            github: "github url here",
            url: "url to live site here",
            image: "path to image here"
        },
        {
            name: "Project 2", 
            description: "describe here",
            github: "github url here",
            url: "url to live site here",
            image: "path to image here"
        },
        {
            name: "Project 3", 
            description: "describe here",
            github: "github url here",
            url: "url to live site here",
            image: "path to image here"
        },
    ]
    return (
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="projectdiv">
        {projects.map(project=>{
            return(
                <div><Project name={project.name} description={project.description} github={project.github} url={project.url} image={project.image}></Project></div>
            )
            
        })}
        </div>
      </div>
    );
  }
  
  export default Portfolio;