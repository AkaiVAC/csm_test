import styled from 'styled-components';

export const HeaderContainer = styled.header`
    height: 2.75rem;

    padding: 0.9375rem 1.25rem 0.9375rem 1.375rem;
    backdrop-filter: blur(2.1875rem);
    background-color: hsla(0, 0%, 100%, 0.6);
    border-radius: 0.625rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    z-index: 1;
`;

export const LogoImage = styled.img`
    width: 5rem;
    height: auto;
`;
