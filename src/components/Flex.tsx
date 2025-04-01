import { ComponentProps, CSSProperties, ReactNode } from 'react';

type DivProps = ComponentProps<'div'>;
interface FlexProps extends DivProps {
  children: ReactNode;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string;
  style?: CSSProperties;
  className?: string;
}
export function Flex({
  children,
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'nowrap',
  gap = '0px',
  style = {},
  className = '',
  ...rest
}: FlexProps) {
  const flexStyle: CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    gap: gap,
    ...style,
  };
  return (
    <div className={className} style={flexStyle} {...rest}>
      {children}
    </div>
  );
}
