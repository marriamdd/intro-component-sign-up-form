import styled from "styled-components";

export default function FormValidation() {
  return (
    <Form>
      <input type="text" placeholder="First Name" name="First Name" />
      <input type="text" placeholder="Last Name" name="Last Name" />
      <input type="email" placeholder="Email Address" name="Email Address" />
      <input type="password" placeholder="Password" name="Password" />
      <button>CLAIM YOUR FREE TRIAL</button>
      <Click_Info>
        <p>
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </Click_Info>
    </Form>
  );
}

const Form = styled.form`
  width: 327px;
  height: 442px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  margin: 2.4rem 2.4rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  input {
    width: 279px;
    height: 56px;
    border-radius: 5px;
    border: 1px solid #dedede;
    background: #fff;
    padding-left: 2rem;
  }
  button {
    width: 279px;
    height: 56px;
    border-radius: 5px;
    background: #38cc8b;
    box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
    color: #fff;
    border: none;
    text-align: center;
    letter-spacing: 1px;
    font-size: 15px;
    line-height: 26px;
  }
`;
const Click_Info = styled.div`
  width: 249px;
  font-size: 11px;
  line-height: 21px;
  p {
    color: #bab7d4;
    text-align: center;
    font-weight: 500;
    span {
      color: #ff7979;
      font-weight: 700;
    }
  }
`;