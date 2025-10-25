import type { MetaFunction, LoaderFunctionArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'

// サンプルブログデータ（実際のアプリではデータベースやCMSから取得）
const blogPosts = [
  {
    slug: 'getting-started-with-remix',
    title: 'Remixを始めよう',
    content: `
      <h2>はじめに</h2>
      <p>Remixは、モダンなウェブアプリケーション開発のための強力なフルスタックフレームワークです。このチュートリアルでは、Remixの基本的な使い方を学びます。</p>

      <h2>セットアップ</h2>
      <p>まず、Remixプロジェクトを作成します：</p>
      <pre><code>npx create-remix@latest</code></pre>

      <h2>最初のページ</h2>
      <p>app/routes ディレクトリに新しいファイルを作成するだけで、自動的にルートが生成されます。</p>

      <h2>まとめ</h2>
      <p>Remixの基本を理解できました。次は、Loaderを使ったデータフェッチを学びましょう。</p>
    `,
    date: '2024-01-15',
    author: 'Remix Team',
    tags: ['入門', 'チュートリアル'],
    readTime: '5分',
  },
  {
    slug: 'understanding-loaders',
    title: 'Loaderを理解する',
    content: `
      <h2>Loaderとは</h2>
      <p>Loaderは、ページがレンダリングされる前にサーバーサイドでデータを取得するRemixの機能です。</p>

      <h2>基本的な使い方</h2>
      <pre><code>export async function loader() {
  const data = await fetchData()
  return json({ data })
}</code></pre>

      <h2>型安全なデータ取得</h2>
      <p>TypeScriptを使用すると、Loaderのデータ型が自動的に推論されます。</p>

      <h2>エラーハンドリング</h2>
      <p>Loaderでエラーが発生した場合、ErrorBoundaryで適切に処理できます。</p>
    `,
    date: '2024-01-20',
    author: 'Remix Team',
    tags: ['Loader', 'データフェッチ'],
    readTime: '7分',
  },
  {
    slug: 'form-handling-with-actions',
    title: 'Actionでフォームを扱う',
    content: `
      <h2>Actionの役割</h2>
      <p>Actionは、フォーム送信やデータ変更を処理するRemixの機能です。</p>

      <h2>プログレッシブエンハンスメント</h2>
      <p>RemixのFormコンポーネントを使用すると、JavaScriptが無効でもフォームが動作します。</p>

      <h2>バリデーション</h2>
      <p>サーバーサイドでのバリデーションを実装し、エラーをクライアントに返します。</p>

      <h2>楽観的UI</h2>
      <p>useTransition を使用して、フォーム送信中の状態を管理できます。</p>
    `,
    date: '2024-01-25',
    author: 'Remix Team',
    tags: ['Action', 'フォーム'],
    readTime: '8分',
  },
  {
    slug: 'optimizing-performance',
    title: 'パフォーマンス最適化',
    content: `
      <h2>リソースヒント</h2>
      <p>プリフェッチやプリコネクトを活用して、ページ遷移を高速化します。</p>

      <h2>キャッシュ戦略</h2>
      <p>適切なキャッシュヘッダーを設定し、リピート訪問時の表示を高速化します。</p>

      <h2>コード分割</h2>
      <p>Remixは自動的にルート単位でコードを分割しますが、さらに最適化する方法もあります。</p>

      <h2>画像最適化</h2>
      <p>適切なフォーマット、サイズ、遅延読み込みで画像を最適化します。</p>
    `,
    date: '2024-02-01',
    author: 'Remix Team',
    tags: ['パフォーマンス', '最適化'],
    readTime: '10分',
  },
  {
    slug: 'nested-routes-guide',
    title: 'ネストルート完全ガイド',
    content: `
      <h2>ネストルートとは</h2>
      <p>親子関係を持つルートを定義し、共通のレイアウトやデータを共有する機能です。</p>

      <h2>ファイル命名規則</h2>
      <p>アンダースコアとドットを使用して、ネストルートを定義します。</p>

      <h2>Outletコンポーネント</h2>
      <p>親ルートでOutletを配置し、子ルートのコンテンツを表示します。</p>

      <h2>データの共有</h2>
      <p>親ルートのLoaderデータを子ルートからアクセスできます。</p>
    `,
    date: '2024-02-10',
    author: 'Remix Team',
    tags: ['ルーティング', 'ネストルート'],
    readTime: '12分',
  },
  {
    slug: 'deployment-strategies',
    title: 'デプロイメント戦略',
    content: `
      <h2>デプロイメントオプション</h2>
      <p>Remixは、様々なプラットフォームにデプロイできます。</p>

      <h2>Vercel</h2>
      <p>GitHubと連携し、自動デプロイを設定します。プレビュー環境も自動生成されます。</p>

      <h2>Fly.io</h2>
      <p>グローバルにアプリをデプロイし、低レイテンシを実現します。</p>

      <h2>AWS</h2>
      <p>Lambda、ECS、EC2など、様々なAWSサービスで実行できます。</p>
    `,
    date: '2024-02-15',
    author: 'Remix Team',
    tags: ['デプロイ', 'インフラ'],
    readTime: '9分',
  },
]

export async function loader({ params }: LoaderFunctionArgs) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    throw new Response('Not Found', { status: 404 })
  }

  return json({ post })
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: '記事が見つかりません' }]
  }

  return [
    { title: `${data.post.title} - Remix情報ページ` },
    { name: 'description', content: data.post.content.substring(0, 150) },
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
                  className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded"
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
              <code className="bg-white px-2 py-1 rounded text-sm">
                /blog/{post.slug}
              </code>
            </p>
            <p className="text-gray-700">
              URLの <code className="bg-white px-2 py-1 rounded text-sm">$slug</code>{' '}
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
