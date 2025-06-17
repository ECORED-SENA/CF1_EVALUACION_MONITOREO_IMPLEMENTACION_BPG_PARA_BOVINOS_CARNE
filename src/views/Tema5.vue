<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Crisis sanitarias y ambientales



    

    
    <!-- BLOQUE 1 -->
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Tipos de crisis



      
    <!-- BLOQUE 2 -->
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Enfermedades de control oficial en bovinos




    <!-- BLOQUE 3 -->
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Planes de emergencia





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
