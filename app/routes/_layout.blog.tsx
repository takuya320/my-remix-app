import { Outlet } from '@remix-run/react'
import { json } from '@remix-run/node'

export async function loader() {
  return json({})
}

export default function BlogLayout() {
  return <Outlet />
}
