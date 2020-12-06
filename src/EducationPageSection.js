import React from 'react';
import './EducationPageSection.css'

function EducationPageSection(props){
    return (
        <>
        <div class="image">
            <img src={props.image} alt="Education" width={817} height={219} style={{opacity:0.3}}/>
            <p class="centered text-center">{props.description}</p>
        </div> 
             </>
    )
}

export default EducationPageSection