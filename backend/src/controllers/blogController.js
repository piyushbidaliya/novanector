import Blog from "../models/BlogModel.js";

export const postBlog = async (req, res) => {
  console.log("deta coming");
  const { _id } = req.user;
  const { title, description } = req.body;
  if (
    !title ||
    title.trim().lenght === 0 ||
    !description ||
    description.trim().lenght === 0
  ) {
    return res.status(400).json({ message: "All Fields are required" });
  }

  const imageName = req.file.path;

  if (!imageName || imageName.lenght === 0) {
    return res.status(400).json({ message: "imageName field is required" });
  }

  try {
    const newblog = new Blog({
      title,
      content,
      image: imageName,
      authorId: _id,
      date: new Date().toISOString().toLocaleLowerCase(),
    });
    await newblog.save();
    res.status(201).json({ message: "new blog created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllBlog = async (req, res) => {
  try {
    const allBogs = await Blog.find({});
    if (allBogs.length === 0) {
      return res.status(200).json({ message: "blogs not found" });
    }
    res.status(200).json({ data: allBogs });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getBlogById = async (req, res) => {
  const { _id } = req.user;

  if (!_id) {
    return res.status(400).json({ message: "user did not Authenticated" });
  }

  try {
    const getblogByUser = await Blog.find({ authorId: _id });
    if (getblogByUser.length === 0) {
      return res
        .status(200)
        .json({ message: "blog did not found", date: null });
    }

    res.status(200).json({ deta: getblogByUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error in getBlogsById content" });
  }
};


export const deleteBlog = async (req, res) => {
  const { postId } = req.params;
  const { _id } = req.user;
  if (!postId || !_id) {
    return res.status(400).json({ message: "PostId is required" });
  }

  try {
    const existingPostByThisUser = await Blog.findOne({ authorId: _id });

    if (!existingPostByThisUser) {
      return res.status(400).json({ message: "you did not post any post" });
    }

    await Blog.findByIdAndDelete({ postId: postId });
    res.status(200).json({ message: "post delete successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "internal server error in deleteBlog controller" });
  }
};

export const postComment = async (req, res) => {
  const { content, postId } = req.body;
  const { _id } = req.user;

  const missingField = {};

  if (!content || content.trim.lenght == 0) {
    missingField.content = "content field required";
  }
  if (!postId) {
    missingField.postId = "postId is required";
  }
  if (!_id) {
    missingField.userId = "UserId is required and user Is not authorised";
  }
  if (missingField.lenght > 0) {
    return res.status(400).json({ message: missingField });
  }

  try {
    const newComment = new Comment({
      postId: postId,
      content: content,
      authorId: _id,
    });

    await newComment.save();
    res.status(201).json({ message: "comment success" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

export const getComment = async (req, res) => {
  const { postId } = req.params;
  const { page = 1, limit = 5 } = req.query;

  if (!postId || !page || !limit) {
    return res
      .status(400)
      .json({ message: "page and limit page are required" });
  }
  try {
    const comments = await Comment.find({ postId: postBlog })
      .sort({
        createdAt: -1,
      })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Comment.countDocuments({ postId: postId });

    res.json({
      total,
      page: parseInt(page),
      pageSize: parseInt(limit),
      totalPages: Math.ceil(total / limit),
      comments,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error in getComment controller" });
  }
};

