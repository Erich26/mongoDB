let getPosts = (limit, skip, sortField, sortOrder, filterField, filterValue) => {

    const sortParams = {}
    sortParams[sortField] = sortOrder
    const filterParams = {}
    filterParams[filterField] = filterValue

    const outcome =actions.blogPosts.find(filterParams).limit(limit).skip(skip).sort(sortParams).toArray()

    return outcome;
};

let findPost = (blogKey, blogValue) => {
    const singleBlog = actions.blogPosts.find(
        { [blogKey]: blogValue }).toArray()

    return singleBlog;
};

let getPostsCollectionLength = () => {
    let postQuantity = actions.blogPosts.find({}).toArray().length

    return postQuantity;
}

let makePost = (title, text, author, category) => {

    let creatPost = actions.blogPosts.insertOne(
        {
            createdAt: new ISODate(),
            lastModified: ISODate(),
            title: title,
            text: text,
            author: author,
            category: category,
            id: getPostsCollectionLength()
        })
    return creatPost
}

let updatePost = (findPost, title, text, author, category) => {
    let updatedBlog = actions.blogPosts.update(
        { id: findPost },
        {
            $set: {
                title: title,
                text: text,
                author: author,
                category: category
            }
        },

    )
    return updatedBlog
}

let deletePosts = (blogKey, blogValue) => {
    const deletedBlog = actions.blogPosts.deleteOne(
        { [blogKey]: blogValue })

    return deletedBlog
}
