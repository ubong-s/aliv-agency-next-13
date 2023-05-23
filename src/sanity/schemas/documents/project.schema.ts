import { SunIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  icon: SunIcon,
  fields: [
    defineField({
      name: "client",
      title: "Client",
      type: "object",
      fields: [
        { name: "name", type: "string", title: "Name" },
        { name: "timeline", type: "string", title: "Timeline" },
        { name: "services", type: "string", title: "Services" },
        { name: "logo", type: "string", title: "Logo" },
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
