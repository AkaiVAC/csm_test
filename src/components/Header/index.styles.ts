import styled from 'styled-components';

export const HeaderContainer = styled.header<{ theme: ThemeOptions }>`
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

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.tablet}px`}) {
        & {
            padding-block: 0.5rem;

            border-bottom: 0.0625rem solid;
            border-radius: unset;
            border-color: ${({ theme }) => theme.colors.border};
        }
    }

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            padding-inline: 0.5rem;
        }
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const LogoImage = styled.img`
    width: 5rem;
    height: auto;
`;
