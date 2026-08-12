import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center
`;
export const BackLink = styled(Link)`
  
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
    background-color: #514868;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;`;


export const NotFoundSpan = styled.span`
  font-weight: bold;
  color: #e74c3c;
  margin-top: 30px;
  font-size: 3rem;
`;

