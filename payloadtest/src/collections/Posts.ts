import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      options: [
        { label: 'image', value: 'image' },
        { label: 'video', value: 'video' },
        { label: 'shortVideo', value: 'shortVideo' },
      ],
      required: true,
    },
    {
      name: 'media',
      type: 'relationship',
      relationTo: 'media',
      // hasMany: false,
      label: 'Media',
      // onDelete: 'cascade',
    },
  ],
};

export default Posts;
