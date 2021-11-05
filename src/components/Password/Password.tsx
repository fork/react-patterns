import React, { useState } from 'react';

import Button from '../Button';
import { InputProps } from '../Input';

import StyledPassword from './Password.style';

export type PasswordProps = Omit<InputProps, 'type' | 'list'>;

const Password = (props: PasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledPassword type={showPassword ? 'text' : 'password'} {...props}>
      <Button
        label={showPassword ? 'Hide password' : 'Show password'}
        onClick={() => setShowPassword(prev => !prev)}
        icon={showPassword ? 'EyeOff' : 'Eye'}
        iconPosition="only"
        size="small"
        variant="secondary"
      />
    </StyledPassword>
  );
};

export default Password;
