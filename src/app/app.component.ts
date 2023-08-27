import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  LengthofPassword = 0;
  password = '';
  Letters = false;
  Symbols = false;
  Numbers = false;

  onButtonClick() {
    const Lettersuse = 'abcdefghijklmnopqrstuvwxyz';
    const Symbolsuse = "!@#$%^&*()?><:{},./;']['";
    const Numberuse = '1234567890';
    let generated_text = '';
    if (this.Symbols) {
      generated_text += Symbolsuse;
    }
    if (this.Letters) {
      generated_text += Lettersuse;
    }
    if (this.Numbers) {
      generated_text += Numberuse;
    }

    let Usepassword = '';
    for (let i = 0; i < this.LengthofPassword; i++) {
      let index = Math.floor(Math.random() * generated_text.length);
      Usepassword += generated_text[index];
    }
    this.password = Usepassword;
  }
  UseSymbols() {
    this.Symbols = !this.Symbols;
    // console.log(this.Symbols);
  }
  UseNumbers() {
    this.Numbers = !this.Numbers;
    // console.log(this.Numbers);
  }

  UseLetters() {
    this.Letters = !this.Letters;
    // console.log(this.Letters);
  }
  Length(value: string) {
    const parsedvalue = parseInt(value);
    if (!isNaN(parsedvalue)) {
      this.LengthofPassword = parsedvalue;
    }
  }
}
