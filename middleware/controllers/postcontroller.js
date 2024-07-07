let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
];

//@Desc Get all posts
//@route GET api/posts
export const getPosts = (req, res, next) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200);
    res.json(posts.slice(0, limit));
  } else {
    res.status(200);
    res.json(posts);
  }
};

//@Desc get a single post
//@route GET api/posts/:id

export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`The id ${id} you provide is not exist. `);
    res.status(404);
    return next(error);
  }
  res.json(post);
};

//@Desc Creat a post
//@route POST api/posts

export const createPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost.title) {
    const error = new Error(`Please Provide The Title!`);
    res.status(400);
    return next(error);
  }
  posts.push(newPost);
  res.status(201).json(posts);
};

//@Desc Update a post
//@route PUT api/posts/:id

export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`The post at id ${id} is not find`);
    res.status(400);
    return next(error);
  }
  post.title = req.body.title;
  res.status(200).json(posts);
};

//@Desc delete a post
//@route DELETE api/posts/:id

export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`The post at id ${id} is not find`);
    res.status(400);
    return next(error);
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};
