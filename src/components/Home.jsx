import Logg from "./Logg";
import ProfilKort from "./ProfilKort";
import "../styles/Home.scss";

export default function Home({profile, log}) {
    return (
        <>
        <article className="gruppemedlemmer">
            <h3>Gruppemedlemmer</h3>
            {profile?.map((profile) => (
                <ProfilKort profile={profile} key={profile._id} />
            ))}
        </article>
        <article className="Logg">
            <h3>Loggføringer</h3>
            {log?.map((log) => (
                <Logg log={log} key={log._id} />
            ))}
        </article>
        </>
    )
}