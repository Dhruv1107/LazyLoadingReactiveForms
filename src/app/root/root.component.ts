import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router) { }
  userForm:FormGroup;
  submitted:boolean = false;
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      userName: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$')]],
    });
  }

  onSubmit(){
    this.submitted = true;
        if (this.userForm.invalid) {
          console.log(this.userForm);
          alert('error');
            return;
        }
        else{
        this.router.navigate(['lazy','load-me']);
        }
  }

  get f() { return this.userForm.controls; }

}
