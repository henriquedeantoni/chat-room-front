import './styles.css'
import background from '../../assets/background.jpg'

export const LayoutComponentsPages = (props) => {
    return (
        <div className="container" style= {{ backgroundImage: `url(${background})` } } >
            {props.children}
        </div>
    )
}

