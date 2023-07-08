import { PrismaClient } from "@prisma/client";

const handler = async (_, res) => {
  const prisma = new PrismaClient()
  try {
    if (process.env.NODE_ENV === 'development') {
      const links = await prisma.poap.findMany()

      return res.status(200).json({
        success: true,
        count: links.length,
        links
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
      message: 'Could not find links'
    })
  }
}

export default handler
