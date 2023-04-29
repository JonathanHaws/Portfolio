import React from 'react';

function Project({ imageUrl, link, caption, width }) {
  return (
    <a class = "project" href={link} style={{ flexBasis: width || '100%', flexGrow: '1'}}>
      <img class="project-img" src={imageUrl}/>
      <span class="project-caption"> {caption} </span>
    </a>
  );
}

export default Project;