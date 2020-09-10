import mongoose from "mongoose"
const { Schema } = mongoose

const LinkSchema = new Schema(
  {
    username: {
      type: String
    },
    code: {
      type: String,
      unique: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model("Link", LinkSchema)

