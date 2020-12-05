import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert'

function HandleErrors(){
    const [show, setShow] = useState(true);
    if (show){
            return(
                <Alert variant="danger" onClose={() => setShow(false)}>
                <Alert.Heading>Input must be greater than 0 or numerical</Alert.Heading>
                </Alert>
            )
    }
    
}

export default HandleErrors;