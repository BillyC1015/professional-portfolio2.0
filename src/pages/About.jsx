import profilePic from "../assets/me_sitting.png"

export default function About(){
    return(
        <div className="about">
        <h1>About</h1>
    
        <h4>I am a recent graduate of the University of Pennsylvania's coding bootcamp, aiming to transfer from sales focused roles to a more software development and web design oriented position. I am looking to put my new skills to the test and further develop them plus utilize the skills that I already bring to the table. With this recent certification along with a degree from Temple University and a background in sales roles, I intend to add value to a new company and grow my career in coding. </h4>

        <div className="profile-pic">
        <img src={profilePic} alt="me sitting under a tree in the desert"/></div>
        
      </div>
    )
}