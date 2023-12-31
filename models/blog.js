const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  url: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: {
    type: Array,
    default: [],
  },
})

blogSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString()
    returnedObj.createdAt = returnedObj._id.getTimestamp()
    delete returnedObj._id
    delete returnedObj.__v
  },
})

module.exports = mongoose.model("Blog", blogSchema)
