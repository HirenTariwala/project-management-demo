import { Context, useContext } from 'react';

export function useSafeContext<T>(context: Context<T | null>): T {
  const value = useContext(context);
  if (value === null) {
    throw new Error(
      `use${context.displayName ?? 'Context'} must be used within a ${
        context.displayName ?? ''
      }Context.Provider`
    );
  }
  return value;
}

export default useSafeContext;
