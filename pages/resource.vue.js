let Resource = {
	data: function () {
		return {
			model: {
				title: 'Recursos',
				backend: [
					{
						name: 'PHP',
						icono: '',
						frameworks: [
							{
								name: 'Laravel',
								icono: '',
								estado: ''
							},
							{
								name: 'Codeigniter',
								icono: '',
								estado: ''
							}
						]
					},
					{
						name: 'JAVA',
						icono: '',
						frameworks: [
							{
								name: 'JavaServer Faces',
								icono: '',
								estado: ''
							},
							{
								name: 'Hibernate',
								icono: '',
								estado: ''
							},
							{
								name: 'SpringFramework',
								icono: '',
								estado: ''
							}
						]
					},
					{
						name: 'NODE',
						icono: '',
						frameworks: [
							{
								name: 'Express',
								icono: '',
								estado: ''
							}
						]
					},
				],
				fronted: [
					{
						name: 'JavaScript',
						icono: '',
						frameworks: [
							{
								name: 'JQuery',
								icono: '',
								estado: ''
							},
							{
								name: 'Vue.js',
								icono: '',
								estado: ''
							},
							{
								name: 'Vue 2',
								icono: '',
								estado: ''
							},
							{
								name: 'Angular js',
								icono: '',
								estado: ''
							}
						]

					}
				],
				bd: [
					{
						name: 'Relacionales',
						icono: '',
						db: [
							{
								name: 'MySql',
								icono: '',
								estado: ''
							},
							{
								name: 'PostgreSql',
								icono: '',
								estado: ''
							},
							{
								name: 'SqlServer',
								icono: '',
								estado: ''
							}
						]
					}
				],
				versionadores: [
					{
						name: 'Git',
						icono: '',
						lista: [
							{
								name: 'GitHub',
								icono: '',
								estado: ''
							},
							{
								name: 'GitLab',
								icono: '',
								estado: ''
							}
						]
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
				<div calss="row">
					Lenguajes Backend
				</div>
				<div class="col-sm-4 mb-4" v-for="(lbackend, index3) in model.backend">
					<div class="card" >
						<div class="card-body">
							<h5 class="card-title text-center">{{lbackend.name}}</h5>
							<p class="card-text">{{lbackend.icono}}</p>
							<ul v-for="(fbackend, index4) in lbackend.frameworks">
								<l1>{{fbackend.name}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div calss="row">
					Lenguajes Frontend
				</div>
				<div class="col-sm-4 mb-4" v-for="(lfronted, index1) in model.fronted">
					<div class="card" >
						<div class="card-body">
							<h5 class="card-title text-center">{{lfronted.name}}</h5>
							<p class="card-text">{{lfronted.icono}}</p>
							<ul v-for="(ffrontend, index4) in lfronted.frameworks">
								<l1>{{ffrontend.name}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div calss="row">
					Bases de datos
				</div>
				<div class="col-sm-4 mb-4" v-for="(database, index5) in model.bd">
					<div class="card" >
						<div class="card-body">
							<h5 class="card-title text-center">{{database.name}}</h5>
							<p class="card-text">{{database.icono}}</p>
							<ul v-for="(db, index6) in database.db">
								<l1>{{db.name}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div calss="row">
					Versionadores de codigo
				</div>
				<div class="col-sm-4 mb-4" v-for="(version, index7) in model.versionadores">
					<div class="card" >
					<div class="card-body">
						<h5 class="card-title text-center">{{version.name}}</h5>
						<p class="card-text">{{version.icono}}</p>
						<ul v-for="(lversionadores, index8) in version.lista">
							<l1>{{lversionadores.name}}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	`,
};