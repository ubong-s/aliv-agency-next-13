import { UsersIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Members",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "expertise",
      title: "Expertise",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "Socials",
      title: "Socials",
      type: "array",
      of: [
        {
          name: "social",
          type: "object",
          title: "Social",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Name",
              options: {
                list: [
                  "facebook",
                  "twitter",
                  "instagram",
                  "behance",
                  "github",
                  "linkedIn",
                ],
                layout: "dropdown",
              },
              validation: (rule) => rule.required(),
            },
            {
              name: "url",
              type: "url",
              title: "URL",
              validation: (rule) =>
                rule.uri({
                  scheme: ["http", "https"],
                }),
            },
          ],
        },
      ],
      validation: (rule) => rule.max(3),
    }),
  ],
});

export default teamMember;
