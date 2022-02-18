export default {
  name: 'abouts',
  title: 'Sobre Mi',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titulo',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'string'
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
}