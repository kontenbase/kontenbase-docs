const { data, error } = await kontenbase.service('posts').create({
  name: 'Post 1',
  notes: 'Hello Kontenbase',
})
