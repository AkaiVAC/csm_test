import { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from './Theme';
import { Divider, Header, SideNav } from '../components';

const Container = styled.div`
    margin: 0.5rem;
    margin-bottom: unset;
    height: calc(100vh - 6.625rem);

    display: grid;
    grid-template: 1fr / 16rem 1px auto;
`;

const MainSection = styled.main`
    display: grid;
    grid-template: 90% 10% / 1fr;
    align-items: start;
`;

const AppLayout = ({ children }: { children: ReactNode }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Header />
        <Container>
            <SideNav />
            <MainSection>
                {children}
                <Divider variant='horizontal' />
            </MainSection>
        </Container>
    </ThemeProvider>
);

export default AppLayout;
