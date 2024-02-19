import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchEpisodeDetails } from '../../redux/episodeDetailsSlice';
import { Card } from '../Card/Card';

export const EpisodeDetails: React.FC = () => {
  const { id } = useParams();
  
  const dispatch = useAppDispatch();
  const episodeDetails = useAppSelector(state => state.episodeDetails.data);

  useEffect(() => {
    if (id) {
      dispatch(fetchEpisodeDetails(parseInt(id)));
    }
  }, [dispatch, id]);

  return (
    <div>
      {episodeDetails && <Card {...episodeDetails}></Card>}
    </div>
  );
}
