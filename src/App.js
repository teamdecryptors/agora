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
  const [currentPage, setCurrentPage] = 
    useState(pages.EXCHANGES);

  const onNavbarLinkClick = (page) => {
    setCurrentPage(pages[page]);
  };

  useEffect(() => {
    document.title = "agora - " + currentPage.name;
  }, [currentPage]);

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
