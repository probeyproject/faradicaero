import React from 'react'

function ProjectsImages({imgNumbers,position}) {
  return (
    <div className={`image_conatiner w-[420px] rounded overflow-hidden image_${imgNumbers}  `} >
    <div className={`projectsimg_${imgNumbers} project_image projectspeice_one  `}></div>
    <div className={`projectsimg_${imgNumbers} project_image projectspeice_two`}></div>
    <div className={`projectsimg_${imgNumbers} project_image projectspeice_three`}></div>
    <div className={`projectsimg_${imgNumbers} project_image projectspeice_four`}></div>
    <div className={`projectsimg_${imgNumbers} project_image projectspeice_five`}></div>
  
  </div>
  )
}

export default ProjectsImages