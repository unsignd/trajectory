import styled from "styled-components";
import Button from "../../components/Button";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import FindECsCover from "../../assets/FindECsCover.png";

function Index() {
  return (
    <>
      <BannerContainer>
        <BackgroundGridContainer>
          <BackgroundGrid />
        </BackgroundGridContainer>
        <InnerBannerContainer>
          <TitleContainer>
            <Title>Maximizing cumulative</Title>
            <Title>student impact.</Title>
          </TitleContainer>
          <ButtonContainer>
            <Button color="white" Icon={ArrowDown}>
              What we've done
            </Button>
            <Button color="black">Join the Community</Button>
          </ButtonContainer>
        </InnerBannerContainer>
      </BannerContainer>
      <AboutContainer>
        <CategoryContainer>
          <CategoryCoverGroup>
            <CategoryCoverImage src={FindECsCover} />
            <CategoryCoverTextGroup>
              <CategoryCoverTitle>FindECs.org (Acquired)</CategoryCoverTitle>
              <CategoryCoverText>
                Maximizing cumulative student impact.
              </CategoryCoverText>
            </CategoryCoverTextGroup>
          </CategoryCoverGroup>
          <CategoryStatContainer>
            <CategoryStatGroup>
              <CategoryStatGroupTitle>REACH</CategoryStatGroupTitle>
              <CategoryStatGroupText>5M+</CategoryStatGroupText>
            </CategoryStatGroup>
            <CategoryStatGroup>
              <CategoryStatGroupTitle>USERS</CategoryStatGroupTitle>
              <CategoryStatGroupText>178K+</CategoryStatGroupText>
            </CategoryStatGroup>
            <CategoryStatGroup>
              <CategoryStatGroupTitle>LAUNCH</CategoryStatGroupTitle>
              <CategoryStatGroupText>Jan 8, 2024</CategoryStatGroupText>
            </CategoryStatGroup>
            <CategoryStatGroup>
              <CategoryStatGroupTitle>STATUS</CategoryStatGroupTitle>
              <CategoryStatGroupText>Acquired</CategoryStatGroupText>
            </CategoryStatGroup>
          </CategoryStatContainer>
        </CategoryContainer>
        <ContentContainer>heheheha</ContentContainer>
      </AboutContainer>
    </>
  );
}

const BannerContainer = styled.div`
  width: 100%;
  height: 600px;

  margin-top: 120px;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundGridContainer = styled.div`
  width: 100%;
  height: 600px;

  position: absolute;

  /* bottom 블러 */
  mask-image: linear-gradient(to bottom, white 50%, transparent);
`;

const BackgroundGrid = styled.div`
  width: 100%;
  height: 100%;

  /* 격자 무늬 */
  background-image: linear-gradient(to right, #bbb 1px, transparent 1px),
    linear-gradient(to bottom, #bbb 1px, transparent 1px);
  background-size: 65px 65px;

  /* 원형 그라데이션 */
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

const InnerBannerContainer = styled.div`
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

const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  gap: 80px;

  margin-top: 120px;
  padding: 0 200px;

  border-top: 1px solid #ebebeb;
`;

const CategoryContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  margin-top: 80px;
`;

const CategoryCoverGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const CategoryCoverImage = styled.img`
  width: 150px;
  height: 90px;
  object-fit: cover;
  border-radius: 6px;
`;

const CategoryCoverTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CategoryCoverTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const CategoryCoverText = styled.p`
  font-size: 14px;
  color: #707070;
`;

const CategoryStatContainer = styled.div`
  padding-top: 18px;
  border-top: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
`;

const CategoryStatGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CategoryStatGroupTitle = styled.p`
  font-size: 12px;
  color: #707070;
  text-transform: uppercase;
`;

const CategoryStatGroupText = styled.p`
  font-size: 12px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid #ebebeb;
  padding-top: 80px;
  padding-left: 80px;
`;

export default Index;
