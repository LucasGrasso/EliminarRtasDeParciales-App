import styles from '../styleComponents/PresetsSelect.module.css';
import { presets } from '../utils/Presets';

type PresetsSelectProps = {
    onPresetChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function PresetsSelect({ onPresetChange }: PresetsSelectProps) {
    return (
        <select name='presets' id='presets' onChange={onPresetChange} className={styles.presets}>
            <option hidden className='option'>Materia</option>
            {
                Object.keys(presets).map((key) => {
                    return <option value={presets[key]} className='option' key={key}>{key}</option>
                })
            }
        </select>
    );
}