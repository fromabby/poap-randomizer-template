import { PrismaClient } from "@prisma/client";

const handler = async (req, res) => {
  const prisma = new PrismaClient()

  const { link } = req.query

  try {
    if (
      process.env.NODE_ENV === 'development' &&
      req.method === 'DELETE'
    ) {
      if (!link) return res.status(200).json({
        success: true,
        message: `No link provided`
      })

      await prisma.poap.delete({ where: { link } })

      return res.status(200).json({
        success: true,
        message: `Successfully deleted ${link}`
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `You can't access this resource`
      })
    }
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: `Could not delete ${link}`
    })
  }
}

export default handler
