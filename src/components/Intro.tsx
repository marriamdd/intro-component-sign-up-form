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
  @media screen and (min-width: 768px) {
    width: 52.4rem;
    margin-right: 3rem;
  }
  h1 {
    width: 32.7rem;
    height: 8rem;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 3.6rem;
    letter-spacing: -0.292px;
    margin-bottom: 2rem;
    @media screen and (min-width: 768px) {
      width: 52.5rem;
      height: 13.1rem;
      font-size: 5rem;
      line-height: 5.5rem;
      letter-spacing: -0.521px;
    }
  }
  p {
    width: 32.7rem;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.6rem;
    margin-bottom: 2rem;
    @media screen and (min-width: 768px) {
      width: 52.5rem;
      margin-bottom: 4rem;
    }
  }
`;
