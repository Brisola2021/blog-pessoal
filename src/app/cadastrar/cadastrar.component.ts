import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  //criando uma variavel para receber/referenciar a Model Usuario
  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUsuario: string

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit()  {
    window.scroll(0,0)
      }

  confirmSenha(event: any){ //criando evento para pegar as senhas
    this.confirmarSenha = event.target.value

}

tipUsuario(event: any) {
this.tipoUsuario = event.target.value
}

cadastrarUsuario() {
  this.usuario.tipo = this.tipoUsuario
  if (this.usuario.senha != this.confirmarSenha) {
  alert("Suas senhas precisas ser iguais") } else {
    this.authService.Cadastrar(this.usuario).subscribe((resp:Usuario)=> {
      this.usuario= resp
      this.router.navigate(['/entrar'])
      alert('Usuário cadastrado com sucesso!')
    });
      

    

  }

}

}
