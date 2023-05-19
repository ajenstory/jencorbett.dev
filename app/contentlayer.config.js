import { defineDocumentType, makeSource } from "contentlayer/source-files";

// export const Tag = defineDocumentType(() => ({
//   name: "tag",
//   filePathPattern: `/posts/**.json`,
//   contentType: "data",
//   fields: {
//     title: {
//       type: "string",
//       description: "The title of the post",
//       required: true,
//     },
//   },
//   computedFields: {
//     tag: {
//       type: data,
//       resolve: (tag) => `/${tag._raw.flattenedPath}`,
//     },
//   },
// }));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    summary: {
      type: "string",
      description: "The summary of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The image for the post",
      required: false,
    },
  },
  computedFields: {
    postUrl: {
      type: "string",
      resolve: (post) => `${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  contentDirInclude: ["posts"],
  documentTypes: [Post],
});
