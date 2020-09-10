import Link from "./model"
import voucher_codes from "voucher-code-generator"

export const createLink = async (req, res) => {
  const username = req.body.username
  const randomCode = voucher_codes.generate({
    length: 10,
    count: 1,
    charset: voucher_codes.charset("alphanumeric")
  });

  try {
    const link = await Link.create({
      username: username,
      code: randomCode[0]
    })
    console.log(link)
    return res.status(200).json({success: true, data: link})
  } catch(err) {
    console.err(err)
    return res.status(400).json({success: false})
  }
}