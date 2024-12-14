import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import tete1 from '../assets/tete1.png';
import tete2 from '../assets/tete2.png';
import tete3 from '../assets/tete3.png';
import tete4 from '../assets/tete4.png';
import tete5 from '../assets/tete5.png';
import projet1 from '../assets/projet1.png';
import projet2 from '../assets/projet2.png';
import projet3 from '../assets/projet3.png';
import vision from '../assets/vision.png';
import backgroundImage from '../assets/bg.png';
import backImage from '../assets/pngtree-white-brush-stroke-title-frame-text-box-png-image_10192874.png';
import bgImage from '../assets/IMG_0411.jpg';
import { useInView } from "react-intersection-observer";


const Home: React.FC = () => {

  const [show, setShow] = useState(false);

  // Utilisation de useInView avec un nom distinct pour éviter le conflit
  const { ref: aboutInViewRef, inView } = useInView({
    triggerOnce: true,  // Cette option garantit que l'animation ne se déclenche qu'une seule fois lorsque la section est visible
    threshold: 0.2,     // Déclenche l'animation lorsque 50% de l'élément est visible
});

  // Mettre `show` à true lorsque l'élément est visible
  useEffect(() => {
    if (inView) {
        setShow(true);
    }
}, [inView]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-grow">
        {/* Section À propos */}
<section
  id="about"
  className="py-16 min-h-screen scroll-mt-20 bg-cover bg-center bg-no-repeat "
  style={{ backgroundImage: `url(${backgroundImage})`}}
>
  <div className="container mx-auto px-4 text-center p-8  ">
    <h2 className="text-4xl text-yellow-400 paragraphe font-bold mb-6 mt-96 " ></h2>
    <br /><br /><br /><br /><br /><br />
  </div>
</section>


        {/* Section Notre vision */}
        <section id="vision" className="py-16 bg-white min-h-screen scroll-mt-20">
        <div className="flex flex-col md:flex-row items-center  ">
      <div className="md:w-1/2  p-4">
        <img
          src={vision}
          alt="Description Projet 3"
          className="h-auto max-h-[70vh] rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 p-4 text-white">
        <h3 className="text-5xl gris text-center mb-12">Notre vision</h3>
        <p className="gris text-left mb-6">
        La Fondation Jeune Maman Célibataire est une
organisation dédiée à l’accompagnement et à
l’autonomisation des jeunes mères célibataires au
Congo. Cette fondation s’efforce de répondre aux
nombreux défis socio-économiques auxquels les
jeunes mères sont confrontées dans ce pays, où
les infrastructures de soutien sont souvent
limitées et où les préjugés sociaux peuvent
accentuer leur isolement. <br /><br /> Tout le monde est concerné par l‘enseignement. Notre travail ne se limite pas aux établissements scolaires. Nous nous assurons aussi que les élèves bénéficient du soutien nécessaire à leur apprentissage des savoirs. <br /><br />
        </p>
        <button
          className="bg-beige text-white py-6 px-12  hover:bg-blue-700 transition"
          onClick={() => window.location.href = "/projet"}
        >
          En savoir plus
        </button>
      </div>
    </div>
        </section>

       {/* Section Nos projets */}
<section id="projects" className="py-16 bg-gris min-h-screen scroll-mt-20">
  <div className="container mx-auto px-4">
    {/* Titre */}
    <h2 className="text-3xl text-white text-center mb-12">NOS PROJETS</h2>
    
    {/* Projet 1 */}
    <div className="flex flex-col md:flex-row items-center mb-12">
      <div className="md:w-1/2 p-4">
        <img
          src={projet1}
          alt="Description Projet 1"
          className="h-auto max-h-[50vh] rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 p-4 text-white">
        <h3 className="text-5xl text-left mb-16">Matériel pédagogique</h3>
        <p className="text-gray-300 text-left mb-6">
          Le matériel pédagogique en langue locale est souvent obsolète. Nous collaborons avec les chefs d’établissement et les maisons d’édition pour que les élèves aient accès à des manuels scolaires qui sont à jour, adaptés à leur âge et écrits dans leur langue maternelle.
        </p>
        <button
          className="bg-beige text-white py-6 px-12  hover:bg-blue-700 transition"
          onClick={() => window.location.href = "/projet"}
        >
          En savoir plus
        </button>
      </div>
    </div>

    {/* Projet 2 */}
    <div className="flex flex-col md:flex-row-reverse items-center mb-12">
      <div className="md:w-1/2 p-4">
        <img
          src={projet2}
          alt="Description Projet 2"
          className="h-auto max-h-[50vh] rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 p-4 text-white">
        <h3 className="text-5xl text-left mb-16">Formation continue pour les enseignants</h3>
        <p className="text-gray-300 text-left mb-6">
          Nous développons des programmes de formation continue qui répondent précisément aux besoins des enseignants et des élèves. De la formation aux nouvelles technologies aux méthodes pédagogiques innovantes, nous aidons les enseignants à améliorer l’attractivité et l’efficacité de leurs cours.
        </p>
        <button
          className="bg-beige text-white py-6 px-12  hover:bg-blue-700 transition"
          onClick={() => window.location.href = "/projet"}
        >
          En savoir plus
        </button>
      </div>
    </div>

    {/* Projet 3 */}
    <div className="flex flex-col md:flex-row items-center mb-12">
      <div className="md:w-1/2 p-4">
        <img
          src={projet3}
          alt="Description Projet 3"
          className="h-auto max-h-[50vh] rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 p-4 text-white">
        <h3 className="text-5xl text-left mb-16">Soutien aux communautés</h3>
        <p className="text-gray-300 text-left mb-6">
          Tout le monde est concerné par l‘enseignement. Notre travail ne se limite pas aux établissements scolaires. Nous nous assurons aussi que les élèves bénéficient du soutien nécessaire à leur apprentissage des savoirs.
        </p>
        <button
          className="bg-beige text-white py-6 px-12  hover:bg-blue-700 transition"
          onClick={() => window.location.href = "/projet"}
        >
          En savoir plus
        </button>
      </div>
    </div>
  </div>
</section>





        {/* Section Notre équipe */}
        <section id="team" className="py-16 bg-white min-h-screen scroll-mt-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Notre équipe</h2>
            <p className="text-gray-700 mb-12">
              Découvrez les personnes talentueuses et passionnées derrière notre mission.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <img
                  src={tete1}
                  alt="Membre 1"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold">MBOKO PEMBELE <span className="font-normal">Julianna</span></h3>
                <p className="text-gray-600">Fondatrice</p>
              </div>
              <div>
                <img
                  src={tete2}
                  alt="Membre 2"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold">BENGAO BUBAKASI <span className="font-normal">Bouba</span></h3>
                <p className="text-gray-600">Coordon</p>
              </div>
              <div>
                <img
                  src={tete3}
                  alt="Membre 3"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold">MITONGO NEHEMA <span className="font-normal">Esther</span></h3>
                <p className="text-gray-600">Secrétaire Général</p>
              </div>
              <div>
                <img
                  src={tete4}
                  alt="Membre 4"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold">KANDOLO OKANDA <span className="font-normal">Dieumerci</span></h3>
                <p className="text-gray-600">Chargé de Communication et de Relation Publique</p>
              </div>
              <div>
                <img
                  src={tete5}
                  alt="Membre 5"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold">BIDOUASE BOLENGE <span className="font-normal">Divin</span></h3>
                <p className="text-gray-600">Responsable des réseaux sociaux</p>
              </div>
            </div>
          </div>
        </section>



        




        {/* Bouton Faire un don */}
        <section id="donate" className="py-16 bg-beige min-h-screen scroll-mt-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Soutenez notre mission</h2>
            <p className="text-white text-lg mb-8">
              Votre contribution nous aide à continuer nos efforts et à atteindre nos objectifs.
            </p>
            <button
              className="bg-white beige font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
              onClick={() => alert("Merci pour votre soutien !")}
            >
              Faire un don
            </button>
          </div>
        </section>



        {/* Section Contact */}
<section id="contact" className="py-16 bg-gray-100 scroll-mt-20">
  <div className="container mx-auto px-4">
    {/* Titre */}
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contactez-nous</h2>

    <div className="flex flex-col lg:flex-row gap-8">
      {/* Formulaire de contact */}
      <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Envoyez-nous un message</h3>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Votre message"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gris text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </form>
      </div>

      {/* Informations de contact */}
      <div className="flex-1 bg-gray-50 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Nos informations</h3>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="material-icons beige mr-3">phone</span>
            <p className="text-gray-700">+243 855 113 332</p>
          </li>
          <li className="flex items-center">
            <span className="material-icons beige mr-3">email</span>
            <p className="text-gray-700">jeunemamancelibataire@gmail.com</p>
          </li>
          <li className="flex items-center">
            <span className="material-icons beige mr-3">location_on</span>
            <p className="text-gray-700">Avenue : Plateau II, N°30 Commune de Ngaliema</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>



      

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
