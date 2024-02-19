import { useEffect } from 'react';
import { DEFAULT_SHOW_ID } from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchShow } from '../../redux/showSlice';
import { Card } from '../Card/Card';
import { EpisodeList } from '../EpisodeList/EpisodeList';

export const Home = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector(state => state.show.data);

  useEffect(() => {
    dispatch(fetchShow(DEFAULT_SHOW_ID));
  }, [dispatch]);

  return (
    <div>
      {show && <Card {...show} />}
      {show?.episodes && <EpisodeList episodes={show.episodes} />}
    </div>
  );
}
