import React from 'react';

function BarLine({width = 10, height = 30, color}) {

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
