import ReactDOM from 'react-dom';

import { Wrapper } from './Wrapper';

interface Props {
  status?: string;
  title?: string;
  message?: string;
}

const Notification = ({ status, title, message }: Props) => {
  return ReactDOM.createPortal(
    <Wrapper status={status}>
      <h2>{title}</h2>
      <p>{message}</p>
    </Wrapper>,
    document?.getElementById('overlay-root') || document.createElement('div'),
  );
};

export default Notification;
