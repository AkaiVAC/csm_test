import styled from 'styled-components';

export const HorizontalNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const VerticalNav = styled(HorizontalNav)`
    height: calc(100vh - 10rem);

    padding: 1rem;
    padding-top: 2rem;

    flex-direction: column;
    gap: 1rem;

    & > :last-child {
        margin-top: auto;
    }
`;

export const SideNavContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${({ theme }) => `${theme.sizes.mobile}px`}) {
        & {
            width: 100%;
            height: fit-content;
            justify-content: space-evenly;
        }
    }
`;
