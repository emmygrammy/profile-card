import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Image/>
      <Intro/>
      <Skills/>
     
    </div>
  );
}


function Image(){
  return(
   <img src='pics/Sir Emmy Passport.png' alt="Profile" />
  );
}

function Intro(){
  return(
    <div>
      <h2>OJEABUO EMMANUEL</h2>
      <p> 🎯 Passionate Software Developer | 📱 Flutter Mobile Developer | 🌐 Full-Stack JavaScript | ☁️ Cloud Engineer
🔍            
       </p>
       <p>I love building modern mobile apps, web applications, and backend systems that solve real-world problems.</p>
    </div>
  );
}

function Skills(){
  return(
    <div className='container'>
      <Skillset
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
            skill="Cloud computing "  emoji="🌞" color = "red"/>
      </div>
  );
}

function Skillset(props){
  return(
    <div className='skillset' style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
    
  );
}

export default App;
