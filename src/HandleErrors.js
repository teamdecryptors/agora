import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert'

function HandleErrors(){
    const [show, setShow] = useState(true);
    if (show){
            return(
                <Alert variant="danger" onClose={() => setShow(false)}>
                <Alert.Heading>Inputted Amount is not Valid</Alert.Heading>
                </Alert>
            )
    }
    
}

export default HandleErrors;