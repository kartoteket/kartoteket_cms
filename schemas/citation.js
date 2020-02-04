export default {
  title: 'Citation',
  name: 'citation',
  type: 'document',
  fields: [
      {
          title: 'Title',
          name: 'title',
          type: 'string',
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