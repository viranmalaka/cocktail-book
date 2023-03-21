import React, { PropsWithChildren } from 'react';
import './style.scss';

type FlexBoxProps = {
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItem?: 'center' | 'flex-start' | 'flex-end' | 'start' | 'end';
  direction?: 'row' | 'column';
  wrap?: boolean;
  className?: string;
};

const FlexBox = (props: PropsWithChildren<FlexBoxProps>) => {
  let className = 'd-flex';
  if (props.justifyContent) {
    className += ` jc-${props.justifyContent}`;
  }
  if (props.alignItem) {
    className += ` ai-${props.alignItem}`;
  }
  if (props.direction) {
    className += ` fd-${props.direction}`;
  }
  if (props.className) {
    className += ` ${props.className}`;
  }
  if (props.wrap) {
    className += ' wrap';
  }
  return <div className={className}>{props.children}</div>;
};

export default FlexBox;