const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: "Hello",
    body: "Good to see you",
  },
  {
    id: 2,
    title: "Bye",
    body: "See you soon",
  },
  {
    id: 3,
    title: "Woojung",
    body: "Nice to meet you",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
