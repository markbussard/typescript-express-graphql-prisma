import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';
import { type CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/graphql/modules/*/schema.graphql',
  generates: {
    './src/graphql/modules': defineConfig({
      add: {
        './types.generated.ts': {
          content: '/* eslint-disable */'
        }
      },
      tsConfigFilePath: './packages/server/tsconfig.json',
      typesPluginsConfig: {
        enumsAsTypes: false,
        enumsAsConst: true,
        useIndexSignature: true,
        contextType: '../context#ContextValue',
        useTypeImports: true
      }
    })
  },
  hooks: { afterAllFileWrite: ['prettier --write'] }
};

export default config;
