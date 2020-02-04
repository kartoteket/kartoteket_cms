export default {
  title: 'Note',
  name: 'note',
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
        title: 'Sticky',
        name: 'isSticky',
        description: 'Moves the entry out of the main list and to the right side column',
        type: 'boolean'
      },
      {
        title: 'Show in list',
        name: 'isListed',
        description: 'Will be published with its unique URL, but not listed under "Notes"',
        type: 'boolean'
      },
      {
        name: 'lead',
        title: 'Lead',
        type: 'blockContent'
      },
      {
          title: 'Body',
          name: 'body',
          type: 'blockContent',
      },
      {
        title: 'URL',
        name: 'url',
        type: 'url'
      },
      {
        title: 'Notes',
        name: 'note',
        type: 'array',
        of: [{type: 'reference', to: {type: 'note'}}]
      },
    ],
    initialValue: {
      isListed: true
    }  
  }