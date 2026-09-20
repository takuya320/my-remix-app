import type { BlogPost } from '~/types/blog.types'

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-remix',
    title: 'Remixを始めよう',
    excerpt:
      'Remixフレームワークの基本的な使い方を学びます。セットアップから最初のページ作成まで。',
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
    excerpt:
      'Remixの強力な機能であるLoaderについて深く掘り下げます。データフェッチのベストプラクティス。',
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
    excerpt:
      'Remixのプログレッシブエンハンスメント機能を活用したフォーム処理の実装方法。',
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
    excerpt:
      'Remixアプリケーションのパフォーマンスを向上させるテクニック集。リソースヒント、キャッシュ戦略など。',
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
    excerpt:
      'ネストルートの設計パターンと実装例。共通レイアウト、データの共有、エラーハンドリング。',
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
    excerpt:
      'Remixアプリケーションを様々なプラットフォームにデプロイする方法。Vercel、Fly.io、AWSなど。',
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
