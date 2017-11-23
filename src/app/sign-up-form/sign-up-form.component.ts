import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormUtils } from './../shared/form.utils';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html'
})
export class SignUpFormComponent {
  public form: FormGroup;
  public formUtils: FormUtils;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      passwordConfirmation: [null, [Validators.required]]
    });

    this.formUtils = new FormUtils(this.form);
  }

  public signUpUser() {
    console.log('Formulário do SignUp enviado ao servidor!');
    console.log(this.form.value);
  }
}
