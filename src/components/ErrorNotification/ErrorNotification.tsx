import React from 'react';
import cn from 'classnames';

import { ErrorMessage } from '../../types';

type Props = {
  error: ErrorMessage;
  handleErrorReset: () => void;
};

export const ErrorNotification: React.FC<Props> = ({
  error,
  handleErrorReset,
}) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={cn('notification is-danger is-light has-text-weight-normal', {
        hidden: !error,
      })}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => handleErrorReset()}
      />
      {error}
      <br />
    </div>
  );
};
