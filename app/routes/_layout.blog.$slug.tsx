import type { MetaFunction, LoaderFunctionArgs } from 'react-router'
import { Link, useLoaderData } from 'react-router'

import { blogPosts } from '~/data/posts'
import { findPostBySlug } from '~/utils/content'

export async function loader({ params }: LoaderFunctionArgs) {
  const post = findPostBySlug(blogPosts, params.slug)

  if (!post) {
    throw new Response('Not Found', { status: 404 })
  }

  return { post }
}

export const meta: MetaFunction<typeof loader> = ({ loaderData }) => {
  if (!loaderData) {
    return [{ title: '記事が見つかりません' }]
  }

  return [
    { title: `${loaderData.post.title} - Remix情報ページ` },
    {
      name: 'description',
      content: loaderData.post.excerpt,
    },
  ]
}

export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="text-blue-600 hover:text-blue-700 mb-6 inline-block"
        >
          ← ブログ一覧に戻る
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-600">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: '1.8',
            }}
          />
        </article>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h2 className="text-xl font-semibold mb-3 text-blue-800">
              動的ルーティングについて
            </h2>
            <p className="text-gray-700 mb-2">
              このページのURL:{' '}
              <code className="bg-white px-2 py-1 rounded-sm text-sm">
                /blog/{post.slug}
              </code>
            </p>
            <p className="text-gray-700">
              URLの{' '}
              <code className="bg-white px-2 py-1 rounded-sm text-sm">
                $slug
              </code>{' '}
              部分は動的パラメータです。Remixは自動的にこの値を抽出し、Loaderに渡します。
              これにより、同じコンポーネントで異なるコンテンツを表示できます。
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            他の記事を読む
          </Link>
        </div>
      </div>
    </div>
  )
}

// エラーバウンダリー（記事が見つからない場合）
export function ErrorBoundary() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600">
          記事が見つかりません
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          お探しの記事は存在しないか、削除された可能性があります。
        </p>
        <Link
          to="/blog"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
        >
          ブログ一覧に戻る
        </Link>
      </div>
    </div>
  )
}
