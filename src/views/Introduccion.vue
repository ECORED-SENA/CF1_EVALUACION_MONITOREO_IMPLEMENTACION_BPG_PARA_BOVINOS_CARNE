<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 Se da la bienvenida al componente formativo “Evaluación y monitoreo en la implementación de BPG para bovinos de carne”; para comenzar explore el recurso que se muestra a continuación. ¡Adelante!

    figure(data-aos="zoom-in").espacio___movil_1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/U_Pyrw14z9M" title="Evaluación y monitoreo en la implementación de BPG para bovinos de carne: introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
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
