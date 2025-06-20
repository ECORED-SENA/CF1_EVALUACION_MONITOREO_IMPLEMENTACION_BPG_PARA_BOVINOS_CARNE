<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Indicadores de gestión

    p.mb-4 Los indicadores de gestión son herramientas clave en la evaluación de las Buenas Prácticas Ganaderas (BPG) aplicadas a la producción de carne. Permiten medir, monitorear y evaluar de forma objetiva el desempeño de los procesos productivos. Estos indicadores, ya sean cuantitativos o cualitativos, reflejan el grado de cumplimiento de los estándares establecidos y facilitan la toma de decisiones informadas para mejorar la eficiencia, la sostenibilidad y la calidad.

    p.mb-5 En el contexto de las BPG para carne bovina, los indicadores pueden abordar diferentes áreas:

    .fondo___img
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img43.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img44.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text_1 Productividad
                p.mb-0 Ganancia diaria de peso, tasa de conversión alimenticia, rendimiento en la faena.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img45.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text_1 Sanidad y bienestar animal
                p.mb-0 Tasa de mortalidad, tasa de morbilidad, número de tratamientos veterinarios por animal.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img46.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text_1 Eficiencia operativa
                p.mb-0 Uso de recursos (agua, alimentos, medicamentos), tiempo de manejo por animal, costos de producción por unidad.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img47.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text_1 Impacto ambiental
                p.mb-0 Gestión de residuos, uso de energías renovables, emisiones de gases de efecto invernadero, manejo del suelo y del agua.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img48.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text_1 Calidad del producto final
                p.mb-0 Calidad de la carne (tamaño, textura, grasa), cumplimiento de normativas de seguridad alimentaria, trazabilidad.

        p.mb-0 Estos indicadores permiten a los productores realizar ajustes en tiempo real, mejorar la calidad del producto, optimizar recursos y asegurar el cumplimiento de requisitos técnicos, éticos y regulatorios, promoviendo una ganadería más responsable, competitiva y sostenible.

    <!-- BLOQUE 1 -->
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Tipos de indicadores

    p.mb-5 Los indicadores de gestión proporcionan información valiosa sobre la eficiencia del sistema, el impacto ambiental, la sanidad, el bienestar animal y la calidad del producto. Algunos ejemplos clave incluyen:

    .bg--img_03
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img49.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Tasa de morbilidad y mortalidad").ajuste-cajaAcordion
              p.mb-0 Mide el porcentaje de animales enfermos o muertos en un periodo determinado. Es crucial para evaluar la eficacia de los programas sanitarios y de bienestar.
            .row(titulo="Cumplimiento del plan sanitario").ajuste-cajaAcordion
              p.mb-0 Incluye tasas de vacunación y desparasitación, uso de medicamentos veterinarios y frecuencia de tratamientos.
            .row(titulo="Consumo de alimentos por animal").ajuste-cajaAcordion
              p.mb-0 Permite evaluar la eficiencia alimentaria, con impacto directo en la productividad y el uso de insumos.
            .row(titulo="Registros de bienestar animal").ajuste-cajaAcordion
              p.mb-0 Considera el monitoreo de prácticas como el espacio disponible, las condiciones de alojamiento, el manejo en el transporte y el control del estrés.
            .row(titulo="Calidad del agua y manejo de residuos").ajuste-cajaAcordion
              p.mb-0 Evalúa el estado del agua de consumo animal y la gestión de los desechos generados, clave para la sostenibilidad ambiental.
            .row(titulo="Cumplimiento de registros productivos y sanitarios").ajuste-cajaAcordion
              p.mb-0 Garantiza que la documentación sobre alimentación, tratamientos, movimientos y demás procesos esté actualizada y completa, fortaleciendo la trazabilidad.
      
    <!-- BLOQUE 2 -->
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Características de los indicadores de gestión

    p.mb-5 Para que los indicadores cumplan su función y generen valor en la toma de decisiones, deben reunir ciertas características:

    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row
            .col-lg
              h3 Claridad
              p.mb-0 Deben estar formulados de forma que cualquier persona del sistema pueda comprender qué se está midiendo y cómo se interpreta.
            .col-auto
              figure.d-none.d-xl-block(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img50.png', alt='' style="width: 300px").m-auto
          .row
            .col-auto
              figure.d-none.d-xl-block(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img51.png', alt='' style="width: 300px").m-auto
            .col-lg
              h3 Medibilidad
              p.mb-0 Es indispensable que puedan cuantificarse o, en su defecto, observarse con precisión para generar datos útiles.

          .row
            .col-lg
              h3 Alcanzabilidad
              p.mb-0 Los objetivos definidos deben ser realistas, considerando los recursos disponibles y el contexto del predio.
            .col-auto
              figure.d-none.d-xl-block(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img52.png', alt='' style="width: 300px").m-auto

          .row
            .col-auto
              figure.d-none.d-xl-block(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img53.png', alt='' style="width: 300px").m-auto
            .col-lg
              h3 Relevancia
              p.mb-0 Los indicadores deben estar alineados con los objetivos específicos de las BPG y reflejar los aspectos que realmente inciden en la calidad y sostenibilidad del proceso productivo.

          .row
            .col-lg
              h3 Temporalidad
              p.mb-0 Deben poder ser evaluados en intervalos regulares (semanales, mensuales, anuales), lo que permite un monitoreo constante y efectivo.
            .col-auto
              figure.d-none.d-xl-block(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img54.png', alt='' style="width: 300px").m-auto

    p.mb-0.espacio___movil_1 El uso adecuado de estos indicadores no solo mejora el seguimiento de las prácticas, sino que también ayuda a identificar oportunidades de mejora, optimizar el uso de recursos y garantizar la calidad del producto final. Son, en definitiva, herramientas indispensables para una ganadería técnica, sostenible y orientada al mejoramiento continuo.

</template>

<script>
export default {
  name: 'Tema4',
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
