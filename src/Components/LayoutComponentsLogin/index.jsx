import './styles.css'
import background from '../../assets/background.jpg'

export const LayoutComponentsLogin = (props) => {
    return (
        <div className="container" style= {{ backgroundImage: `url(${background})` } } >
            <div className="container-login">
                <div className="wrap-login">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

