import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  MouseSensor,
  TouchSensor,
  type UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import cn from 'classnames';
import { useState } from 'react';

import styles from './InputDNDList.module.css';
import { Option } from './Option';

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  title: string;
  name: string;

  options: Option[];

  className?: string;
}

export const InputDNDList = ({ title, name, options, className }: Props) => {
  const optionsMap = options.reduce(
    (acc, option) => {
      acc[option.value] = option;
      return acc;
    },
    {} as Record<Option['value'], Option>,
  );

  const [order, setOrder] = useState<UniqueIdentifier[]>(Object.keys(optionsMap));
  const sensors = useSensors(useSensor(TouchSensor), useSensor(MouseSensor));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setOrder((items) => {
        const idxFrom = items.indexOf(active.id);
        const idxTo = items.indexOf(over.id);

        return arrayMove(items, idxFrom, idxTo);
      });
    }
  }

  return (
    <div className={cn(styles.wrapper, className)}>
      <h4 className={styles.title}>{title}</h4>

      <div className={styles.list}>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={order} strategy={verticalListSortingStrategy}>
            {order.map((optionValue, idx) => {
              const option = optionsMap[optionValue];
              return <Option key={option.value} label={option.label} value={option.value} idx={idx} name={name} />;
            })}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};
