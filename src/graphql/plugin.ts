import { type ApolloServerPlugin } from '@apollo/server';

import { Logger } from '~/lib/logger';
import { type ContextValue } from './context';

export const plugin: ApolloServerPlugin<ContextValue> = {
  async requestDidStart(requestContext) {
    Logger.debug('Request started:\n' + requestContext.request.query);
    return {
      async didEncounterErrors({ errors }) {
        Logger.error(
          `Encountered errors while processing request for:\n${requestContext.request.query}`,
          {
            additionalInfo: {
              errors: errors.map((error) => {
                return {
                  locations: error.locations,
                  path: error.path,
                  extensions: error.extensions,
                  message: error.message
                };
              })
            }
          }
        );
        return;
      }
    };
  },
  async unexpectedErrorProcessingRequest({ requestContext, error }) {
    Logger.error(
      `Unexpected error while processing request for:\n${requestContext.request.query}\n`,
      error
    );
  }
};
