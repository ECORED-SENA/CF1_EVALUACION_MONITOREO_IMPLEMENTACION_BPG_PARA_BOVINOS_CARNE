<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade-right") Se da la bienvenida al componente formativo “Monitoreo y verificación de la implementación de BPG en ganadería bovina de carne”; para comenzar, explore el recurso que se muestra a continuación. ¡Adelante!

    figure(data-aos="fade-left").espacio___movil_1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5L009PEnxeU?si=YodoLzBBV3MJb6Od" title="Monitoreo y verificación de la implementación de BPG en ganadería bovina de carne: introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption #[b Video.] Evaluación y monitoreo en la implementación de BPG para bovinos de carne
        
</template>

<script>
export default {
  name: 'Introduccion',
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
