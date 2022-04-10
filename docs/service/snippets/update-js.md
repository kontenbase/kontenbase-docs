const { data, error } = await kontenbase.service('posts')
    .update({where: {tags: "politic"}}, {
        love: -1,
    })
