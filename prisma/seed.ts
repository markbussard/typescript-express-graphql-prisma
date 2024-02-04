import { faker } from '@faker-js/faker';
import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const fakeUsers = faker.helpers.multiple(createRandomUser, {
    count: 3
  });

  const userPromises = fakeUsers.map((user) => {
    return prisma.user.create({
      data: user
    });
  });

  const users = await Promise.all(userPromises);

  const postPromises = users.map(async (user) => {
    const filteredUsers = users.filter((u) => u.id !== user.id);

    const fakePosts = faker.helpers.multiple(createRandomPost, {
      count: 3
    });

    const postPromises = fakePosts.map((post) => {
      return prisma.post.create({
        data: {
          ...post,
          authorId: user.id
        }
      });
    });

    const posts = await Promise.all(postPromises);

    const commentPromises = posts.map(async (post) => {
      const commentPromises = filteredUsers.map((user) => {
        const fakeComment = createRandomPostComment();
        return prisma.comment.create({
          data: {
            ...fakeComment,
            authorId: user.id,
            postId: post.id
          }
        });
      });
      await Promise.all(commentPromises);
    });

    const likePromises = posts.map(async (post) => {
      const likePromises = filteredUsers.map((filteredUser) => {
        return prisma.like.create({
          data: {
            userId: filteredUser.id,
            postId: post.id
          }
        });
      });
      await Promise.all(likePromises);
    });

    const bookmarkPromises = posts.map(async (post) => {
      const bookmarkPromises = filteredUsers.map((filteredUser) => {
        return prisma.bookmark.create({
          data: {
            userId: filteredUser.id,
            postId: post.id
          }
        });
      });
      await Promise.all(bookmarkPromises);
    });

    await Promise.all([
      ...commentPromises,
      ...likePromises,
      ...bookmarkPromises
    ]);
  });

  await Promise.all(postPromises);
}

function createRandomUser() {
  return {
    name: faker.internet.displayName(),
    email: faker.internet.email(),
    role: UserRole.USER
  };
}

function createRandomPost() {
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs()
  };
}

function createRandomPostComment() {
  return {
    content: faker.lorem.paragraph()
  };
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
