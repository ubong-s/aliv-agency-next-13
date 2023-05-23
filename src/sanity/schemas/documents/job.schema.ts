import { DoubleChevronRightIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const job = defineType({
  name: "job",
  title: "Jobs",
  type: "document",
  icon: DoubleChevronRightIcon,
  fields: [
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});

export default job;
