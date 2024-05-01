import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../models/Usuario';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  mail: string = "";
  contrasenia: string = "";
  notificacion: string = "";

  constructor(private router: Router, private firestore: Firestore) {}
  
  loguear(): void {
    if(this.mail != "" && this.contrasenia != ""){
      const strUsuarios = localStorage.getItem("Tp1Usuarios");
      const usuarios: [Usuario] = JSON.parse(strUsuarios!);

      if(usuarios == null || usuarios == undefined){
        this.mostrarNotificacion("Usuario no registrado. Registrese.");
      }else{
        for (let element of usuarios!){
          if(element.mail == this.mail){
            if(element.clave == this.contrasenia){
              this.guardarUsuarioLogueado(element);
              this.goToHome();
            }else{
              this.mostrarNotificacion("Contraseña incorrecta.");
            }
            return;
          }
        };   
        this.mostrarNotificacion("Usuario no registrado. Registrese."); 
      }
    }else{
      this.mostrarNotificacion("Complete ambos campos");
    }
  }

  guardarUsuarioLogueado(usuario: Usuario):void {
    //Guardo en localStorage
    const usuarioString = JSON.stringify(usuario);
    localStorage.setItem("Tp1UsuarioLogueado", usuarioString);
    //Logueo el inicio de sesion en firestore
    let col = collection(this.firestore, 'logins');
    addDoc(col,{fecha: new Date(), "user": usuario.mail});
  }

  mostrarNotificacion(mensaje: string): void {
    this.notificacion = mensaje;
    const notificationElement = document.querySelector('.notification') as HTMLElement;
    notificationElement.style.visibility = 'visible';
  }

  esconderNotificacion(): void {
    this.notificacion = ''; 
    const notificationElement = document.querySelector('.notification') as HTMLElement;
    notificationElement.style.visibility = 'hidden';
  }

  
  goToHome():void{
    this.router.navigate(['/home']);
  }

}
