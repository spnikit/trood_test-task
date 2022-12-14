import React from 'react';

function InfoCard({color, name, value, fraction}) {

    const style = {
        backgroundColor: color
    }

    return (
        <div className={'flex items-center gap-1'}>
            <div className={'rounded-full w-[10px] h-[10px]'}
                 style={style}
            >
            </div>
            <div>{name}:</div>
            <div>{value}</div>
            <div>({fraction} %)</div>
        </div>
    );
}

export default React.memo(InfoCard);
