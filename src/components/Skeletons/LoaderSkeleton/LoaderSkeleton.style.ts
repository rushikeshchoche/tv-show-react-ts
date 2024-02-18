import styled from 'styled-components';

export const LoaderContainerSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderSkeleton = styled.header`
  height: 77px;
  padding: 0 2rem;
  background-color: #000000;
`;

export const ContentContainerSkeleton = styled.div`
  margin: 2em;
  display: flex;
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
`;

export const EmptyContentSkeleton = styled.div`
  flex: 1;
  border-radius: 12px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

export const FooterSkeleton = styled.footer`
  height: 48px;
  width: 100%;
  background-color: #b8b8b8;
`;
