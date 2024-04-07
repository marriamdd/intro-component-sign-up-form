import styled from "styled-components";
export default function Intro() {
  return (
    <IntroDiv>
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.{" "}
      </p>
    </IntroDiv>
  );
}

const IntroDiv = styled.div`
  color: #fff;
  text-align: center;
  padding: 5rem 2rem;

  h1 {
    width: 327px;
    height: 80px;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.292px;
    margin-bottom: 2rem;
  }
  p {
    width: 327px;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    margin-bottom: 2rem;
  }
`;
