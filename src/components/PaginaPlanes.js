import React from "react";
import {  Container } from "react-bootstrap";
import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.png";
import image4 from "../Assets/image4.png";
import './PaginaPlanes.css';

const Ss = () => {
  return (
    <div>
      <Container className="py-5">

        <h1 className="TituloPlanes">Nuestros Planes para tu Mascorta 🐾 </h1>
        <hr />
        <img src={image4} />


        <div className="Planes" name="plan1">
          <img src={image1} className=" img-fluid img-Planes mb-3" />

          <p name="plan1">
            Vacunación antirrábica: Las vacunaciones necesarias contra la Rabia.
            Vacunación extra: Las vacunaciones necesarias para la prevención de
            las enfermedades víricas y bacterianas más comunes en nuestra
            geografía incluyendo la Leptospirosis (transmisible a personas),
            Moquillo canino, Hepatitis vírica canina y Parvovirosis canina o en el
            caso de los felinos la prevención contra Calicivirus, Rinotraqueitis,
            Panleucopenia y Leucemia Felina. Desparasitaciones internas: Se
            aplicarán trimestralmente en su centro veterinario asociado los
            tratamientos necesarios para la prevención de los parásitos
            intestinales más comunes incluyendo entre ellos el de la enfermedad
            transmisible al hombre de la Equinococosis. Desparasitaciones
            externas: Se aplicarán mensualmente en su centro veterinario asociado
            los tratamientos necesarios para la prevención de pulgas y garrapatas
            previniendo así también las enfermedades transmitidas por éstas.
          </p>
          <button className="btn-Planes1">Consultar</button>
        </div>
        <hr />
        <div className="Planes">
          <img src={image3} className=" img-fluid img-Planes my-3" />
          <p name="plan2">
            Todas las coberturas incluidas en VetPlan Básico más 3 días de
            hospitalización si es necesario. + Pruebas diagnósticas sin sedación
            Radiología simple ( un sólo posicionamiento ) Ecografía abdominal
            simple Electrocardiograma Exploración oftalmológica simple
            Exploración ótica simple Hemograma completo estándar Perfil
            bioquímico ( hasta 7 parámetros bioquímicos comunes ) Test
            inmunológicos comunes ( Leishmaniosis canina, Dirofilariosis canina,
            Moquillo canino, Parvovirus canino, Coronavirus canino, Erlichiosis
            canina, Giardiasis, Inmunodeficiencia Felina y Leucemia Felina )
            Raspado cutáneo para análisis microscópico y cultivo para
            dermatofitos Urianálisis mediante tiras dignósticas hasta 9
            parámetros Citología vaginal Realización de biopsias cutáneas para
            envío a laboratorio anatomopatológico (no incluidos los costes del
            laboratorio externo) Aspiraciones simples para análisis microscópico
          </p>
          <button className="btn-Planes2">Consultar</button>
        </div>
        <hr />

        <div className="Planes" >
          <img src={image2} className=" img-fluid img-Planes my-3" />
          <p name="plan3" >
            Todas las incluidas en Vet Plan Básico más VetPlan Plus más 10 días
            de hospitalización si es necesario. + Cirugías menores en general
            sin acceso a abdomen Corte Rabo ( solo patología ) Corte Orejas (
            solo patología ) Otohematomas Prolapso mb. Nictitante Entropión /
            Ectropión Cierre ojo en ulcera corneal Prolapso ocular Enucleación
            globo ocular Limpieza boca Extracciones dentales simples Fractura
            sínfisis mandibular Rotura paladar blando gato Amputación espolones
            ( solo patología ) Amputación un dedo Higroma Hernia umbilical
            Hernia inguinal Orquiectomía gatos Orquiectomía perros Ovariectomía
            ( Castración ) gatas Vasectomía Prolapso uterino (resección) Fimosis
            Uretrostomía gato Extirpación 1 glandula perianal Fístula perianal
            Tumores mamarios aislados Tumores cutáneos extirpables Laparotomía
            exploratoria Prolapso rectal ( reducción + bolsa tabaco ) Reducción
            luxación articular + inmovilización externa Cirugías medias o con
            acceso a abdomen Extirpacion de Zepp Cirugia glandulas salivares
            Reseccion glandula mandibular Resección paladar blando Hernia
            perineal Hernia diafragmatica Hernia resolucion malla Extirpacion
            pene Nefrectomía Dilatación/Torsión estómago Dilatación/Torsión
            estómago + esplenectomia Gastrotomía ó Enterotomía Enterectomía
            Prolapso rectal ( resección ) Cistotomía Cistectomía parcial
            Esplenectomía Lobectomia hepatica OVH perras OVH patológica ó OVH
            preñada Cesárea Orquiectomia abdominal Extracciones dentales
            múltiples Extirpación de cadenas mamarias Amputación extremidad
            Uretrotomía perro
          </p>
        <button className="btn-Planes3">Consultar</button>
        </div>
        <hr />

      </Container >
    </div >
  );
};

export default Ss;
