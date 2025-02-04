import styled from "styled-components";
import Button from "../Button";

import { ReactComponent as Trajectory } from "../../assets/Trajectory.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        <Trajectory />
        <Title>Trajectory</Title>
      </Logo>

      <Menu>
        <Ancker
          onClick={() => (window.location.href = "https://trajectory25.com/")}
        >
          Trajectory25
        </Ancker>
        <Ancker>Mission</Ancker>
        <Button
          color="white"
          onClick={() =>
            (window.location.href = "https://discord.com/invite/ev8SGhEJk2")
          }
        >
          Join the Community
        </Button>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 200px 0px 200px;
`;

const Logo = styled.div`
  display: flex;
  gap: 2px;

  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;

  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const Ancker = styled.p`
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Header;
