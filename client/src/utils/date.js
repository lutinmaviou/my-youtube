import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

export function formatCreatedAt(timestamp) {
  return formatDistanceToNowStrict(new Date(timestamp), { addSuffix: true });
  // suffix equals to how much time ago
}
