export default {
  name: 'experiences',
  title: 'Experiencia',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Año',
      type: 'string'
    },
    {
      name: 'works',
      title: 'Trabajos',
      type: 'array',
      of: [{ type: 'workExperience' }]
    },
  ]
}

