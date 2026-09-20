import { Outlet } from 'react-router'

export async function loader() {
  return {}
}

export default function BlogLayout() {
  return <Outlet />
}
