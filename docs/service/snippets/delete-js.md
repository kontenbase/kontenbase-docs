const { data, error } = await kontenbase.service('posts').delete({
    where: {tags: "politic"}
})