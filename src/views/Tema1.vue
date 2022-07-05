<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistemas de tratamiento de aguas de consumo 

    .bg_fondo1.mb-5
      .row.justify-content-center.align-items-center
        .col-12.col-md-7.col-lg-7(data-aos="fade-right")
          p.mt-5 <b>Los sistemas de tratamiento de agua varían de acuerdo a las necesidades que se tenga,</b> por ejemplo, un <b>sistema de agua potable</b> tiene como finalidad reducir la carga contaminante presente en el efluente para que sea apta para el consumo, a diferencia de un <b>sistema de tratamiento para riego</b>, el cual tendría un sistema menos complejo para lograr suplir la necesidad presentada. 
          p <b>Estudiemos cada una de sus etapas.</b>                     
        .col-12.col-md-4.col-lg-4
          figure
            img(src="@/assets/curso/tema1/img02.png")(data-aos="fade-left")  

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 1.1	Captación y tratamiento

    p Conozcamos qué es la captación a través del siguiente recurso.

    .row.justify-content-center
        .col-12.col-md-12.col-lg-12
          .tarjeta.p-4.mb-5.bg_slyder
            SlyderA(tipo="b")
              .row.justify-content-around.align-items-center
                .col-12.col-md-5.col-lg-6(data-aos="fade-right") 
                  p Para la construcción de una planta de tratamiento de agua potable es indispensable la ubicación del sistema de captación, que es el que va a permitir tomar el agua, ya sea de forma superficial: de ríos, quebradas, embalses, o de forma subterránea: de pozos o canales presentes bajo tierra por medio de bombeo. 
                  p Para reducir los costos de operación es recomendable que la captación y la conducción se realice aguas arriba de la planta de tratamiento, para evitar realizar bombeo.      
                .col-12.col-md-4.col-lg-5(data-aos="fade-left") 
                  figure
                    img(src='@/assets/curso/tema1/img04.svg')

              .row.justify-content-around.align-items-center
                .col-12.col-md-5.col-lg-6
                  p Una vez definido el efluente se realiza los análisis de aguas para verificar la calidad de la fuente, de esta manera se garantiza que el tratamiento que se diseñe sea acorde a los resultados del análisis. Se debe definir el punto de captación y el tipo de infraestructura para hacerlo, esto no lo da la topografía del terreno y el caudal de la fuente, ya que por ejemplo si se tiene una fuente de un caudal bajo y poca profundidad, se necesitará realizar un represamiento de agua para garantizar la toma. 
                .col-12.col-md-4.col-lg-5
                  figure
                    img(src='@/assets/curso/tema1/img05.svg', alt='AvatarTop')

              .row.justify-content-around.align-items-center
                .col-12.col-md-5.col-lg-6
                  p Existen varios tipos de captación debido a que hay diferentes factores a tener en cuenta para la elección del sistema. Uno de los más comunes es la captación que se hace por medio de un canal sumergido el cual contiene una rejilla que ayudara a restringir el paso de materiales de gran tamaño que pueden obstruir la tubería de conducción y a pocos metros de este sistema se instala un desarenador, cuya principal función es desalojar el materia suspendido de gran tamaño que pasa por la rejilla por la acción de la gravedad.      
                .col-12.col-md-5.col-lg-5
                  figure
                    img(src='@/assets/curso/tema1/img06.svg', alt='AvatarTop')

    .bg_imgfondo1_t1
      p.mb-5 Para ampliar la información sobre la captación, lo invitamos a leer el recurso <b>“Toma de agua”</b>, que se encuentra en el material complementario.

      ul.lista-ul(data-aos="zoom-out-right")
        li 
          <i class="fas fa-tint" style= "color:#00CAF2 !important;"></i>
          h4 Tratamiento
            hr 

      .row.justify-content-center.align-items-center(data-aos="fade-up")
        .col-12.col-xl-5.col-lg-5.col-md-5
          p Gracias al análisis de aguas realizado en el punto de captación, que permite conocer las condiciones de la fuente receptora, se puede con mayor certeza elegir el sistema de tratamiento. 
          p.m-0 El tratamiento tiene diferentes procesos en los que se realizan acciones que van aportando para la descontaminación del agua captada para finalmente realizar su distribución. <b>Estas fases son:</b>
        .col-12.col-xl-7.col-lg-7.col-md-7.display_tarjetas2
          SlyderF.mb-4(columnas="col-md-6.col-lg-6 col-xl-6")
              .tarjeta-avatar
                img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
                .tarjeta.color-acento-contenido.shadow-sm.p-3.mb-5.bg-body-rounded
                  .p-4
                    h4.text-center Elevación o aireación. 
                    p.m-0 01        
              .tarjeta-avatar
                img(src='@/assets/curso/tema1/img08.svg' alt='AvatarTop')
                .tarjeta.color-acento-contenido.shadow-sm.p-3.mb-5.bg-body-rounded
                  .p-4
                    h4.text-center Coagulación.
                    p.m-0 02 
              .tarjeta-avatar
                img(src='@/assets/curso/tema1/img09.svg' alt='AvatarTop')
                .tarjeta.color-acento-contenido.shadow-sm.p-3.mb-5.bg-body-rounded
                  .p-4
                    h4.text-center Floculación.  
                    p.m-0 03
              .tarjeta-avatar
                img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
                .tarjeta.color-acento-contenido.shadow-sm.p-3.mb-5.bg-body-rounded
                  .p-4
                    h4.text-center Decantación.
                    p.m-0 04
              .tarjeta-avatar
                img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
                .tarjeta.color-acento-contenido.shadow-sm.p-3.mb-5.bg-body-rounded
                  .p-4
                    h4.text-center Filtración.
                    p.m-0 05
              .tarjeta-avatar
                img(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop')
                .tarjeta.color-acento-contenido.shadow-sm.p-3.mb-5.bg-body-rounded
                  .p-4
                    h4.text-center Cloración y alcalinización.
                    p.m-0 06

      p.mb-5 La siguiente imagen nos presenta el orden de estas fases en el proceso de tratamiento de agua potable.

      .row.justify-content-center.mb-5
        .col-12.col-lg-10.col-md-10
          .titulo-sexto.color-acento-contenido
            h5 Figura 1
            span.text-small <em>Procesos de tratamiento de agua potable</em>
      .row.justify-content-center.mb-5
        .col-12.col-lg-12.col-md-12
          figure(data-aos="zoom-in-down")
            img(src='@/assets/curso/tema1/imgfigura1.svg')
    
    p Una vez realizada la captación y la primera filtración con el desarenador primario dispuesto en el inicio del sistema, se conduce el líquido hasta la planta de tratamiento para que cada una de las fases que se mencionan anteriormente inicien en operación.   
    p <b>En el siguiente recurso se realiza una descripción de cada una de estas fases:</b>

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down-left") 
      .row.justify-content-center(titulo="Elevación o aireación")
        .col-12.col-md-5.col-lg-5
          p Es la primera estación donde se realiza una aireación del líquido, el cual viene por medio de tubería. Esta aireación tiene como finalidad realizar un cambio en la velocidad el agua para la aplicación de los químicos para el proceso. 
        .col-12.col-md-6.col-lg-6
          figure
            img(src='@/assets/curso/tema1/img13.svg')
      .row.justify-content-center(titulo="Coagulación")
        .col-12.col-md-5.col-lg-5
          p En este proceso tiene acción los químicos adicionados para que las partículas coagulan, el más utilizado es el sulfato de aluminio, pero también son efectivos sustancias como el cloruro de aluminio, aluminato sódico, sulfato férrico, sulfato ferroso, cloruro ferroso y en algunos casos el ozono cuando se presentan materias orgánicas que están ligadas directamente a elementos como el manganeso o el hierro. 
          p La coagulación busca principalmente la neutralización de los coloides para que finalmente se precipitan. Para la adición del coagulante se debe garantizar un gradiente de velocidad entre 700 y 1000s-1 de esta manera el químico utilizado se mezcla homogéneamente provocando la unión de las partículas en suspensión.
        .col-12.col-md-6.col-lg-6
          figure
            img(src='@/assets/curso/tema1/img14.png')
      .row.justify-content-center(titulo="Floculación")
        .col-12.col-md-5.col-lg-5
          p En la floculación se realiza una mezcla suave con el fin de no separar las partículas que se han formado en el proceso anterior. En esta parte del proceso los microflóculos se ponen en contacto con otros y así aumentan su tamaño al igual que su peso. Para apoyar esta actividad se pueden añadir polímetros de alto peso molecular llamados floculantes que fortalecen las uniones entre flóculos más pequeños para aumentar su peso y la velocidad de sedimentación.
        .col-12.col-md-6.col-lg-6
          figure
            img(src='@/assets/curso/tema1/img15.png')              
      .row.justify-content-center(titulo="Decantación")
        .col-12.col-md-11.col-lg-11.mb-4.mb-md-0
          p La decantación es un proceso físico en el que se separan diferentes componentes de acuerdo a su densidad. En el caso del tratamiento de agua potable la precipitación de los flóculos por su peso hace que se acumulen en el fondo del tanque de decantación, facilitando su evacuación por medio de un canal inferior o en algunos casos en los procesos de limpieza programados ya que el agua tratada es evacuada por la parte superior como podemos observar en la siguiente imagen. 
        .row.justify-content-center
          .col-12.col-md-5.col-lg-5
            figure
              img(src='@/assets/curso/tema1/img16.svg')            
      .row.justify-content-center(titulo="Filtración")
        .col-12.col-md-5.col-lg-5
          p En esta parte del proceso se adaptan unos filtros a lo largo del tanque o canal de conducción dentro de la planta de tratamiento con el fin de que los sólidos suspendidos aún presentes en el agua que no fueron extraídos en las etapas anteriores, queden en dichos filtros antes de pasar a los procesos químicos de desinfección. Los filtros pueden ser de arena seleccionada, paneles filtrantes u otros materiales que garanticen el flujo del agua y la retención de los sólidos. 
        .col-12.col-md-6.col-lg-6
          figure
            img(src='@/assets/curso/tema1/img17.svg')
      .row.justify-content-center(titulo="Cloración y alcalinización")
        .col-12.col-md-5.col-lg-5
          p Cloración y alcalinización: La cloración es el proceso por el cual se añade al agua cloro para desinfectar y así evitar el crecimiento de patógenos que pueden afectar la salud del consumidor. La adición de cloro a el agua produce la acidificación de esta, es por ello que se hace necesaria la otra parte del proceso, la alcalinización, que básicamente es la adición de una base para alcanzar un pH entre 6,5 y 8,5 aceptable para agua potable, de esta manera se garantiza que el agua no tenga sabor, olor y color.
        .col-12.col-md-6.col-lg-6
          figure
            img(src='@/assets/curso/tema1/img18.svg')
      .row.justify-content-center(titulo="Cloración y alcalinización")
        .col-12.col-md-5.col-lg-5
          p Cloración y alcalinización: La cloración es el proceso por el cual se añade al agua cloro para desinfectar y así evitar el crecimiento de patógenos que pueden afectar la salud del consumidor. La adición de cloro a el agua produce la acidificación de esta, es por ello que se hace necesaria la otra parte del proceso, la alcalinización, que básicamente es la adición de una base para alcanzar un pH entre 6,5 y 8,5 aceptable para agua potable, de esta manera se garantiza que el agua no tenga sabor, olor y color. 
        .col-12.col-md-6.col-lg-6
          figure
            img(src='@/assets/curso/tema1/img18.svg')

    .bg_imgfondo2_t1
      .row.justify-content-center
        .col-12.col-md-8.col-lg-9
          p Antes de continuar, profundicemos en la fase cloración y alcalinización, a través del siguiente video.
      .row.justify-content-center
        .col-12.col-md-12.col-lg-12
          figure.mb-5(data-aos="zoom-in-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video: Leyenda del video
      
      p Y así, terminado todo el proceso, el agua es almacenada en tanques para su posterior distribución.

      Separador

      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
          h2 1.2	Distribución

      .bg_fondo2
        .row.justify-content-center.align-items-center
          .col-12.col-md-8.col-lg-8.margin_top1
            p Como se mencionó desde un principio, la determinación de la ubicación de la bocatoma y la planta de tratamiento de agua, es importante para que el sistema trabaje por la acción de la gravedad, porque de esta manera se disminuyen costos por bombeo. 
            .row.justify-content-center
              .col-12.col-md-2.col-lg-2.d-none.d-lg-block
                figure
                  img.mx-auto.d-block(src='@/assets/curso/tema1/img20.svg' style= "width: 70px")(data-aos="fade-right")
              .col-12.col-md-10.col-lg-10
                p(data-aos="fade-left") <b>El cálculo poblacional desde el diseño de nuestra planta hasta su distribución final, debe estar acorde con las necesidades de la población y su crecimiento a futuro, debido a que si el diseño no tiene en cuenta este parámetro, muy probablemente se tendrán problemas en la presión y en los horarios pico de uso del líquido.</b>
              p Una vez el agua está en el tanque de almacenamiento, por medio de una tubería principal se van a desprender una serie de ramificaciones secundarias para la distribución uniforme del agua hasta llegar a los conductos domiciliarios. 
          .col-12.col-md-4.col-lg-4
            figure.width_img21-t1
              img(src='@/assets/curso/tema1/img21.png')(data-aos="fade-left")

          
            



      



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
