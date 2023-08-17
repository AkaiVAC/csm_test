import { ThemeProvider, styled } from 'styled-components';
import { Theme, GlobalStyle } from './components/Theme';
import { Button, Divider, Header, Nav } from './components';

const Container = styled.div`
    margin: 0.5rem;
    margin-bottom: unset;
    height: calc(100vh - 6.625rem);

    display: grid;
    grid-template: 1fr / 16rem 1px auto;
`;

const SubContainer = styled.div`
    display: grid;
    grid-template: 90% 10% / 1fr;
    align-items: start;
`;

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Header />
            <Container>
                <Nav variant='vertical'>
                    <Button
                        variant='flat'
                        icon={{ location: 'left', src: 'overview' }}
                    >
                        Overview
                    </Button>
                    <Button
                        variant='text'
                        icon={{ location: 'left', src: 'segmentVideo' }}
                    >
                        Video Segmentation
                    </Button>
                    <Button
                        variant='text'
                        icon={{ location: 'left', src: 'feedback' }}
                        to='http://www.duckduckgo.com'
                    >
                        Submit Feedback
                    </Button>
                </Nav>

                <Divider variant='vertical' />

                <SubContainer>
                    <Button
                        variant='text'
                        icon={{ location: 'left', src: 'feedback' }}
                        to='http://www.duckduckgo.com'
                    >
                        Submit Feedback
                    </Button>
                    <Divider variant='horizontal' />
                </SubContainer>
            </Container>
        </ThemeProvider>
    );
};

export default App;
