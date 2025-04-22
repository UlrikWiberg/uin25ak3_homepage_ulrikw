import "../styles/Logg.scss";

export default function Logg({log}){
    return (
        <article className="loggartikkel">
            <p>{new Date(log.dato).toLocaleDateString('en-CA')}</p>
            {log.bruker?.map((user) => (
                <p key={user._id}>{user.profilnavn}</p>
            ))}
            <p>{log.oppgave}</p>
            <p>{log.tid} timer(r)</p>
        </article>
    )
}