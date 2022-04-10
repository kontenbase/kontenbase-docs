const { data, error } = await kontenbase.service('posts').find({
  sort: { name: 1 },
})
