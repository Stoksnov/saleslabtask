import './index.sass';
import React, { useState } from 'react';

const Period = () => {
    const periodItems = ['Month', 'Week', 'Yesterday', 'Today'];
    const [period, setPeriod] = useState(null);

    return (
        <ul className="Period">
            {periodItems.map(item =>
                <li
                    className={item === period ? 'Period__item Period__item_active' : 'Period__item'}
                    onClick={(e) => setPeriod(e.target.innerText)}
                    key={item}>{item}
                </li>
            )}
        </ul>
    );
}

export default Period;