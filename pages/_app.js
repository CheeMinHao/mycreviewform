import App from 'next/app'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../style/index.scss'


class RegistrationForm extends App {

  static async getInitialProps (c) {
    const appProps = await App.getInitialProps(c)
    return {...appProps}
  }

  render() {
    const {Component, pageProps} = this.props
    return(
      <div>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Review Form</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div>
        <Navbar />
        <div>
        <Component {...pageProps}/>
        </div>
      </div>
      <Footer />
      </div>
    )
  }
}


export default RegistrationForm
