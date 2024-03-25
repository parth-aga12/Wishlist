import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
// root: entire app can use class, platform: all apps on a single platform can use class
// any: everything 


// Injectable allows class to be exported/'injected' into other components
 export class EventService {
    private subject = new Subject();

    emit(eventName : string, payload : any) {
        this.subject.next({eventName, payload});
    }
// explanation: the object that is going to emit the event calls the subject's 
// next method, passing in the {eventName and payload} params as an event object.
// The object that is going to listen for that event from above uses the 
// subject's asObservable method to use the subscribe method.
// Therefore, the object that is going to 'subscribe' will recieve the event obj
// containing {eventName, payload}. Now there is a check to confirm if
// eventName is the same as the provided eventName. If it is then callback function
// passes in the payload.
    listen(eventName : string, callback: (event: any) => void) {
        this.subject.asObservable().subscribe((nextObj : any) => {
            if (eventName == nextObj.eventName) {
                callback(nextObj.payload);
            }
        })
    }
}



//export default new EventService();
// this class exports EventService object which is imported in wish-list-item & app-component
// This event object is a HARD dependancy for wish-list-item and app components
// Hard dependancies cause issues during updating and maintanance