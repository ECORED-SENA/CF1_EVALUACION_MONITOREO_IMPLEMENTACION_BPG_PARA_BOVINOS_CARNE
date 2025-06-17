<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Contingencia en el monitoreo de Buenas Prácticas Ganaderas (BPG)


    
    

    
    <!-- BLOQUE 1 -->
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Función principal de las contingencias



      
    <!-- BLOQUE 2 -->
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Rutas de contingencia en el monitoreo de BPG en bovinos de carne




    <!-- BLOQUE 3 -->
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Tipos de contingencia




    <!-- BLOQUE 4 -->
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Protocolos de contingencia




    <!-- BLOQUE 5 -->
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5 Acciones y estrategias




</template>

<script>
export default {
  name: 'Tema6',
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
