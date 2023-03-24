import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

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
        {link && <meta http-equiv="refresh" content={`1; URL=${link}`} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {!link && `No more links to claim`}
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const links  = await prisma.poap.findMany({ where: { claimed: false }})

  const length = links.length
  const randomIndex = Math.floor(Math.random() * (length + 1))

  const randomLink = links[randomIndex]

  const updatedlink = await prisma.poap.update({
    where: {
      id: randomLink.id
    },
    data: {
      claimed: true
    }
  })

  console.log(updatedlink)

  return {
    props: {
      link: updatedlink.link
    },
  }
}