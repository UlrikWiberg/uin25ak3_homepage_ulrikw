import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProfileBySlug } from "../sanity/profileServices";
import "../styles/Profile.scss";

export default function Profile() {
    const { profile } = useParams();  
    const [profileInfo, setProfileInfo] = useState(null);

    const getProfileBySlug = async (slug) =>{
        const data = await fetchProfileBySlug(slug);  
        setProfileInfo(data);  
    };

    useEffect(() => { 
            if (profile) {
                getProfileBySlug(profile);
            } 
    }, [profile]);

    if (!profileInfo) {
        return <p>Profil ikke funnet</p>
    }

    return (
        <section>
            <article className="profilartikkel">
                <h1>{profileInfo.profilnavn}</h1>
                <img src={profileInfo.image.asset.url} alt={profileInfo.profilnavn} />
                <h2>Email</h2>
                <p>{profileInfo.email}</p>
                <h2>Interesser</h2>
                <ul>
                    {profileInfo.interesser?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul> 
                <h2>Biografi</h2>
                <p>{profileInfo.biografi}</p>
            </article>
            <article>
                <h2>Arbeidslogg</h2>
                {profileInfo.logg?.map((entry) => (
                    <ul key={entry._id}>
                        <li>{new Date(entry.dato).toLocaleDateString("en-CA")}</li>
                        <li>{entry.oppgave}</li>
                        <li>{entry.tid} timer</li>
                    </ul>
                ))}
            </article>
        </section>
    );
}


