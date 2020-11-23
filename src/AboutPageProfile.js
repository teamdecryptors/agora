import React from 'react';


function AboutPageProfile(props) {
return(
    <>
     <h5>{props.name} - {props.role}</h5> 
     <p style={{fontSize:14}}>{props.bio}</p> 
    </>
)
}

export default AboutPageProfile;