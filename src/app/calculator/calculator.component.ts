import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator', // This is the selector for the CalculatorComponent
  templateUrl: './calculator.component.html', // Path to the component's HTML template
  styleUrls: ['./calculator.component.scss'] // Path to the component's SCSS file
})
export class CalculatorComponent {
  creditLimit: number = 0;
  currentBalance: number = 0;
  targetUtilization: number = 0;
  paymentRequired: number | null = null;

  calculate(): void {
    const targetUtilizationDecimal = this.targetUtilization / 100; // Convert percentage to decimal
    const desiredBalance = this.creditLimit * targetUtilizationDecimal; // Calculate the target balance
  
    if (this.currentBalance <= desiredBalance) {
      // If the current balance is already below or equal to the target, no payment is required
      this.paymentRequired = 0;
    } else {
      // Otherwise, calculate the payment required
      this.paymentRequired = parseFloat((this.currentBalance - desiredBalance).toFixed(2));
    }
  }
  
}
