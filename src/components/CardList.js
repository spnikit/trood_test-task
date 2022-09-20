import React from 'react';

function CardList(props) {
    return (
        <div className="flex gap-4">
            {props.items.map(props.render)}
        </div>
    );
}

export default CardList;