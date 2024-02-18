import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 0.5rem;

  .main-info-wrapper {
    strong {
      font-size: 1.8rem;
    }
  }
`;

export const ExtraInfoWrapper = styled.div`
  margin-top: 0.75rem;

  @media (min-width: 600px) {
    display: flex;
  }
`;

export const CardImage = styled.img`
  border-radius: 12px;
  margin: 0.5rem 0;
  height: 100%;
  width: 100%;
  @media (min-width: 600px) {
    width: initial;
  }
`;

export const ExtraInfo = styled.div`
  font-weight: 400;
  margin: 1rem;

  .genre {
    display: flex;
    .genre-item {
      border: 1px solid #3c948b;
      border-radius: 8px;
      padding: 0.5rem 0.8rem;
      margin: 0.2rem;
    }
  }
`;
