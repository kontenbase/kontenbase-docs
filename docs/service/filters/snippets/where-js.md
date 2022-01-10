const { data, error } = await kontenbase.service('posts')
    .find({
        where: { title: 'My Post Title'}
    })