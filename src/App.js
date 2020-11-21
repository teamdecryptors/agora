import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';
import { pages } from './constants';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";

function App() {
  const [currentPageName, setCurrentPageName] = 
    useState(pages.EXCHANGES.name);

  const onNavbarLinkClick = (newPageName) => {
    setCurrentPageName(newPageName);
  };

  useEffect(() => {
    document.title = "agora - " + currentPageName;
  }, [currentPageName]);

  return (
    <Router>
      <Navbar onLinkClick={onNavbarLinkClick} />

      <Container>
        <Switch>
          {
            Object.entries(pages).map(
              ([key, {pathname, PageComponent}]) => (
                  <Route path={pathname} key={key} exact>
                    <PageComponent />
                  </Route>
              )
            )
          }
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
