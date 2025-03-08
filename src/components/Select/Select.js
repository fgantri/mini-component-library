import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <span>{displayedValue}</span>
      <Icon 
        id="chevron-down"
        strokeWidth={2}
      />
      <select value={value} onChange={onChange}>
        {children}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  width: fit-content;

  &:has(select:focus) {
    outline: 2px solid ${COLORS.primary};
  }

  &:hover {
    color: black;
  }

  select {
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
  }
`;

export default Select;
