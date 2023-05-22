import React from 'react';
import Project from './Project';

function Work() {
  return (
    <section id="work">
      <Project imageUrl="./Images/Asteroids.gif" link="https://github.com/coltmort/Cosmogeddon" caption="Online Multiplayer Asteroids Socket IO" width= "100%"/>
      <Project imageUrl="./Images/Semi-Snitch.png" link="https://github.com/greg4949/Semi-Snitch" caption="Semi Snitch (Inefficent Truck Idling)" width= "20%"/>
      <Project imageUrl="./Images/RecoveryRadar.gif" link="https://github.com/NewguyenGitHub/Recovery-Radar" caption="Recovery Radar" width= "40%"/>
      <Project imageUrl="./Images/Techblog.gif" link="https://github.com/JonathanHaws/Tech-Blog" caption="Tech Blog" width= "20%"/>
      <Project imageUrl="./Images/WeatherDashboard.png" link="https://github.com/JonathanHaws/Weather-Dashboard" caption="Weather Dashboard" width= "20%"/>
      <Project imageUrl="./Images/Maze.gif" link="https://github.com/JonathanHaws/C-Maze-Game" caption="C++ Maze Game" width= "23%"/>
      <Project imageUrl="./Images/CodeQuiz.png" link="https://github.com/JonathanHaws/CODE-QUIZ" caption="Code Quiz" width= "23%"/>
    </section>
  );
}

export default Work;