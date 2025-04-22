import Logg from "./Logg";
import ProfilKort from "./ProfilKort";
import "../styles/Home.scss";

export default function Home({profile, log}) {
    return (
        <>
        <h3>Gruppemedlemmer</h3>
        <article className="gruppemedlemmer">
            {profile?.map((profile) => (
                <ProfilKort profile={profile} key={profile._id} />
            ))}
        </article>
        <h3>Loggføringer</h3>
        <article className="Logg">
            {log?.map((log) => (
                <Logg log={log} key={log._id} />
            ))}
        </article>
        </>
    )
}