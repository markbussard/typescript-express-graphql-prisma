import { type Request } from 'express';

import { db } from '~/db';
import { Logger } from '~/lib';
import { EmailService } from '~/services';
import { type User } from './modules/types.generated';

export type ContextValue = {
  db: typeof db;
  user: User | null;
  services: {
    email: EmailService;
  };
};

export const context = async ({ req }: { req: Request }) => {
  const contextValue = {
    db,
    services: {
      email: new EmailService()
    },
    user: null
  } as ContextValue;

  const token = req.headers.authorization || '';

  if (!token) {
    return contextValue;
  }

  try {
    // Decode the token using any auth provider / custom logic
    const decodedIdToken = req.headers.authorization?.replace(/^Bearer /, '');
    const user = await db.user.findUnique({
      where: {
        id: decodedIdToken
      }
    });
    contextValue.user = user;
    return contextValue;
  } catch (error) {
    Logger.error('Error while decoding token: %o', error);
    return contextValue;
  }
};
