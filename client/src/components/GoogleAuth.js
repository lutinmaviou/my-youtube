import React from 'react';
import Button from '../styles/Auth';
import { SignInIcon } from './Icons';
import { GoogleLogin } from 'react-google-login';
import { authenticate } from '../utils/api-client';

function GoogleAuth() {
  return (
    <GoogleLogin
      clientId="372008390109-trpmf5kk3lgg31djdpr3e10v2sul3nd7.apps.googleusercontent.com"
      cookiePolicy="single_host_origin"
      onSuccess={authenticate}
      onFailure={authenticate}
      render={(renderProps) => (
        <Button
          tabIndex={0}
          type="button"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <span className="outer">
            <span className="inner">
              <SignInIcon />
            </span>
            sign in
          </span>
        </Button>
      )}
    />
  );
}

export default GoogleAuth;
