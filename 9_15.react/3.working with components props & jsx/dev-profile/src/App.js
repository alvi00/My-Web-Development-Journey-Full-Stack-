import "./App.css";
const devdata = [
  {
    skills: "js+css",
    level: "beginner",
    color: "#3380FF",
  },
  {
    skills: "react+css",
    level: "beginner",
    color: "#3380FF",
  },
  {
    skills: "next+css",
    level: "Advance",
    color: "#3380FF",
  },
  {
    skills: "sql+css",
    level: "beginner",
    color: "#3380FF",
  },
];
function App() {
  return <Card />;
}

function Card() {
  return (
    <div className="card">
      <Image src="images/Ahmad-Fahmid.jpg" />
      <Name name="Ahmad Fahmid" />
      <Description />

      <div className="skills-container">
        {devdata.map((i) => {
          return <Skills devobj={i} key={i.color} />;
        })}
      </div>
    </div>
  );
}

function Image(props) {
  return <img src={props.src} alt="alvi" className="image" />;
}
function Name(props) {
  return <h1>{props.name}</h1>;
}
function Description(props) {
  return (
    <p>
      I am a result-oriented and driven senior Computer Science and Engineering
      student at North South University. Currently in my 4th semester. Being a
      cse student & by taking part in lots of extra curriculum activity, I have
      repeatedly been exposed to new challenges and gained the opportunity to
      meet diverse groups of people.
    </p>
  );
}
function Skills({ devobj }) {
  let sami = "";
  if (devobj.level === "beginner") {
    sami = "😒";
  } else if (devobj.level === "Advance") {
    sami = "🎉🎉";
  }
  return (
    <p
      className="skills"
      style={{
        backgroundColor: devobj.color,
      }}
    >
      {devobj.level + sami}
    </p>
  );
}

export default App;
