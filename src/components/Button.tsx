import styled, { css } from "styled-components";
import { FunctionComponent } from "react";

interface props {
  children: string;

  color?: "white" | "black";
  Icon?: FunctionComponent<React.SVGProps<SVGSVGElement>>;

  onClick?: () => void;
}

const Button = ({
  children,
  color = "white",
  Icon,
  onClick = () => {},
}: props) => {
  return (
    <Container $color={color} onClick={onClick}>
      {Icon && <Icon />}
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div<{ $color: "white" | "black" }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  height: 44px;

  padding: 0 16px;
  border-radius: 24px;

  cursor: pointer;

  ${({ $color }) =>
    $color === "white"
      ? css`
          border: 1px solid #ebebeb;
          background-color: white;
          color: black;
        `
      : css`
          border: none;
          background-color: #0a0a0a;
          color: white;
        `}
`;

const Content = styled.p`
  display: flex;
  align-items: center;
  gap: 48px;

  font-size: 14px;
  font-weight: 400;
`;

export default Button;
