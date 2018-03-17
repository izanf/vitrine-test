import React from 'react';
import { shape, string, bool, func } from 'prop-types';
import styled from 'styled-components';

import colors from './../../config/colors';


const ButtonContent = styled.button`
font-family: Oswald;
display: flex;
align-items: center;
color: #FFF;
background: ${colors.primary};
padding: .5rem;
border: none;
border-radius: 3px;
cursor: pointer;

svg path {
  fill: #FFF;
}
`;

const Button = ({
  icon, text, disabled, onPress
}) => (
  <ButtonContent
    onClick={onPress}
    disabled={disabled}
  >
    {icon}
    {text ? <span> {text}</span> : ''}
  </ButtonContent>
);

Button.propTypes = {
  icon: shape({}),
  text: string,
  disabled: bool,
  onPress: func
};

Button.defaultProps = {
  icon: '',
  text: '',
  disabled: false
};

export default Button;
