import styled from 'styled-components';

export const HorizontalNav = styled.nav<{ theme: ThemeOptions }>`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            gap: 1rem;
        }
    }
`;

export const VerticalNav = styled(HorizontalNav)`
    height: calc(100dvh - 7.6rem);
    padding: 1rem;

    flex-direction: column;
    gap: 1rem;

    & > :last-child {
        margin-top: auto;
    }

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.tablet}px`}) {
        & {
            height: calc(100dvh - 5.8rem);
        }
    }

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            width: 100%;
            height: fit-content;
            padding: 0.5rem 0;
            background-color: ${({ theme }) => theme.colors.tertiary};

            flex-direction: row;
            justify-content: space-around;
        }
    }
`;
