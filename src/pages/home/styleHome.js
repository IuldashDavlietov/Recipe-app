import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 80px);
  width: 100%;
  padding: 20px;
  background:
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80")
      center/cover no-repeat;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  justify-items: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 30px;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;

  img {
    width: 100%;
    max-width: 1000px;
    height: auto;
    filter: drop-shadow(0 10px 20p rgba(0, 0, 0, 0.4));
  }

  p {
    margin-top: 20px;
    font-size: 1.4rem;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  }
`;

export const ErrorMessage = styled.p`
  font-weight: bold;
  color: #e74c3c;
  margin-top: 30px;
`;

export const StatusText = styled.p`
  font-size: 1.1rem;
  color: #7f8c8d;
`;

export const RecipeCardContainer = styled.article`
  width: 300px;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top;
  border-radius: 10px 10px 0 0;
`;

export const RecipeTitle = styled.h3`
  font-size: 1.1rem;
  color: #2c3e50;
  margin: 15px 10px 8px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 90%;
`;

export const RecipeCalories = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #00a8b5;
  background-color: #e0f7fa;
  padding: 4px 12px;
  border-radius: 20px;
`;

export const RecipeButton = styled.button`
  padding: 10px 18px;
  margin-top: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #514868;

  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3b344d;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;
