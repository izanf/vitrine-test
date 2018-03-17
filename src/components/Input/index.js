import React from 'react';
import styled from 'styled-components';
import { string, func, bool } from 'prop-types';

const InputGroup = styled.div`
display: flex;
flex-direction: column;
margin: 0 .5rem;
`;

const InputLabel = styled.label`
font-family: Oswald;
`;

const InputContent = styled.input`
font-family: Oswald;
font-weight: 200;
text-indent: 3px;
border: 1px solid #CCC;
border-radius: 3px;

&:focus {
  outline: none;
}
`;

const Input = ({
  id, placeholder, label, onChange, value, disabled
}) => (
  <InputGroup>
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <InputContent
      id={id}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      value={value}
      disabled={disabled}
    />
  </InputGroup>
);

Input.propTypes = {
  id: string,
  placeholder: string,
  label: string,
  onChange: func,
  value: string,
  disabled: bool
};

Input.defaultProps = {
  disabled: false
};

export default Input;
