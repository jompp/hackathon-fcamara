import { useState, useEffect } from 'react';
import * as Progress from '@radix-ui/react-progress';
import './ProgressBar.css';

const ProgressBar = (props) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(props.progress), 400);
        return () => clearTimeout(timer);
    }, []);


    return (
    <Progress.Root className="ProgressRoot">
        <Progress.Indicator
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}
        />
    </Progress.Root>
    );
};

export default ProgressBar;
