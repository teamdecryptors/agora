import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import SearchBox from './SearchBox';
import { searchTypes } from './constants';

function ViewExchangesPage(props) {
    const [searchType, setSearchType] = useState(searchTypes.BUDGET);

    return (
        <>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <ToggleButtonGroup
                        type="radio"
                        name="searchTypeOptions"
                        defaultValue={searchTypes.BUDGET}
                    >
                        <ToggleButton
                            variant="secondary"
                            value={searchTypes.BUDGET}
                            onClick={() => setSearchType(searchTypes.BUDGET)}
                        >
                            What can I buy with my budget?
                        </ToggleButton>
                        <ToggleButton
                            variant="secondary"
                            value={searchTypes.PAIR}
                            onClick={() => setSearchType(searchTypes.PAIR)}
                        >
                            I know which pairing I want!
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Row>
            <SearchBox searchType={searchType} />
        </>
    );
}

export default ViewExchangesPage;