import styled, { css } from "styled-components";

export const TitleSummary = styled.h1`
  color: ${(props) => props.theme["gray-900"]};
  padding: 20px 0 0px 20px;
`;

interface SummaryCardProps {
  variant?: 'green';
}

export const SummaryContainer = styled.section`
  display: flex;
  max-width: 1240px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 20px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 13px;

    h1 {
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  strong {
    font-size: 2rem;
  }
`;

export const SummaryCard = styled.article<SummaryCardProps>`
  background: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  ${(props) => props.variant === 'green' && css`
    background: ${props.theme["green-700"]};
  `}
`;