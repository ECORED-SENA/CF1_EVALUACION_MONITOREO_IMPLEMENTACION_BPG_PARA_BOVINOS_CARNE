<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Crisis sanitarias y ambientales

    .row.align-items-center.mb-5.m-0
      .col-xl-6.estilo___caja_2(data-aos="fade-right")
        p.mb-0 Los planes de emergencia son herramientas fundamentales dentro de los sistemas de monitoreo y evaluación de las Buenas Prácticas Ganaderas (BPG), especialmente diseñadas para prevenir, contener y mitigar los efectos de eventos críticos que puedan poner en riesgo la sanidad animal, la seguridad alimentaria, el bienestar animal y la sostenibilidad del entorno. Estos planes deben estar estructurados, documentados y actualizados, y formar parte integral del sistema de gestión de la finca o unidad productiva.
      .col-xl-3
        figure(data-aos="zoom-in").d-none.d-xl-block
          img(src="@/assets/curso/temas/img55.png", alt="" style="width: 300px").m-auto
      .col-xl-3
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/temas/img56.svg", alt="" style="width: 70px")
        p.mb-0.espacio___movil_4 El propósito de estos planes es establecer procedimientos claros y coordinados para actuar de manera oportuna ante situaciones de emergencia sanitaria o ambiental que afecten el desarrollo normal de las actividades ganaderas.

    <!-- BLOQUE 1 -->
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Tipos de crisis

    p.mb-5 En Colombia, la ganadería de carne enfrenta diversos tipos de crisis sanitarias y ambientales, especialmente en el contexto de la certificación en Buenas Prácticas Ganaderas (BPG), que busca garantizar la sostenibilidad, la salud animal, la calidad de los productos y el bienestar de quienes participan en el sistema productivo.
 
    p.mb-5 <strong class="ajuste___negrita">Crisis sanitarias:</strong> se refieren a la aparición y propagación de enfermedades que afectan la salud del ganado y comprometen la seguridad alimentaria.
    
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Enfermedades transmisibles entre animales")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img57.png', alt="" style="max-width: 500px").m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Enfermedades transmisibles entre animales
            <ul class="fa-ul estilo___ul">
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span><strong>Fiebre aftosa:</strong> aunque se han desarrollado campañas de erradicación, sigue siendo una amenaza que afecta la movilidad del ganado y el acceso a mercados. </li>
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span><strong>Brucelosis:</strong> enfermedad bacteriana que afecta tanto animales como humanos. Su control es una exigencia de las BPG. </li>
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span><strong>Tuberculosis bovina:</strong> afecta la salud del hato y puede impedir la comercialización de productos si no se implementan medidas de prevención y control. </li>
              <li class="mb-0"><span class="fa-li"><i class="fab fa-redhat"></i></span><strong>Parásitos internos y externos:</strong> su presencia reduce la productividad y afecta el bienestar animal. Su manejo es esencial dentro del plan sanitario.</li>
            </ul> 

      .py-3.py-md-4(titulo="Resistencia a antibióticos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img58.png', alt="" style="max-width: 500px").m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Resistencia a antibióticos
            p.mb-0 El uso excesivo o inadecuado de antimicrobianos genera resistencia, dificultando el tratamiento de enfermedades y generando riesgos para la salud pública. Las BPG exigen el uso racional y supervisado de medicamentos.

      .py-3.py-md-4(titulo="Contaminación de productos cárnicos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img59.png', alt="" style="max-width: 500px").m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Contaminación de productos cárnicos
            p.mb-0 La presencia de residuos de medicamentos o contaminantes compromete la inocuidad de la carne. La implementación de protocolos rigurosos permite garantizar la calidad del producto final.
    
    p.mb-5 <strong class="ajuste___negrita">Crisis ambientales:</strong> abarcan los impactos negativos de la actividad ganadera sobre los recursos naturales, los ecosistemas y el equilibrio climático.

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Deforestación
                p.mb-0 La expansión no planificada de la ganadería ha generado pérdida de cobertura boscosa. Las BPG fomentan el uso sostenible del suelo y el aprovechamiento de áreas ya intervenidas, evitando impactos negativos sobre ecosistemas sensibles.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img60.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Degradación del suelo
                p.mb-0 El pastoreo continuo sin rotación, así como la sobrecarga animal, deterioran la fertilidad del suelo. Las buenas prácticas promueven el manejo racional de potreros, rotación de cultivos y pasturas mejoradas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img61.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Emisiones de gases de efecto invernadero (GEI)
                p.mb-0 La actividad ganadera es responsable de emisiones importantes de metano. Las BPG impulsan estrategias como la mejora nutricional del ganado, el uso de biodigestores y el manejo adecuado del estiércol.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img63.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Contaminación del agua
                p.mb-0 El mal manejo de residuos y efluentes genera contaminación de fuentes hídricas. Por ello, las BPG incluyen prácticas como la instalación de fosas sépticas, barreras vegetales y tratamiento de aguas residuales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img62.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Destrucción de ecosistemas locales
                p.mb-0 El cambio de uso del suelo afecta hábitats de fauna y flora nativa. La implementación de BPG implica conservar corredores biológicos, proteger fuentes de agua y mantener áreas de vegetación natural.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img64.png', alt='' ).m-auto

    <!-- BLOQUE 2 -->
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Enfermedades de control oficial en bovinos

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img65.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Con el fin de mantener y mejorar el estatus sanitario del país, proteger la producción pecuaria y contribuir a la seguridad alimentaria, el Instituto Colombiano Agropecuario (ICA) diseña y ejecuta programas oficiales para el control y erradicación de enfermedades endémicas de prioridad nacional que afectan a especies animales económicamente productivas.

    p.mb-5 Estos programas incluyen estrategias para declarar y mantener zonas libres de enfermedades y planes de contingencia frente a brotes. Además, el ICA ha implementado un sistema de autorización que permite a terceros llevar a cabo actividades relacionadas con estos programas oficiales, ampliando así su cobertura y fortaleciendo las capacidades de vigilancia y control en el territorio nacional.

    p.mb-5 Las enfermedades de control oficial en bovinos en Colombia son: 

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Fiebre Aftosa
                p.mb-0 Enfermedad altamente contagiosa que causa ampollas en boca, patas y ubres en bovinos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img66.png', alt='' ).m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Brucelosis Bovina
                p.mb-0 Enfermedad bacteriana que provoca abortos en vacas y puede transmitirse a humanos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img67.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tuberculosis Bovina
                p.mb-0 Enfermedad infecciosa crónica causada por <em>Mycobacterium bovis</em>, afecta los pulmones y otros órganos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img69.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Rabia Bovina
                p.mb-0 Enfermedad viral mortal transmitida por mordeduras de hematófagos. Provoca alteraciones nerviosas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img68.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Encefalopatía Espongiforme Bovina (EEB)
                p.mb-0 “Vaca loca” afecta el cerebro y el sistema nervioso central. Es de control estricto.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img70.png', alt='' ).m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Carbunco Bacteridiano (Ántrax)
                p.mb-0 Enfermedad viral que produce tumores en bovinos adultos. Afecta la producción de carne.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img71.png', alt='' ).m-auto

    <!-- BLOQUE 3 -->
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Planes de emergencia

    p.mb-5 Estar preparados ante una emergencia es clave en cualquier unidad ganadera. Este video presenta los tipos de crisis más comunes y las acciones que deben implementarse para proteger la sanidad animal y el entorno:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/oFdokb-_DLw" title="Plan de emergencia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-0 La existencia y correcta activación de estos planes fortalece el sistema de monitoreo y evaluación de las Buenas Prácticas Ganaderas, promoviendo una respuesta rápida, coordinada y organizada ante cualquier eventualidad.

</template>

<script>
export default {
  name: 'Tema5',
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
