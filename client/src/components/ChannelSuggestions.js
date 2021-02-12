import React from 'react';
import { useQuery } from 'react-query';
import Skeleton from 'skeletons/SuggestionSkeleton';
import { client } from 'utils/api-client';
import Wrapper from '../styles/Trending';
import ChannelInfo from './ChannelInfo';
import ErrorMessage from './ErrorMessage';

function ChannelSuggestions() {
  const {
    data: channels,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery('Channels', () =>
    client.get('/users').then((res) => res.data.channels)
  );

  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <Wrapper>
      <h2>Suggestions For You</h2>
      {isSuccess
        ? channels.map((channel) => (
            <ChannelInfo key={channel.id} channel={channel} />
          ))
        : null}
    </Wrapper>
  );
}

export default ChannelSuggestions;
