const { data, error } = await kontenbase.service('posts')
    .find({ title: 'My Post Title'})