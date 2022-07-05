<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-between.mb-4
      .col-12.col-md-8.col-lg-8      
        .titulo-sexto.color-acento-botones
          h3 Gestionar recursos para la operación de sistemas de agua y saneamiento básico 
          span Síntesis: Aspectos técnicos de los sistemas de aguas
      .col-md-1.col-lg-1
        figure
          img.d-none.d-lg-block(src="@/assets/curso/sintesis/img01.svg", alt="alt")


    .row.justify-content-center
      .col-lg-9.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
    .row.justify-content-center
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
