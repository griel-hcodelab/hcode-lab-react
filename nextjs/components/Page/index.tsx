'react'

import { ReactNode } from "react"

type PageColor = 'blue' | 'green' | 'black' | 'yellow' | 'red';

type PageProps = {
    children: ReactNode;
    title: string;
    id: string;
    pageColor: PageColor;
}

export const Page = (
    { children, title, id, pageColor }:PageProps
    ) => {
  return (
    <section id={id} className={["page", pageColor].join(' ')}>
      <header>
        <h1>{title}</h1>
      </header>

      <main>
          {children}
      </main>

    </section>
  )
}
