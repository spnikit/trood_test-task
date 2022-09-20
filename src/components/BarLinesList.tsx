import React from 'react';

interface BarLinesListProps {
    children: React.ReactNode;
}

function BarLinesList(props: BarLinesListProps) {
    return (
        <div className="flex gap-1 mb-3">
            {props.children}
        </div>
    );
}

export default React.memo(BarLinesList);