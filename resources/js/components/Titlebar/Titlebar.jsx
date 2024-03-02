import './Titlebar.scss';

export default function (props) {
    return (
        <header id={'Titlebar'}>
            <h1>{props.title}</h1>
        </header>
    );
}
