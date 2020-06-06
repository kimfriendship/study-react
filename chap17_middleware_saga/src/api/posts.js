const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

export const posts = [
  { id: 1, title: "hello", body: "study react" },
  { id: 2, title: "bye", body: "see you soon" },
  { id: 3, title: "omg", body: "yikes" },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
