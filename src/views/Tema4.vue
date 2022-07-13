<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Equipos e insumos 

    .bg_fondo1-t4
      .row.justify-content-center.align-items-center
        .col-12.col-md-6.col-lg-6.flex-center-text.mb-5.mb-md-0
          p.m-0(data-aos="fade-right") En los sistemas de tratamiento de aguas ya sean potables para consumo humano o residuales para disminución de la contaminación, se utilizan una serie de insumos químicos para su tratamiento. Estos a su vez se convierten en gastos que se deben tener en cuenta al momento de la planificación; para que el sistema sea viable debe ser subsidiado por los beneficiarios.
        .col-12.col-md-4.col-lg-4.m-top
          figure
            img(src="@/assets/curso/tema4/img01.png")(data-aos="fade-left") 

    Separador 

    .bg_imgfondo_t4
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 4.1 Costos

      p El tratamiento de aguas ya sea de consumo o residuales, dependen de la calidad de las aguas a tratar y esto es directamente proporcional a los gastos en los sistemas de tratamiento, debido que a mayor necesidad de eliminación de patógenos mayor inversión presupuestal.

      .row.justify-content-center-align-items-center
        .col-12.col-md-7.col-lg-7(data-aos="fade-right")
          p Una vez instaladas las plantas, ya sean potables o residuales, su operación dependerá de los cobros a los beneficiarios, por esta razón la importancia de la instalación de medidores en las viviendas y el pago por el servicio de alcantarillado. Hay que recordar que un buen servicio estará supeditado a los pagos por el mismo. 
          p.m-0.mb-4.mb-md-0 La Superintendencia de Servicios Públicos es el órgano regulador de los sistemas de agua potable y quien define las tarifas de cobro dependiendo del tipo de población y su alcance. Es de recordar que en Colombia los servicios de agua y energía son subsidiados por el estado en los estratos 1, 2 y 3 en porcentajes diferentes. Estos cobros los realiza la empresa de acueducto establecida en el municipio, ya sea de orden privado, público o de economía mixta y es la municipalidad la encargada de cancelar este cobro por medio de los pagos del gobierno central. Es por ello la importancia de los censos de usuarios, porque al no estar registrado en la base de datos nacional, no se destinarán subsidios para el sistema, ocasionando pérdidas para la empresa. 
        .col-12.col-md-5.col-lg-5
          figure
            img(src="@/assets/curso/tema4/img02.png")(data-aos="fade-up-left")  

      Separador
      
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 4.2 Manejo de sustancias químicas 

      p.mb-4 La manipulación de las sustancias químicas debe estar a cargo de personal idóneo para ello, debido a que la manipulación incorrecta de estas sustancias puede tener consecuencias graves que pueden terminar en enfermedades graves o incluso la muerte. 

      .row.justify-content-center.mb-5
        .col-12.col-md-3.col-lg-3.mb-4.mb-md-0
          figure
            img(src="@/assets/curso/tema4/img03.png")(data-aos="fade-down-right")
        .col-12.col-md-7.col-lg-7(data-aos="fade-right")
          p Para el almacenamiento de los productos químicos se debe destinar un lugar alejado de las áreas administrativas, que tenga buena ventilación, señalización y que no esté a la intemperie. 
          p Cada contenedor de una sustancia química contiene una ficha de información, en la cual se detallan los componentes, fechas de usos, datos generales, recomendaciones de usos, propiedades físicas y químicas, riesgos, hasta el proceso de disposición final. 
          p.m-0 Es de carácter obligatorio que el personal a cargo del material químico conozca estas fichas para minimizar los riesgos en su manipulación. 
          p <b>A continuación, analice las siguientes fichas:</b>

      .row.justify-content-center.align-items-center(data-aos="fade-up")
        .col-12.col-md-6.col-lg-6
          .tarjeta.color-acento-botones.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img.img105(src="@/assets/curso/tema4/img04.svg")
              .col
                .row.justify-content-around.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1.ms-4 Ficha
                    p.text-small.ms-4 Ficha de seguridad del cloro líquido
                  .col-sm-auto
                    a.boton.color-acento-contenido(:href="obtenerLink('/downloads/Ficha_de_seguridad_del_cloro_líquido.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
        .col-12.col-md-6.col-lg-6
          .tarjeta.color-acento-botones.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img.img105(src="@/assets/curso/tema4/img04.svg")
              .col
                .row.justify-content-center.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1.ms-4 Ficha
                    p.text-small.ms-4 Ficha de seguridad acorde a la normativa
                  .col-sm-auto
                    a.boton.color-acento-contenido(:href="obtenerLink('/downloads/Ficha_de_seguridad_acorde_a_la_normativa.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download

      .row.justify-content-center
        .col-12.col-md-10.col-lg-10
          .cajon.color-secundario.p-4.mb-4(data-aos="fade-right")
            .row.ms-3
              .col-md-1.mb-4.mb-md-0
                figure
                  img.mx-auto(src="@/assets/curso/tema4/img05.svg" style= "width: 66.44px")
              .col-md-11
                p Lo invitamos a conocer la ficha completa de Información de seguridad voluntaria apoyándose en el formato de ficha de datos de seguridad conforme al Reglamento (CE) n.º 1907/2006 (REACH) en el material complementario.


      


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
