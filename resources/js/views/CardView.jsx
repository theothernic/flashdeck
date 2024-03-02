import Layout from "../components/Layout/Layout.jsx";
import Card from "../components/Card/Card.jsx";


export default function (props) {
    const page = {
        title: 'Flashdeck 🔹 Welcome!'
    }
    return (
       <Layout page={page} {...props}>
           <main id={'Content'} className={'card-view'}>
                <Card>
                    <header>
                        <h2>Judy Garland</h2>
                    </header>
                </Card>
           </main>
       </Layout>
    )
}
