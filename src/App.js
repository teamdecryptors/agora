import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';
import { navbarLinks } from './constants';
import { useEffect, useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = 
    useState(navbarLinks.EXCHANGES);


  useEffect(() => {
    document.title = "agora - " + currentPage.name;
  }, [currentPage]);

  return (
    <>
      <Navbar
          active={currentPage.name} 
          onLinkClick={(newPage) => setCurrentPage(navbarLinks[newPage])}
        />
      <Container>
        <currentPage.pageComponent/>
      </Container>
    </>
  );
}

export default App;
