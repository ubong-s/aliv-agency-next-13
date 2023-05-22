import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "heroHighlight",
      title: "Hero Highlight",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "stats",
      type: "array",
      title: "Stats",
      of: [
        {
          name: "stat",
          type: "object",
          title: "Stat",
          fields: [
            {
              name: "count",
              type: "string",
              title: "Count",
              validation: (rule) => rule.required(),
            },
            {
              name: "title",
              type: "string",
              title: "Title",
              validation: (rule) => rule.required(),
            },
            {
              name: "text",
              type: "string",
              title: "Text",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: "ourValues",
      type: "array",
      title: "Our Values",
      of: [
        {
          name: "value",
          type: "object",
          title: "Value",
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
      name: "awards",
      type: "array",
      title: "Awards",
      of: [
        {
          name: "award",
          type: "object",
          title: "Award",
          fields: [
            {
              name: "logo",
              title: "Logo",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "awardName",
              type: "string",
              title: "Award Title",
              validation: (rule) => rule.required(),
            },
            {
              name: "year",
              type: "string",
              title: "Year",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    }),
  ],
});

export default about;
