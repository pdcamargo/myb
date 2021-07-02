import React from 'react';
import { theme, ITheme } from '@mybrief/design-system';
import styled from 'styled-components';

const colors = Object.keys(theme.colors);

type IColor = keyof ITheme['colors'];
type IVariant = keyof ITheme['colors'][IColor];
type IReverseVariant =
  keyof ITheme['colors'][IColor]['reverse'];

const ColorsContainer = styled.div`
  display: flex;

  > * {
    box-shadow: 0 0 6px 0px rgba(0, 0, 0, 0.25);
    margin: 10px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

const ColorContainer = styled.div<{
  bgColor: string;
}>`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
`;

const Components: React.FC = () => (
  <>
    {colors.map((color) => {
      const variants = Object.keys(
        theme.colors[color as IColor],
      ).filter((c) => c !== 'reverse');

      return (
        <ColorsContainer key={color}>
          {variants.map((variant) => {
            const bgColor =
              theme.colors[color as IColor][
                variant as IVariant
              ].toString();
            const textColor =
              theme.colors[color as IColor].reverse[
                variant as IReverseVariant
              ];

            return (
              <ColorContainer
                key={bgColor}
                bgColor={bgColor}
                color={textColor}
              >
                {color} {variant}
              </ColorContainer>
            );
          })}
        </ColorsContainer>
      );
    })}
  </>
);

export default Components;
