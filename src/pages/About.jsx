import profilePic from "../assets/me_sitting.png"

export default function About(){
    return(
        <div className="about">
        <h1>About</h1>
    
        <h4>I am a recent graduate of The University of Pennsylvania's Full Stack Coding Bootcamp and am looking to prove myself in the job field. I have a background in sales and decided I wanted a career change.  </h4>

        <div className="profile-pic">
        <img src={profilePic} alt="me sitting under a tree in the desert"/></div>
        
      </div>
    )
}