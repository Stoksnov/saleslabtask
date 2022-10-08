import './index.sass';
import React, { useState } from "react";

const Dropdown = () => {
    const options = ['Sales', 'Marketing', 'Partners'];

    const [currentOption, setCurrentOption] = useState('All Pipelines');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    return (
        <div className={`Dropdown${dropdownOpen ? ' is-open' : ''}`} onBlur={() => setDropdownOpen(false)} tabIndex="-1">
            <div className="Dropdown__control" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <div className="Dropdown__placeholder">{currentOption}</div>
                <div className="Dropdown__arrow">
                    <svg className="Dropdown__arrow-icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3087 7.15386C11.0625 7.3996 8.47542 9.8005 8.47542 9.8005C8.34326 9.9316 8.17127 9.99744 7.99929 9.99744C7.8273 9.99744 7.65531 9.9316 7.52435 9.8005C7.52435 9.8005 4.93606 7.3996 4.69105 7.15386C4.44484 6.90813 4.42794 6.46604 4.69105 6.20443C4.95296 5.94224 5.31927 5.92166 5.64092 6.20443L7.99929 8.40722L10.3577 6.20443C10.6793 5.92166 11.0462 5.94224 11.3087 6.20443C11.5718 6.46604 11.5555 6.90813 11.3087 7.15386Z" />
                    </svg>
                </div>
            </div>
            <div className="Dropdown__menu">
                {options.map(option =>
                    <div
                        className={currentOption == option ?
                            'Dropdown__option Dropdown__option_active' : 'Dropdown__option'}
                        onClick={(e) => {
                            setCurrentOption(e.target.innerText);
                            setDropdownOpen(false);
                        }}
                        key={option}
                    >
                        {option}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dropdown;