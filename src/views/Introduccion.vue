<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-right") El crecimiento poblacional cada vez exige más recursos naturales, debido a que al incrementar el número de habitantes así mismo crece la demanda ante estos. A continuación, identificaremos herramientas de aporte en la gestión de recursos para la operación de sistemas de agua y saneamiento básico:
    
    figure.mb-5
      .video(data-aos="fade-right")
        iframe(width="560" height="315" src="https://www.youtube.com/embed/7MiGE0fal38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
