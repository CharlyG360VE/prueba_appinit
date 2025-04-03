import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ILoginForm } from '../../interface/login-form.interface';
import { LoginService } from '../../services/login.service';
import { IPayloadLogin } from '../../interface/user.interface';
import { Router } from '@angular/router';
import { DialogService } from '@core/services/dialog.service';
import { LOGIN_IMPORTS as imports } from '@modules/user/helpers/login-imports.helper';

@Component({
  selector: 'app-login',
  standalone: true,
  imports,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {

  private readonly _fb = inject(NonNullableFormBuilder);
  private readonly _dialogSvc = inject(DialogService);
  private readonly _loginSvc = inject(LoginService);
  private readonly _router = inject(Router);

  form = this._fb.group<ILoginForm>(
    {
      email: this._fb.control(
        undefined,
        {
          validators: [
            Validators.required,
            Validators.maxLength(50),
            Validators.minLength(4),
            Validators.email,
            Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
          ]
        }
      ),
      password: this._fb.control(
        undefined,
        {
          validators: [
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(6)
          ]
        }
      )
    }
  );

  login() {
    if (this.form.invalid)
      return;

    const PAYLOAD: IPayloadLogin = {
      email: this.form.controls.email.value!,
      password: this.form.controls.password.value!
    }
    const RESPONSE = this._loginSvc.login(PAYLOAD)

    if (RESPONSE) {
      this._dialogSvc.alertDialog('', 'Inicio de sesión exitoso.');
      this._router.navigate(['/privado/inicio-privado']);
    } else {
      this._dialogSvc.alertDialog('', 'Correo y/o contraseña invalida.');
    }
  }

}
