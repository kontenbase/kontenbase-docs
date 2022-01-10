const { data, error } = await kontenbase.service('posts')
    .unlink(
        "605a251d7b8678bf6811k3b1", //the id in posts service (posts.id)
        {categories: '61d26e8e2adb12b85c33029c'} //the service that wanted to be unlinked, and it's id (categories.id)
    )