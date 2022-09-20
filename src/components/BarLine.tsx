import React from 'react';

interface BarLineProps{
    width?: number;
    height?: number;
    color: string
}

function BarLine({width = 10, height = 30, color}: BarLineProps) {

    const style = {
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`
    }

    return (
        <div
            className={`inline-block rounded-lg`}
            style={style}
        ></div>
    );
}

export default React.memo(BarLine);
