import { client } from "./client";

export async function fetchAllProfiles(){
    const data = await client.fetch(`*[_type == "profiles"]{
        _id, profilnavn, profileslug, image{asset ->{_id, url }}, email, interreser, biografi}`);
        return data;
}

export async function fetchProfileBySlug(slug) {
    const data = await client.fetch(
      `*[_type == "profiles" && profileslug.current == $slug][0]{
        _id,
        profilnavn,
        email,
        image {
          asset->{
            _id,
            url
          }
        },
        interesser,
        biografi,
        profileslug,
        logg[]->{
          _id,
          dato,
          oppgave,
          tid
        }
      }`,
      { slug }
    );
    return data;
  }
  

export async function fetchAllLogs(){
    const data = await client.fetch(`*[_type == "logg"]{
        _id, dato, bruker[]->{_id, profilnavn}, oppgave, tid}`);
        return data;
}

