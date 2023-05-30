import { defineField,defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "features",
      type: "array",
      title: "Features",
      of: [
        {
          name: "feature",
          type: "object",
          title: "Feature",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
              validation: (rule) => rule.required(),
            },
            {
              name: "description",
              type: "text",
              title: "Description",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        {
          name: "headline",
          type: "string",
          title: "Headline",
          validation: (rule) => rule.required(),
        },
        {
          name: "text",
          type: "text",
          title: "Text",
          validation: (rule) => rule.required(),
        },
        {
          name: "background",
          type: "string",
          title: "Background",
        },
      ],
    }),
  ],
});

export default service;
