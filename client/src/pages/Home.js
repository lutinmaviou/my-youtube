import React from 'react';
import { useQuery } from 'react-query';
import HomeSkeleton from 'skeletons/HomeSkeleton';
import ErrorMessage from 'components/ErrorMessage';
import { client } from 'utils/api-client';
import Wrapper from '../styles/Home';
import VideoGrid from '../styles/VideoGrid';
import VideoCard from 'components/VideoCard';

function Home() {
  const {
    data: videos,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useQuery('Home', () =>
    client.get('/videos').then((res) => res.data.videos)
  );

  if (isLoading) return <HomeSkeleton />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <Wrapper>
      <VideoGrid>
        {isSuccess
          ? videos.map((video) => <VideoCard key={video.id} video={video} hideAvatar/>)
          : null}
      </VideoGrid>
    </Wrapper>
  );
}

export default Home;
