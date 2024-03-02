import Layout from "../components/Layout/Layout.jsx";


export default function (props) {
    const page = {
        title: 'Flashdeck: Card Deck'
    }
    return (
        <Layout page={page} {...props}>
            <main id={'Content'} className={'deck-view'}>

            </main>
        </Layout>
    )
}
