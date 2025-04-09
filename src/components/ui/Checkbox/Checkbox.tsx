import styles from './Checkbox.module.css';

type Props = Omit<React.ComponentProps<'input'>, 'type' | 'children'> & {
  label: React.ReactNode;
};

export const Checkbox = ({ label, ...props }: Props) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" className={styles.checkbox} {...props} />
      <label htmlFor={props.id} className={styles.label}>
        <div className={styles.castom}>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M1 4.88L3.13333 6.8L7.4 2" stroke="#444444" strokeLinecap="round" />
          </svg>
        </div>
        {label}
      </label>
    </div>
  );
};
