import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){

    /* if (environment.token == ''){
      alert('Sua sessão expirou, logue novamente.')
      this.router.navigate(['/entrar'])
    } */
    
  }

}
