import Header from "./components/Header";
import Main from "./components/Main";
import Container from '@mui/material/Container';
import ModalComponent from "./components/ModalComponent";


function App() {
  return (
    <Container maxWidth="sm">
     <Header/>
     <ModalComponent/>
     <Main/>
    </Container>
  );
}

export default App;
