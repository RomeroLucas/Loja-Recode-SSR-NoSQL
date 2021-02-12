import './main.css'

export default function Main(props) {
    return ( 
        <main className="container-fluid text-light">
            {props.children}
        </main>
    )
}