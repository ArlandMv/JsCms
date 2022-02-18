export default {
  name: 'skills',
  title: 'Habilidades',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Habilidad',
      type: 'string'
    },
    {
      name: 'bgColor',
      title: 'BgColor',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

  ]
}