import React from 'react'
import {
     Card,
    CardHeader,
    CardBody,
    Typography,
    Input,
    Textarea,
    Button,
} from '@material-tailwind/react'
import {
    ArrowLongRightIcon,
    ArrowLongLeftIcon,
} from '@heroicons/react/24/solid'
import emailjs from 'emailjs-com';
// import ScrollAnimation from 'react-animate-on-scroll'
import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const [mail, setMail] = useState("");
    const [objet, setObjet] = useState("");
    const [message, setMessage] = useState("");
    const handleSendEmail = (event) => {
        const templateParams = {
            name: name, // Votre nom
            numero: num,
            from_mail: mail,
            to_name: 'mariusrandrianarison@gmail.com', // Nom du destinataire
            objet: objet,
            message: message, // Le contenu du message
        };

        event.preventDefault();
        emailjs
            .send('service_d3q1jxf', 'template_6pfqe1f', templateParams, 'dnq_CXqigOtHUV5ce')
            .then((response) => {
                console.log('E-mail envoyé avec succès !', response);
                window.location.href = '/';
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
            });

    };



    return (
        <>
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 ">
                <div className="absolute top-0 h-full w-full bg-[url('/public/img/f3.png')] banner bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
                <div className="max-w-8xl container relative mx-auto ">
                    <div className="flex flex-wrap items-center nous">
                        <div className="ml-auto mr-auto w-full px-4 lg:w-8/12">
                            <Typography
                                variant="h1"
                                color="white"
                                className=" font-black texte"
                            >
                                <b className='logo'> APP'IN</b> TECHNOLOGIE
                            </Typography>
                        </div>
                        <div className="ml-auto mr-auto w-full px-4 lg:w-8/12">
                            <Typography variant="lead" color="white" className="opacity-80 legende">
                                Nous allons vous apporter plusieurs innovations technologiques.
                            </Typography>
                            <a href="#contact" className='btn'>Contacter nous</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-8xl container relative mx-auto" style={{ marginLeft: "20%" }}>
                    {/* <div className="anim">
                    </div> */}
                    <div className="container mx-auto mt-10 containers">
                        <Card
                            className="w-72 h-72 bg-gray-100 transform-gpu perspective tax"
                            hoverclassname="hover:rotate-none" >
                        </Card>
                    </div>
                </div>
            </div>
            <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4 nos" id='service'>
                <div style={{ marginLeft: "45%", transform: "translateX(-45%)" }} className='mt-20 section-titre'>
                    <Card className="w-60 pt-2 items-center titi titreN" style={{ backgroundColor: "#10D9E0" }}>
                        <Typography variant="h4" color="white" className='titre tititi'>
                            Nos services
                        </Typography>
                    </Card>
                </div>
                {/* Developpement web */}
                <div className="container mx-auto">
                    <div className="mt-10 flex flex-wrap items-center">
                        <div className="mx-auto mt-8 w-full px-4 md:w-5/12">
                            <Card className="flex-row w-full max-w-[48rem]">
                                <CardHeader shadow={false}  className="w-2/5 shrink-0 m-0 rounded-r-none">
                                    <img
                                        src="https://img.freepik.com/photos-gratuite/concept-web-technologie-avancee-programmation-html_53876-124133.jpg?size=626&ext=jpg&uid=R91141572&ga=GA1.2.233797558.1674755311&semt=ais"
                                        alt="image"
                                        className="w-full h-full"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h6" color="blue" className="uppercase mb-4"> Site Web </Typography>
                                    <Typography variant="h5" color="blue-gray" className="mb-2 info">
                                        Développement de site et d'application web
                                    </Typography>
                                    <Typography color="gray" className="font-normal mb-8">
                                        Nous développons des sites et des applications web ...
                                    </Typography>
                                        <Button variant="text" className="flex items-center gap-2">
                                            Plus de détail
                                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                                        </Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="mx-auto mt-24 w-full justify-center  md:w-6/12 lg:mt-0 web-legende">

                            <Typography variant="h2" className='mb-4 titre' color="blue">
                                Développement web
                            </Typography>
                            <p>
                                Le développement web est devenu un élément essentiel de la présence en ligne des entreprises et des organisations. Dans ce domaine en constante évolution, APP'IN se démarque en tant qu'acteur majeur, offrant une expertise spécialisée dans la conception et le développement d'applications web sur mesure.
                            </p>
                            <div className="mx-auto flex mt-24 w-full justify-center  md:w-6/12 lg:mt-6 icon-web">
                                <img src="/public/img/angular.png" alt="angular" width={60} />
                                <img src="/public/img/django.png" alt="django" width={60} />
                                <img src="/public/img/laravel.png" alt="laravel" width={60} />
                                <img src="/public/img/node.png" alt="node" width={60} />
                                <img src="/public/img/react.png" alt="react" width={60} />
                                <img src="/public/img/symfony.png" alt="symfony" width={60} />
                                <img src="/public/img/vue.png" alt="vue" width={60} />
                                <img src="/public/img/wordpress.png" alt="wordpress" width={60} />
                            </div>
                        </div>
                    </div>

                    {/* Multimedia */}
                    <div className="mt-32 flex flex-wrap items-center multimedia">
                        <div className="mx-auto mt-24 w-full justify-center px-4 md:w-6/12 lg:mt-0">
                            <Typography variant="h2" className='mb-4 titre' color="blue">
                                Multimedia
                            </Typography>
                            <p>
                                Création de contenus visuels :
                                APP'IN propose des services de conception graphique et visuelle pour aider les clients à créer des contenus visuellement captivants. Leur équipe de designers talentueux travaille en étroite collaboration avec les clients pour concevoir des éléments visuels tels que des logos, des illustrations, des infographies et des images percutantes.
                            </p><div className="mx-auto flex mt-24 w-full justify-center  md:w-6/12 lg:mt-6 icon-web">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Adobe_Photoshop_Express_logo.svg/2101px-Adobe_Photoshop_Express_logo.svg.png" alt="react" width={60} />
                                <img src="https://logodownload.org/wp-content/uploads/2019/10/adobe-premiere-pro-logo-5.png" alt="react" width={60} />
                                <img src="https://cdn.freebiesupply.com/logos/large/2x/figma-1-logo-png-transparent.png" alt="react" width={60} />
                                <img src="https://seeklogo.com/images/1/3ds-max-logo-9B624BE04F-seeklogo.com.png" alt="react" width={110} />
                                <img src="https://freelogopng.com/images/all_img/1656733637logo-canva-png.png" alt="react" width={60} />
                                <img src="/public/img/illustrator.png" alt="react" width={60} />
                                <img src="/public/img/indesign.png" alt="react" width={60} />
                            </div>
                        </div>
                        <div className="mx-auto mt-8 w-full px-4 md:w-5/12">
                            <Card className="flex-row w-full max-w-[48rem]">
                                <CardHeader shadow={false}  className="w-2/5 shrink-0 m-0 rounded-r-none">
                                    <img
                                        src="https://img.freepik.com/vecteurs-libre/illustration-concept-abstrait-conception-video_335657-3820.jpg?size=626&ext=jpg&uid=R91141572&ga=GA1.1.233797558.1674755311&semt=sph"
                                        alt="image"
                                        className="w-full h-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h6" color="blue" className="uppercase mb-4"> Multimedia </Typography>
                                    <Typography variant="h5" color="blue-gray" className="mb-2 info">
                                        Réalisation Multimedia
                                    </Typography>
                                    <Typography color="gray" className="font-normal mb-8">
                                        Nous prouvons créer des designs et aussi différents inspirations pour vous ...
                                    </Typography>
                                        <Button variant="text" className="flex items-center gap-2">
                                            <ArrowLongLeftIcon strokeWidth={2} className="w-4 h-4" />
                                            Plus de détail
                                        </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    {/* Application mobile */}
                    <div className="mt-32 flex flex-wrap items-center">
                        <div className="mx-auto mt-8 w-full px-4 md:w-5/12">
                            <Card className="flex-row w-full max-w-[48rem]">
                                <CardHeader shadow={false}  className="w-2/5 shrink-0 m-0 rounded-r-none">
                                    <img
                                        src="https://img.freepik.com/photos-gratuite/collage-creatif-marketing-telephone_23-2149379900.jpg?size=626&ext=jpg"
                                        alt="image"
                                        className="w-full h-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h6" color="blue" className="uppercase mb-4"> Mobile </Typography>
                                    <Typography variant="h5" color="blue-gray" className="mb-2 info">
                                        Développement d'application mobile
                                    </Typography>
                                    <Typography color="gray" className="font-normal mb-8">
                                        Nous développons des applications mobile adaptable à vos besoins ...
                                    </Typography>
                                        <Button variant="text" className="flex items-center gap-2">
                                            Plus de détail
                                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                                        </Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="mx-auto mt-24 w-full justify-center px-4 md:w-6/12 lg:mt-0">
                            <Typography variant="h2" className='mb-4 titre' color="blue">
                                Application mobile
                            </Typography>
                            <p className='app'>
                                Analyse des besoins :
                                Avant de commencer tout projet de développement d'application mobile, APP'IN travaille en étroite collaboration avec ses clients pour comprendre leurs objectifs commerciaux, leur public cible et les fonctionnalités requises. Cette phase d'analyse des besoins permet de définir les exigences du projet et de poser les bases pour la conception et le développement de l'application.
                            </p><div className="mx-auto flex mt-24 w-full justify-center  md:w-6/12 lg:mt-6 icon-web">
                                <img src="https://seeklogo.com/images/A/android-icon-logo-DB06FA8B39-seeklogo.com.png" alt="react" width={60} />
                                <img src="https://cdn-icons-png.flaticon.com/512/2/2235.png" alt="react" width={60} />
                                <img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Windows_Phone_icon-icons.com_66782.png" alt="react" width={60} />
                                <img src="/public/img/ionic.png" alt="react" width={60} />
                                <img src="/public/img/kotlin.png" alt="react" width={60} />
                                <img src="/public/img/flutter.png" alt="react" width={60} />
                                <img src="/public/img/react.png" alt="react" width={60} />
                            </div>
                        </div>
                    </div>
                    {/* Maintenance et reseau */}
                    <div className="mt-32 flex flex-wrap items-center multimedia">
                        <div className="mx-auto mt-24 w-full justify-center px-4 md:w-6/12 lg:mt-0">
                            <Typography variant="h2" className='mb-4 titre' color="blue">
                                Maintenance et réseau informatique
                            </Typography>
                            <p>
                                APP'IN offre une gamme de services de maintenance des systèmes informatiques, allant de la surveillance à la résolution des problèmes, en passant par les mises à jour et les sauvegardes. Leur approche proactive garantit le bon fonctionnement et la stabilité des infrastructures informatiques de leurs clients, tout en veillant à la sécurité des données et à la continuité des opérations.
                            </p><div className="mx-auto flex mt-24 w-full justify-center  md:w-6/12 lg:mt-6 icon-web">
                            </div>
                        </div>
                        <div className="mx-auto mt-8 w-full px-4 md:w-5/12">
                            <Card className="flex-row w-full max-w-[48rem]">
                                <CardHeader shadow={false}  className="w-2/5 shrink-0 m-0 rounded-r-none">
                                    <img
                                        src="https://img.freepik.com/photos-gratuite/ingenieur-miniature-travailleurs-travaillant-cable-lan_1252-818.jpg?size=626&ext=jpg"
                                        alt="image"
                                        className="w-full h-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h6" color="blue" className="uppercase mb-4"> Maintenance et réseau </Typography>
                                    <Typography variant="h6" color="blue-gray" className="mb-2 info">
                                        Nous proposons une gamme complète de services de maintenance
                                    </Typography>
                                    <Typography color="gray" className="font-normal mb-8">
                                        Nous allons assurer le bon fonctionnement et la stabilité des infrastructures informatiques de nos clients
                                    </Typography>
                                        <Button variant="text" className="flex items-center gap-2">
                                            <ArrowLongLeftIcon strokeWidth={2} className="w-4 h-4" />
                                            Plus de détail
                                        </Button>
                                </CardBody>
                            </Card>
                        </div>

                    </div>
                </div>
            </section>
            {/* Equipe */}
            <section className="px-4 pt-20 pb-48" style={{ borderTop: "5px solid #10D9E0" }} id='equipe'>
                <div className="container mx-auto" >
                    <div style={{ marginLeft: "45%", transform: "translateX(-45%)", marginTop: "-6.7em" }} className='section-titre'>
                        <Card className="w-60 pt-2 items-center titi" style={{ backgroundColor: "#10D9E0" }}>
                            <Typography variant="h4" color="white" className='titre tititi'>
                                Notre Equipe
                            </Typography>
                        </Card>
                    </div>
                    <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
                        <Card className="w-30 profil">
                            <div  className="h-50">
                                <img src="/public/img/Tsiory.jpg" alt="profile-picture" className='equi my-4' style={{ height: "25vh", borderRadius: "15%" }} />
                            </div>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2 -mt-8">
                                    Tsiory
                                </Typography>
                                <Typography color="blue" className="font-medium" textGradient>
                                    Développeur Front end
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card className="w-30 profil">
                            <div  className="h-50">
                                <img src="/public/img/inno.jpg" alt="profile-picture" className='equi' style={{ height: "25vh", borderRadius: "15%" }} />
                            </div>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2 -mt-3">
                                    Innocent
                                </Typography>
                                <Typography color="blue" className="font-medium" textGradient>
                                    Chef de Projet
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card className="w-30 profil">
                            <div  className="h-50">
                                <img src="/public/img/Marius.jpg" alt="profile-picture" className='equi' style={{ height: "25vh", borderRadius: "15%" }} />
                            </div>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2 -mt-4">
                                    Marius
                                </Typography>
                                <Typography color="blue" className="font-medium" textGradient>
                                    Développeur Front end
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card className="w-30 profil">
                            <div  className="h-50">
                                <img src="/public/img/Butin.jpg" alt="profile-picture" className='equi' style={{ height: "25vh", borderRadius: "15%" }} />
                            </div>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2 -mt-4">
                                    Rabutin
                                </Typography>
                                <Typography color="blue" className="font-medium" textGradient>
                                    Développeur Back end
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card className="w-30 profil">
                            <div  className="h-50">
                                <img src="/public/img/Mario.jpg" alt="profile-picture" className='equi' style={{ height: "25vh", borderRadius: "15%" }} />
                            </div>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2 -mt-4">
                                    Mario
                                </Typography>
                                <Typography color="blue" className="font-medium" textGradient>
                                    Multimedia
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card className="w-30 profil">
                            <div  className="h-50">
                                <img src="/public/img/Sitraka.jpg" alt="profile-picture" className='equi' style={{ height: "25vh", borderRadius: "15%" }} />
                            </div>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2 -mt-4">
                                    Sitraka
                                </Typography>
                                <Typography color="blue" className="font-medium" textGradient>
                                    Développeur Back end
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>
            {/* portfolio */}
            <section id='portfolio'>
                <div className="relative mx-auto" style={{ height: "70vh", borderTop: "5px solid #10D9E0" }}>
                    <div>
                        <div className="absolute top-0 h-full w-full bg-[url('/public/img/portfolio.jpg')] bg-cover bg-center"></div>
                        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center"></div>
                    </div>
                    <div className="max-w-8xl container relative mx-auto">
                        <div style={{ marginLeft: "45%", transform: "translate(-45%, -20%)", marginTop: "-1em" }} className='section-titre'>
                            <Card className="w-60 pt-2 items-center titi" style={{ backgroundColor: "#10D9E0" }}>
                                <Typography variant="h4" color="white" className='titre tititi'>
                                    Portfolios
                                </Typography>
                            </Card>
                        </div>
                        <div className="slider">
                            <input type="radio" name="testimonial" id="t-1" />
                            <input type="radio" name="testimonial" id="t-2" />
                            <input type="radio" name="testimonial" id="t-3" defaultChecked />
                            <input type="radio" name="testimonial" id="t-4" />
                            <input type="radio" name="testimonial" id="t-5" />
                            {/* <input type="radio" name="testimonial" id="t-6" /> */}
                            <div className="testimonials">
                                <label className="item" htmlFor="t-1">
                                    <img src="/public/img/tsif.png" alt="picture" style={{ width: "500px" }} />
                                    <p>TSIFA</p>
                                    <div className="desc"><span style={{fontSize:"0.8em"}}>Meilleur endroit pour acheter des épices de Madagascar et des produits locaux à Antananarivo.</span></div>
                                </label>
                                <label className="item" htmlFor="t-2">
                                    <img src="/public/img/sobeha.png" alt="picture" style={{ width: "500px" }} />
                                    <p>SOBEHA</p>
                                    <div className="desc"><span style={{fontSize:"0.8em"}}> Voyager moins cher à Madagascar </span></div>
                                </label>
                                <label className="item" htmlFor="t-3">
                                    <img src="/public/img/gamanta.png" alt="picture" style={{ width: "500px" }} />
                                    <p>GAMANTA</p>
                                    <div className="desc"><span style={{fontSize:"0.8em"}}>GAstronomie MAlagasy Ninay TAvaratra</span></div>
                                </label>
                                <label className="item" htmlFor="t-4">
                                    <img src="/public/img/diplome.png" alt="picture" style={{ width: "500px" }} />
                                    <p>DEMANDE DE DIPLÔME</p>
                                    <div className="desc"><span style={{fontSize:"0.8em"}}>Consultation de résultat et demande de diplôme en ligne</span></div>
                                </label>
                                <label className="item" htmlFor="t-5">
                                    <img src="/public/img/hnjm.png" alt="picture" style={{ width: "500px" }} />
                                    <p>HMJN</p>
                                    <div className="desc"><span style={{fontSize:"0.8em"}}>Site web de revue médical</span></div>
                                </label>
                                {/* <label className="item" htmlFor="t-6">
                                    <img src="/public/img/f4.png" alt="picture" style={{ width: "500px" }} />
                                    <p>HMJN</p>
                                    <div className="desc">Site web de revue médical</div>
                                </label> */}
                            </div>
                            <div className="dots">
                                <label htmlFor="t-1"></label>
                                <label htmlFor="t-2"></label>
                                <label htmlFor="t-3"></label>
                                <label htmlFor="t-4"></label>
                                <label htmlFor="t-5"></label>
                                {/* <label htmlFor="t-6"></label> */}
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            {/* portfolio */}
            <section id='contact'>
                <div className="relative mx-auto" style={{ height: "80vh", borderTop: "5px solid #10D9E0" }}>
                    {/* <div className="absolute top-0 h-full w-full bg-[url('/public/img/portfolio.jpg')] bg-cover bg-center" style={{opacity:"0.3"}}/>
                    <div className="absolute top-0 h-full w-full bg-cover bg-center" /> */}
                    <div className="max-w-8xl container relative mx-auto">
                        <div style={{ marginLeft: "45%", transform: "translate(-45%, -20%)", marginTop: "-1em" }} className='section-titre'>
                            <Card className="w-60 pt-2 items-center titi" style={{ backgroundColor: "#10D9E0" }}>
                                <Typography variant="h4" color="white" className='titre tititi'>
                                    Contacter Nous
                                </Typography>
                            </Card>
                        </div>
                        <div className="flex flex-wrap items-center" style={{ paddingTop: "5em" }}>
                            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-5/12">
                                <Card className=" gap-4 info overflow-y-auto map" style={{ height: "410px", width: "600px", boxShadow: "0 0 10px #10D9E0" }}>
                                    <div className="mapouter">
                                        <div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no"
                                            marginHeight="0" marginWidth="0"
                                            src="https://maps.google.com/maps?width=650&amp;height=410&amp;hl=en&amp;q=saveur foie gras ambatomaro&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a
                                                href="https://connectionsgame.org/">Connections Game</a></div>
                                    </div>
                                </Card>
                            </div>
                            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-5/12">
                                <form onSubmit={handleSendEmail}>
                                    <Card className="w-full gap-4 info overflow-y-auto px-4 py-3" >
                                        <Input variant="outlined" label="Nom & Prénom" onChange={e => setName(e.target.value)}/>
                                        <Input variant="outlined" label="N° Téléphone" onChange={e => setNum(e.target.value)}/>
                                        <Input variant="outlined" type='email' label="Votre adresse e-mail" onChange={e => setMail(e.target.value)} />
                                        <Input variant="outlined" label="Objet" onChange={e => setObjet(e.target.value)}/>
                                        <Textarea variant="outlined" type='text' label="Description" onChange={e => setMessage(e.target.value)} />
                                        <Button className='w-60' type='submit' style={{ backgroundColor: "#10D9E0", marginLeft: "50%", transform: "translateX(-50%)" }}>
                                            Envoyer
                                        </Button>
                                    </Card>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home;