import type { MetaFunction } from 'react-router'
import { Link, useLoaderData } from 'react-router'

import { blogPosts } from '~/data/posts'
import { listPostSummaries } from '~/utils/content'

export async function loader() {
  // 実際のアプリでは、検索やフィルタリングのクエリパラメータを処理
  return { posts: listPostSummaries(blogPosts) }
}

export const meta: MetaFunction = () => {
  return [
    { title: 'ブログ - Remix情報ページ' },
    {
      name: 'description',
      content: 'Remixに関する技術記事、チュートリアル、TIPSを掲載。',
    },
  ]
}

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">ブログ</h1>
        <p className="text-lg text-gray-700">
          Remixに関する技術記事、チュートリアル、開発TIPSを掲載しています。
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-xs hover:shadow-md transition-shadow hover:border-blue-300"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-xl font-semibold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
              {post.title}
            </h2>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h2 className="text-xl font-semibold mb-3 text-blue-800">
          動的ルーティングのデモ
        </h2>
        <p className="text-gray-700 mb-3">
          このブログページは、Remixの動的ルーティング機能を示しています。
          各記事は{' '}
          <code className="bg-white px-2 py-1 rounded-sm">/blog/$slug</code>{' '}
          パターンでアクセスできます。
        </p>
        <p className="text-gray-700">
          記事をクリックすると、動的に生成されたページに遷移します。
          URLパラメータ（slug）を使用してデータを取得し、該当する記事を表示します。
        </p>
      </div>
    </div>
  )
}
