import moongose from "mongoose";

const postSchema = new moongose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    url: String,
    public_id: String,
  }
});

export default moongose.model("Post", postSchema);
