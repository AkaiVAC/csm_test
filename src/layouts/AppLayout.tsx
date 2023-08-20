import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyles, LibStyleOverrides } from './Theme';
import { Canvas, Divider, Header, SideNav } from '../components';
import { TopBG, Container, MainSection, BottomBG } from './layout.styles';

const AppLayout = () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <LibStyleOverrides />
            <TopBG />
            <Header />
            <Container>
                <SideNav />
                <MainSection>
                    <Canvas />
                    <Divider variant='horizontal' />
                </MainSection>
            </Container>
            <BottomBG />
        </ThemeProvider>
    );
};

export default AppLayout;
