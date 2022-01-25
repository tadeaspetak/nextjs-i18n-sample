import { posts } from "../data";

export function getSortedPostsData() {
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(id: string) {
  const post = posts.find((p) => p.id === parseInt(id, 10));
  console.log({ post });
  return post;
}
