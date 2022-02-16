export default {
  name: 'pin',
  title: 'Pin',
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
      name: 'destination',
      title: 'Destinación',
      type: 'url'
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true /*  croppong funtionality */
      }
    },
    {
      name: 'userId',
      title: 'UsuarioId',
      type: 'string'
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy'
    },
    {
      name: 'save',
      title: 'Save',
      type: 'array',
      of: [{ type: 'save' }]
    },
    {
      name: 'comments',
      title: 'comments',
      type: 'array',
      of: [{ type: 'comment' }]
    },
  ],
}