import styles from '../styleComponents/FormInput.module.css';

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
    return (
        <div className={styles.wFull}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <div>
                <input
                    type="text"
                    id={id}
                    name={name}
                    pattern={pattern}
                    className={styles.TextFormInput}
                    required={required}
                    onChange={onChange}
                    placeholder={placeholder}
                    onKeyDown={onKeyDown}
                />
            </div>
        </div>
    );
}