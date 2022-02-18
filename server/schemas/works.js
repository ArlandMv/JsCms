export default {
  name: 'works',
  title: 'Trabajos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titulo',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'string',
    },
    {
      name: 'projectLink',
      title: 'Link de Proyecto',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Link de Repositorio',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string'
        }
      ]
    },
  ],
};