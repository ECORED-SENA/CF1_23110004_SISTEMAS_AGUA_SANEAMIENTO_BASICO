<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis DOFA 

    .bg_fondo1-t3.mb-5
      .row.justify-content-center.align-items-end
        .col-12.col-md-4.col-lg-4.mb-4.mb-md-0
          figure
            img(src="@/assets/curso/tema3/img01.png")(data-aos="fade-right")  
        .col-12.col-md-8.col-lg-8
          p El análisis DOFA es una metodología muy utilizada en procesos administrativos, se usa para realizar una planificación ya sea a corto, mediano o largo plazo y también para la creación de nuevos proyectos. El análisis DOFA está relacionado con el diagnóstico del negocio y del entorno en que se encuentra la empresa.
          .row.justify-content-center.mb-5
            .col-md-2
              figure.d-none.d-lg-block
                img.mx-auto.d-block(src="@/assets/curso/tema3/img02.svg" style= "width: 76.47px")(data-aos="fade-up") 
            .col-md-10(data-aos="fade-left")
              p <b>Con este análisis se consiguen establecer los puntos fuertes, débiles, amenazas y oportunidades. Es decir, ayuda a entender el proceso de toma de decisiones en cualquier ambiente, debido a que proporciona una visión amplia del escenario, de la situación y de los competidores.</b>

    .bg_imgfondo_t3
      p.text-center.mb-5 <b>Conozcamos cada uno de sus componentes:</b>
      .row.justify-content-center.mb-5
        .col-12.col-md-8.col-lg-8
          ImagenInfografica.color-secundario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema3/img11.svg', alt='Texto que describa la imagen')(data-aos="fade-down") 

            .tarjeta.color-acento-botones.p-3.bg_colorD(x="24.8%" y="41.6%" numero="+")
              .row
                .col-9
                  p.m-0 <b>Debilidades</b>
                .col-3.flex-end
                  img.mb-2(src="@/assets/curso/tema3/img06.svg" style= "width:38px")
                .tarjeta.color-acento-botones.p-4.bg_color_tar1info-t3
                  .row
                    .col-md-12  
                      p Se trata de elementos nocivos que tiene la empresa y generan una posición poco propicia comparada con otras organizaciones. Se asocia con el faltante de recursos, con las habilidades no desarrolladas y con la falta de planeación, entre otras.

            .tarjeta.color-acento-botones.p-3.bg_colorO(x="48.7%" y="41.6%" numero="+")
              .row
                .col-9
                  p.m-0 <b>Oportunidades</b>
                .col-3.flex-end
                  img.mb-2(src="@/assets/curso/tema3/img07.svg" style= "width:35px")
                .tarjeta.color-acento-botones.p-4.bg_color_tar1info-t3-2
                  .row
                    .col-md-12  
                      p Son factores positivos que resultan favorables y que al momento de ser identificados por la empresa pueden ser aprovechados. Un ejemplo de este factor es la exploración de nuevos mercados o la posibilidad de exportación.

            .tarjeta.color-acento-botones.p-3.bg_colorF(x="73.3%" y="41.6%" numero="+")
              .row
                .col-9
                  p.m-0 <b>Fortalezas</b>
                .col-3.flex-end
                  img.mb-2(src="@/assets/curso/tema3/img08.svg" style= "width:40px")
                .tarjeta.color-acento-botones.p-4.bg_color_tar1info-t3-3
                  .row
                    .col-md-12  
                      p Congrega elementos positivos de la empresa, es decir, son esas capacidades o recursos especiales que la hacen fuerte ante otras organizaciones. Un aspecto para determinar las fortalezas de la empresa consiste en establecer con claridad una visión, misión y objetivos precisos.
            
            .tarjeta.color-acento-botones.p-3.bg_colorA(x="97.6%" y="41.9%" numero="+")
              .row
                .col-9
                  p.m-0 <b>Amenazas</b>
                .col-3.flex-end
                  img.mb-2(src="@/assets/curso/tema3/img09.svg" style= "width:37px")
                .tarjeta.color-acento-botones.p-4.bg_color_tar1info-t3-4
                  .row
                    .col-md-12.col-lg-12  
                      p Son situaciones creadas en el entorno que ponen en peligro a las organizaciones. Un ejemplo de este factor es el ingreso de nuevos competidores al mercado, productos importados y cambios de la oferta y demanda.


      .row.justify-content-center.flex-grow-1
        .col-12.col-md-7.col-lg-7
          .bg_tarjeta-t3.p-3.pb-1(data-aos="fade-right")
            p Para un correcto análisis de la situación de una empresa, es importante diferenciar cada uno de los aspectos e identificar su origen. Por ejemplo, las fortalezas y debilidades son aspectos que están bajo el control de la empresa, como el servicio al cliente, operación de las plantas, manejo del personal, entre otras. Por otra parte, las oportunidades y amenazas no dependen directamente de la empresa, sino de factores externos como los económicos por alza de insumos, o afectaciones por desastres naturales, etc. 
          .row.justify-content-center.mb-5
            .col-md-2
              figure.d-none.d-lg-block
                img.mx-auto.d-block(src="@/assets/curso/tema3/img02.svg" style= "width: 76.47px")(data-aos="fade-up") 
            .col-md-10
              p La importancia del análisis DOFA radica en la ejecución de un diagnóstico real del escenario de la empresa, porque nos permite conocer como esta, para poder realizar acciones que permitan la mejora de las falencias identificadas en la matriz.
        .col-12.col-md-5.col-lg-5
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema3/img04.svg")
      
      .row.justify-content-center.align-items-end
          .col-12.col-md-5.col-lg-5.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema3/img05.png")(data-aos="fade-down-right")  
          .col-12.col-md-7.col-lg-7
            p <b>Para elaborar un análisis DOFA se deben tener en cuenta los siguientes criterios:</b> 
            ul.lista-ul(data-aos="fade-left")
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                p.m-0 Crear un equipo de colaboradores. 
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                p.m-0 Identificar los criterios de análisis.
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                p.m-0 Conocer muy bien el significado de las variables de la matriz DOFA antes de empezar el análisis.
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                p.m-0 Plantear las fortalezas de la matriz. 
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                p.m-0 Definir las oportunidades. 
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                p.m-0 Describir las debilidades. 
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                p.m-0 Encontrar las amenazas.
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                p.m-0 Graficar y analizar los resultados. 
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                p.m-0 Definir estrategias a implementar en la empresa.  

            


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
