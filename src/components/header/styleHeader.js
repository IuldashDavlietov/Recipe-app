import styled from "styled-components";

export const HeaderContainer =
  styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    background: transparent;
  `;

export const HeaderTitle =
  styled.h1`
    font-size: 2.4rem;
    color: #ffffff;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  `;

// Styles for Form ----->

export const FormContainer =
  styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 12px;
  `;

export const SearchInput =
  styled.input`
    padding: 12px 16px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    outline: none;
    width: 220px;
  `;

export const SelectCategory =
  styled.select`
    padding: 12px 16px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    background-color: #ffffff;
    cursor: pointer;
    outline: none;
  `;

// Кнопка поиска в цвет штанов
export const SearchButton =
  styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
    background-color: #514868;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background-color: #3b344d;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;