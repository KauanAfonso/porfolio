let btnAbout = document.getElementById("sobreMim");
let btnExperience = document.getElementById("experiencia");
let btnTraning = document.getElementById("formacao");
let btnProject = document.getElementById("projetos");
let container = document.getElementById("container");
let bntName = document.getElementById('name');

/* -------------------------F U N C Ã O ---------------------------------------------------------------*/

const containerMain = (conteudo) => {
	container.innerHTML = conteudo;
};

/* -------------------------F U N C Ã O ---------------------------------------------------------------*/

btnAbout.addEventListener("click", () => {
	let box = `
  <div class="sobreMim">	
					<div class="divMeio">
						<h2>Quem sou eu?</h2>
								<p>
									Sou Kauan, primeiramente muito obrigado por estar nesse site, é
									uma grande honra para mim. Aqui gostaria de te apresentar um pouco
									mais sobre mim, minhas ambições, sonhos, projetos e ideias. Tenho
									17 anos e sou apaixonado por tecnologia.
								</p>
								<p>
									Atualmente trabalho como aprendiz na Bosch Brasil em
									Desenolvimento de Sistemas. Meu interesse na área é desde 2022, de la pra cá venho me desenvolvendo e
									aprendendo cada vez mais sobre essa área tão incrível.
								</p>
						</div>
						<div >
							<div class="redesSociais">
								<a href="https://br.linkedin.com/in/kauan-afonso-0452a5295">Linkedin</a>
								<a href="https://github.com/KauanAfonso/">Github</a>
								<a href="https://api.whatsapp.com/send/?phone=5519982031917">WhatsApp</a>
						</div>	
				</div>
				</div>`;
	containerMain(box);
});

btnExperience.addEventListener("click", () => {
	let box = `<div class="experiencia">
						<div class="experianciaLadoA" style="color:rgba(255, 255, 255, 0.559);">
								<p class="mesExperiencia">Julho</p>
								<p class="dataExperiencia">2024 - PRESENTE</p>
								<p class="Cargo">Aprendiz em Desenvolvimento de Sistemas</p>
								<p class="Empresa">Bosch Brasil</p>			
					</div>

								<div class="esperienciaLadoB">
										<h3>Descrição</h3>

											<p>Atualmente, sou aprendiz na Bosch na área de desenvolvimento de sistemas, onde tenho a oportunidade de aplicar e expandir meus conhecimentos em programação e desenvolvimento de software. Meu trabalho inclui o desenvolvimento de soluções tecnológicas inovadoras, participação em projetos de desenvolvimento e aprendizado.</p>
										
								</div>

			</div>`;
	containerMain(box);
});

btnTraning.addEventListener("click", () => {
	let box = `		
	<div class="formacao">
					<div class="formacaoCursos">
						<img src="https://www.sp.senai.br/images/senai.svg" alt="" />
						<p class="nome">SENAI</p>
						<p class="curso">Técnico em Desenvolvimento de Sistemas</p>
						<p class="duracao">Jul 2024- Dez 2025</p>
					</div>
					<div class="formacaoCursos">
						<img
							src="https://onebitcode.com/assets/js/img/logo-js.png"
							alt=""
						/>
						<p class="nome">ONEBITCODE</p>
						<p class="curso">Full Stack Javascript</p>
						<p class="duracao">Out 2023 - Atualmente</p>
					</div>
					<div class="formacaoCursos">
						<img
							id="etec"
							src="https://fatweb.s3.amazonaws.com/vestibulinhoetec/assets/img/layout/logotipo-etec.png"
							alt=""
						/>
						<p class="nome">ETEC</p>
						<p class="curso">Técnico em informática</p>
						<p class="duracao">Fev 2023 - Jun 2024</p>
					</div>
					<div class="formacaoCursos">
						<img
							id="unasp"
							src="https://cdn.unasp.br/noticias/wp-content/uploads/2018/11/23084455/Logo-UNASP-031-300x300.png"
							alt=""
						/>
						<p class="nome">UNASP HT</p>
						<p class="curso">Técnico em informática</p>
						<p class="duracao">Fev 2022 - Dez 2024</p>
					</div>
				</div>`;
	containerMain(box);
});

bntName.addEventListener('click', () =>{
	let box = `	<div class="inicio">
						<div class="divFontDev">
							<h2 class="fontDev">Dev Back-End</h2>
							 <div class="skills">
								<img src="https://img.icons8.com/?size=48&id=20909&format=png" alt="">
								<img src="https://img.icons8.com/?size=48&id=7gdY5qNXaKC0&format=png" alt="">
								<img src="https://img.icons8.com/?size=48&id=PXTY4q2Sq2lG&format=png" alt="">
								<img src="https://img.icons8.com/?size=48&id=XNQU0Xcm2I9s&format=png" alt="">
								<a href="./Curriculo2024.pdf" target="_blank"><button class="btnCurriculo">Baixar currículo</button></a>
							 </div>
						</div>
						<div>
							<img src="https://cdn.pixabay.com/photo/2024/08/20/22/43/ai-generated-8984558_640.png" alt="" width="300px" style="border-radius: 0%;">
						</div>

						<img src="" alt="">
			</div>
			</div>
			`

			containerMain(box)
})


btnProject.addEventListener("click", () => {
	let box = `	<div class="projetos">

				<div class="card">
					<div class="card__content">
						<p>Em breve</p>
					</div>
				</div>

				<!-- -------------------------- -->
				<div class="card">
					<div class="card__content">
						<p>Em breve</p>
					</div>
				</div>

				<!-- -------------------------- -->

				<div class="card">
					<div class="card__content">
						<p>Em breve</p>
					</div>
				</div>

				<!-- -------------------------- -->

				<div class="card">
					<div class="card__content">
						<p>Em breve</p>
					</div>
				</div>

				<!-- -------------------------- -->
				 
				
				 

		</div>`;
	containerMain(box);
});
