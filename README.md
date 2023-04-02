# NextJS Blog
勉強がてら現行のブログを移行できたらなくらいのモチベで作る

# 使用技術
| 種別         | 技術                 |
| ------------ | -------------------- |
| Code 管理    | Github               |
| CI/CD        | Github Action        |
| 開発環境     | Docker(devcontainer) |
| ホスティング | Cloudflare Pages     |
| ブログ機能   | NextJS v13.2.4       |
| MarkdownのHTML変換 |[zenn-markdown-html](https://github.com/zenn-dev/zenn-editor/tree/main/packages/zenn-markdown-html)|

# 操作方法
## 初期作成
```
yarn create next-app --example blog-starter blog-app
```

## 初期作成(App Dir版)
```
 yarn create next-app --experimental-app
```
## localServer起動
```
cd blog-app
yarn dev
```

# 参照ページ
[TypeScript Deep Dive 日本語版](https://typescript-jp.gitbook.io/deep-dive/) 
[A statically generated blog example using Next.js, Markdown, and TypeScript](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) 
[エンジニアなら自分でブログを作れ！① 導入編](https://zenn.dev/miketako3/articles/9b2b1a9ec13901) 
[エンジニアなら自分でブログを作れ！②テンプレ理解編](https://zenn.dev/miketako3/articles/bfdc1b09ba8ed3) 
[zennのmarkdown関連のパッケージを追加](https://github.com/miketako3/blog-example/commit/eaecde48625d71520348e2c3b99f225fe1951917) 
