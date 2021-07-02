import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema ()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit(){ //executa sempre que iniciar a página

    if (environment.token == ''){
      alert('Sua sessão expirou, logue novamente.')
      this.router.navigate(['/entrar'])
    }

    this.findAllTemas()
  }


  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema [])=>{
      this.listaTemas = resp
    })
  }

  postarTema(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema()
    })
  }


}
