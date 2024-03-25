import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createInvalidDomainValidator(hosts: string[]) : ValidatorFn {
    
    return(control: AbstractControl) : ValidationErrors | null => {
        const value = control.value?.toLowerCase();
    
        if (!value) {
            return null;
        } // if null value, then formcontrol is valid and doesn't have a host name we want to stop (gmail,etc..)
    
        const matches = hosts.some(host => value.indexOf(`@${host}`) > -1);
        // if some of the hosts and substrings of email value, then matches are true
        return matches ? {invalidEmailDomain : true} : null;
        // check matches, if match then return property invalidEmailDomain (error name, used in html)
    } 
}


