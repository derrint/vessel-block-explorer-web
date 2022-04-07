import { createOvermind } from 'overmind';
import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from 'overmind-react';

import * as actions from './actions';
import * as effects from './effects';
import state from './state';

export const config = {
  state,
  actions,
  effects,
};

export const useState = createStateHook();
export const useActions = createActionsHook();
export const useEffects = createEffectsHook();
export const useReaction = createReactionHook();
export const store = createOvermind(config, {
  devtools: 'localhost:3031',
});
