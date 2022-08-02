import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/hero";
import Offers from "../components/offers/offers";
import Subscribe from "../components/subscribe/subscribe";
import "../components/light-theme.scss";

const IndexPage = () => (
    <Layout>
        <Hero/>
        <Offers/>
        <Subscribe/>
    </Layout>
);

export const Head = () => <Seo title="Light Theme" />

export default IndexPage
