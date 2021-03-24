import App from 'next/app'
import '../public/styles.css'
import Layout from '../components/Layout/Layout'

class MyApp extends App{
  render(){
    const {Component}= this.props;

    return(
      <Layout>
        <Component/>
      </Layout>
    )
  }
}

export default MyApp
