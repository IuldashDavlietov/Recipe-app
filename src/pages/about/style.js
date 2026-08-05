import styled from "styled-components";

export const AboutContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  width: 100%;
  padding: 40px 20px;
  background:
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80")
      center / cover no-repeat;
  box-sizing: border-box;
`;

export const AboutImg = styled.img`
  width: 50vw;
  max-width: 750px;
  min-width: 320px;
  height: auto;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.4));
`;

export const AboutTitle = styled.h2`
  margin: 20px 0;
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);

  span {
    color: #00a8b5;
  }
`;

export const InfoCard = styled.div`
  width: 90%;
  max-width: 950px;
  padding: 25px 35px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  text-align: right;

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #000000;
    margin-bottom: 12px;
  }

  p {
    font-size: 1.15rem;
    font-weight: 600;
    color: #000000;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    font-size: 1.1rem;
    font-weight: 700;
    color: #000000;
    text-decoration: underline;

    span {
      font-weight: 500;
      color: #000000;
    }

    &:hover {
      color: #00a8b5;
    }
  }
`;
