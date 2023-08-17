import { Nav, Icon } from '..';
import Dropdown from './Dropdown';
import Logo from './Logo';
import { HeaderContainer } from './index.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
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
