import './Card.scss';

export default function (props) {
    return (
        <div className={'card'}>
            {props.children}
        </div>

    )
}
