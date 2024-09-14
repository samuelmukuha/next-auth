import mongoose, { Schema } from "mongoose";

const userSchema = new Schema (
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    },
    {timeStamps: true}
);

const User = models.USer || mongoose.model("user", userSchema);
export default User;