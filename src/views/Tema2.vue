<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Saneamiento básico

    p(data-aos="fade-right") El saneamiento básico se define como el conjunto de técnicas que permiten eliminar higiénicamente residuos sólidos, excretas y aguas residuales, para tener un ambiente limpio y sano. En el saneamiento básico se establecen cuatro (4) programas:      

    .bg_imgfondo1_t2
      .row.justify-content-center-align-items-center(data-aos="fade-up")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          figure.filter_tarjetas-t2
            img.mb-4.mb-md-0(src='@/assets/curso/tema2/img01.png')
          .tarjeta-color.bg_colortar-t2-1  
            .p-2
              p.text-center.mt-2 Programa de limpieza y desinfección
        
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          figure.filter_tarjetas-t2
            img.mb-4.mb-md-0(src='@/assets/curso/tema2/img02.png')
          .tarjeta-color.bg_colortar-t2
            .p-2
              p.text-center.text_tarjeta2 Programa de control de plagas

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          figure.filter_tarjetas-t2
            img.mb-4.mb-md-0(src='@/assets/curso/tema2/img03.png')
          .tarjeta-color.bg_colortar-t2-3
            .p-2
              p.text-center.mt-3 Programa de agua potable

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          figure.filter_tarjetas-t2
            img.mb-4.mb-md-0(src='@/assets/curso/tema2/img04.png')
          .tarjeta-color.bg_colortar-t2-4
            .p-2
              p.text-center.text_tarjeta4 Programa de manejo de desechos sólidos, líquidos y desechos peligrosos

      Separador

      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.1	Características del sistema

      .row.justify-content-center.mb-5
        .col-12.col-md-4.col-lg-4(data-aos="fade-right")
          p Una Planta de Tratamiento de Aguas Residuales (PTAR) es indispensable para la preservación, conservación de vida en el planeta y el cuidado del agua. A medida del paso de los años, los métodos y tecnologías para el tratamiento de aguas residuales han mejorado notablemente. Muchas de estos conjuntos de técnicas para el tratamiento de aguas, permiten una recuperación de recursos y dan un valor importante al residuo que se genera.
        .col-12.col-md-4.col-lg-4.mb-4.mb-md-0(data-aos="fade-up")
          figure
            img(src='@/assets/curso/tema2/img05.png')
        .col-12.col-md-4.col-lg-4(data-aos="fade-down")
          .tarjeta-color.bg_color1.p-2.mb-4
            figure.mb-4
              img(src='@/assets/curso/tema2/img06.svg' style= "width: 69.52px")
            p Una Planta de Tratamiento de Aguas Residuales – PTAR realiza la limpieza del agua usada y las aguas residuales para que pueda ser devuelta de forma segura a nuestro medio ambiente.
          p <b>Conozcamos los objetivos de una planta de tratamiento de aguas residuales PTAR.</b>

      .row.justify-content-center.mb-5
        .col-12.col-lg-10.col-md-10
          .titulo-sexto.color-acento-contenido
            h5 Figura 2
            span.text-small <em>Objetivos de una PTAR</em>  
          figure(data-aos="zoom-in-up ")
            img(src='@/assets/curso/tema2/imgfigura2.svg')
    
    .bg_imgfondo2_t2
      p.text-center.pt-5 Luego de tener claros los objetivos de una PTAR, analicemos las fases del sistema de una planta de tratamiento de aguas residuales.
      .row.justify-content-center.mb-4
        .col-12.col-lg-6.col-md-6
          .titulo-sexto.color-acento-contenido
            h5 Figura 3
            span.text-small <em>Fases sistema de una planta de tratamiento de aguas residuales PTAR</em> 
      .row.justify-content-center.mb-5
        .col-12.col-lg-12.col-md-12
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema2/imgfigura3.svg')

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.2	Tipos de tratamiento 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-4.col-lg-4.mb-4.mb-md-0
        figure(data-aos="fade-up-right")
            img(src='@/assets/curso/tema2/img08.png')
      .col-12.col-md-8.col-lg-8
        p El tipo de tratamiento para las aguas residuales se realiza teniendo en cuenta el uso generado por el agua, el cual puede ser:
        .row.justify-content-center.align-items-center
          .col-12.col-md-4.col-lg-4
            .tarjeta.color.bg_color2.p-4.height_tar-t2-2.shadow-sm.mb-4.mb-md-0(data-aos="flip-right")
              img.img90.mx-auto.d-block(src='@/assets/curso/tema2/img09.svg' alt='AvatarTop')
              h4.text-center.mt-4 Residencial.
          .col-12.col-md-4.col-lg-4 
            .tarjeta.color.bg_color2.p-4.height_tar-t2-2.shadow-sm.mb-4.mb-md-0(data-aos="flip-right")
              img.img90.mx-auto.d-block(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
              h4.text-center.mt-4 Institucional.              
          .col-12.col-md-4.col-lg-4
            .tarjeta.color.bg_color2.p-4.height_tar-t2-2.shadow-sm.mb-4.mb-md-0(data-aos="flip-right")
              img.img90.mx-auto.d-block(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
              h4.text-center.mt-4 Locales comerciales e industriales.  
              
    p A continuación, analicemos los pasos para el tratamiento de aguas residuales: 

    .row.justify-content-center.mb-4
      .col-12.col-md-7(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Tratamiento primario (asentamiento de sólidos)")
            .col-md-12.mb-4.mb-md-0
              p.ms-4.me-3 En este aparte se eliminan los sólidos de gran tamaño, resultando en una reducción de la carga contaminante en las aguas que ingresan al sistema. Dependiendo de la calidad demandada de sus efluentes finales, se puede necesitar ya sea un filtro, un sistema de flotación o un sistema de floculación y flotación. Si se realiza una descarga de agua a un sistema de alcantarillado un tratamiento primario puede ser suficiente para lograr los requerimientos del efluente final.
              .row.justify-content-center.align-items-center
                .col-12.col-md-6
                  ul.lista-ul.ms-4
                    li 
                      <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                      p Remoción de sólidos de gran tamaño.
                    li 
                      <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                      p Remoción de arena fina y gruesa.
                .col-12.col-md-6
                  ul.lista-ul.ms-4.ms-md-0
                    li.mt-0.mt-md-3 
                      <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                      p Tanque de sedimentación primaria en la planta de tratamiento rural.
                    li 
                      <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                      p Sedimentación.
          div(titulo="Tratamiento secundario")
            p.ms-4.me-3 El tratamiento secundario es relacionado como el tratamiento biológico requerido para aquellos que descargan residuos al medio ambiente, como ríos u otro cuerpo de agua natural. Este tipo de tratamiento hace uso de bacterias para remover materia biodegradable disuelta en su agua residual.
            ul.lista-ul.ms-4
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                p.m-0 Fangos activos.
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                p.m-0 Camas filtrantes (camas de oxidación).
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                p.m-0 Sedimentación secundaria.
          div(titulo="Tratamiento terciario")
            p.ms-4.me-3 Consiste en procesos físicos y químicos especiales con los que se consigue limpiar las aguas de contaminantes concretos: fósforo, nitrógeno, minerales, metales pesados, virus, compuestos orgánicos, etc. De los tres tipos de tratamiento de aguas residuales este es más caro que los anteriores y se usa en casos más especiales como por ejemplo para purificar desechos de algunas industrias.
            p.m-0.ms-4.me-3 Muchas veces el tratamiento terciario se emplea para mejorar los efluentes del tratamiento biológico secundario. Se ha empleado la filtración rápida en arena para poder eliminar mejor los sólidos y nutrientes en suspensión y reducir la demanda bioquímica de oxígeno. (pasos adicionales como lagunas, microfiltración o desinfección).
            .row.justify-content-center.align-items-center
              .col-12.col-md-6.mt-4
                ul.lista-ul.ms-4
                  li 
                    <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                    | Filtración.
                  li 
                    <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                    | Lagunaje.
                  li 
                    <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                    | Tierras húmedas construidas.
              .col-12.col-md-6
                ul.lista-ul.ms-4.ms-md-0    
                  li 
                    <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                    p.m-0 Remoción de nutrientes.
                  li 
                    <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                    p.m-0 Desinfección.

          .row(titulo="Tratamiento químico")
            .col-md-12.mb-4.mb-md-0
              p.ms-4.me-3.mb-4 Este paso es usualmente combinado con procedimientos para remover sólidos como la filtración.
            .row.justify-content-center
              .col-12.col-md-6
                ul.lista-ul.ms-4
                  li 
                    <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                    | Eliminación del hierro del agua potable.
                  li 
                    <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                    | Eliminación del oxígeno del agua de las centrales térmicas.
              .col-12.col-md-6
                  ul.lista-ul.ms-4.ms-md-0 
                    li 
                      <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                      | Eliminación de los fosfatos de las aguas residuales domésticas.
                    li 
                      <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                      | Eliminación de nitratos de las aguas residuales domésticas y procedentes de la industria.
          div(titulo="Tratamiento biológico")
            ul.lista-ul.ms-4
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                | Lechos oxidantes o sistemas aeróbicos.
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                | Post – precipitación.
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                | Liberación al medio de efluentes, con o sin desinfección según las normas de cada jurisdicción.
          div(titulo="Tratamiento físico-químico")
            ul.lista-ul.ms-4.me-3
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                | Remoción de sólidos.
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                | Remoción de arena.
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                | Precipitación con o sin ayuda de coagulantes o floculantes.
              li 
                <i class="fas fa-tint" style= "color:#3B76E5 !important;"></i>
                | Separación y filtración de sólidos, el agregado de cloruro férrico ayuda a precipitar en gran parte a la remoción de fósforo y ayuda a precipitar biosólidos.       
      .col-12.col-md-5.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema2/img12.png')(data-aos="fade-left")
    
    p.mb-5 En la siguiente imagen se pueden observar un diagrama del tratamiento primario más el tratamiento biológico.

    .row.mb-5
      .col-12.col-lg-12.col-md-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          span.text-small <em>Diagrama del tratamiento primario más el tratamiento biológico</em> 
    
    .row.justify-content-center.mb-5
      .col-12.col-lg-12.col-md-12
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema2/imgfigura4.svg')

    

      


</template>

<script>
export default {
  name: 'Tema2',
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
