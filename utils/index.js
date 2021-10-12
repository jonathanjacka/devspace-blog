export const sortByDate = (postA, postB) => {
  return new Date(postB.frontmatter.date) - new Date(postA.frontmatter.date);
};
