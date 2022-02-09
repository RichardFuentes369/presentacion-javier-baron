let Home = Vue.component('Home', {
	data: function () {
		return {
			model: {
				title: 'Bienvenidos',
				name: 'Javier Baron',
				empleos: [
					{
						empresa: 'SmartData & Automation',
						tiempo: '11/11/2020 - 30/06/2021',
						lenguajes: 'Php - Codeigniter - Jquery - Ajax',
						activities: ''
					},
					{
						empresa: 'La Turena',
						tiempo: '14/05/2020 - 30/07/2020',
						lenguajes: 'Java - Php - Laravel - JavaScript - Css',
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
	},
	methods: {
		cargando(){
			window.document.getElementById('cargando').style.display = ""
			window.document.getElementById('contenido').style.display = "none"
			setTimeout(function(){
				window.document.getElementById('cargando').style.display = "none"
				window.document.getElementById('contenido').style.display = ""
			}, 600)
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
				<div class="col-sm-6 mb-4 justificado-izquierda font-body">
					Mi nombre es Javier Ricardo Baron Fuentes, nací el 1 de Junio del año 1996 y en la actualidad tengo 25 años. <br><br>

					Soy egresado de las Unidades Tecnologicas de Santander (UTS), seccional bucaramanga. Institución en la cual curse una Tecnología en Desarrollo de Sistemas Informaticos y de la cual 
					me gradue en el año 2019.
					Desde ahí y hasta la actualidad me e venido enfocandome en el analisis, desarrollo y montaje de sistemas informaticos para la web usando lenguajes de programación para el backend 
					como PHP (Laravel - Codeigniter), Node (Express, TypeOrm), Java (JPA, JSP, MAVEN, JEE) y asi mismo usando JavaScript Bibliotecas(JQuery, Axios, AJAX, SweetAlert) 
					y JavaScript Frameworks(Vue, vue.js, angular.js) para darle dinamismo a las paginas. <br><br>
					
					Actualmente me encuentro aprendiendo mas sobre estas tecnologias para mejorar e ir avanzando en mi formación y asi poder ofrecer un servicio optimo.
				</div>
				<div class="col-sm-6 mb-4 text-center">
					<img src="../img/me.jpg" alt="" class="img-thumbnail photo-presentacion">
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
	`,
})
