const { data, error } = await kontenbase.service('posts')
    .find()
    .sort({createdAt: -1})