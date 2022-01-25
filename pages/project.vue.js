let Project = {
	data: function () {
		return {
			model: {
				title: 'Proyectos',
				estudios: [
					{
						title: 'CRUD REST y Subida de imagenes',
						lenguaje: 'Node-TypeScript-TypeORM',
						url: 'https://github.com/RichardFuentes369/NodeTypeOrmBase',
						icono: '',
						descripcion: 'Software web que muestra los movimientos que se registran y van sumando o restando dependiendo de la opción',
						video: '',
						status: 'offline'
					},
					{
						title: 'CRUD REST',
						lenguaje: 'Java-SpringBoot',
						url: 'https://github.com/RichardFuentes369/SpringCrud',
						icono: '',
						descripcion: 'Software web que muestra los movimientos que se registran y van sumando o restando dependiendo de la opción',
						video: '',
						status: 'offline'
					},
					{
						title: 'CRUD php',
						lenguaje: 'PHP',
						url: 'https://github.com/RichardFuentes369/php-mysql-vue',
						icono: '',
						descripcion: 'Software web que muestra los movimientos que se registran y van sumando o restando dependiendo de la opción',
						video: '',
						status: 'offline'
					},
				],
				aprendizajes: [
					{
						title: 'Monedero',
						lenguaje: 'Laravel-php-vue',
						url: 'https://github.com/RichardFuentes369/Monedero',
						icono: '',
						descripcion: 'Software web que muestra los movimientos que se registran y van sumando o restando dependiendo de la opción',
						video: '',
						status: 'offline'
					},
					{
						title: 'Restaurante',
						lenguaje: 'Laravel-php-vue',
						url: 'https://github.com/RichardFuentes369/restaurante',
						icono: '',
						descripcion: 'Software web que muestra los menus de los restaurantes y a su vez factura mediante una orden de un mesero',
						video: '',
						status: 'offline'
					},
					{
						title: 'Inventario',
						lenguaje: 'Laravel-php-vue',
						url: 'https://github.com/RichardFuentes369/Inventario',
						icono: '',
						descripcion: 'Software web que muestra el inventario con stock de mis productos',
						video: '',
						status: 'offline'
					},
					{
						title: 'Valet-parking',
						lenguaje: 'Laravel-php-vue',
						url: 'https://github.com/RichardFuentes369/valetParking',
						icono: '',
						descripcion: 'Software web que muestra los y registra el movimiento de un parqueadero de vehiculos y a su vez factura dependiendo del tipo de vehivulo, moto o carro y la fraccion de la hora, dia, semana,mes',
						video: '',
						status: 'offline'
					},
					{
						title: 'Sisconotas',
						lenguaje: 'Laravel-php-javascript',
						url: 'https://github.com/RichardFuentes369/restaurante',
						icono: '',
						descripcion: 'Software web que muestra y registra la notas de los alumnos de x colegio del grado 0 al grado 5to',
						video: '',
						status: 'offline'
					},
					{
						title: 'ProyectoGrado',
						lenguaje: 'JavaEE',
						url: 'https://github.com/RichardFuentes369/ProyectoGrado',
						icono: '',
						descripcion: 'Software web para registrar la trazabilidad de la mora en Santander',
						video: '',
						status: 'offline'
					},
				],
				participe: [
					{
						title: 'Monedero',
						lenguaje: 'Laravel-php-vue',
						url: 'https://github.com/RichardFuentes369/Monedero',
						icono: '',
						descripcion: 'Software web que muestra los movimientos que se registran y van sumando o restando dependiendo de la opción',
						video: '',
						status: 'offline'
					}
				],
			}
		}
	},
	template: `
		<div>
			<div class="row text-center mt-4">
				<h3>{{model.title}}<h3>
			</div>
			
			<div class="col-sm-12 row">
				<div calss="row">
					PROYECTOS ESTUDIO
				</div>
				<div class="col-sm-6 mb-4" v-for="(estudio, index1) in model.estudios">
					{{estudio}}
				</div>
				<div calss="row">
					PROYECTOS DE APRENDIZAJE 
				</div>
				<div class="col-sm-6 mb-4" v-for="(aprendizaje, index2) in model.aprendizajes">
					{{aprendizaje}}
				</div>
				<div calss="row">
					PROYECTOS TRABAJO Y/O PARTICIPACIÓN
				</div>
				<div class="col-sm-6 mb-4" v-for="(participando, index3) in model.participe">
					{{participando}}
				</div>
			</div>
		</div>
	`,
};