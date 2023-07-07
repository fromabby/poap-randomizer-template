import { PrismaClient } from "@prisma/client";
import LINKS from '../../links.json'

const handler = async (_, res) => {
  const prisma = new PrismaClient()
  try {
    if (process.env.NODE_ENV === 'development') {
      await prisma.poap.createMany({ data: LINKS.poap_links })
      const length = LINKS.poap_links.length

      return res.status(200).json({
        success: true,
        message: `Successfully inserted ${length} links to your database!`
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
      message: 'Could not insert links into database'
    })
  }
}

export default handler
