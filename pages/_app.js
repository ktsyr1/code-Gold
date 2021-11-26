import 'styles/theme.sass'
import 'styles/style.sass'
import Layout from "component/layouts/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
