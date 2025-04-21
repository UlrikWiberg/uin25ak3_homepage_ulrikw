import { Link } from "react-router-dom";
import "../styles/Layout.scss";

export default function Layout({ children, profile }) {
    return (
        <>
        <header>
            <nav>
            <h1>UIN25_Gruppe30</h1>
                <ul>
                    <li>
                        <Link to="/">Hjem</Link>
                    </li>
                </ul>
                <ul>
                    {profile?.map((p) => <li key={p._id}><Link to={`/profile/${p.profileslug.current}`}>{p.profilnavn}</Link></li>)}
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}