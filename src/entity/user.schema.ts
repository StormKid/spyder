import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
    {
        userId: String,
        userName: String,
        phoneNum: String,
    }
);



