import styled from 'styled-components'


export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    padding: 64px;
    margin: 64px auto;

    border-radius: 24px;

    >h1{
        color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        margin-bottom:24px;
        text-align: center;
    }
`;