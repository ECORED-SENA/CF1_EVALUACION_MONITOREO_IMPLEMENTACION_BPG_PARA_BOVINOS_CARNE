<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Plan de implementación de las BPG de carne bovina
    
    p.mb-5 El Plan de Implementación de las Buenas Prácticas Ganaderas es un documento técnico y administrativo elaborado por el productor o responsable del predio ganadero, en el cual se define cómo se van a aplicar, desarrollar y cumplir los requisitos de las BPG en una unidad de producción. Este plan actúa como una hoja de ruta para lograr la certificación oficial en BPG de forma organizada, progresiva y verificable.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in").espacio___movil_1
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img12.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h4.mb-3 El contenido del plan contempla:
        br
        br
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 1
            | Un diagnóstico inicial del predio (sanitario, ambiental, productivo, administrativo).
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Las acciones correctivas y mejoras necesarias.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | El cronograma de actividades para cumplir con los estándares exigidos.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | La documentación y registros de cada proceso (vacunación, desparasitación, uso de medicamentos, manejo de residuos, entre otros).
    
    p.mb-5 Dentro de las acciones estratégicas que deben reflejarse en este plan, se destacan seis prácticas clave que contribuyen directamente a la implementación de las BPG en el terreno:

    .fondo___img
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img14.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Siembre árboles
            p.mb-0 Especialmente a la orilla de las fuentes de agua como nacimientos, quebradas, ríos y lagunas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img15.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Recuerde
            p.mb-0 El agua que atraviesa su finca será utilizada aguas abajo por otras personas, por lo que su manejo responsable es esencial.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img16.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Reduzca
            p.mb-0 El uso de productos que afectan la fauna benéfica del suelo, como lombrices y cucarrones del estiércol.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img17.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text No haga quemas
            p.mb-0 Ya que esta práctica deteriora la capa vegetal, elimina microorganismos del suelo y favorece la erosión.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img18.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Utilice energía solar
            p.mb-0 Para alimentar cercas eléctricas, electrobombas y electrodomésticos, así como para iluminar el hogar.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img19.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Aproveche la energía humana
            p.mb-0 Planificando las tareas ganaderas según las condiciones climáticas y del entorno, evitando desperdicios y repeticiones innecesarias.
    
        <!-- BLOQUE 1 -->
        Separador
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Importancia del plan de implementación de BPG
        
    p.mb-5 Este plan es fundamental por varias razones:

    .row.m-0.align-items-center.estilo___caja_1(data-aos="zoom-in").espacio___movil_1
      .col-xl
        <ul class="fa-ul estilo___ul">
          <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Permite cumplir con los requisitos del ICA para lograr la certificación oficial en BPG.</li>
          <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Mejora la inocuidad de la carne, reduciendo riesgos para la salud pública.</li>
          <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Optimiza la productividad y organización del hato mediante prácticas sostenibles.</li>
          <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Facilita la trazabilidad, el control sanitario y la documentación de procesos.</li>
          <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Mejora el acceso a mercados nacionales e internacionales al cumplir con normas exigidas en comercio exterior.</li>
          <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Ayuda a proteger el medio ambiente y a asegurar el bienestar animal.</li>
          <li class="mb-0"><span class="fa-li"><i class="fab fa-redhat"></i></span>Sirve como herramienta de planificación, seguimiento y evaluación de las acciones implementadas en el predio.</li>
        </ul>
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img20.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 2 -->
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Normatividad del plan de implementación de BPG
    
    p.mb-5 La normatividad de las Buenas Prácticas Ganaderas (BPG) de carne bovina en Colombia está principalmente regulada por el Instituto Colombiano Agropecuario (ICA), autoridad sanitaria oficial del país. Estas normas establecen los requisitos técnicos, sanitarios, ambientales y administrativos que deben cumplir los predios ganaderos para garantizar una producción inocua, segura, trazable y sostenible.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Normatividad de BPG de carne bovina

    p.mb-5 En Colombia, la certificación de Buenas Prácticas Ganaderas (BPG) para bovinos de carne está regulada principalmente por el Instituto Colombiano Agropecuario (ICA). Esta certificación busca asegurar la inocuidad, sostenibilidad y trazabilidad en la producción de carne bovina, cumpliendo con estándares técnicos, ambientales y sanitarios.

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Tabla 1.
      span Normatividad principal vigente
    .tabla-a.ajuste___tabla.mb-5(data-aos="zoom-in")
      table
        thead
          tr
            th.ajuste-border-tabla Norma
            th.ajuste-border-tabla Descripción
            th Enlace Oficial
        tbody
          tr
            td.ajuste___linea_right Resolución ICA 068167 de 2020
            td.ajuste___linea_right.ajuste___campo Establece los requisitos para obtener la certificación en BPG en la producción de carne de bovinos y/o bufalinos, detallando aspectos como infraestructura del predio, manejo de animales, alimentación, uso de medicamentos, control ambiental y registros obligatorios.
            td.ajuste___i <a href="https://www.ica.gov.co/getattachment/db5b53ff-0752-4884-90b8-a7ce15ce1ead/2020R68167.aspx" target="_blank">
                            img.ajuste___icono(src="@/assets/template/icono-pdf.svg" style="max-width: 40px").m-auto
                            </a>
          tr
            td.ajuste___linea_right Resolución ICA 2341 de 2007
            td.ajuste___linea_right.ajuste___campo Reglamenta las condiciones sanitarias y de inocuidad en la producción primaria de ganado bovino y bufalino destinado al sacrificio para consumo humano.
            td.ajuste___i <a href="https://www.ica.gov.co/areas/pecuaria/servicios/identifica/normas-identifica/resoluciones/ica/r2341" target="_blank">
                            img.ajuste___icono(src="@/assets/template/icono-pdf.svg" style="max-width: 40px").m-auto
                            </a>
          tr
            td.ajuste___linea_right Decreto 1500 de 2007
            td.ajuste___linea_right Establece el reglamento técnico mediante el cual se crea el Sistema Oficial de Inspección, Vigilancia y Control de la Carne, Productos Cárnicos Comestibles y Derivados Cárnicos destinados para el consumo humano, y los requisitos sanitarios y de inocuidad que se deben cumplir en su producción primaria, beneficio, desposte, desprese, procesamiento, almacenamiento, transporte, comercialización, expendio, importación o exportación.
            td.ajuste___i <a href="https://www.ica.gov.co/areas/pecuaria/servicios/identifica/normas-identifica/decretos/d1500" target="_blank">
                            img.ajuste___icono(src="@/assets/template/icono-pdf.svg" style="max-width: 40px").m-auto
                            </a>
          tr
            td.ajuste___linea_right Decreto 2270 de 2012
            td.ajuste___linea_right Modifica el Decreto 1500 de 2007, actualizando el Sistema Oficial de Inspección, Vigilancia y Control de la Carne y Productos Cárnicos Comestibles destinados para el consumo humano en todo el territorio nacional.
            td.ajuste___i <a href="https://www.suin-juriscol.gov.co/viewDocument.asp?id=1428856 " target="_blank">
                            img.ajuste___icono(src="@/assets/template/icono-pdf.svg" style="max-width: 40px").m-auto
                            </a>
          tr
            td.ajuste___linea_right Manual de BPG del ICA
            td.ajuste___linea_right Documento técnico que orienta la implementación de las buenas prácticas en los predios ganaderos. Aunque no tiene carácter de norma legal, su aplicación es requerida para la obtención de la certificación.
            td.ajuste___i <a href="https://www.ica.gov.co/getattachment/Areas/Pecuaria/Servicios/Inocuidad-en-las-Cadenas-Agroalimentarias/LISTADO-DE-PREDIOS-CERTIFICADOS-EN-BPG/GENERALIDADES-DE-BPG.pdf.aspx?lang=es-CO " target="_blank">
                            img.ajuste___icono(src="@/assets/template/icono-pdf.svg" style="max-width: 40px").m-auto
                            </a>
          tr
            td.ajuste___linea_right Ley 1774 de 2016
            td.ajuste___linea_right Modifica el Código Civil, la Ley 84 de 1989, el Código Penal y el Código de Procedimiento Penal, y dicta otras disposiciones relacionadas con la protección y bienestar animal. Reconoce a los animales como seres sintientes y establece sanciones para el maltrato animal.
            td.ajuste___i <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=68135" target="_blank">
                            img.ajuste___icono(src="@/assets/template/icono-pdf.svg" style="max-width: 40px").m-auto
                            </a>

    p.mb-5.espacio___movil_1 Otras normas complementarias relacionadas son:     

    .row.espacio___movil_1
      .col-xl-4(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img21.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center.estilo___h3 1996
          <ul class="fa-ul estilo___ul">
            <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Resolución 1056 de 1996.</li>
            <li class="mb-0"><span class="fa-li"><i class="fab fa-redhat"></i></span>Medidas sanitarias mínimas en predios ganaderos.</li>
          </ul>
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img21.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center.estilo___h3 2008
          <ul class="fa-ul estilo___ul">
            <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Ley 1255 de 2008.</li>
            <li class="mb-0"><span class="fa-li"><i class="fab fa-redhat"></i></span>Promoción de la certificación en Buenas Prácticas Ganaderas.</li>
          </ul>
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img21.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center.estilo___h3 2016
          <ul class="fa-ul estilo___ul">
            <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Resolución ICA 1325 de 2016.</li>
            <li class="mb-0"><span class="fa-li"><i class="fab fa-redhat"></i></span>Reglamenta la trazabilidad animal: registro e identificación de animales.</li>
          </ul>        

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
