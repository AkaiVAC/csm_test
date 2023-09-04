import React from 'react';
import { DeviceType } from '../../types/enums';
import { Divider, Header, SideNav } from '../components';
import { useDeviceStore } from '../stores/device';
import { Container, MainSection } from './index.styles';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    const deviceStore = useDeviceStore();
    return (
        <>
            <Header />
            <Container>
                {deviceStore.deviceType >= DeviceType.Tablet && <SideNav />}
                {deviceStore.deviceType > DeviceType.Mobile && (
                    <Divider variant='vertical' />
                )}
                <MainSection>
                    {children}
                    {deviceStore.deviceType > DeviceType.Mobile && (
                        <Divider variant='horizontal' />
                    )}
                </MainSection>
                {deviceStore.deviceType < DeviceType.Tablet && <SideNav />}
            </Container>
        </>
    );
};

export default DefaultLayout;
