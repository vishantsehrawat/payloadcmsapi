import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  fields: [
    {
      name: "url",
      label: "URL",
      type: "text",
      required: true,
    },
    {
      name: "type",
      label: "Type",
      type: "select",
      options: [
        { label: "Image", value: "image" },
        { label: "Video", value: "video" },
        { label: "Short Video", value: "shortVideo" },
      ],
      required: true,
    },
    {
      name: "associatedPost",
      label: "Associated Post",
      type: "relationship",
      relationTo: "posts",
      // hasMany: false,
      hidden: true,
    },
  ],
};

export default Media;
