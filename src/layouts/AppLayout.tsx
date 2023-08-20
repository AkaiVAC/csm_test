import { DeviceType } from '../../types/enums';
import { Canvas, Divider, Header, SideNav } from '../components';
import { useDeviceStore } from '../contexts/deviceWidth/index.hook';
import { TopBG, Container, MainSection, BottomBG } from './layout.styles';

const AppLayout = () => {
    return (
        <>
            <TopBG />
            <Header />
            <Container>
                <SideNav />
                <MainSection>
                    <Canvas />
                    {useDeviceStore().deviceType > DeviceType.Mobile && (
                        <Divider variant='horizontal' />
                    )}
                </MainSection>
            </Container>
            <BottomBG />
        </>
    );
};

export default AppLayout;
