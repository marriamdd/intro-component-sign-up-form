import styled from "styled-components";
export default function Suggest() {
  return (
    <SuggestDiv>
      <p>
        <span>Try it free 7 days </span>then $20/mo. thereafter
      </p>
    </SuggestDiv>
  );
}

const SuggestDiv = styled.div`
  width: 32.7rem;
  height: 8.8rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: #5e54a4;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  font-size: 15px;
  color: #fff;
  line-height: 26px;
  letter-spacing: 0.268px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: 2.3rem;

  @media screen and (min-width: 768px) {
    margin-top: 2rem;
    width: 54rem;
    height: 6rem;
    margin-top: 4rem;
  }

  p {
    font-weight: 400;
    width: 19.4rem;
    text-align: center;
    font-style: normal;
    span {
      font-style: normal;
      font-weight: 700;
    }

    @media screen and (min-width: 768px) {
      width: 54rem;
    }
  }
`;
