import { Link } from "react-router-dom";
import "../styles/ProfilKort.scss";

export default function ProfilKort({profile}) {
    return (
        <Link to={`/profile/${profile.profileslug.current}`}>
            <article>
                <h2>{profile.profilnavn}</h2>
                <img src={profile.image.asset.url} alt={profile.profilnavn} />
            </article>
            </Link>
    )
}