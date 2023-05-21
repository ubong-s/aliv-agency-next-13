const service = {
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "coverImage",
      title: "Cover Image",
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
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
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
            },
            {
              name: "description",
              type: "text",
              title: "Description",
            },
          ],
        },
      ],
    },
    {
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        {
          name: "headline",
          type: "string",
          title: "Headline",
        },
        {
          name: "text",
          type: "text",
          title: "Text",
        },
      ],
    },
  ],
};

export default service;
