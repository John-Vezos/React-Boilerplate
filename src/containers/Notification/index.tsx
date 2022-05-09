import { Fragment } from 'react';
import { DefaultRootState, useSelector } from 'react-redux';

import Notification from '@components/Notification';

const NotificationContainer = () => {
  const notification = useSelector(
    (state: DefaultRootState) => state.ui.notification,
  );

  return (
    <Fragment>{notification && <Notification {...notification} />}</Fragment>
  );
};

export default NotificationContainer;
