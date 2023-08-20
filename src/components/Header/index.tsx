import { Nav, Icon, Dropdown } from '..';
import { DeviceType } from '../../../types/enums';
import { useDeviceStore } from '../../contexts/deviceWidth/index.hook';
import { HeaderContainer, LogoImage } from './index.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <a href='/' aria-label='Home'>
                <LogoImage src='/logo.svg' alt='Logo' width='79' height='26' />
            </a>
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
                    <Icon variant='circle' src='help' alt='Help' tabIndex={0} />
                )}
                <Icon
                    variant='circle'
                    src='notifications'
                    alt='Notification button'
                    tabIndex={0}
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
};

export default Header;
