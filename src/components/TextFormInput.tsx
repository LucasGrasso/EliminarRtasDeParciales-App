import React, { useRef } from 'react';
import styles from '../styleComponents/FormInput.module.css';
import PresetsSelect from './PresetsSelect';

type TextFormInputProps = {
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    id?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    pattern?: string;

};

export default function TextFormInput({ name, label, placeholder, required, id, onChange, onKeyDown, pattern }: TextFormInputProps) {
    const inputElement = useRef<HTMLInputElement>(null);

    const onPresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (inputElement.current) {
            inputElement.current.value = e.target.value;
        }
    }

    return (
        <div className={styles.wFull}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <div className='flex-row-no-gap'>
                <input
                    type="text"
                    id={id}
                    ref={inputElement}
                    name={name}
                    pattern={pattern}
                    className={styles.TextFormInput}
                    required={required}
                    onChange={onChange}
                    placeholder={placeholder}
                    onKeyDown={onKeyDown}
                />
                <PresetsSelect onPresetChange={onPresetChange} />
            </div>
        </div>
    );
}