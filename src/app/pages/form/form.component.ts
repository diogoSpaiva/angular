import { FormService } from './form.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  movie: [];
  bill = {
    ticketValue: 20,
    subTotal: 20,
    shipping: 10,
    total: 30
  }

  constructor(
    private route: ActivatedRoute,
    private formService: FormService
  ) {
    this.route.paramMap.subscribe(paramMap => {
      this.formService.getMovie(+paramMap.get('idMovie')).subscribe(response => {
        this.movie = response;
      });
    })
  }

  addCompanion(addCompanion) {
    if (addCompanion) {
      this.bill.subTotal = 40;
      this.bill.total = 50;
    } else {
      this.bill.subTotal = 20;
      this.bill.total = 30;
    }
  }

}
