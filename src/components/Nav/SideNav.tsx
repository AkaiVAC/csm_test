import Nav from '.';
import { Button, Divider } from '..';

const SideNav = () => {
    return (
        <>
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
                    onClick={() => window.open('http://www.duckduckgo.com')}
                >
                    Submit Feedback
                </Button>
            </Nav>
            <Divider variant='vertical' />
        </>
    );
};

export default SideNav;
