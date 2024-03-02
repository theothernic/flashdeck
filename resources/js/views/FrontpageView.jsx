

import Layout from "../components/Layout/Layout.jsx";


export default function (props) {
    const page = {
        title: 'Flashdeck 🔹 Welcome!'
    }
    return (
        <Layout page={page} {...props}>
            <main id={'Content'} className={'page-view'}>
                <div>
                    This is the front page.
                </div>
            </main>
        </Layout>
    )
}
