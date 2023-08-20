import { DeviceType } from '../../types/enums';
import { Canvas, Divider, Header, SideNav } from '../components';
import { useDeviceStore } from '../contexts/deviceWidth/index.hook';
import { TopBG, Container, MainSection, BottomBG } from './layout.styles';

const AppLayout = () => {
    const deviceStore = useDeviceStore();
    return (
        <>
            <TopBG />
            <Header />
            <Container>
                {deviceStore.deviceType >= DeviceType.Tablet && <SideNav />}
                {deviceStore.deviceType > DeviceType.Mobile && (
                    <Divider variant='vertical' />
                )}
                <MainSection>
                    <Canvas />
                    {deviceStore.deviceType > DeviceType.Mobile && (
                        <Divider variant='horizontal' />
                    )}
                </MainSection>
                {deviceStore.deviceType < DeviceType.Tablet && <SideNav />}
            </Container>
            <BottomBG />
        </>
    );
};

export default AppLayout;
