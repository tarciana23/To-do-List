import styled from 'styled-components'

export const Container = styled.li`
background-color: ${({theme})=> theme.COLORS.BACKGROUND_600};
  border: 1px solid ${({theme})=> theme.COLORS.BACKGROUND_700};
  border-radius: 10px;
  padding: 10px 15px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  >span{
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_600};
    cursor:pointer
  }

    >button{
    padding: 8px;
    border: none;
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS. BACKGROUND_700};
    color: ${({theme}) => theme.COLORS. BACKGROUND_800};
  }

`