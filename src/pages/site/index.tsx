import { Pagina} from "../../styles/pages/Site";
import Head from 'next/head'
import Button from '@material-ui/core/Button'
import { useRouter } from 'next/router'
import { signIn, useSession } from "next-auth/client"
import Image from "next/image";
import i3 from '../../../public/Site/Novo Site/3.jpg'


export default function Site() {
	const router = useRouter()
	return(
	<>
	<Pagina>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<title>Novo Mundo</title>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
		</Head>

		<body>

		<header>
			<div className="container-header">
				<nav className="container-header-int">
					<div id="logo">
						<h1> <a href="#"><span className="fa fa-leaf"></span> Novo Mundo</a></h1>
					</div>
					<div>
						<ul className="menu mt-md-2 ml-auto">
							<li className="mr-lg-4 mr-2 active"><a >Home</a></li>
							<li className="mr-lg-4 mr-2"><a >Sobre</a></li>
							<li className="mr-lg-4 mr-2"><a >Servicos</a></li>
							<li className="mr-lg-4 mr-2"><a >Portifolio</a></li>
							<li className="mr-lg-4 mr-2"><a >Contato</a></li>
						</ul>
					</div>
					<div>
						<div className="menu mt-md-2 ml-auto">
							<li  >	
								<Button variant="outlined" className="button-login" onClick={() => router.push('/cadastro')}><a>Sign Up</a></Button>
							</li>
							<li  >	
								<Button variant="outlined" className="button-login" onClick={() => router.push('/login/administrador')}><a>Log In</a></Button>
							</li>
						</div>
					</div>
				</nav>
			</div>
		</header>

		<section className="banner_w3lspvt" id="home">
			<div className="banner-top">
				<div className="overlay">
					<div className="container">
						<div className="w3layouts-banner-info text-center">
							<h3 className="text-wh">Harvesting</h3>
							<h4 className="text-wh my-4">Cultivating new crops to make farmers increase profits</h4>
							<p className="text-li mt-2">Ut enim ad minim quis nostrud exerci sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua nostrud exerci sed.</p>
							<a href="about.html" className="button-style mt-sm-5 mt-4">Read More</a>
						</div>
					</div>
				</div>
				<Image src={i3} className="img-contact" alt=""/>
			</div>
		</section>

		<section className="about py-5">
			<div className="container py-md-4">
				<h3 className="heading text-center">Best Harvesting Agriculture Company</h3>
				<p className="about-text text-center">
					Tempor Ut enim ad minim quis nostrud exerci sed do eiusmod tempor incididunt ut labore
				</p> 
				<p  className="about-text text-center">
					et dolore magna aliqua nostrud exerci sed nostrud exerci ipsum dolor ut.
				</p>
				<div className="feature-grids row mt-5 text-center">
					<div className="collumns ">
						<div className="bottom-gd collumns text-center2">
							<div className="f-icon">
								<span className="fa fa-leaf" aria-hidden="true"></span>
							</div>
							<h3 className="mt-4"> Cereals</h3>
							<p className="mt-3">Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet quam.</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-md-0 mt-4">
						<div className="bottom-gd collumns text-center2">
							<div className="f-icon">
								<span className="fa fa-apple" aria-hidden="true"></span>
							</div>
							<h3 className="mt-4"> Fruits & Berries</h3>
							<p className="mt-3">Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet quam.</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
						<div className="bottom-gd collumns text-center2">
							<div className="f-icon">
								<span className="fa fa-pagelines" aria-hidden="true"></span>
							</div>
							<h3 className="mt-4">Vegetables</h3>
							<p className="mt-3">Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet quam.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<footer className="text-center py-5">
			<div className="container py-md-3">
				<h2 className="logo2 text-center">
					<a href="index.html">
						<span className="fa fa-leaf"></span> Novo Mundo
					</a>
				</h2>
				<div className="contact-left-footer mt-4">
					<ul className="contact-collun">
						<li>
							<p>
								<span className="fa fa-map-marker mr-2"></span>Agriculture Business, 2nd Block, USA
							</p>
						</li>
						<li className="mx-4">
							<p>
								<span className="fa fa-phone mr-2"></span>+12(345) 6789 111.
							</p>
						</li>
						<li>
							<p className="text-wh">
								<span className="fa fa-envelope-open mr-2"></span>
								<a href="mailto:info@example.com">Example@gmail.com</a>
							</p>
						</li>
					</ul>
				</div>
				<div className="footercopy-social my-4">
					<ul>
						<li>
							<a href="#">
								<span className="fa fa-facebook-square"></span>
							</a>
						</li>
						<li className="mx-2">
							<a href="#">
								<span className="fa fa-twitter-square"></span>
							</a>
						</li>
						<li className="">
							<a href="#">
								<span className="fa fa-google-plus-square"></span>
							</a>
						</li>
						<li className="mx-2">
							<a href="#">
								<span className="fa fa-linkedin-square"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span className="fa fa-rss-square"></span>
							</a>
						</li>
						<li className="ml-2">
							<a href="#">
								<span className="fa fa-pinterest-square"></span>
							</a>
						</li>
					</ul>
				</div>
				<div className="w3l-copy text-center">
					<p className="text-da">© 2022 Novo Mundo. Todos os direitos reservados | Design by
						<a href="#"> Infoalto</a>
					</p>
				</div>
			</div>
		</footer>

		<a href="#home" className="move-top text-center"></a>	

		</body>
		</Pagina>
            </>   
        )
    }
