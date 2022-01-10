const { data, error } = await kontenbase.service('posts')
    .updateById("605a251d7b8678bf6811k3b1", {
        title: 'My First Post Updated',
    })