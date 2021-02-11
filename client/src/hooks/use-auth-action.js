import { useAuth } from 'context/auth-context';
import { useGoogleLogin } from 'react-google-login';
import { authenticate } from 'utils/api-client';

export default function useAuthAction() {
  const user = useAuth();
  const { signIn } = useGoogleLogin({
    onSuccess: authenticate,
    clientId:
      '372008390109-trpmf5kk3lgg31djdpr3e10v2sul3nd7.apps.googleusercontent.com',
  });

  function handleAuthAction(authAction, data) {
    if (user) {
      authAction(data);
    } else {
      signIn();
    }
  }

  return handleAuthAction;
}
