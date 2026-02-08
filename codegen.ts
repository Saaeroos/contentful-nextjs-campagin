import { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';

// Load .env.local first if exist, then .env (variables from .env.local override .env)
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    'Environment variables CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN are missing.\n' +
    'Please create a .env.local file with these variables or set them in your environment.'
  );
}

const config: CodegenConfig = {
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`]: {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  documents: ['graphql/**/*.graphql'],
  generates: {
    './graphql/generated/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;
