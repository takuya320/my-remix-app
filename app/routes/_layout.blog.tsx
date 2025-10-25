import type { MetaFunction, LoaderFunctionArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'

// サンプルブログデータ（実際のアプリではデータベースやCMSから取得）
const blogPosts = [
  {
    slug: 'getting-started-with-remix',
    title: 'Remixを始めよう',
    excerpt:
      'Remixフレームワークの基本的な使い方を学びます。セットアップから最初のページ作成まで。',
    date: '2024-01-15',
    author: 'Remix Team',
    tags: ['入門', 'チュートリアル'],
  },
  {
    slug: 'understanding-loaders',
    title: 'Loaderを理解する',
    excerpt:
      'Remixの強力な機能であるLoaderについて深く掘り下げます。データフェッチのベストプラクティス。',
    date: '2024-01-20',
    author: 'Remix Team',
    tags: ['Loader', 'データフェッチ'],
  },
  {
    slug: 'form-handling-with-actions',
    title: 'Actionでフォームを扱う',
    excerpt:
      'Remixのプログレッシブエンハンスメント機能を活用したフォーム処理の実装方法。',
    date: '2024-01-25',
    author: 'Remix Team',
    tags: ['Action', 'フォーム'],
  },
  {
    slug: 'optimizing-performance',
    title: 'パフォーマンス最適化',
    excerpt:
      'Remixアプリケーションのパフォーマンスを向上させるテクニック集。リソースヒント、キャッシュ戦略など。',
    date: '2024-02-01',
    author: 'Remix Team',
    tags: ['パフォーマンス', '最適化'],
  },
  {
    slug: 'nested-routes-guide',
    title: 'ネストルート完全ガイド',
    excerpt:
      'ネストルートの設計パターンと実装例。共通レイアウト、データの共有、エラーハンドリング。',
    date: '2024-02-10',
    author: 'Remix Team',
    tags: ['ルーティング', 'ネストルート'],
  },
  {
    slug: 'deployment-strategies',
    title: 'デプロイメント戦略',
    excerpt:
      'Remixアプリケーションを様々なプラットフォームにデプロイする方法。Vercel、Fly.io、AWSなど。',
    date: '2024-02-15',
    author: 'Remix Team',
    tags: ['デプロイ', 'インフラ'],
  },
]

export async function loader({ request }: LoaderFunctionArgs) {
  // 実際のアプリでは、検索やフィルタリングのクエリパラメータを処理
  return json({ posts: blogPosts })
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
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow hover:border-blue-300"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
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
          各記事は <code className="bg-white px-2 py-1 rounded">/blog/$slug</code>{' '}
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
