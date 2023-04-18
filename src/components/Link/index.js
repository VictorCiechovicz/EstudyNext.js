import NavLink from 'next/link'

export default function Link({ children, href, ...props }) {
  return (
    <NavLink href={href} passHref {...props}>
      {children}
    </NavLink>
  )
}
