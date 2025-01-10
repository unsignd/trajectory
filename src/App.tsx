import styled from "styled-components";

import Header from "./components/header/Header";
import Index from "./pages/index/Index";

function App() {
  return (
    <Container>
      <Header />

      <Index />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh; // 임시

  background-color: white;
`;

export default App;
