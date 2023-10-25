import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

// interface User{
//   name: string,
//   email: string,
//   password: string
// }


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: FormGroup;

  constructor(private fb:FormBuilder){  }

  ngOnInit(){
    this.user = this.fb.group({
      "name": this.fb.control(''),
      "email": this.fb.control(''),
      "password": this.fb.control('')
    })
  }
  
  
  submitForm()
  {
    console.log(this.user.value);
  }
  
  
}
