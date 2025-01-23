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
    const targetUtilizationDecimal = this.targetUtilization / 100;
    const desiredBalance = this.creditLimit * targetUtilizationDecimal;
    this.paymentRequired = parseFloat((this.currentBalance - desiredBalance).toFixed(2));
  }
}
