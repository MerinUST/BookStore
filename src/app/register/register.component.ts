import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


constructor(private router:Router){}

  name:string=''

  mail:string=''

  pass:string=''

  cpass:string=''

  alert():void

  {

  if ((this.name!='')&&(this.mail!='')&&(this.pass!='')&&(this.cpass!=''))

  {

    if(this.pass!=this.cpass){

      alert("Password Mismatch")      

    }

    else{

    alert("Successfully done")

    this.router.navigate(['/login'])

    }

  }

  else

  {

    alert("Fill the data correctly")

    this.router.navigate(['/signup'])

  }

}
}