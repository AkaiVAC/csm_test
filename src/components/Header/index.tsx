import { Nav, Icon, Dropdown } from '..';
import { HeaderContainer, LogoImage } from './index.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <a href='/' aria-label='Home'>
                <LogoImage src='/logo.svg' alt='Logo' width='79' height='26' />
            </a>
            <Nav variant='horizontal'>
                <Dropdown
                    icon='chevronDown'
                    name='Instructions'
                    entries={[
                        { name: 'Capture instructions', destination: '#' },
                        { name: 'Usage instructions', destination: '#' },
                    ]}
                ></Dropdown>
                <Icon
                    variant='circle'
                    src='notifications'
                    alt='Notification button'
                    tabIndex={0}
                ></Icon>
                <Icon
                    variant='circle'
                    src='user'
                    alt='user profile button'
                    tabIndex={0}
                ></Icon>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
