import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { FormEvent } from "react";
export default function FormValidation() {
  interface IInput {
    FirstName: string;
    LastName: string;
    EmailAddress: string;
    Password: string;
  }
  const [inputValues, setInputValues] = useState<IInput>({
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    Password: "",
  });

  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [emailAddressError, setEmailAddressError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let globalError = false;
    if (!inputValues.FirstName) {
      setFirstNameError(true);
      globalError = true;
    }
    if (!inputValues.LastName) {
      setLastNameError(true);
      globalError = true;
    }
    if (!emailRegex.test(inputValues.EmailAddress)) {
      setEmailAddressError(true);
      globalError = true;
    }
    if (!inputValues.Password) {
      setPasswordError(true);
      globalError = true;
    }

    if (globalError == false) {
      setInputValues({
        FirstName: "",
        LastName: "",
        EmailAddress: "",
        Password: "",
      });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    name == "FirstName" && setFirstNameError(false);
    name == "LastName" && setLastNameError(false);
    name == "EmailAddress" && setEmailAddressError(false);
    name == "Password" && setPasswordError(false);
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="First Name"
        name="FirstName"
        value={inputValues.FirstName}
        onChange={handleChange}
        error={firstNameError}
      />

      <ErrorMessage error={firstNameError}>
        First Name cannot be empty
      </ErrorMessage>

      <Input
        type="text"
        placeholder="Last Name"
        name="LastName"
        value={inputValues.LastName}
        onChange={handleChange}
        error={lastNameError}
      />

      <ErrorMessage error={lastNameError}>
        Last Name cannot be empty
      </ErrorMessage>

      <Input
        type="text"
        placeholder="Email Address"
        name="EmailAddress"
        value={inputValues.EmailAddress}
        onChange={handleChange}
        error={emailAddressError}
      />

      <ErrorMessage error={emailAddressError}>
        Looks like this is not an email
      </ErrorMessage>

      <Input
        type="password"
        placeholder="Password"
        name="Password"
        value={inputValues.Password}
        onChange={handleChange}
        error={passwordError}
      />

      <ErrorMessage error={passwordError}>
        Password cannot be empty
      </ErrorMessage>

      <button type="submit">CLAIM YOUR FREE TRIAL</button>
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
  width: 32.7rem;
  height: 44.2rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  margin: 2.4rem 2.4rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    width: 54rem;
    height: 56.2rem;
  }

  button {
    width: 27.9rem;
    height: 5.6rem;
    border-radius: 5px;
    background: #38cc8b;
    box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
    color: #fff;
    border: none;
    text-align: center;
    letter-spacing: 1px;
    font-size: 15px;
    line-height: 26px;
    margin-top: 1rem;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      width: 46rem;
      height: 5.6rem;
    }
  }
`;
const Click_Info = styled.div`
  width: 24.9rem;
  font-size: 1.1rem;
  line-height: 2.1rem;
  margin-bottom: 1rem;
  @media screen and (min-width: 768px) {
    width: 36.7rem;
  }
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
const Input = styled.input<{ error?: boolean }>`
  width: 27.9rem;
  height: 5.6rem;
  border-radius: 5px;
  background: ${(props) => (props.error ? "url(/images/icon-error.svg) " : "")};
  background-repeat: no-repeat;
  background-position: 24rem;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #dedede")};
  padding-left: 2rem;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    width: 46rem;
    height: 5.6rem;
    margin-top: 3rem;
    background-position: 40rem;
  }
`;

const ErrorMessage = styled.p<{ error?: boolean }>`
  color: #ff7979;
  text-align: right;
  height: 6px;
  font-size: 11px;
  font-style: italic;
  font-weight: 500;
  line-height: normal;
  margin-left: 10rem;

  display: ${(props) => (props.error ? "block" : "none")};
  @media screen and (min-width: 768px) {
    margin-left: 24rem;
  }
`;
