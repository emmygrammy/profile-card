import logo from './logo.svg';
import './App.css';
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];


function App() {
  return (
    <div className='card'>
      <Image/>
      <Intro/>
      <Skills/>
     
    </div>
  );
}


function Image(){
  return(
   <img className='avatar' src='pics/Sir Emmy Passport.png' alt="Profile" />
  );
}

function Intro(){
  return(
    <div className='data'>
      <h2>OJEABUO EMMANUEL</h2>
      <p> 🎯 Passionate Software Developer | 📱 Flutter Mobile Developer | 🌐 Full-Stack JavaScript | ☁️ Cloud Engineer
🔍            
       </p>
       <p>I love building modern mobile apps, web applications, and backend systems that solve real-world problems.</p>
    </div>
  );
}

function Skills(){
  const skillList = skills

  return(
    <div className='skill-list'>
      {skillList.map((skillList) => (
        <Skillset
          key={skillList.skill}
          skillObject={skillList}
        />
      ))}

      {/* <Skillset
            skill="Html+css "  emoji="💪" color = "green"/>
      <Skillset
            skill="Javascript "  emoji="👍" color = "grey"/>
      <Skillset
            skill="React.js "  emoji="👌" color = "orange"/>
      <Skillset
            skill="Node.js  "  emoji="👏" color = "blue"/>
      <Skillset
            skill="Flutter  "  emoji="🤝" color = "purple"/>
      <Skillset
            skill="Cloud computing "  emoji="🌞" color = "red"/> */}
      </div>
  );
}

function Skillset({skillObject}){
  return(
    <div className='skill' style={{backgroundColor: skillObject.color}}>
      <span>{skillObject.skill}</span>
      <span>{skillObject.level === "beginner" ? "👶" : skillObject.level === "intermediate" ? "👍" : "💪"}</span>
    </div>
    
  );
}

export default App;
