import Titlebar from "../Titlebar/Titlebar.jsx";
import Navigation from "../Navigation/Navigation.jsx";


export default function ({page, children}) {
    return (
        <>
            <Titlebar title={page.title} />
            <Navigation />
            {children}
        </>
    )
}
