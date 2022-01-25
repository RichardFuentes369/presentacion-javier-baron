let About = { 
	data: function () {
		return {
			model: {
				title: 'Sobre mi',
				name: 'Javier Baron',
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
		<div>
			<div class="row text-center mt-4">
				<h3>{{model.title}}<h3>
			</div>
			
			<div class="preloaderPadre" id="cargando">
				<div class="preloaderHijo">
				</div>
			</div>
			
			<div class="col-sm-12 row" id="contenido">
				<div class="col-sm-6 mb-4 justificado-izquierda">
					Mi nombre es Javier Ricardo Baron Fuentes, nací el 1 de Junio del año 1996 y en la actualidad tengo 25 años. <br><br>

					Soy egresado de las Unidades Tecnologicas de Santander (UTS), seccional bucaramanga. Institución en la cual curse una Tecnología en Desarrollo de Sistemas Informaticos y de la cual 
					me gradue en el año 2019.
					Desde ahí y hasta la actualidad me e venido enfocandome en el analisis, desarrollo y montaje de sistemas informaticos para la web usando lenguajes de programación para el backend 
					como PHP (Laravel - Codeigniter), Node (Express, TypeOrm), Java (JPA, JSP, MAVEN, JEE) y asi mismo usando JavaScript Bibliotecas(JQuery, Axios, AJAX, SweetAlert) 
					y JavaScript Frameworks(Vue, vue.js, angular.js) para darle dinamismo a las paginas. <br><br>
					
					Actualmente me encuentro aprendiendo mas sobre estas tecnologias para mejorar e ir avanzando en mi formación y asi poder ofrecer un servicio optimo.
				</div>
				<div class="col-sm-6 mb-4">
					<img src="../img/yo.jpg" alt="" class="img-thumbnail">
				</div>
			</div>
		</div>
	`,
};