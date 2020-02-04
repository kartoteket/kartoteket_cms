export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
      {
          title: 'Title',
          name: 'title',
          type: 'string',
          validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        title: 'Lead',
        name: 'lead',
        type: 'blockContent',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    },
    {
      title: 'Notes',
      name: 'note',
      type: 'array',
      of: [{type: 'reference', to: {type: 'note'}}]
    },
  ]
}