import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  background:
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80")
      center/cover no-repeat;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  width: min(88vh, 820px);
  height: min(88vh, 820px);
  padding: 2.5rem;
  margin-bottom: 50px;
  background: rgba(14, 116, 144, 0.25);
  border-radius: 50%;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const StyledLogoImg = styled.img`
  width: 280px;
  height: 280px;
  object-fit: contain;
  margin-top: -80px;
`;

export const FormTitle = styled.h2`
  color: #ffffff;
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0;
  text-align: center;
  font-family: serif;
`;

export const StyledInput = styled.input`
  width: 68%;
  padding: 1rem 1.2rem;
  background-color: #1e293b;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1.15rem;
  outline: none;
  text-align: center;

  &::placeholder {
    color: #94a3b8;
    text-transform: uppercase;
    font-size: 0.95rem;
    letter-spacing: 1px;
  }
`;

export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 18px;
  margin-top: 4px;
  display: block;
  text-align: left;
`;

export const SubmitButton = styled.button`
  width: 68%;
  padding: 1rem;
  background-color: #1e293b;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover {
    background-color: #0f172a;
  }
`;
