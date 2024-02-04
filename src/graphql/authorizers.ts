import { type ContextValue } from './context';

export const isAuthenticated = (ctx: ContextValue) => {
  if (!ctx.user) {
    throw new Error('Not Authenticated');
  }
};
