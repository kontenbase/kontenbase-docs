const { data, error } = await kontenbase.service('posts').find({
  where: {
    total: { $gte: 10 },
  },
})
