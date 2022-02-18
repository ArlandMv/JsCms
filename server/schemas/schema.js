import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'
import postedBy from './postedBy'
import pin from './pin'
import comment from './comment'
import save from './save'

import works from './works'
import testimonials from './testimonials'
import brands from './brands'
import abouts from './abouts'
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    user, postedBy, pin, comment, save,
    works, testimonials, brands, skills, workExperience, abouts, experiences, contact
  ]),
})
