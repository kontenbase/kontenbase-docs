const { data, error } = await kontenbase.service('posts').find({
  skip: 10,
})
