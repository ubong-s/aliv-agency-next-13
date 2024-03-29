import { SunIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projects",
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
      name: "timeline",
      title: "Timeline",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "object",
      fields: [
        {
          name: "logo",
          type: "image",
          title: "Logo",
          options: {
            hotspot: true,
          },
          validation: (rule) => rule.required(),
        },
        { name: "highlight", type: "string", title: "Highlight" },
        { name: "fullQuote", type: "text", title: "Full Quote" },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "info",
      title: "Info",
      type: "object",
      fields: [
        { name: "challenge", type: "string", title: "Challenge" },
        { name: "solution", type: "string", title: "Solution" },
        { name: "result", type: "string", title: "Result" },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      type: "array",
      title: "Gallery",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
      validation: (rule) => rule.required(),
    }),
  ],
});

export default project;
