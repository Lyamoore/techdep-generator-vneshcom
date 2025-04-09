import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { DragIcon } from '../../ui/Icons';
import styles from './Option.module.css';

interface Props {
  label: string;
  value: string | number;
  idx: number;
  name: string;
}

export const Option = ({ label, value, idx, name }: Props) => {
  const { setNodeRef, setActivatorNodeRef, listeners, transform, transition } = useSortable({
    id: value,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className={styles.option}>
      <input type="checkbox" style={{ display: 'none' }} name={name} value={value} checked disabled />

      <span className={styles.idx}>{idx}</span>
      <span>{label}</span>
      <span ref={setActivatorNodeRef} className={styles.dragIcon} {...listeners}>
        <DragIcon />
      </span>
    </div>
  );
};
