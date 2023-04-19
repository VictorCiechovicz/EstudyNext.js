import { useEffect, useState } from 'react'
import Link from '../src/components/Link/index'

export async function getStaticProps() {
  const URL_API_FAQ =
    'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'

  const faq = await fetch(URL_API_FAQ)
    .then(resposeServer => {
      return resposeServer.json()
    })
    .then(response => {
      return response
    })
  return {
    props: faq
  }
}

export default function FaqPage({ faq }) {
  return (
    <div>
      <h1>Alura Cases - Página de Perguntas FAQ</h1>
      <Link href="/">Ir para pagina home</Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li>{answer}</li>
        ))}
      </ul>
    </div>
  )
}
