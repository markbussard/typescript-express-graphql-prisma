import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { SERVER_PORT } from './config';
import { context, type ContextValue } from './graphql/context';
import { resolvers } from './graphql/modules/resolvers.generated';
import { typeDefs } from './graphql/modules/typeDefs.generated';
import { Logger } from './lib';

async function startServer() {
  const app = express();

  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        directives: {
          imgSrc: [
            `'self'`,
            'data:',
            'apollo-server-landing-page.cdn.apollographql.com'
          ],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
          manifestSrc: [
            `'self'`,
            'apollo-server-landing-page.cdn.apollographql.com'
          ],
          frameSrc: [`'self'`, 'sandbox.embed.apollographql.com']
        }
      }
    })
  );

  app.get('/health', (_req, res) => {
    return res.status(200).send('ok');
  });

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const server = new ApolloServer<ContextValue>({ typeDefs, resolvers });

  await server.start();

  app.use(expressMiddleware(server, { context }));

  app
    .listen(SERVER_PORT, () => {
      Logger.info(`🛡️  Server listening on port: ${SERVER_PORT} 🛡️`);
    })
    .on('error', (err) => {
      Logger.error('occurred while starting server: %s', err.message);
      process.exit(1);
    });
}

startServer();
