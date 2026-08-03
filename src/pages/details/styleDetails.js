import styled from 'styled-components';

export const DetailsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 80px);
  width: 100%;
  padding: 30px 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80")
    center/cover no-repeat;
`;

export const HeaderArea = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const BackButton = styled.button`
  padding: 8px 16px;
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
  }
`;

export const RecipeTitle = styled.h1`
  font-size: 2rem;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  margin: 0 auto;
`;

export const DetailsCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  max-width: 1000px;
  background-color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(5px);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

export const InfoColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;

  h3 {
    color: #2c3e50;
    margin-bottom: 8px;
    border-bottom: 2px solid #00a8b5;
    padding-bottom: 4px;
  }
`;

export const CalorieBadge = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #00a8b5;
  background-color: #e0f7fa;
  padding: 8px 14px;
  border-radius: 20px;
  display: inline-block;
  width: fit-content;
`;

export const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
`;

export const Tag = styled.span`
  font-size: 0.75rem;
  background-color: #514868;
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 6px;
`;

export const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    max-width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 14px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const IngredientsColumn = styled.div`
  flex: 1.2;

  h3 {
    color: #2c3e50;
    margin-bottom: 12px;
    border-bottom: 2px solid #00a8b5;
    padding-bottom: 4px;
  }

  ol, ul {
    padding-left: 20px;
    color: #34495e;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  li { margin-bottom: 6px;}
`;

export const SourceButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 18px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #00a8b5;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #008c97;
    transform: translateY(-2px);
  }
`;