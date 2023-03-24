import Head from 'next/head'

import { PrismaClient } from "@prisma/client";

type PoapLink = {
  id: string
  link: string
  claimed: Boolean
}

type Links = {
  links: PoapLink[]
}

export default function Home({ link }: PoapLink) {
  return (
    <>
      <Head>
        <title>POAP Randomizer</title>
        <meta name="description" content="POAP Randomizer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {link && <meta httpEquiv="refresh" content={`1; URL=${link}`} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ backgroundColor: 'black', textAlign: 'center', color: 'white', fontSize: '2rem' }}>
        {!link && `No more links to claim`}
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const length  = (await prisma.poap.findMany({ where: { claimed: false }})).length

  // when everything is claimed
  if(length === 0) {
    await prisma.poap.updateMany({
      where: { claimed: true },
      data: { claimed: false }
    })
  } 

  const links  = await prisma.poap.findMany({ where: { claimed: false }})
  const idx = Math.floor(Math.random() * (links.length))
  const randomLink = links[idx]

  const { link } = await prisma.poap.update({
    where: { id: randomLink.id},
    data: { claimed: true }
  })

  return {
    props: {
      link
    },
  }
}