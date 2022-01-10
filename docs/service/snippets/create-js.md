const { data, error } = await kontenbase.service('posts').create({
  title: 'My First Post',
  content: 'Hello world',
  category: "61dc34d39a819f3bb6aa0be4" //this will be linked to category service
})