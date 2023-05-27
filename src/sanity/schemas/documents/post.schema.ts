import { defineArrayMember, defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const post = defineType({
  name: "post",
  title: "Posts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "featuredImage",
      title: "Featured image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "This image will be used as the cover image for the post.",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
        },
        defineField({
          type: "image",
          icon: ImageIcon,
          name: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          preview: {
            select: {
              imageUrl: "asset.url",
              title: "caption",
            },
          },
          fields: [
            defineField({
              title: "Caption",
              name: "caption",
              type: "string",
            }),
            defineField({
              name: "alt",
              type: "string",
              title: "Alt text",
              description:
                "Alternative text for screenreaders. Falls back on caption if not set",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "conclusion",
      title: "Conclusion",
      type: "text",
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "featuredImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
