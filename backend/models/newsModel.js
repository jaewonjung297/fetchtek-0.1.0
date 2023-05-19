import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
    {
        email: {type: String}
    },
    {
        timestamps: true,
    }
)

const News = mongoose.model('News', newsSchema);
export default News;