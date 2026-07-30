import { useState } from "react";
import { LoginWrapper, StyledForm, FormTitle, StyledInput, SubmitButton, StyledLogoImg } from "./LoginStyle";
import meal2 from '../../assets/meal2.svg'

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${user}!`);
  };

  return (
    <LoginWrapper>

      <StyledForm onSubmit={handleSubmit}>
        <StyledLogoImg src={meal2} alt="Chef Logo" />
        
        <FormTitle>&lt;ED8EN/&gt; Recipe</FormTitle>
        
        <StyledInput 
          type="text"
          placeholder="User name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <StyledInput 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />

        <SubmitButton type="submit">Login</SubmitButton>
      </StyledForm>
    </LoginWrapper>
  );
}