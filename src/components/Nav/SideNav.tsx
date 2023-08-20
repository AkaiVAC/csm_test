import { Tooltip } from 'react-tooltip';
import Nav from '.';
import { Button, Divider } from '..';

const SideNav = () => {
    return (
        <>
            <Nav variant='vertical'>
                <Tooltip
                    anchorSelect='.overview'
                    content='Overview'
                    place='right'
                />
                <Button
                    variant='sidebar'
                    icon={{ location: 'left', src: 'overview' }}
                >
                    Overview
                </Button>
                <Tooltip
                    anchorSelect='.segmentVideo'
                    content='Video segmentation'
                    place='right'
                />
                <Button
                    variant='sidebar'
                    icon={{ location: 'left', src: 'segmentVideo' }}
                >
                    Video Segmentation
                </Button>
                <Tooltip
                    anchorSelect='.feedback'
                    content='Go to feedback page'
                    place='right'
                />
                <Button
                    variant='sidebar'
                    icon={{ location: 'left', src: 'feedback' }}
                    onClick={() =>
                        window.open('https://forms.gle/XhCeamGgyiF888w1A')
                    }
                >
                    Submit Feedback
                </Button>
            </Nav>
            <Divider variant='vertical' />
        </>
    );
};

export default SideNav;
