import React from 'react';
import './EducationPageSection.css'

function EducationPageSection(props){
    return (
        <div class="image">
            <img src={props.image} alt="Education" width={219} height={250} style={{opacity:0.3}}/>
            <h5 class="centered">{props.heading}</h5>
        </div>       
    )
    
}

export default EducationPageSection