import styled from "styled-components";
import Button from "../../components/Button";
import { ReactComponent as SearchDocumentIcon } from "../../assets/SearchDocument.svg";

function Index() {
  return (
    <Container>
      <BackgroundGrid />
      <InnerContainer>
        <TitleContainer>
          <Title>Maximizing cumulative</Title>
          <Title>student impact.</Title>
        </TitleContainer>
        <ButtonContainer>
          <Button color="white" Icon={SearchDocumentIcon}>
            What we've done
          </Button>
          <Button color="black">Join the Community</Button>
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 600px;

  margin-top: 120px;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundGrid = styled.div`
  width: 100%;
  height: 600px;

  position: absolute;

  background-image: linear-gradient(to right, #ccc 1px, transparent 1px),
    linear-gradient(to bottom, #ccc 1px, transparent 1px);
  background-size: 65px 65px;

  mask-image: radial-gradient(
    circle at 50% 150%,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 0) 50%
  );
  -webkit-mask-image: radial-gradient(
    circle at 50% 150%,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 0) 50%
  );
`;

const InnerContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  padding-bottom: 60px;
`;

const Title = styled.div`
  color: black;

  font-size: 64px;
  font-weight: 800;
  text-align: center;
  line-height: 64px;
`;

const ButtonContainer = styled.div`
  display: flex;

  gap: 12px;
`;

// const Button = styled.div``;

export default Index;
