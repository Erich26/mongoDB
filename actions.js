let getPosts = (limit, skip, sortField, sortOrder, filterField, filterValue) => {

    const sortParams = {}
    sortParams[sortField] = sortOrder
    const filterParams = {}
    filterParams[filterField] = filterValue

    const outcome = db.posts.find(filterParams).limit(limit).skip(skip).sort(sortParams).toArray()

    return outcome;
};

let findPost = (blogKey, blogValue) => {
    const singleBlog = db.posts.find(
        { [blogKey]: blogValue }).toArray()

    return singleBlog;
};

let getPostsCollectionLength = () => {
    let postQuantity = db.posts.find({}).toArray().length

    return postQuantity;
}

let makePost = (title, text, author, category) => {

    let creatPost = db.posts.insertOne(
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
    let updatedBlog = db.posts.update(
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
    const deletedBlog = db.posts.deleteOne(
        { [blogKey]: blogValue })

    return deletedBlog
}
