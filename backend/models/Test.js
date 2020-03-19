import mongoose from "mongoose";

// Disable MongoDB intelligent collection name convention (do not add 's' suffix)
mongoose.pluralize(null);

const Schema = mongoose.Schema;

const TestSchema = new Schema({
  message: {
    type: String,
    required: [true, "message field is required"]
  }
});

const TestModel = mongoose.model("test", TestSchema);

export default TestModel;