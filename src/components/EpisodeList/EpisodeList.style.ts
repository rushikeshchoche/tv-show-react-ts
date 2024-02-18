import styled from 'styled-components';

export const EpisodeListContainer = styled.div`
  padding: 0.5rem;
  max-width: 1000px;
`;

export const EpisodeTitle = styled.div`
  font-weight: 600;
  margin: 0.5rem 0;
  strong {
    font-size: 1.4rem;
  }
`;

export const EpisodeHeaderWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  background: #3c948b;
`;

export const EpisodeHeader = styled.div`
  padding: 0.5rem;
  width: calc(100% / 4);
  text-align: center;
  color: #fff;
`;

export const EpisodeListWrapper = styled.div`
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
`;
