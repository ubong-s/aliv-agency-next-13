import { BulbOutlineIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: "heroHighlight",
      title: "Hero Highlight",
      type: "object",
      validation: (rule) => rule.required(),
      fields: [
        {
          name: "start",
          type: "string",
          title: "Start",
          validation: (rule) => rule.required(),
        },
        {
          name: "end",
          type: "string",
          title: "End",
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      validation: (rule) => rule.required(),
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
              name: "highlight",
              type: "text",
              title: "Highlight",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    }),
  ],
});

export default home;
