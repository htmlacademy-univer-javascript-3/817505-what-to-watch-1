import { FC } from 'react';

export const PlayButton: FC = () => (
  <>
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"/>
    </svg>
    <span>Play</span>
  </>
);

export default PlayButton;
