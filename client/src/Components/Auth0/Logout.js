import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <Button
      color='secondary'
      startIcon={<LockOpenIcon />}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </Button>
  );
};
export default Logout;
