<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Buenas Prácticas Ganaderas de carne bovina (BPG)

    p.mb-5 Las Buenas Prácticas Ganaderas (BPG) son el conjunto de principios, condiciones y actividades orientadas a la aplicación de medidas higiénico-sanitarias, ambientales, técnicas y administrativas en las explotaciones ganaderas. Su propósito es asegurar que la producción de carne bovina se realice de manera responsable, garantizando la inocuidad del alimento, el bienestar animal, la protección de la salud pública y la conservación del medio ambiente.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Según lo establecido por el Instituto Colombiano Agropecuario (ICA), autoridad sanitaria nacional, las BPG aplicadas a la producción de carne bovina buscan asegurar que el producto final que llega al consumidor sea seguro para el consumo humano, trazable y obtenido bajo condiciones sostenibles y verificables. Esto implica prácticas responsables desde el manejo sanitario del hato, pasando por la alimentación, el uso racional de medicamentos, el cuidado de los ecosistemas, y culminando en el transporte y entrega del animal al sacrificio.
    
    p.mb-5.espacio___movil_1 Este enfoque integral convierte a las BPG no solo en una herramienta técnica de producción, sino en un compromiso con la salud pública, la sostenibilidad ambiental y la seguridad alimentaria nacional e internacional. En este sentido, también resultan fundamentales para optimizar los procesos productivos en las unidades pecuarias y fortalecer la confianza del consumidor.

    .row.justify-content-center.mb-5.m-0.espacio___movil_1
      .col-xl-10
        .row.align-items-center
          .col-xl
            h5.mb-3 Los componentes clave de las BPG, promovidos por el ICA, incluyen:
            <ul class="fa-ul estilo___ul">
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Personal.</li>
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Bienestar animal.</li>
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Saneamiento.</li>
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Buenas prácticas para la alimentación animal - BPAA.</li>
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Buenas prácticas para el uso de medicamentos veterinarios - BPMV.</li>
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Tanque de enfriamiento de leche.</li>
              <li class="mb-2"><span class="fa-li"><i class="fab fa-redhat"></i></span>Buenas prácticas en la higiene del ordeño.</li>
              <li class="mb-0"><span class="fa-li"><i class="fab fa-redhat"></i></span>Sanidad animal, identificación, bioseguridad.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/img2.jpg', alt="" style="max-width: 400px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img3.svg" style="max-width: 60px").m-auto
      .col
        h3 Objetivos de las buenas prácticas ganaderas de carne bovina 
    
    p.mb-5 Los principales objetivos que establece el ICA para la implementación de BPG en predios de producción de carne bovina son:

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          PasosB.color-acento-contenido
            .row.align-items-center(titulo="")
              .col-xl-6.mb-4.mb-md-0
                h4 Garantizar la inocuidad de la carne bovina
                p.mb-0 Se busca que el producto final esté libre de contaminantes físicos (como cuerpos extraños), químicos (como residuos de pesticidas o medicamentos) y biológicos (bacterias, virus, parásitos), cumpliendo con estándares nacionales e internacionales de seguridad alimentaria.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img5.png', alt='' style="max-width: 500px").m-auto
                
            .row.align-items-center(titulo="")
              .col-xl-6.mb-4.mb-md-0
                h4 Prevenir y controlar enfermedades
                p.mb-0 Incluye tanto enfermedades propias del ganado como zoonosis (como la brucelosis o la tuberculosis), que pueden transmitirse al ser humano. Esto se logra mediante vacunación, monitoreo sanitario, control epidemiológico y protocolos de bioseguridad.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto

            .row.align-items-center(titulo="")
              .col-xl-6.mb-4.mb-md-0
                h4 Evitar residuos de medicamentos veterinarios
                p.mb-0 Se promueve el uso racional, controlado y documentado de fármacos, respetando los periodos de retiro para evitar residuos en la carne que puedan representar un riesgo para la salud humana o limitar el acceso a mercados internacionales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto

            .row.align-items-center(titulo="")
              .col-xl-6.mb-4.mb-md-0
                h4 Proteger el medio ambiente
                p.mb-0 Las BPG contemplan prácticas agropecuarias sostenibles que aseguren el uso eficiente del agua, el manejo adecuado de residuos sólidos y líquidos, la protección de fuentes hídricas, y la prevención de la degradación del suelo, reduciendo el impacto ecológico de la actividad ganadera.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto

            .row.align-items-center(titulo="")
              .col-xl-6.mb-4.mb-md-0
                h4 Asegurar el bienestar animal
                p.mb-0 Se promueven condiciones óptimas de alojamiento, alimentación, manejo y transporte, minimizando el estrés y el sufrimiento de los animales. Esto incluye el uso de prácticas humanitarias en todas las fases del ciclo productivo.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img9.png', alt='' style="max-width: 500px").m-auto
            
            .row.align-items-center(titulo="")
              .col-xl-6.mb-4.mb-md-0
                h4 Promover la trazabilidad
                p.mb-0 Se implementan sistemas de identificación individual o colectiva del ganado que permiten conocer su historial sanitario, reproductivo y productivo, desde el nacimiento hasta el sacrificio, fortaleciendo la transparencia en toda la cadena de valor.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img10.png', alt='' style="max-width: 500px").m-auto
            
            .row.align-items-center(titulo="")
              .col-xl-6.mb-4.mb-md-0
                h4 Mejorar la competitividad del sector ganadero
                p.mb-0 La implementación de BPG fortalece la imagen del productor frente al mercado, facilita el acceso a certificaciones, mejora la eficiencia productiva y abre oportunidades comerciales tanto en el mercado interno como en el internacional, especialmente en países que exigen altos estándares sanitarios y de inocuidad.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img11.png', alt='' style="max-width: 500px").m-auto
                  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
