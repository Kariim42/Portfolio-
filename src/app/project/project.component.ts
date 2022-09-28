import { Component, OnInit } from '@angular/core';
import { project } from 'src/assets/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects : project[] = [];

  constructor() {
    this.projects=[
      new project(1, "Travelers", "Site réalisé en deux semaines de formation permettant de visiter le monde et ses continents tout en restant chez soi.", "../assets/images/travelers.svg", "https://agitated-feynman-15a4bf.netlify.app/index.html", "https://github.com/innermost47/travelers", ["HTML", " CSS"," JavaScript"]),
      new project(2, "Chop ton Job", "Site réalisé en un mois permettant de chercher des métiers, stage ou alternance dans la tech grâce à l'API de Pôle Emploi (La bonne boite).", "../assets/images/chop ton job.svg", "https://chop-ton-job.web.app/", "https://github.com/WildCodeSchool/P2_Chop-Ton-Job_Lyon_Javangular_Septembre_2021", ["Angular", " Typescript", " HTML", " CSS"]),
      new project(3, "Meta Sound Contest", "Site réalisé durant un hackathon qui nous as permis de décrocher la premiere place. Le site consiste à voter en temps réel pour des instruments atypiques", "../assets/images/Meta sound contest.svg", "https://meta-sound-contest.web.app/", "https://github.com/AdamRoux/Meta-Sound-Contest", ["Angular", " Typescript", " HTML", " CSS"," Firebase"]),
      new project(4, "Mill Grill", "Site réalisé en Freelance permettant de visiter la carte d'un restaurant", "../assets/images/mill grill.svg", "https://mille-grill.netlify.app/", "https://github.com/Kariim42/mille-grill", ["Angular", " Typescript", " HTML", " CSS"]),
    ];
   }
  

  ngOnInit(): void {
  }

}
