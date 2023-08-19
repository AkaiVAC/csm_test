import { Nav, Icon, Dropdown } from '..';
import { HeaderContainer, LogoImage } from './index.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <a href='/' aria-label='Home'>
                <LogoImage src='/logo.svg' alt='Logo' />
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
                ></Icon>
                <Icon
                    variant='circle'
                    src='user'
                    alt='user profile button'
                ></Icon>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
