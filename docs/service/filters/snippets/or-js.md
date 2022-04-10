const { data, error } = await kontenbase.service('posts').find({
  or: [
    { name: 'Ega' },
    { notes: 'A notes from public' },
  ],
})
