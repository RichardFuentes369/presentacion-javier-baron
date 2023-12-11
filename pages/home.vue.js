let Home = Vue.component('Home', {
	data: function () {
		return {
			model: {
				title: 'Bienvenidos',
				name: 'Javier Baron',
				edad: '',
				empleos: [
					{
						empresa: 'Nexura internacional',
						tiempo: '05/07/2022 - 30/11/2023',
						lenguajes: 'Php - Larave - Jquery - Ajax',
						activities: ''
					},
					{
						empresa: 'SmartData & Automation',
						tiempo: '11/11/2020 - 30/06/2021',
						lenguajes: 'Php - Codeigniter - Jquery - Ajax',
						activities: ''
					},
					{
						empresa: 'Freelancer',
						tiempo: '13/02/2020 - 30/04/2021',
						lenguajes: 'JavaScript - Css - Consumo de apis',
						activities: ''
					},
					{
						empresa: 'Grupo Bien Pensado (GBP)',
						tiempo: '02/03/2019 - 30/07/2019 ',
						lenguajes: 'Php - Laravel - Vue - Axios',
						activities: ''
					},
				]
			}
		}
	},
	mounted(){
		this.cargando()
		this.edad()
	},
	methods: {
		cargando(){
			window.document.getElementById('cargando').style.display = ""
			window.document.getElementById('contenido').style.display = "none"
			setTimeout(function(){
				window.document.getElementById('cargando').style.display = "none"
				window.document.getElementById('contenido').style.display = ""
			}, 600)
		},
		edad(){
			let anhoNacimiento = 1996
			let fechaActual = new Date();
            this.model.edad = fechaActual.getFullYear()- anhoNacimiento;
		}
	},
	template: `
		<div class="mt-3">
			<div class="text-center mt-4 col-sm-12 row">
				<div class="col-sm"></div>
				<div class="col-sm box-title">
					<h3 class="font-title">{{model.title}}</h3>
				</div>
				<div class="col-sm"></div>
			</div>
			
			<div class="preloaderPadre" id="cargando">
				<div class="preloaderHijo">
				</div>
			</div>
			
			<div class="col-sm-12 mx-auto row" id="contenido">
				<div class="card mb-4" style="background-color:#f3f3f3">
					<div class="card-body">
						<div class="text-center mb-4">
							<img src="../img/me.jpg" alt="" class="img-thumbnail photo-presentacion">
						</div>
						<div class="col-sm-12 mb-4 justificado-izquierda font-body">
							<p>
							Mi nombre es Javier Ricardo Baron Fuentes y en la actualidad tengo {{this.model.edad}} años. <br><br>
							</p>
							<p>	
							Soy egresado de las Unidades Tecnologicas de Santander (UTS), seccional Bucaramanga. 
							Institución en la cual curse y me gradue de la Tecnología en Desarrollo de Sistemas Informaticos (2015-2019). 
							Actualmente me encuentro estudiando la Ingenieria de Sistemas en la misma universidad (2024). 
							</p>
							<p>
							Desde el 2019 y hasta la actualidad me e venido enfocandome en el estudio de nuevas tecnologias las cuales
							me han permitido hacerme un corto camino en la industria logrando sacar varios proyectos adelante. Entre ellos estan
							proyectos de recolección de datos, analisis de procesos, agendamiento de citas, flujos de chatbots, almacenamineto en lotes,
							generacion de reportes y creaci&oacute;n de modulos personalizados para agencias privadas.
							</p>
							<p>
							Entre las tecnologias que e trabajado se encuentran Java, JSF, JPA, Php, Laravel, Codeigniter, Node, Nest, Angular, Vue y JQuery.
							Tambien e usado librerias como lo son FullCalendar, Moment, SweetAlert entre otras las cuales me han ayudado a realizar los procesos que los clientes necesitan.
							</p>
							<p>
							Me considero una persona honesta, responsable y comprometida con cada reto que se me ponga. 
							</p>
						</div>

						<hr />

						<div class="row mt-4 justify-content-center">
							<h3 class="text-center font-subtitle2">Empleos</h3>
							<div class="linea-tiempo m-4">
								<div class="momento" v-for="(empleo, index) in model.empleos">
									<div class="descripcion">
										Empresa - Cliente: {{empleo.empresa}} <br/>
										Período: {{empleo.tiempo}} <br/>
										Lenguajes: {{empleo.lenguajes}} <br/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
})
