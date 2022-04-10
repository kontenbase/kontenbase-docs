const { data, error } = await kontenbase.service('posts').find({
  where: {
    total: { $lt: 10 },
  },
})
