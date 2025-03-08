/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLE_VARIANTS = {
  small: {
    height: 8,
    padding: 0,
    radius: 4
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8
  }
}

const ProgressBar = ({ value, size }) => {
  
  const styleTokens = STYLE_VARIANTS[size];
  const id = crypto.randomUUID();
  const labelId = `${id}-loadinglabel`;

  return (
    <div>
      <VisuallyHidden id={labelId}>
        Loading: {value} Percent
      </VisuallyHidden>
      <Progress
        role="progressbar" 
        aria-labelledby={labelId} 
        aria-valuenow={value}
        style={{
          "--padding": styleTokens.padding + "px",
          "--radius": styleTokens.radius + "px"
        }}>
          <BarWrapper>
            <Bar style={{
              "--width": value + "%",
              "--height": styleTokens.height + "px",
            }}/>
          </BarWrapper>
      </Progress>
    </div>
  );
};

const Progress = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
  overflow: clip;
  box-shadow: inset 0 2px 4px 0 ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  --inner-radius: calc(var(--radius) - var(--padding));
  border-radius: var(--inner-radius);
  overflow: clip;
`;
/* role presentation */
const Bar = styled.div`
  height: var(--height);
  border-radius: var(--inner-radius) 0 0 var(--inner-radius);
  width: min(100%, var(--width));
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
