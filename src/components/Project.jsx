function Project(props) {
    return (
      <div className="project">
        <div className="card" style={{width: "18rem"}}>
  {/* <img src={props.image} className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.url} className="btn btn-primary">Live Site</a>
    <a href={props.github} className="btn btn-primary">Github Repo</a>
  </div>
</div>
      </div>
    );
  }
  
  export default Project;