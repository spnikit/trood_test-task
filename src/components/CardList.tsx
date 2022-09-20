import React from 'react';
import {ItemAndFraction} from "../models";

interface CardListProps {
    children?: React.ReactNode;
    items: ItemAndFraction[];
    render: (elem: ItemAndFraction) => JSX.Element;
}

function CardList(props: CardListProps) {
    return (
        <div className="flex gap-4">
            {props.items.map(props.render)}
        </div>
    );
}

export default CardList;