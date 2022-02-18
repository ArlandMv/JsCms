export default {
  name: 'brands',
  title: 'Marcas',
  type: 'document',
  fields: [
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Nombre',
      type: 'string'
    }
  ]
}