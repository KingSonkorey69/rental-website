import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';
import {Flutterwave, InlinePaymentOptions, PaymentSuccessResponse} from "flutterwave-angular-v3"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public rentals:any[] = [ ];
  constructor(private flutterwave: Flutterwave, private _rentalService: HomeService) { }

  publicKey = "FLWPUBK_TEST-52ab4eb1a5cdad9e43f053977107953c-X";

  customerDetails = { name: 'Samuel Kimotho', email: 'sam.kimotho450@gmail.com', phone_number: '+254702129493'}

  customizations = {title: 'Purchase Goods', description: 'Buying Goods', logo: 'https://flutterwave.com/images/logo-colored.svg'}

  meta = {'counsumer_id': '7898', 'consumer_mac': 'kjs9s8ss7dd'}

 paymentData: InlinePaymentOptions = {
    public_key: this.publicKey,
    tx_ref: this.generateReference(),
    amount: 200,
    currency: 'NGN',
    payment_options: 'card,ussd',
    redirect_url: '',
    meta: this.meta,
    customer: this.customerDetails,
    customizations: this.customizations,
    callback: this.makePaymentCallback,
    onclose: this.closedPaymentModal,
    callbackContext: this
  }

  makePayment(){
    this.flutterwave.inlinePay(this.paymentData)
  }
  makePaymentCallback(response: PaymentSuccessResponse): void {
    console.log("Payment callback", response);
  }
  closedPaymentModal(): void {
    console.log('payment is closed');
  }

  generateReference(): string {
    let date = new Date();
    return date.getTime().toString();
  }
  ngOnInit(): void {
  this.rentals = this._rentalService.getRentals();
  }

}
