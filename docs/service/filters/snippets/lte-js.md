const { data, error } = await kontenbase.service('posts').find({
  where: {
    total: { $lte: 10 },
  },
})
