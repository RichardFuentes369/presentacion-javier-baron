let Contact = { 
	data: function () {
		return {
			model: {
				title: 'Contactame',
				name: 'Javier Baron',
				redes: [
					{
						title: 'Facebook',
						lenguaje: 'Node-TypeScript-TypeORM',
						url: 'https://github.com/RichardFuentes369/NodeTypeOrmBase',
						icono: '',
					},
					{
						title: 'WhatsApp',
						lenguaje: 'Node-TypeScript-TypeORM',
						url: 'https://api.whatsapp.com/send?phone=573504284093',
						icono: '',
					},
					{
						title: 'LinkeIn',
						lenguaje: 'Node-TypeScript-TypeORM',
						url: 'https://www.linkedin.com/in/javierbaronf/',
						icono: '',
					},
					{
						title: 'CV',
						lenguaje: 'Node-TypeScript-TypeORM',
						url: 'https://github.com/RichardFuentes369/NodeTypeOrmBase',
						icono: '',
					},
				],
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
				<div class="col-sm-6 mb-4" v-for="(red, index1) in model.redes">
					<div class="card" >
						<div class="card-body">
							<h5 class="card-title text-center">{{red.title}}</h5>
							<p class="card-text"><b>Descripción:</b> {{red.descripcion}}</p>
							<p class="card-text"><b>Lenguaje:</b>{{red.lenguaje}}</p>
							<p class="card-text"><b>Estado:</b>{{red.status}}</p>

							<div class="col-sm-12">
								<a :href="red.url" class="btn btn-primary" target="_blank">Ir a {{red.title}}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
};

//<div></div>