import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

function HandleErrors(props){
    return(
        <Row>
            <Col>
                <Alert variant="danger" onClose={props.onCloseError} dismissible>
                    <p className="mb-0">
                        Warning: Input must be greater than 0 and numerical.
                    </p>
                </Alert>
            </Col>
        </Row>
    );
}

export default HandleErrors;