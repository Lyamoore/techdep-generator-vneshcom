import { Checkbox } from '../ui/Checkbox/Checkbox';
import styles from './CheckboxGroupWithImage.module.css';

interface ICheckboxGroupWithImage {
  title: string;
  options: IOption[];
  name: string;
}

interface IOption {
  image: string;
  label: string;
  value: string;
}

export const CheckboxGroupWithImage = ({ title, options, name }: ICheckboxGroupWithImage) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.options}>
        {options.map((option) => (
          <label key={option.value} htmlFor={option.value} className={styles.options__item}>
            <img src={option.image} alt={option.label} className={styles.img} />
            <Checkbox id={option.value} value={option.value} name={name} label={option.label} labelPosition="top" />
          </label>
        ))}
      </div>
    </div>
  );
};
