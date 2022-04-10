const { data, error } = await kontenbase.service('posts').find({
  select: ['name'],
})
