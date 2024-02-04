# GraphQL API

A project to learn how to build a GraphQL API with [Express](https://expressjs.com/), [Apollo Server](https://www.apollographql.com/docs/apollo-server/), [GraphQL Code Generator - Server Preset](https://the-guild.dev/graphql/codegen/docs/guides/graphql-server-apollo-yoga-with-server-preset)), [Prisma](https://www.prisma.io/) and [TypeScript](https://www.typescriptlang.org/).

## Features

- Schema broken up into modules based on relevant database entities
- Resolvers are strictly generated and typed to eliminate chances of runtime errors
- Postgres database utilized via Prisma
- Typescript

## Getting Started

### Prerequisites

- Node.js
- Yarn
- PostgreSQL - can use this guide based on your OS: [PostgreSQL Installation](https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database)

### Installation
1. Clone the repository
2. Install dependencies
   ```sh
   yarn
   ```
3. Create a `.env` file in the root of the project and add the following environment variables
   ```env
    DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database>"
    ```
4. Initialize the database and seed with initial data
    ```sh
    yarn prisma migrate dev
    ```
5. Run the development server
   ```sh
   yarn dev
   ```
6. Open [http://localhost:4000](http://localhost:4000) with your browser and you should see the GraphQL sandbox. You can start sending queries and mutations to the server using the GraphQL Playground.
  
### Utilizing the GraphQL Playground
The GraphQL Playground is a powerful tool that allows you to interact with the server. You can send queries and mutations, view the schema, and even view the generated documentation.

You can use some of the following queries and mutations to interact with the server. You should be receiving responses from the server based on the data that was seeded into the database.

For any queries or mutations resolvers which utilize the basic isAuthenticated authorizer, you will need to include the `Authorization` header with the value `<token>` where `<token>`
is simply one of the user IDs from the `user` table in the database. You can query your local database instance for the list of users available and use anyone of their IDs as the token.

**Example Queries:**

Retrieve session user details

```graphql
query GetMe {
  me {
    id
    name
    email
    role
  }
}
```

Retrieve details for a specific post by ID

```graphql
query GetPostDetailsById($postId: Cuid!) {
  post(id: $postId) {
    id
    title
    content
    author {
      name
    }
    likesCount
    likes {
      user {
        name
      }
    }
    comments {
      content
      author {
        name
      }
    }
  }
}
```

Retrieve a list of all bookmarks associated with the session user

```graphql
query GetUserBookmarks {
  bookmarks {
    id
    post {
      title
      author {
        name
      }
    }
  }
}
```

Retrieve user details for each like associated with a specific post
```graphql
query GetPostLikeDetailsById($postId: Cuid!) {
  post(id: $postId) {
    likes {
      user {
        id
        name
      }
    }
  }
}
```

Create a new post. In addition to the `Authorization` header, you will also need to include variables, which will simply be:
```json
{
  "input": {
    "title": "New Post Title",
    "content": "New Post Content"
  }
}
```

```graphql
mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
  }
}
```
