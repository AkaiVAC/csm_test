import { Theme } from '../../themes';

const ProgressCircle = ({
    size,
    progress,
}: {
    size: number;
    progress: number;
}) => (
    <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns='http://www.w3.org/2000/svg'
    >
        <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2.5}
            fill='none'
            stroke={Theme.colors.border}
            strokeWidth={size / 7.5}
        />
        <circle
            id='progressCircle'
            cx={size / 2}
            cy={size / 2}
            r={size / 2.5}
            fill='none'
            stroke={Theme.colors.success}
            strokeWidth={size / 7.5}
            strokeDasharray={`${progress}, 100`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            style={{
                transition: 'all 0.2s',
            }}
        />
    </svg>
);

export default ProgressCircle;
