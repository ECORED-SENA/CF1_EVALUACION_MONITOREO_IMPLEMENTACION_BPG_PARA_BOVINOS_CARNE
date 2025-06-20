<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Monitoreo
    
    p.mb-5 La implementación de las Buenas Prácticas Ganaderas (BPG) en la producción de carne exige un compromiso constante por parte de los productores, ya que su correcta aplicación implica no solo la adopción de técnicas adecuadas, sino también un seguimiento riguroso de su cumplimiento y efectividad. 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img22.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este contexto, el monitoreo y la evaluación constituyen un conjunto de actividades fundamentales mediante las cuales se recopila, de manera sistemática y continua, información relevante de cada una de las áreas o dependencias involucradas en el proyecto, desde su inicio hasta su fase final. Estas actividades permiten verificar el grado de avance, detectar desviaciones, fortalecer los procesos de gestión operativa y orientar la toma de decisiones para asegurar la sostenibilidad, la calidad del producto y el cumplimiento normativo.
    
    p.mb-0.espacio___movil_1 A continuación, se presentan los objetivos principales del monitoreo y la evaluación en los procesos de producción de bovinos de carne en el marco de las BPG, destacando su importancia para la mejora continua, la trazabilidad, la eficiencia productiva y la competitividad del sistema ganadero.

    <!-- BLOQUE 1 -->
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Concepto

    p.mb-4 El monitoreo y seguimiento en el marco de la evaluación de las Buenas Prácticas Ganaderas (BPG) constituyen procesos continuos, sistemáticos y estructurados orientados a la verificación del grado de cumplimiento, sostenibilidad y consistencia de las prácticas implementadas en la producción de carne bovina. Estas acciones comprenden la recopilación, análisis e interpretación de datos relacionados con aspectos productivos, sanitarios, ambientales y de bienestar animal, permitiendo identificar desviaciones, no conformidades y oportunidades de mejora, así como proponer acciones correctivas.

    p.mb-4 Además, facilitan la evaluación del impacto de las prácticas sobre la productividad, la sostenibilidad ambiental, la calidad del producto final y la competitividad del sistema ganadero. El monitoreo proporciona información objetiva esencial para la toma de decisiones informadas, el fortalecimiento de la gestión operativa, el aseguramiento de la trazabilidad productiva, la promoción de la inocuidad alimentaria y el cumplimiento de los estándares técnicos y normativos vigentes. Para su correcta ejecución, debe ser realizado por personal capacitado y documentarse de manera continua, garantizando la trazabilidad de los procesos y favoreciendo la mejora continua en el marco de una ganadería responsable y sostenible.

    p.mb-5 En este video se presentan los objetivos principales de la evaluación y el seguimiento del proceso productivo, elementos esenciales para garantizar la calidad, la trazabilidad y la mejora continua en la producción ganadera.

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/QwbeBx37_uk" title="Evaluación y seguimiento del proceso productivo - Objetivos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    <!-- BLOQUE 2 -->
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Tipos de monitoreo en las Buenas Prácticas Ganaderas de carne

    p.mb-5 Existen diversos tipos de monitoreo que se aplican dentro de los procesos ganaderos para asegurar la correcta implementación de las BPG. Cada uno cumple una función específica dentro del sistema de evaluación y control:

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          PasosB.color-acento-contenido
            .row.align-items-center(titulo="")
              .col-xl-6.mb-4.mb-md-0
                h4 Monitoreo de cumplimiento
                p.mb-0 Evalúa si las prácticas ganaderas implementadas cumplen con los estándares, normas técnicas y requisitos legales establecidos. Revisa aspectos como el bienestar animal, manejo sanitario, alimentación adecuada, manejo de residuos y prácticas ambientales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img23.png', alt='' style="max-width: 500px").m-auto
                
            .row.align-items-center(titulo="")
              .col-xl-6.mb-4.mb-md-0
                h4 Monitoreo de procesos
                p.mb-0 Consiste en la observación y evaluación continua de las actividades operativas del sistema productivo, asegurando que cada etapa (manejo de animales, alimentación, sanidad, infraestructura) se ejecute conforme a los protocolos establecidos en las BPG.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img24.png', alt='' style="max-width: 500px").m-auto

            .row.align-items-center(titulo="")
              .col-xl-6.mb-4.mb-md-0
                h4 Monitoreo de resultados
                p.mb-0 Se enfoca en medir los logros o cambios alcanzados a partir de la implementación de las BPG, como mejoras en los índices productivos (ganancia de peso, tasas de conversión alimenticia, índices sanitarios) o en indicadores de sostenibilidad ambiental.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img25.png', alt='' style="max-width: 500px").m-auto

            .row.align-items-center(titulo="")
              .col-xl-6.mb-4.mb-md-0
                h4 Monitoreo ambiental
                p.mb-0 Verifica el impacto de las actividades ganaderas sobre el medio ambiente, incluyendo la gestión de residuos, el uso eficiente de recursos naturales (agua, suelo) y la implementación de prácticas de conservación.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img26.png', alt='' style="max-width: 500px").m-auto

            .row.align-items-center(titulo="")
              .col-xl-6.mb-4.mb-md-0
                h4 Monitoreo de bienestar animal
                p.mb-0 Evalúa las condiciones de manejo de los bovinos para garantizar que se cumplan principios de bienestar animal: adecuada nutrición, buena sanidad, comodidad física, manejo humanitario y ausencia de estrés innecesario.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img27.png', alt='' style="max-width: 500px").m-auto
            
            .row.align-items-center(titulo="")
              .col-xl-6.mb-4.mb-md-0
                h4 Monitoreo de trazabilidad
                p.mb-0 Asegura que exista un registro sistemático y verificable de cada etapa del proceso de producción, desde el nacimiento del animal hasta su salida al mercado, garantizando la seguridad alimentaria y la confianza del consumidor.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img28.png', alt='' style="max-width: 500px").m-auto
            
            .row.align-items-center(titulo="")
              .col-xl-6.mb-4.mb-md-0
                h4 Monitoreo de capacitación y gestión humana
                p.mb-0 Controla que el personal involucrado en la producción esté debidamente capacitado en las buenas prácticas, y que exista actualización continua en procedimientos y normativas aplicables.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img29.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 3 -->
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Procedimientos de monitoreo

    p.mb-5 Los procedimientos de monitoreo son las actividades planificadas para observar, registrar y analizar el cumplimiento de las prácticas. Incluyen acciones organizadas en etapas para facilitar su ejecución y garantizar su efectividad. 

    .row.justify-content-center.mb-5.m-0
      .col-xl-10
        .row.align-items-center
          .col-xl
            h4.mb-3 Las actividades planificadas son:
            <ul class="fa-ul estilo___ul">
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Revisiones periódicas en campo (diarias, semanales, mensuales).</li>
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Auditorías internas o externas.</li>
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Entrevistas al personal operativo.</li>
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Inspección de instalaciones y equipos.</li>
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Revisión documental (bitácoras, formularios, listas de chequeo).</li>
              <li class="mb-0"><span class="fa-li"><i class="fab fa-redhat"></i></span>Uso de herramientas digitales o aplicaciones móviles para registro de datos.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/img30.jpg', alt="" style="max-width: 400px").m-auto
    
    .row.justify-content-center.espacio___movil_1
      .col-xl-10
        h4.mb-4 Las etapas secuenciales del monitoreo son:
        TabsA.color-primario(data-aos="zoom-in")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Planificación")
            .row.align-items-center
              .col-xl
                h4 Planificación del monitoreo
                p.mb-0 Definir objetivos, indicadores, frecuencia y responsables del monitoreo.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Recolección")
            .row.align-items-center
              .col-xl
                h4 Recolección sistemática de datos
                p.mb-0 Inspección directa y revisión de registros relacionados con manejo, sanidad, alimentación, bienestar animal y ambiente.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Análisis y evaluación")
            .row.align-items-center
              .col-xl
                h4 Análisis y evaluación de resultados
                p.mb-0 Comparar los datos con los estándares de las BPG para identificar el nivel de cumplimiento.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Documentación")
            .row.align-items-center
              .col-xl
                h4 Documentación y registro
                p.mb-0 Registrar y organizar los hallazgos para garantizar trazabilidad y facilitar futuras auditorías.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Retroalimentación")
            .row.align-items-center
              .col-xl
                h4 Retroalimentación y propuesta de mejoras
                p.mb-0 Comunicar los resultados a los responsables del proceso y sugerir acciones correctivas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Seguimiento")
            .row.align-items-center
              .col-xl
                h4 Seguimiento de acciones correctivas
                p.mb-0 Verificar que las correcciones sean implementadas y que generen mejoras reales dentro del proceso productivo.

    <!-- BLOQUE 4 -->
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Metodologías de monitoreo

    p.mb-5 Las metodologías son procedimientos, métodos o reglas mediante los cuales se recopila información y se organiza el conocimiento. En el contexto de las Buenas Prácticas Ganaderas (BPG), estas metodologías buscan aplicar el saber técnico bajo procesos que favorecen el cuidado del medio ambiente, del personal involucrado y del producto final. La figura ilustra cómo estas prácticas se integran en distintos ámbitos de la producción.

    .fondo___img_1
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img32.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img33.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Las personas y la empresa
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Organización de la empresa.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fab fa-redhat"></i></span>Personal.</li>
                </ul>
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img34.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text El animal y su manejo
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Manejo del rodeo.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Alimentación.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fab fa-redhat"></i></span>Salud animal.</li>
                </ul>
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img35.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text El ambiente y la producción
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Suelo, agua, forraje.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Gestión de estiércol y efluentes.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Adaptación y mitigación al cambio climático.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fab fa-redhat"></i></span>BPG-VC en la producción.</li>
                </ul> 
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img36.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text La infraestructura de producción
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Establecimiento.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fab fa-redhat"></i></span>Instalaciones, equipos y herramientas.</li>
                </ul> 

        p.mb-5 Las metodologías de monitoreo son enfoques sistemáticos que guían la forma de organizar y llevar a cabo la supervisión de manera efectiva. Entre las más relevantes se encuentran:
    
    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img37.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Ciclo de mejora continua (PHVA)").ajuste-cajaAcordion
              p.mb-4 Planificar el monitoreo (qué, cuándo, cómo). Ejecutar actividades de recolección y análisis de datos. Verificar los resultados obtenidos frente a los objetivos. Actuar corrigiendo desviaciones y mejorando los procesos.
            .row(titulo="Monitoreo basado en indicadores").ajuste-cajaAcordion
              p.mb-0  Se definen indicadores clave de desempeño (por ejemplo, tasas de mortalidad, ganancias de peso, cumplimiento de protocolos de vacunación) que se evalúan periódicamente. 
            .row(titulo="Auditorías internas").ajuste-cajaAcordion
              p.mb-0 Implican una revisión sistemática de la implementación de las BPG dentro del establecimiento, realizada por el propio equipo o por personal designado.
            .row(titulo="Monitoreo participativo").ajuste-cajaAcordion
              p.mb-0 Involucra a todos los actores del sistema productivo (productores, veterinarios, técnicos) en la evaluación, promoviendo la autoevaluación y el compromiso colectivo.
            .row(titulo="Evaluaciones comparativas (<em>benchmarking</em>)").ajuste-cajaAcordion
              p.mb-0 Comparan los resultados del establecimiento con estándares de referencia o con otros predios que también aplican BPG, para identificar brechas y oportunidades de mejora.
    
    TabsC.color-acento-contenido(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Análisis inicial")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img38.png', alt="" style="max-width: 500px").m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Análisis inicial
            p.mb-0 Se realizan visitas al predio para identificar fortalezas y debilidades en áreas como trazabilidad, alimentación, sanidad y transporte. Con ello, se diagnostica el estado actual de la empresa.

      .py-3.py-md-4(titulo="Identificación de BPG")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img39.png', alt="" style="max-width: 500px").m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Identificación de BPG
            p.mb-0 Se recopila información relevante (manuales, normas, documentos y certificaciones) y se compara con lo que actualmente se aplica en el predio. Con base en esta comparación, se proponen mejoras y se ajustan los procesos.

      .py-3.py-md-4(titulo="Implementación de BPG")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img40.png', alt="" style="max-width: 500px").m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Implementación de BPG
            p.mb-0 Se ponen en práctica las mejoras identificadas. Se convoca una junta para validar el plan de acción y se establece un cronograma de capacitación y aplicación de herramientas.

      .py-3.py-md-4(titulo="Evaluación de resultados")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img41.png', alt="" style="max-width: 500px").m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Evaluación de resultados
            p.mb-0 Se realiza una evaluación posterior a la implementación para verificar el cumplimiento de los objetivos. Esta evaluación puede hacerse cada tres o seis meses, considerando los cambios y ajustes que requiere el sistema productivo.

    <!-- BLOQUE 5 -->
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Técnicas de monitoreo

    p.mb-5 Las técnicas de monitoreo son herramientas prácticas que se aplican durante el seguimiento de las BPG. Su propósito es recoger datos confiables y relevantes que permitan evaluar el desempeño del sistema productivo. Las principales técnicas son:

    .row.align-items-center
      .col-xl-6(data-aos="fade-right")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Listas de verificación (<em>checklists</em>)") Formularios estandarizados para comprobar el cumplimiento de requisitos específicos durante las visitas de inspección.

          p(numero="2" titulo="Observación directa en campo") Inspección visual de animales, instalaciones y prácticas, anotando comportamientos, condiciones físicas, limpieza y niveles de bienestar.

          p(numero="3" titulo="Entrevistas y encuestas al personal") Recolección de información cualitativa sobre procedimientos aplicados, conocimiento del personal y percepción sobre las prácticas.

          p(numero="4" titulo="Toma de muestras y análisis de laboratorio") Recolección de muestras (agua, alimento, suelo o tejidos animales) para evaluar calidad, sanidad e inocuidad.

          p(numero="5" titulo="Análisis documental") Revisión de registros productivos, sanitarios, ambientales y de trazabilidad para verificar la documentación de los procesos.

          p(numero="6" titulo="Medición de indicadores productivos y ambientales") Evaluación de parámetros como conversión alimenticia, eficiencia reproductiva, calidad del agua utilizada o emisiones de gases, entre otros.
      .col-xl-6
        figure.d-none.d-xl-block(data-aos="zoom-in")
          img(src="@/assets/curso/temas/img42.png", alt="" ).m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
