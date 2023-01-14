import { FC } from 'react';

export const PauseButton: FC = () => (
  <>
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#pause"/>
    </svg>
    <span>Pause</span>
  </>
);

export default PauseButton;
