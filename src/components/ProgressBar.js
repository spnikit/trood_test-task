import React, {useMemo} from 'react';
import BarLine from './BarLine';
import InfoCard from './InfoCard';

function ProgressBar({items}) {

    // get total value from items
    const total = useMemo(() => items
        .map((item) => item.value)
        .reduce((acc, curr) => acc + curr, 0), [items]);

    // get fractions and add to arr
    const fractions = useMemo(() => items.map((item) => ({
        fraction: Math.floor((item.value / total) * 100 * 100) / 100,
        ...item,
    })), [items]);

    const barsArray = useMemo(() => fractions.map((item) =>
        Array.from(Array(Math.ceil(item.fraction)))
            .flatMap((_) => (
                <BarLine color={item.color}/>
            ))
    ), [items]);

    return (
        <>
            <div className="flex gap-1 mb-3">{barsArray}</div>
            <div className="flex gap-4">
                {fractions.map(({name, color, value, fraction}) => (
                    <InfoCard
                        key={name}
                        name={name}
                        color={color}
                        value={value}
                        fraction={fraction}
                    />
                ))}
            </div>
        </>
    );
}

export default ProgressBar;
