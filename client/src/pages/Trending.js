import ErrorMessage from 'components/ErrorMessage';
import TrendingCard from 'components/TrendingCard';
import React from 'react';
import { useQuery } from 'react-query';
import Skeleton from 'skeletons/TrendingSkeleton';
import { client } from 'utils/api-client';
import Wrapper from '../styles/Trending';

function Trending() {
  const {
    data: videos,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery('TrendingVideos', () =>
    client.get('/videos/trending').then((res) => res.data.videos)
  );

  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <Wrapper>
      <h2>Trending</h2>
      {isSuccess
        ? videos.map((video) => <TrendingCard key={video.id} video={video} />)
        : null}
      <div className="trending"></div>
    </Wrapper>
  );
}

export default Trending;
