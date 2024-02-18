import React from 'react';
import parse from 'html-react-parser';
import { BaseInfo } from '../../type/Episode';
import noImg from './no-img.png';
import { CardContainer, CardImage, ExtraInfo, ExtraInfoWrapper } from './Card.style';
import { convertDateString } from '../../utils/helper';

export type Props = BaseInfo & {
  genres?: string[];
}

export const Card: React.FC<Props> = ({
  name,
  image,
  summary,
  genres,
  airdate,
  runtime,
}) => {
  return (
    <CardContainer>
      <div className='main-info-wrapper'>
        <strong>{ name }</strong>
      </div>
      <ExtraInfoWrapper>
        <CardImage src={
            image
            ? image.medium
            : noImg
          } alt={name} />
        <ExtraInfo>
          {genres && <div className='genre'>
            {genres.map((item) => (
              <span className='genre-item' key={item}>{item}</span>
            ))}
          </div>}
          { parse(summary) }
          {airdate && <p>Airdate: {convertDateString(airdate)}</p>}
          <p>Runtime: {runtime} minutes</p>
        </ExtraInfo>
      </ExtraInfoWrapper>
    </CardContainer>
  );
}
