import React from 'react'
import { ContentContainerSkeleton, EmptyContentSkeleton, FooterSkeleton, HeaderSkeleton, LoaderContainerSkeleton } from './LoaderSkeleton.style';

export const LoaderSkeleton: React.FC = () => {
  return (
    <LoaderContainerSkeleton>
      <HeaderSkeleton />
      <ContentContainerSkeleton>
        <EmptyContentSkeleton>
          <p></p>
        </EmptyContentSkeleton>
      </ContentContainerSkeleton>
      <FooterSkeleton />
    </LoaderContainerSkeleton>
  );
}
