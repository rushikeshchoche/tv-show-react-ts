import React from 'react';
import { Episode } from '../../type/Episode';
import { EpisodeCard } from '../EpisodeCard/EpisodeCard';
import { EpisodeHeader, EpisodeHeaderWrapper, EpisodeListContainer, EpisodeListWrapper, EpisodeTitle } from './EpisodeList.style';

type Props = {
  episodes: Episode[];
}

export const EpisodeList: React.FC<Props> = ({
  episodes,
}) => {
  return (
    <EpisodeListContainer>
      <EpisodeTitle><strong>Episodes</strong></EpisodeTitle>
      <EpisodeListWrapper>
        <EpisodeHeaderWrapper>
          <EpisodeHeader>Number</EpisodeHeader>
          <EpisodeHeader>Name</EpisodeHeader>
          <EpisodeHeader>Date</EpisodeHeader>
          <EpisodeHeader>Runtime</EpisodeHeader>
        </EpisodeHeaderWrapper>
        {episodes.map(ep => (<EpisodeCard key={ep.id} {...ep}/>))}
      </EpisodeListWrapper>
    </EpisodeListContainer>
  );
}
