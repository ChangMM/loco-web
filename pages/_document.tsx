import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getAtomIds, getCssString } from '@fower/react'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style data-fower={getAtomIds()} dangerouslySetInnerHTML={{ __html: getCssString() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
