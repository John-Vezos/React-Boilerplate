import ReactDOM from 'react-dom';

import { Wrapper } from './Wrapper';

interface Props {
  status: string | null;
  title?: string;
  message?: string;
  onClick?(): void;
}
const Notification = ({ status, title, message, onClick }: Props) => {
  return ReactDOM.createPortal(
    <Wrapper status={status} onClick={onClick}>
      <strong>{title}</strong>
      {message}
    </Wrapper>,
    document?.getElementById('overlay-root') || document.createElement('div'),
  );
};

export default Notification;
