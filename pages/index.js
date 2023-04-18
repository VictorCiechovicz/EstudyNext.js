import Link from '../src/components/Link/index'

function Title({ children, as }) {
  const Tag = as
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </>
  )
}

export default function HomePage() {
  return (
    <div>
      <Title as="h1">Home</Title>
      <Link href="/faq">Ir para pagina FAQ</Link>
    </div>
  )
}
