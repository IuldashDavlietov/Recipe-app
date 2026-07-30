import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  background: 
    linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80")
    center/cover no-repeat;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 520px;
  height: 520px;
  padding: 3rem;
  background: rgba(14, 116, 144, 0.2);
  border-radius: 50%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3); 
`;

export const StyledLogoImg = styled.img`
  width: 170px;
  height: 170px;
  object-fit: contain;
  margin-top: -70px; 
`;

export const FormTitle = styled.h2`
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
  text-align: center;
  font-family: serif;
`;

export const StyledInput = styled.input`
  width: 55%;
  padding: 0.5rem 0.8rem;
  background-color: #1e293b;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 0.85rem;
  outline: none;
  text-align: center;

  &::placeholder {
    color: #94a3b8;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 1px;
  }
`;

export const SubmitButton = styled.button`
  width: 55%;
  padding: 0.5rem;
  background-color: #1e293b;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover {
    background-color: #0f172a;
  }
`;