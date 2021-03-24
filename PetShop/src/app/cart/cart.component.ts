import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any;
  checkoutForm = new FormGroup({
    fullName: new FormControl(''),
    emailAdress: new FormControl(''),
    telephone: new FormControl('')
  });

  constructor(private cartService: CartService) { }


  // constructor(private cartService: CartService,
  //   private formBuilder: FormBuilder) {
  //   this.checkoutForm = this.formBuilder.group({
  //     fullName: '',
  //     email: '',
  //     telephone: ''
  //   });
  // }

  // checkoutForm = this.formBuilder.group({
  //   name: '',
  //   address: ''
  // });

  formDelete() {
    this.checkoutForm = new FormGroup({
      fullName: new FormControl(''),
      emailAdress: new FormControl(''),
      telephone: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData: FormGroup) {
    // Process checkout data here
    console.log(customerData);

    alert('Your order has been submitted');
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    
    console.log(customerData);
    
    console.log(this.checkoutForm);
  }

}
