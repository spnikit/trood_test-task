import React from 'react';

function BarLinesList(props) {
    return (
        <div className="flex gap-1 mb-3">
            {props.children}
        </div>
    );
}

export default React.memo(BarLinesList);