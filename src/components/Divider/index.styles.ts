import styled, { css } from 'styled-components';

const DividerCSS = css`
    margin: unset;
    border: unset;
`;

export const HorizontalDivider = styled.hr<{ theme: ThemeOptions }>`
    ${DividerCSS}
    width: 100%;
    border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.border};
`;

export const VerticalDivider = styled.hr<{ theme: ThemeOptions }>`
    ${DividerCSS}
    height: 100%;
    border-right: 0.0625rem solid ${({ theme }) => theme.colors.border};
`;
