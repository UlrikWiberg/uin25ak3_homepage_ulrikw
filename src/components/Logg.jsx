import "../styles/Logg.scss";

export default function Logg({log}){
    return (
        <article>
            <p>{new Date(log.dato).toLocaleDateString('en-CA')}</p>
            {log.bruker?.map((user) => (
                <h2 key={user._id}>{user.profilnavn}</h2>
            ))}
            <p>{log.oppgave}</p>
            <p>{log.tid} timer(r)</p>
        </article>
    )
}