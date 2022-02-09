let Project = Vue.component('Project', {
    data: function() {
        return {
            model: {
                title: 'Proyectos',
                estudios: [{
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
                aprendizajes: [{
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
                        url: 'https://github.com/RichardFuentes369/Sisconotas',
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
                participe: [],
            }
        }
    },
    mounted() {
        this.cargando()
    },
    methods: {
        cargando() {
            window.document.getElementById('cargando').style.display = ""
            window.document.getElementById('contenido').style.display = "none"
            setTimeout(function() {
                window.document.getElementById('cargando').style.display = "none"
                window.document.getElementById('contenido').style.display = ""
            }, 600)
        }
    },
    template: `
		<div class="mt-3">
			<div class="text-center mt-4 col-sm-12 row">
				<h3 class="font-title">{{model.title}}</h3>
			</div>

			<div class="preloaderPadre" id="cargando">
				<div class="preloaderHijo">
				</div>
			</div>
			
			<div class="col-sm-12 mx-auto row " id="contenido">
				<div class="mt-4 col-sm-12 row mb-2">
					<div class="d-inline-flex p-2 bd-highlight">
						<h3 class="font-subtitle">Aprendizaje</h3>
					</div>
				</div>

				<div class="container row p-5 py-2">
					<div class="col-sm-6 mb-4" v-for="(aprendizaje, index2) in model.aprendizajes">
						<div class="card" style="height: 100%!important">
							<div class="card-body">
								<h5 class="card-title text-center">{{aprendizaje.title}}</h5>
								<p class="card-text"><b>Descripción:</b> {{aprendizaje.descripcion}}</p>
								<p class="card-text"><b>Lenguaje:</b>{{aprendizaje.lenguaje}}</p>
								<p class="card-text"><b>Estado:</b>{{aprendizaje.status}}</p>

								<div class="col-sm-12">
									<a :href="aprendizaje.url" class="btn btn-primary" target="_blank">Go GitHub</a>
									<!--
									<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
										Go to Video
									</button>
									-->
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-4 col-sm-12 row mb-2">
					<div class="d-inline-flex p-2 bd-highlight">
						<h3 class="font-subtitle">Estudio</h3>
					</div>
				</div>
				<div class="container row p-5 py-2">
					<div class="col-sm-6 mb-4" v-for="(estudio, index1) in model.estudios">
						<div class="card" style="height: 100%!important">
							<div class="card-body">
								<h5 class="card-title text-center">{{estudio.title}}</h5>
								<p class="card-text"><b>Descripción:</b> {{estudio.descripcion}}</p>
								<p class="card-text"><b>Lenguaje:</b>{{estudio.lenguaje}}</p>
								<p class="card-text"><b>Estado:</b>{{estudio.status}}</p>
								
								<div class="col-sm-12">
									<a :href="estudio.url" class="btn btn-primary" target="_blank">Go GitHub</a>
									<!--
									<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
										Go to Video
									</button>
									-->
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-4 col-sm-12 row mb-2" style="display: none">
					<div class="d-inline-flex p-2 bd-highlight">
						<h3 class="font-subtitle">Proyecto y/o participación</h3>
					</div>
				</div>
				<div class="col-sm-6 mb-4" v-for="(participando, index3) in model.participe">
					<div class="card" >
					<div class="card-body">
						<h5 class="card-title text-center">{{participando.title}}</h5>
						<p class="card-text"><b>Descripción:</b> {{participando.descripcion}}</p>
						<p class="card-text"><b>Lenguaje:</b>{{participando.lenguaje}}</p>
						<p class="card-text"><b>Estado:</b>{{participando.status}}</p>

						<div class="col-sm-12">
							<a :href="participando.url" class="btn btn-primary" target="_blank">Go GitHub</a>
							<!--
							<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
								Go to Video
							</button>
							-->
						</div>
					</div>
					</div>
				</div>
			</div>

			<!-- Modal -->
			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						...
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary">Save changes</button>
					</div>
					</div>
				</div>
			</div>
		</div>
	`,
});