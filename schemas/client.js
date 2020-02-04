export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url'
    },
    {
      title: 'List in Highlights',
      name: 'selected',
      type: 'boolean'
    }
  ]
}
