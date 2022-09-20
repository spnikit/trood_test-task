import React, {useCallback, useMemo} from 'react';
import BarLine from './BarLine';
import InfoCard from './InfoCard';
import {getFractionRoundedTo2Digits} from "../Utils";
import BarLinesList from "./BarLinesList";
import CardList from "./CardList";
import {Item, ItemAndFraction} from "../models";


interface ProgressBarProps {
    items: Item[]
}



function ProgressBar({items = []}: ProgressBarProps) {


    // get total value from items
    const total = useMemo(() => items
        .map((item) => item.value)
        .reduce((acc, curr) => acc + curr, 0), [items]);

    // get fractions and add to arr
    const fractions = useMemo(() => items.map((item) => ({
        fraction: getFractionRoundedTo2Digits(item.value, total),
        ...item,
    })), [items]);

    // compute bars
    const barsArray = useMemo(() => fractions.map((item) =>
        Array.from(Array(Math.ceil(item.fraction)))
            .flatMap((_, idx) => (
                <BarLine key={idx} color={item.color}/>
            ))
    ), [items]);


    const render = useCallback(({name, color, value, fraction}: ItemAndFraction) => (
        <InfoCard
            key={name}
            name={name}
            color={color}
            value={value}
            fraction={fraction}
        />), [items]);

    return (
        <>
            <BarLinesList>{barsArray}</BarLinesList>
            <CardList render={render} items={fractions}/>
        </>
    );
}

export default React.memo(ProgressBar);
