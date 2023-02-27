import "./styles.css";
import { useState } from "react";

export default function App() {
  const [texto, setTexto] = useState("");
  const [confirmacion, setConfirmacion] = useState(false);
  const [invalido, setInvalido] = useState(false);
  const [vinculo, setVinculo] = useState("");

  function submitted(e) {
    switch (texto) {
      case "8719130444935":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EpuVAL0r6O5IqF8_8TXJP8ABR3ov5CbxXmWwH1IcFLHcLg?e=hosNoP"
        );
        break;

      case "8719130444943":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/Eu0sgYzTmhJBs4Wt7O6-DpQBYiLZI9KAbHL-nnl69pSowQ?e=mhzdhw"
        );
        break;

      case "8719130444950":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/Ekzoto2SXXhHm1BvRI3iRzsB2MlBNrMbl0C59fgabZGYqQ?e=aeF4yN"
        );
        break;

      case "8719130444968":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EnP70TSNlbFHhyXKAz4U7V8BOPrsNilO9hYtr9-Ieds5QA?e=llPiBm"
        );
        break;

      case "8719130444976":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EtODqyDwO3xFl93fUO_vWOYBuMOJX5bygJl_2EwDVgSbdg?e=XRrA2C"
        );
        break;
      case "8719130444984":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EjuMKAU1z4lEvY_tA_AdcmIBALLUOuB2wmszFxqRmYm6nA?e=dZhLFc"
        );
        break;
      case "8719130444992":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/Er_Buh5Y2KZJmWJZo51TdZkBlwy1PbZwbYeLcCIZ-KxMbQ?e=MypkrE"
        );
        break;
      case "8719130445007":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/Er_Buh5Y2KZJmWJZo51TdZkBlwy1PbZwbYeLcCIZ-KxMbQ?e=MypkrE"
        );
        break;
      case "8719130445015":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EiGLHkzBYR1MiVOakLohSGUB6TzIsiZds5Nww_0KiwlQcA?e=pyy3nl"
        );
        break;

      case "8719130445023":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EuqdJk_MVWdEgW71uiquxZ0BMGW1T8HNS69ewKUO-0PVwQ?e=gi1N4G"
        );
        break;
      case "8719130445031":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EuqdJk_MVWdEgW71uiquxZ0BMGW1T8HNS69ewKUO-0PVwQ?e=gi1N4Ghttps://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EpZuA3BSqbRAv7OcsY3CVKoBA6Fx421v5GZfh6iHPMigHA?e=ZrTMlk"
        );
        break;
      case "8719130445049":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/Eg_HnHqxk1dLhDDpWiCME6oBGSBS5sOqLJoCwXNA20z2JA?e=jLxPig"
        );
        break;
      case "8719130445056":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/Eta4ttU5JqNAls3t44ffWU8BaRUoBl4ndb-iEZYbVpMKNg?e=twrWc0"
        );
        break;
      case "8719130445064":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EmVGPVwyRVJIs2cq6-i7poQBZ0DHEyeGOQP2UM5r6CfuNw?e=qm9kCo"
        );
        break;
      case "8719130445072":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EmVGPVwyRVJIs2cq6-i7poQBZ0DHEyeGOQP2UM5r6CfuNw?e=QqgmBX"
        );
        break;
      case "8719130445080":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EpWVi-b0GrBHptO5N73EQ4ABFhOSyzwxYzgTaFRGN0uF1Q?e=BfnbdE"
        );
        break;
      case "8719130445098":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/Ek66WiDIIg5Ci3ez6yLTUOQBxmiemv3beWFYwxN3ZrZPcQ?e=k5aq4S"
        );
        break;
      case "8719130445106":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/Eqvj5bzX2E9Mnk3tKnn64AgBgXOKnoIVrPZi4MdGb4PPNA?e=b11dpW"
        );
        break;
      case "8719130445114":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EpeEihMNkVFHkLZKYJdx3RQBoDf3ed_RjAkLGK7l3xeL7g?e=9xwTlT"
        );
        break;
      case "8719130445122":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EpeEihMNkVFHkLZKYJdx3RQBoDf3ed_RjAkLGK7l3xeL7g?e=9xwTlT"
        );
        break;
      case "8719130445130":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EsSjOeOMSCVIurOQfIDOimcBdgeUbZOlPp_p0aYAkjS9_Q?e=rB2F4b"
        );
        break;
      case "8719130445148":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EgvEXFJcXpxFhnunOt3D47UBYS4XorNfyl-icX-w6IaB7g?e=wy2JGx"
        );
        break;
      case "8719130445155":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EgvEXFJcXpxFhnunOt3D47UBYS4XorNfyl-icX-w6IaB7g?e=wy2JGx"
        );
        break;
      case "8719130445163":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EmkfW11CScVEkUabec3_sD8BGnv93AhE9UCFRqPcwN6iGQ?e=CRMlLA"
        );
        break;
      case "8719130445171":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/ElUOYxAcXVlOt6GLZe9piMEBNMOyFVQiZpJ39u18TAuKIw?e=cvezM7"
        );
        break;
      case "8719130445189":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EmXLXMAQ5G1EnUNqFl6M7lwBn5RuIFkrhQY81Dx1L6mk1A?e=ikia03"
        );
        break;
      case "8719130445197":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EvklML3s66lHg9bDdeGpe_YBNzZPXWa36DWfomDIhgo2rQ?e=EqGjFG"
        );
        break;
      case "8719130445205":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EqzOxwkjSNZBurrMWeVDMbUBpn7TPKO-G07o9Og2WNyqcA?e=kceRSR"
        );
        break;
      case "8719130445213":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/ErpvzXshVFxKkpHzlzxl3AEBj_wwq7H5nFmbDLO-51BEGA?e=v4WtrT"
        );
        break;

      case "8719130445221":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/Ehwr17ggg2dCs9f5fYQG4q8BZrkPVHBpS0ERCf92zJ4nqA?e=d4NPXe"
        );
        break;
      case "8719130445239":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/Ehwr17ggg2dCs9f5fYQG4q8BZrkPVHBpS0ERCf92zJ4nqA?e=uoPsXh"
        );
        break;
      case "8719130445247":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EnS4zrCgqeVBoTUUD4kD5wIBiWtBu2OxS76zfq469zvG3A?e=SB6cCc"
        );
        break;
      case "8719130445254":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EgV9Sx17cgJCkWYRDJhmE6EBAs7eWhrBsIRDk84D_5A3jw?e=c32n1e"
        );
        break;
      case "8719130445262":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EjLmOEmhzgtIr7RH6OtSw18BAvyhZZS-PH0UgXokgH6bAw?e=cMhgHa"
        );
        break;
      case "8719130445270":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EpITwoSbQZJOnS0fa2HOYiUBM3ZYxq5jYLw55l2WhtUvQw?e=bFZVuI"
        );
        break;
      case "8719130445288":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EnDkOF1InK5Bkycm5J_g9MUBTWRLuTbuTxjlUyM-xmMsZQ?e=HiR1Ny "
        );
        break;
      case "8719130445296":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EiM4RBHI22xAihpWAtzHD48Br3i9NHgft5-1B8jv_pTw3w?e=w737J8"
        );
        break;
      case "8719130445304":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EkqWZtQ-G5lAnUqo5C9rBK0B5XbKc7eLnfFh33o1iroTjQ?e=3Lw9Sj"
        );
        break;
      case "8719130445312":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EnRfWie61-BKuco1J1CuB4wBg-U2Ms8TNy-_us4mw5iUJA?e=7UQ1IZj"
        );
        break;
      case "8719130445320":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EvnLxFSBNpNItMP3bu-sykYBBLV7IecOH--hvFjiThbwCQ?e=ud1usi"
        );
        break;
      case "8719130445338":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EkiAC1iXnBlGkFrLNQZLJoUBq3ti8drn3GGnEUt9QoEuJQ?e=JL1Xwp"
        );
        break;
      case "8719130445346":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/Eq5HKvkgUuRNgh_AI9QOQT8Bn6WIewXZRjaSWG0rsZZbGQ?e=ne3z4p"
        );
        break;
      case "8719130445353":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EsRu8TKRqZFIsAn3FNufAmgBjb4UnUj32qCI91ZR7nP3mw?e=czhnzW"
        );
        break;
      case "8719130445361":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EqQCyXVT5xBHooI9G8Lve8ABW-jNIwax-KnrCcbxNldUJA?e=cOe0hM"
        );
        break;
      case "8719130445379":
        setConfirmacion(true);
        setInvalido(false);
        setVinculo(
          "https://questf-my.sharepoint.com/:f:/g/personal/edsson_cortes_quest_com_co/EuK5zprOJsVJu--HE62TLGMBU6bqsXS4xbvgc4OxP572pQ?e=NbyWKD"
        );
        break;

      //DEFAULT
      default:
        setInvalido(true);
        setConfirmacion(false);
        break;
    }
  }
  return (
    <div className="App">
      <input onChange={(e) => setTexto(e.target.value)} type="text"></input>
      <button onClick={submitted}>INGRESAR CUPON</button>
      {confirmacion ? (
        <p>
          Su codigo es correcto, descargue su cupón{" "}
          <a href={vinculo} target="_blank" rel="noreferrer">
            aquí
          </a>
        </p>
      ) : null}
      {invalido ? <p>Por favor ingrese un codigo valido</p> : null}
    </div>
  );
}
