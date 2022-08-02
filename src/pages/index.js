import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/hero";
import Offers from "../components/offers/offers";
import Subscribe from "../components/subscribe/subscribe";

const IndexPage = () => (
  <Layout>
    <Hero/>
    <Offers/>
    <Subscribe/>
  </Layout>
);

export const Head = () => <Seo title="Home" />

export default IndexPage
