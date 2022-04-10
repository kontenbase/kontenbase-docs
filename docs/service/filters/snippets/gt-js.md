const { data, error } = await kontenbase.service('posts').find({
  where: {
    total: { $gt: 10 },
  },
})
