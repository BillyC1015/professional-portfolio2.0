import profilePic from "../assets/me_sitting.png"

export default function About(){
    return(
        <div className="about">
        <h1>About</h1>
    
        <h4>Primed to apply a winning mindset and transferrable skillset to the growth of a top-tier organization in Frontend Developer capacity. Capable of creating high-quality web applications via co-ordination with development team. Familiar with frontend frameworks. Skilled in overseeing projects within strict time frame and budget. Talent for quickly learning new information, procedures, and technologies. Strong leadership skills, with the capacity to steer and empower multiple cross-functional teams for increasing workflow in a fast-paced environment. Demonstrated exceptional communication and presentation skills; committed to cultivating and strengthening robust relations with clients and stakeholders. </h4>

        <div className="profile-pic">
        <img src={profilePic} alt="me sitting under a tree in the desert"/></div>
        
      </div>
    )
}