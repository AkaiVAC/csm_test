import axios from 'axios';
import { useState } from 'react';
import Button from '.';
import { ProgressCircle } from '..';
import { ImageCanvasTool, DeviceType } from '../../../types/enums';
import { useCanvasStore } from '../../stores/canvas';
import { useDeviceStore } from '../../stores/device';

const ImageMaskDownloadButton = () => {
    const deviceStore = useDeviceStore();
    const [downloadProgress, setDownloadProgress] = useState(0);

    const downloadImageMask = () => {
        let link: HTMLAnchorElement;
        axios({
            url: '/obj_mask.jpeg',
            method: 'GET',
            responseType: 'blob',
            onDownloadProgress: (progressEvent) => {
                if (progressEvent.bytes) {
                    const percentComplete =
                        (progressEvent.loaded / (progressEvent.total || 1)) *
                        100;
                    setDownloadProgress(Number(percentComplete.toFixed(2)));
                }
            },
        })
            .then((response) => {
                const url = window.URL.createObjectURL(
                    new Blob([response.data])
                );
                link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'image_mask.jpg');
                document.body.appendChild(link);
                link.click();
            })
            .finally(() => {
                link.remove();
            });
    };

    return (
        <Button
            variant='flat'
            icon={
                Boolean(downloadProgress) && downloadProgress !== 100
                    ? undefined
                    : { src: 'download', location: 'left' }
            }
            disabled={
                useCanvasStore().state.activeTool !== ImageCanvasTool.Segment
            }
            onClick={downloadImageMask}
        >
            {Boolean(downloadProgress) && downloadProgress !== 100 && (
                <ProgressCircle
                    size={deviceStore.deviceType >= DeviceType.Tablet ? 25 : 30}
                    progress={downloadProgress}
                />
            )}
            {deviceStore.deviceType >= DeviceType.Tablet && 'Download'}
        </Button>
    );
};

export default ImageMaskDownloadButton;
