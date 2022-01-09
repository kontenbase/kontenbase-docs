const { data, error } = await kontenbase.service('posts')
    .find()
    .limit(1)