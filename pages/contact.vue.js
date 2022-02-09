let Contact = Vue.component('Contact', {
    data: function() {
        return {
            model: {
                title: 'Contactame',
                name: 'Javier Baron',
                redes: [{
                        title: 'Facebook',
                        url: 'https://www.facebook.com/richard.fuentes.369/',
                        icono: '../img/redes/facebook.png',
                    },
                    {
                        title: 'WhatsApp',
                        url: 'https://api.whatsapp.com/send?phone=573504284093',
                        icono: '../img/redes/whatsapp.png',
                    },
                    {
                        title: 'LinkeIn',
                        url: 'https://www.linkedin.com/in/javierbaronf/',
                        icono: '../img/redes/linkedin.png',
                    },
                    {
                        title: 'CV',
                        url: 'https://drive.google.com/file/d/1bWadMeJ0KwnwS1hv01F0NkyAKKMGgHSG/view',
                        icono: '../img/redes/cv.png',
                    },
                ],
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
				<div class="col-sm-6 mb-4" v-for="(red, index1) in model.redes">
					<div class="card" >
						<div class="card-body">
							<h5 class="card-title text-center">{{red.title}}</h5>
							<div class="text-center">
								<img :src="red.icono" style="height: 2rem; width: 2rem;" alt="">
							</div>
							<div class="col-sm-12 text-center">
								<a :href="red.url" class="btn btn-primary btn-sm mt-2" target="_blank">Ir a {{red.title}}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
});

//<div></div>