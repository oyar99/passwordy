# NgPasswordy

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/georgipeltekov/ngx-file-drop/blob/master/LICENSE)

## Overview

An angular +9 module that provides an input of type password with an eye icon to show/hide the visibility of the password. 

It is fully compatible with reactive forms.

## Getting started

```bash
npm install ngx-passwordy
```

### Import the 'NgPasswordy' module

```Typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPasswordyModule } from 'ngx-passwordy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPasswordyModule // <-- NgxPasswordy Module 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### How to use with reactive forms?

## Component 

```Typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(event: Event): void {
    alert(
      `You have logged in: \nUser: ${
        this.loginForm.get('username').value
      }\nPassword: ${this.loginForm.get('password').value}`
    );
  }
}
```

## Template

```HTML
<div class="app-component">
  <form [formGroup]="loginForm" (ngSubmit)="login($event)">
    <fieldset>
      <legend>Login Form</legend>
      <div class="form-section">
        <label id="user" for="username">User</label>
        <input
          type="text"
          id="username"
          formControlName="username"
          placeholder="User"
        />
      </div>
      <div class="form-section">
        <label id="user" for="username">Password</label>
        <!--
          Use the component with common reactive forms attributes such as formControlName
        -->
        <ngx-passwordy
          formControlName="password"
          placeholder="Password"
          inputId="password"
        ></ngx-passwordy>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </fieldset>
  </form>
</div>
```

## Styles

```SCSS
.app-component {
  margin: 20px;
}

.form-section {
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  label {
    margin-right: 10px;
  }
}
```

## Notes

Make sure to include "node_modules/material-design-icons/iconfont/material-icons.css" in your angular json so that the eye icon is loaded properly.

## Properties

Name  | Description | Default Value
------------- | ------------- | -------------
maxLength  | The maximum number of characters allowed in the input | 50
placeholder  | The placeholder for the input | 'Password'
inputId  | The id to use for the input | 'password'

## License

[MIT](/LICENSE)