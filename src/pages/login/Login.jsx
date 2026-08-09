import { useState } from "react";
import { LoginWrapper, StyledForm, FormTitle, StyledInput, SubmitButton, StyledLogoImg, ErrorMessage } from "./LoginStyle";
import meal2 from '../../assets/meal2.svg'
import { useNavigate } from "react-router-dom";
import { z } from 'zod';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({})
  const navigate = useNavigate();

  const formSchema = z.object({
    user: z.string().min(3, 'Username must be at least 3 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters')
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = formSchema.safeParse({ user, password, });
    if (!result.success) {
      const formatted = result.error.format()
      setError({
        user: formatted.user?._errors[0],
        password: formatted.password?._errors[0]
      })
      return;
    }
    localStorage.setItem('user', JSON.stringify({ user, password }));
    navigate('/');
  }

  return (
    <LoginWrapper>

      <StyledForm onSubmit={handleSubmit}>
        <StyledLogoImg src={meal2} alt="Chef Logo" />

        <FormTitle>&lt;ED8EN/&gt; Recipe</FormTitle>

        <StyledInput
          type="text"
          placeholder="User name"
          name='text'
          id='text'
          autoComplete="current-text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        {error.user && (
          <ErrorMessage>
            {error.user}
          </ErrorMessage>
        )}

        <StyledInput
          type="password"
          placeholder="password"
          autoComplete="current-password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && (
          <ErrorMessage>
            {error.password}
          </ErrorMessage>
        )}

        <SubmitButton type="submit">Login</SubmitButton>
      </StyledForm>
    </LoginWrapper>
  );
};

