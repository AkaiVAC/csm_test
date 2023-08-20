import { Tooltip } from 'react-tooltip';
import { Nav, Icon, Dropdown } from '..';
import { DeviceType } from '../../../types/enums';
import { useDeviceStore } from '../../contexts/deviceWidth/index.hook';
import { HeaderContainer, LogoContainer, LogoImage } from './index.styles';

const Header = () => (
    <HeaderContainer>
        <LogoContainer>
            <Tooltip
                anchorSelect='.chevronLeft'
                content='Go back'
                place='right'
            />
            <Icon
                variant='flat'
                src='chevronLeft'
                alt='back button'
                width='12'
                height='12'
                tabIndex={0}
            />
            <a href='/' aria-label='Home' style={{ display: 'flex' }}>
                <LogoImage src='/logo.svg' alt='Logo' width='79' height='26' />
            </a>
        </LogoContainer>
        <Nav variant='horizontal'>
            {useDeviceStore().deviceType >= DeviceType.Tablet ? (
                <Dropdown
                    icon='chevronDown'
                    name='Instructions'
                    entries={[
                        { name: 'Capture instructions', destination: '#' },
                        { name: 'Usage instructions', destination: '#' },
                    ]}
                />
            ) : (
                <>
                    <Tooltip
                        anchorSelect='.help'
                        content='Instructions'
                        place='bottom'
                    />
                    <Icon variant='circle' src='help' alt='Help' tabIndex={0} />
                </>
            )}
            <Tooltip
                anchorSelect='.notifications'
                content='Notifications'
                place='bottom'
            />
            <Icon
                variant='circle'
                src='notifications'
                alt='Notification button'
                tabIndex={0}
            />
            <Tooltip
                anchorSelect='.user'
                content='User profile'
                place='bottom'
            />
            <Icon
                variant='circle'
                src='user'
                alt='user profile button'
                tabIndex={0}
            />
        </Nav>
    </HeaderContainer>
);

export default Header;
