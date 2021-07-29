import * as actions from './filterActionType';

export const search = (string) => {
  return {
    type: actions.SEARCH,
    payload: string,
  };
};
