import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyles, LibStyleOverrides } from './Theme';
import { Canvas, Divider, Header, SideNav } from '../components';
import { Container, MainSection } from './layout.styles';

const AppLayout = () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <LibStyleOverrides />
            <Header />
            <Container>
                <SideNav />
                <MainSection>
                    <Canvas />
                    <Divider variant='horizontal' />
                </MainSection>
            </Container>
        </ThemeProvider>
    );
};

export default AppLayout;
