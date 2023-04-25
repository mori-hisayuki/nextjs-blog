import { Provider } from '../src/components/Provider'

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
