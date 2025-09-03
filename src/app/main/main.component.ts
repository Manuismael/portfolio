import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  stacks = [
    {
      libelle: "Angular",
      icone: "devicon-angularjs-plain colored"
    },
    {
      libelle: "NestJS",
      icone: "devicon-nestjs-plain colored"
    },
    {
      libelle: "NodeJS",
      icone: "devicon-nodejs-plain colored"
    },
    {
      libelle: "ExpressJS",
      icone: "devicon-express-original colored"
    },
    {
      libelle: "Flutter",
      icone: "devicon-flutter-plain colored"
    },
    {
      libelle: "PHP",
      icone: "devicon-php-plain colored"
    },
    {
      libelle: "Python",
      icone: "devicon-python-plain colored"
    },
    {
      libelle: "JavaScript",
      icone: "devicon-javascript-plain colored"
    },
    {
      libelle: "MongoDB",
      icone: "devicon-mongodb-plain colored"
    },
    {
      libelle: "MySQL",
      icone: "devicon-mysql-plain colored"
    },
    {
      libelle: "Firebase",
      icone: "devicon-firebase-plain colored"
    },
    {
      libelle: "Tailwind CSS",
      icone: "devicon-tailwindcss-plain colored"
    },
    {
      libelle: "Bootstrap",
      icone: "devicon-bootstrap-plain colored"
    },
    {
      libelle: "Git & Github",
      icone: "devicon-git-plain colored"
    },

  ];

  projects = [
    {
      name:"Learn Fast",
      description:"Application web basée sur l'IA permettant d'assister les étudiants pendant les révisions",
      image:"learnfasst.png",
      tags:["NestJS", "Angular", "Gemini 2.0", "Web Speech API", "MySQL"],
    },

    {
      name:"E-scolarité",
      description:"Conçue pour permettre aux étudiants et à leurs parents de payer les frais de scolarité en ligne",
      image:"elite.png",
      tags:["Flutter","MySQL"],
    },

    {
      name:"UGL PASS",
      description:"Billetterie en ligne pour l'Utimate Gaming Legends, un évènement de jeux vidéos",
      image:"ugl_billeterie.png",
      tags:["PHP", "Boostrap","MySQL"],
    },

    {
      name:"Rafiki",
      description:"Faciliter les connexions interculturelles et l’échange d’informations pratiques entre personnes du monde entier, en particulier dans un contexte éducatif ou de mobilité.",
      image:"rafiki.png",
      tags:["NestJS", "Angular", "Tailwind","MySQL"],
    }
  ]

  experiences = [
    {
      date_deb:"Juillet 2024",
      date_fin:"Septembre 2024",
      title:"Biovatech Bénin",
      description:"Stage professionnel dévéloppeur fullstack. Dévéloppement d'une application web de formations.",
      tags:["NestJS", "Angular", "Tailwind","Mongo DB", "Firebase"],
    },

    {
      date_deb:"Aout 2025",
      date_fin:"Présent",
      title:"Elites Studio",
      description:"Dévéloppeur fullstack. Dévéloppement de solutions digitales, stratégie de digitalisation.",
      tags:["NestJS", "Angular", "Tailwind","Mongo DB", "Firebase", "MySQL", "Scrum", "UML", "IA"],
    },

  ];

  //envoi de mail
  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm('service_mvxzqav', 'template_cicrnm9', e.target as HTMLFormElement, 'P6TwN5FZSu8Kt5F2H')
      .then((result: EmailJSResponseStatus) => {
      }, (error) => {
      });

    (e.target as HTMLFormElement).reset();
  }

}
