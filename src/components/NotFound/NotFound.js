import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>
                El recurso que estás buscando no existe
            </h2>
            <p>Puedes volver a la página principal haciendo click <Link to={'/'}>aquí</Link></p>
        </div>
    )
}

export default NotFound
