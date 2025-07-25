const User = require("../models/User");
const bcrypt = require('bcrypt')
const crypto = require('crypto');
const UserOTP = require("../models/UserOTP");
const sendEmail = require("../utils/emailTransporter");

const ControllerName = {
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body

            const checkuser = await User.findOne({
                $or: [
                    { username: username },
                    { email: email }
                ]
            })

            if (!checkuser) {
                return res.json({ success: false, message: 'User Already in Database' })
            }

            const hashpass = await bcrypt.hash(password, 10)

            const createuser = new User({
                username: username,
                email: email,
                password: hashpass
            })

            const resultcreateuser = await createuser.save()
            if (resultcreateuser) {

                const checkotp = await UserOTP.findOne({ email: email })

                if (checkotp) {
                    return res.json({ success: false, message: 'User Already Reqeust OTP, Please wait and try agin later' })
                }

                function generateOTP(length = 8) {
                    return crypto
                        .randomBytes(length)
                        .toString('base64')
                        .replace(/[^a-zA-Z0-9]/g, '')
                        .slice(0, length);
                }

                const otp = generateOTP();


                await sendEmail({
                    to: email,
                    subject: "Email Verification Code",
                    html: `
                        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
                            <h2 style="color: #333;">Hello ${username},</h2>
                            <p>Thank you for registering. To complete your email verification, please use the code below:</p>

                            <div style="font-size: 24px; font-weight: bold; background-color: #f2f2f2; padding: 10px 20px; text-align: center; border-radius: 6px; color: #2c3e50; letter-spacing: 2px;">
                                ${otp}
                            </div>

                            <p style="margin-top: 20px;">This code is valid for the next 10 minutes. Please do not share it with anyone.</p>

                            <p>Best regards,<br><strong>Hotel Team</strong></p>
                        </div>
                    `,
                });

                const hashotp = await bcrypt.hash(otp, 10)

                const createotprecode = new UserOTP({
                    email: email,
                    otp: hashotp
                })

                const resultcreateotp = await createotprecode.save()

                if (resultcreateotp) {
                    const token = tokenCreator(
                        {
                            email: email,
                            otp: otp
                        },
                        '5min'
                    );

                    return res.json({ success: true, token: token, message: "Registation Success, Verification Email send to your email" })
                }
                else {
                    return res.json({ success: false, message: "Internal Server Error" })
                }

            }
            else {
                return res.json({ success: false, message: "Internal Server Error While creating User" })
            }
        }
        catch (err) {
            console.log(err)
        }
    }
};

module.exports = ControllerName;    