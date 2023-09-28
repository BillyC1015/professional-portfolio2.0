import Project from "../components/Project.jsx";

function Portfolio() {
    let projects=[
        {
            name: "Park Brew", 
            description: "An app where users can find a list of breweries and national parks within a certain area.",
            github: "https://github.com/nolannaphys/park-brew",
            url: "https://nolannaphys.github.io/park-brew/",
            image: "path to image here"
        },
        {
            name: "Critter Tracker", 
            description: "Sort of a real-world Pokedex, users can upload images of animals they see in the wild and they load onto a map",
            github: "github url here",
            url: "https://critter-tracker-p2-d4b8f730eb59.herokuapp.com/",
            image: "path to image here"
        },
        {
            name: "Movie Vault", 
            description: "A database of movies that users can search through and save ones they want to watch later",
            github: "https://github.com/nolannaphys/movie-vault",
            url: "https://movie-vault-a6d86baeac1b.herokuapp.com/",
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