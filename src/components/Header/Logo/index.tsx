import styled from 'styled-components';

const LogoImage = styled.img`
    width: 5rem;
    height: auto;
`;

const Logo = () => (
    <a href='/' aria-label='Home'>
        <LogoImage src='/logo.svg' alt='Logo' />
    </a>
);

export default Logo;
