import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;

  >input{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 5px;
    background-color: ${({theme}) => theme.COLORS. BACKGROUND_700};
    color: ${({theme}) => theme.COLORS. BACKGROUND_800};

    &::placeholder{
        color: ${({theme}) => theme.COLORS. BACKGROUND_800};
        text-align: center;
    }

  }
  >button{
    background-color: #5cb85c;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${({theme}) => theme.COLORS. BACKGROUND_700};
    color: ${({theme}) => theme.COLORS. BACKGROUND_800};
    }
`;
