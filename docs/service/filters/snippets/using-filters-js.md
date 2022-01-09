const { data, error } = await kontenbase.service('posts')
    .find({ title: 'My Post Title'})

//filter %Text% Case Sensitive
const { data, error } = await kontenbase.service('posts')
    .find({ title: /My Post Title/})

//filter %Text% Case Insensitive
const { data, error } = await kontenbase.service('posts')
    .find({ title: /My Post Title/i})