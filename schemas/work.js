export default {
  title: "Work",
  name: "work",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
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
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },
    {
      name: 'category',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{type: 'client'}],
    },
    {
      name: 'year',
      title: 'Year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      }
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url'
    }
  ]
}