import styled from "styled-components";
import Button from "../Button";

import { ReactComponent as Trajectory } from "../../assets/Trajectory.svg";

const Header = () => {
  return (
    <Container>
      <Logo>
        <Trajectory />
        <Title>Trajectory</Title>
      </Logo>

      <Menu>
        <Ancker>Trajectory</Ancker>
        <Ancker>Mission</Ancker>
        <Button color="white">Join the Community</Button>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80px;

  border-bottom: 1px solid #ebebeb;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 200px 0px 200px;
`;

const Logo = styled.div`
  display: flex;
  gap: 2px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600px; // 임시

  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  font-size: 16px;
  font-weight: 400;
`;

const Ancker = styled.p``;

export default Header;
