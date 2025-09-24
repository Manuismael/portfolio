import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

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
      name: "Learn Fast",
      description: "Application web basée sur l'IA permettant d'assister les étudiants pendant les révisions",
      image: "learnfasst.png",
      tags: ["NestJS", "Angular", "Gemini 2.0", "Web Speech API", "MySQL"],
    },

    {
      name: "E-scolarité",
      description: "Conçue pour permettre aux étudiants et à leurs parents de payer les frais de scolarité en ligne",
      image: "elite.png",
      tags: ["Flutter", "MySQL"],
    },

    {
      name: "UGL PASS",
      description: "Billetterie en ligne pour l'Utimate Gaming Legends, un évènement de jeux vidéos",
      image: "ugl_billeterie.png",
      tags: ["PHP", "Boostrap", "MySQL"],
    },

    {
      name: "Rafiki",
      description: "Faciliter les connexions interculturelles et l’échange d’informations pratiques entre personnes du monde entier, en particulier dans un contexte éducatif ou de mobilité.",
      image: "rafiki.png",
      tags: ["NestJS", "Angular", "Tailwind", "MySQL"],
    }
  ]

  experiences = [
    {
      date_deb: "Juillet 2024",
      date_fin: "Septembre 2024",
      title: "Biovatech Bénin",
      description: "Stage professionnel dévéloppeur fullstack. Dévéloppement d'une application web de formations.",
      tags: ["NestJS", "Angular", "Tailwind", "Mongo DB", "Firebase"],
    },

    {
      date_deb: "Aout 2025",
      date_fin: "Présent",
      title: "ICO LABS",
      description: "Dévéloppeur fullstack. Dévéloppement de solutions digitales, stratégie de digitalisation.",
      tags: ["NestJS", "Angular", "Tailwind", "Mongo DB", "Firebase", "MySQL", "Scrum", "UML", "IA"],
    },

  ];
  @ViewChild('contactForm') formRef!: ElementRef<HTMLFormElement>;

  isSending = false;
  buttonText = 'Envoyer';

  ngAfterViewInit(): void {
    this.handleSplashScreen();
    this.initScrollAnimations();
    this.initSmoothScroll();
  }

  //splash screen
  private handleSplashScreen(): void {
    const splashScreen = this.el.nativeElement.querySelector('#splash-screen');
    if (splashScreen) {
      setTimeout(() => {
        this.renderer.setStyle(splashScreen, 'opacity', '0');
        this.renderer.setStyle(splashScreen, 'transition', 'opacity 0.5s ease-out');
        setTimeout(() => {
          this.renderer.removeChild(this.el.nativeElement, splashScreen);
        }, 500);
      }, 1000);
    }
  }

  //scroll
  private initScrollAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
          const skillBars = entry.target.querySelectorAll('.skill-bar');
          skillBars.forEach((bar: Element) => {
            setTimeout(() => {
              this.renderer.addClass(bar, 'animate');
            }, 300);
          });
        }
      });
    }, observerOptions);

    const fadeInElements = this.el.nativeElement.querySelectorAll('.fade-in');
    fadeInElements.forEach((el: Element) => observer.observe(el));
  }

  private initSmoothScroll(): void {
    const links = this.el.nativeElement.querySelectorAll('a[href^="#"]');
    links.forEach((anchor: HTMLAnchorElement) => {
      this.renderer.listen(anchor, 'click', (event: Event) => {
        event.preventDefault();
        const targetId = anchor.getAttribute('href');
        const target = this.el.nativeElement.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  //envoi de mail
  sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_mvxzqav', 'template_cicrnm9', e.target as HTMLFormElement, 'P6TwN5FZSu8Kt5F2H')
      .then((result: EmailJSResponseStatus) => {
      }, (error) => {
      });
  }

  onSubmit(e: Event): void {
    this.isSending = true;
    const originalText = this.buttonText;
    this.buttonText = 'Envoi en cours...';
    this.sendEmail(e);
    setTimeout(() => {
      this.buttonText = 'Message envoyé !';

      const button = this.el.nativeElement.querySelector('button[type="submit"]');
      if (button) {
        this.renderer.addClass(button, 'bg-green-500');
      }

      setTimeout(() => {
        this.buttonText = originalText;
        this.isSending = false;

        if (button) {
          this.renderer.removeClass(button, 'bg-green-500');
        }

        const form = this.el.nativeElement.querySelector('form');
        if (form) {
          form.reset();
        }
      }, 2000);
    }, 1500);
  }

}
