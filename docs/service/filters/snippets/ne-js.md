const { data, error } = await kontenbase.service('posts').find({
  where: {
    name: { $ne: 'Ega' },
  },
})
