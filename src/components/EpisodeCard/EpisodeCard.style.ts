import styled from 'styled-components';

export const EpisodeCardContainer = styled.div`
  padding: 0.5rem;
  display: flex;

  &:nth-child(odd) {
    background-color: #ebebeb;
  }
`;

export const EpisodeItem = styled.div`
  padding: 0.5rem;
  width: calc(100% / 4);
  text-align: center;
  word-break: break-word;

  .link {
    text-decoration: none;
    color: #347f78;

    &:hover {
      text-decoration: underline;
    }
  }
`;
