import type { MetaFunction } from 'react-router'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
  Link,
} from 'react-router'
import './tailwind.css'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

// Without this the error document has no <title> at all, because no child
// route matched to contribute one, and the tab shows the raw URL.
export const meta: MetaFunction = ({ error }) => {
  if (!error) {
    return []
  }

  const notFound = isRouteErrorResponse(error) && error.status === 404

  return [
    {
      title: notFound
        ? 'ページが見つかりません - Remix情報ページ'
        : 'エラーが発生しました - Remix情報ページ',
    },
  ]
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    const notFound = error.status === 404

    return (
      <ErrorPage
        title={notFound ? 'ページが見つかりません' : 'エラーが発生しました'}
        message={
          notFound
            ? 'お探しのページは存在しないか、削除された可能性があります。'
            : `サーバーからエラーが返されました（${error.status}）。時間をおいて再度お試しください。`
        }
      />
    )
  }

  // Rejected rendering the thrown value: it can carry a stack trace or an
  // internal message, so the page stays generic and the detail goes to the
  // console instead. Rejected logging on the server only: an error thrown by a
  // loader during a client-side navigation is caught in the browser and would
  // leave no trace anywhere.
  console.error(error)

  return (
    <ErrorPage
      title="エラーが発生しました"
      message="予期しないエラーが発生しました。時間をおいて再度お試しください。"
    />
  )
}

function ErrorPage({ title, message }: { title: string; message: string }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600">{title}</h1>
        <p className="text-lg text-gray-700 mb-8">{message}</p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
        >
          トップページに戻る
        </Link>
      </div>
    </div>
  )
}
