<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Conocimientos Clave sobre Buenas Prácticas Ganaderas en Producción de Carne Bovina',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> este cuestionario tiene como finalidad evaluar y fortalecer los conocimientos sobre las Buenas Prácticas Ganaderas (BPG) aplicadas en la producción de carne bovina. Abarca aspectos clave como sanidad, bienestar animal, trazabilidad, sostenibilidad y normativas vigentes, con el propósito de garantizar la producción de carne segura, eficiente y sostenible.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué documento guía define las acciones, cronograma y documentación para implementar BPG en una finca?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Plan de vacunación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Plan de implementación de BPG.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Manual de funciones del personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Guía de transporte animal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es un propósito del monitoreo en el marco de las BPG?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar el precio de la carne en el mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Calcular el número de visitas veterinarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar el cumplimiento y sostenibilidad de las prácticas implementadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Promover la expansión desordenada de la ganadería.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Qué monitoreo se utiliza para evaluar el cumplimiento de las BPG?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Monitoreo de resultados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Monitoreo de cumplimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Monitoreo ambiental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Monitoreo participativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué técnica de monitoreo se utiliza para verificar visualmente condiciones en campo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Auditoría externa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Observación directa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Toma de muestras de laboratorio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluación financiera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué indicador refleja la eficiencia en la alimentación del ganado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tasa de morbilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cumplimiento del plan sanitario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Índice de bienestar animal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conversión alimenticia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una característica fundamental de los indicadores de gestión?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Deben cambiar semanalmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ser aleatorios y no verificables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ser claros, medibles y relevantes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Medirse solo una vez al año.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes eventos representa una crisis sanitaria?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Deficiencia en el suministro de alimento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Brote de brucelosis bovina.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sequía prolongada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Huelga del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es un elemento esencial en un plan de emergencia BPG?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Licencia ambiental de terceros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Publicidad del producto cárnico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Asignación de responsables y protocolos de respuesta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Inventario de herramientas de oficina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué es una contingencia en el contexto del monitoreo BPG?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una fiesta de fin de cosecha.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una situación inesperada que afecta el cumplimiento del sistema productivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una auditoría programada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un cambio de propietario en la finca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es una técnica utilizada en el monitoreo para conocer la percepción del personal sobre las prácticas ganaderas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Observación aérea con drones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Revisión de facturas de compra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entrevistas y encuestas al personal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Medición de ruido ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
