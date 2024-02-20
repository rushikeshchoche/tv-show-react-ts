import React from 'react';
import { Episode } from '../../type/Episode';
import { Link } from 'react-router-dom';
import { Path } from '../../type/Path';
import { EpisodeCardContainer, EpisodeItem } from './EpisodeCard.style';
import { convertDateString } from '../../utils/helper';

export const EpisodeCard: React.FC<Episode> = ({
  id,
  season,
  number,
  name,
  airdate,
  runtime,
}) => {
  return (
    <EpisodeCardContainer>
      <EpisodeItem>{season} • {number}</EpisodeItem>
      <EpisodeItem>
        <Link className='link' to={Path.episodeDetails.replace(':id', `${id}`)}>{name}</Link>
      </EpisodeItem>
      <EpisodeItem>{convertDateString(airdate)}</EpisodeItem>
      <EpisodeItem>{runtime} minutes</EpisodeItem>
    </EpisodeCardContainer>
  );
}
