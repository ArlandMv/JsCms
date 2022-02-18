export default {
  name: 'testimonials',
  title: 'Testimonios',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string'
    },
    {
      name: 'company',
      title: 'Compañia',
      type: 'string'
    },
    {
      name: 'imgurl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'feedback',
      title: 'Realimentación',
      type: 'string'
    }
  ]
}