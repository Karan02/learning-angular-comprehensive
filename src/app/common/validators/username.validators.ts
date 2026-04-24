import { AbstractControl, ValidationErrors } from "@angular/forms";

// custom validators
export class UsernameValidators {
  // static can be accessed without instantiating class
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true }
    return null
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>{
     console.log('Async validator called with:', control.value);
    return new Promise((resolve,reject) => {
      // resolve(true);reject('error'); //asynchronous operations, this is how we are able to return information from timeout function
       
      setTimeout(() => {
      if(control.value == 'mosh')
        resolve({ shouldBeUnique: true })
      else 
        resolve(null)  
    },2000)
    })

  }
}