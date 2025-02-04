import styled, { createGlobalStyle } from "styled-components";
import Button from "../../components/Button";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import FindECsCover from "../../assets/FindECsCover.png";
import FindECsImage0 from "../../assets/findecs_0.png";
import FindECsImage1 from "../../assets/findecs_1.png";
import { useRef } from "react";

function Index() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <GlobalStyle />
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
            <Button
              color="white"
              Icon={ArrowDown}
              onClick={() => ref.current?.scrollIntoView()}
            >
              What we've done
            </Button>
            <Button
              color="black"
              onClick={() =>
                (window.location.href = "https://discord.com/invite/ev8SGhEJk2")
              }
            >
              Join the Community
            </Button>
          </ButtonContainer>
        </InnerBannerContainer>
      </BannerContainer>
      <AboutContainer ref={ref}>
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
        <ContentContainer>
          <ContentBlock>
            <Subtitle>About</Subtitle>
            <CategoryCoverText>
              The mission of FindECs is to help bridge the information gap in
              education, at scale. Lowering informational barriers globally is
              the first step in creating a more equal education landscape. We
              built a website that made it easy for students to learn about
              extracurricular opportunities available to them.{"\n\n"}We
              hand-crafted the database, finding the most relevant
              extracurriculars in each field. Launching in January, FindECs went
              viral social media. By the end of the month, 100,000 students had
              used our platform. In March, we were acquired by Snow.day, an
              edtech company mapping out the learning landscape with AI.
            </CategoryCoverText>
          </ContentBlock>
          <CardBlock>
            <CardContainer $pr={0} $pl={40}>
              <CardContentGroup>
                <Subtitle>Database</Subtitle>
                <BulletGroup>
                  <Bullet>Users from 185+ countries</Bullet>
                  <Bullet>100+ extracurricular opportunities</Bullet>
                  <Bullet>Filter by major</Bullet>
                  <Bullet>Key datapoints for each extracurricular</Bullet>
                </BulletGroup>
              </CardContentGroup>
              <CardImage src={FindECsImage0} />
            </CardContainer>
            <CardContainer $pr={40} $pl={0}>
              <CardImage src={FindECsImage1} />
              <CardContentGroup>
                <Subtitle>Social Media Virality</Subtitle>
                <BulletGroup>
                  <Bullet>4M+ impressions</Bullet>
                  <Bullet>20+ influencer videos</Bullet>
                  <Bullet>4K+ followers</Bullet>
                  <Bullet>$275 total spend</Bullet>
                </BulletGroup>
              </CardContentGroup>
            </CardContainer>
          </CardBlock>
          <ContentBlock>
            <Subtitle>Snowday Acquisition</Subtitle>
            <CategoryCoverText>
              Snowday is an edtech company started by Lloyd Nimetz, an
              experienced education entrepreneur. Snowday is building the data
              infrastructure that will power the future of education, using AI
              to map out the learning landscape, starting with summer programs
              and extracurricular opportunities.
              {"\n\n"}
              You can check out Snowdays progress here. We joined the Snowday
              team to lead growth efforts, and continue our mission to bridge
              the education information gap globally. We're super excited about
              the future of the education space.
            </CategoryCoverText>
          </ContentBlock>
        </ContentContainer>
      </AboutContainer>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *, html {
    scroll-behavior: smooth !important;
  }
`;

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

const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  gap: 60px;

  margin-top: 120px;
  padding-left: 200px;

  border-top: 1px solid #ebebeb;
`;

const CategoryContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  margin-top: 60px;
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

  white-space: break-spaces;
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
  max-height: 100vh;
  border-left: 1px solid #ebebeb;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 60px;
  padding-right: 200px;

  display: flex;
  flex-direction: column;
  gap: 60px;

  overflow: auto;
`;

const ContentBlock = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardBlock = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const CardContainer = styled.div<{
  $pr: number;
  $pl: number;
}>`
  max-width: 600px;
  height: 240px;

  padding-right: ${({ $pr }) => $pr}px;
  padding-left: ${({ $pl }) => $pl}px;

  position: relative;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #ebebeb;
`;

const CardContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
`;

const BulletGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  list-style-position: inside;
  padding-left: 0;
`;

const Bullet = styled.li`
  font-size: 14px;
  color: #707070;
`;

const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export default Index;
