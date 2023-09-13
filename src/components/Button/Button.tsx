import React from 'react';
import type { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { isString } from 'lodash/fp';
import type { A11yProps } from '../../types/A11yProps';
import type { BaseProps } from '../../types/BaseProps';

export type ButtonProps =
BaseProps &
A11yProps &
{
  type?: 'button' | 'submit' | 'reset',
} & (
  PropsWithChildren<{
    label: string
  }> | {
    label?: string,
    children: string | (string | undefined)[]
  }
);

const Button = ({
  type = 'button',
  label,
  className,
  children,
}: ButtonProps) => (
  <button
    // eslint-disable-next-line react/button-has-type -- typescript safe
    type={type}
    className={clsx(className)}
    aria-label={(label ?? (isString(children) ? children : ''))}
  >
    {children}
  </button>
);
export default Button;
