import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <img src='pics/Sir Emmy Passport.png' alt="Profile" />
      <h2>OJEABUO EMMANUEL</h2>
      
      <p> 🎯 Passionate Software Developer | 📱 Flutter Mobile Developer | 🌐 Full-Stack JavaScript | ☁️ Cloud Engineer
🔍            
       </p>
       <p>I love building modern mobile apps, web applications, and backend systems that solve real-world problems.</p>
      <div className='container'>
      <Skillset
            skill="Html+css 💪" />
      <Skillset
            skill="Javascript 👍 " />
      <Skillset
            skill="React.js 👌" />
      <Skillset
            skill="Node.js 👏 " />
      <Skillset
            skill="Flutter 🤝 " />
      <Skillset
            skill="Cloud computing 🌞" />
      </div>
     
     
     
    </div>
  );
}

function Skillset(props){
  return(
    <div className='skillset'>
      <h3>{props.skill}</h3>
    </div>
    
  );
}

export default App;
