// /pages/api/user/login.js

import jwt from "jsonwebtoken";
import connectDB from "../../../utils/database";
import { UserModel } from "../../../utils/schemaModels";

const secret_key = "nextmarket";

const loginUser = async (req, res) => {
    try {
        await connectDB();
        const savedUserData = await UserModel.findOne({ email: req.body.email });

        if (!savedUserData) {
            return res.status(400).json({ message: "ログイン失敗：ユーザが存在しません" });
        }

        if (savedUserData.password !== req.body.password) {
            return res.status(400).json({ message: "ログイン失敗：パスワードが間違っています" });
        }

        const payload = {
            email: req.body.email,
        };
        const token = jwt.sign(payload, secret_key, { expiresIn: "23h" });
        return res.status(200).json({
            message: "ログイン成功",
            token: token,
        });
    } catch (error) {
        return res.status(500).json({ message: "ログイン失敗" });
    }
}

export default loginUser;