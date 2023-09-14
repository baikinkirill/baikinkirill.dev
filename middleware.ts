import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest): void => {
  console.log(request);
};
