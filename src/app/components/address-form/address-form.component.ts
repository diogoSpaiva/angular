import { FormService } from './../../pages/form/form.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  form: FormGroup;
  @Input() bill = {};
  @Output() addCompanion = new EventEmitter();

  states = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
  countries = ["Argentina", "Bolívia", "Brasil", "Chile", "Colômbia", "Costa", "Cuba", "El_Salvador", "Equador", "Guatemala", "Haiti", "Honduras", "México", "Nicarágua", "Panamá", "Paraguai", "Peru", "Quíchua", "República_Dominicana", "Uruguai", "Venezuela"];

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
  ) {
    this.form = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      cpf: [null, [Validators.required, Validators.minLength(11)]],
      dateBirth: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      companion: this.formBuilder.group({
        firstName: [null],
        lastName: [null],
        cpf: [null],
        dateBirth: [null],
        email: [null],
      }),
      addCompanion: [false],
      zipCode: [null, [Validators.required]],
      address: [null, [Validators.required]],
      country: [null, [Validators.required]],
      state: [null, [Validators.required]],
      phone: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.setUserCategoryValidators();
  }

  setUserCategoryValidators() {
    const firstName = this.form.controls.companion.get('firstName');
    const lastName = this.form.controls.companion.get('lastName');
    const cpf = this.form.controls.companion.get('cpf');
    const dateBirth = this.form.controls.companion.get('dateBirth');
    const email = this.form.controls.companion.get('email');

    this.form.get('addCompanion').valueChanges
      .subscribe(addCompanion => {
        this.addCompanion.emit(addCompanion);
        if (addCompanion) {
          firstName.setValidators([Validators.required]);
          lastName.setValidators([Validators.required]);
          cpf.setValidators([Validators.required, Validators.minLength(11)]);
          dateBirth.setValidators([Validators.required]);
          email.setValidators([Validators.required, Validators.email]);
        } else {
          firstName.setValidators(null);
          lastName.setValidators(null);
          cpf.setValidators(null);
          dateBirth.setValidators(null);
          email.setValidators(null);
        }
        firstName.updateValueAndValidity();
        lastName.updateValueAndValidity();
        cpf.updateValueAndValidity();
        dateBirth.updateValueAndValidity();
        email.updateValueAndValidity();
      });
  }

  getCep() {
    this.formService.getCep(this.form.value.zipCode).subscribe(response => {
      console.log(response);
      if (response.cep) {
        this.form.controls['state'].setValue(response.uf)
        this.form.controls['address'].setValue(`${response.logradouro},${response.bairro},${response.localidade}`)
      }
    })
  }

  onSubmit() {
    if (this.form.valid) {
      const obj = { bill: this.bill, info: this.form.value }
      this.formService.sendReservation(obj).subscribe(response => {
        console.log(response);
      });
    }
  }

}



