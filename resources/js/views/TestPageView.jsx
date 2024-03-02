import Titlebar from "../components/Titlebar/Titlebar.jsx";
import Layout from "../components/Layout/Layout.jsx";

export default function(props) {
    const page = {
        title: 'Flashdeck | Test Page View'
    }
    return (
        <Layout page={page} {...props}>
            <main id={'Content'} className={'page-view'}>
                Test page!
            </main>
        </Layout>
    )
}
