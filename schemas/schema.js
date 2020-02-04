import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import work from './work'
import client from './client'
import page from './page'
import note from './note'
import citation from './citation'
//import global from './global'

import localeString from './localeString'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    work,
    client,
    page,
    note,
    citation,
//    global,
    category,
    blockContent,
    localeString
  ])
})
