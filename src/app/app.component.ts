import { Component } from '@angular/core';
import {DriverService} from  './services/driver.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers:[ DriverService]
})



export class AppComponent {
  //Proprties for Submitting Forms
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDrag:string;
  val:any;

//Variables
  public latitude: number;
    public longitude: number;
    public polyline: Array<any>;
    public example: Array<any>;



// Hard coded default value
  title: string = 'Assigment';
  zoom: number=10
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private _markerService:DriverService){

    this.markers=this._markerService.getMarkers();

  }


  clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${label || index}`)
    }


    mapClicked($event: MouseEvent) {
       this.markers.push({
         lat: $event.coords.lat,
         lng: $event.coords.lng,
         draggable: true
       });
     }

//THis function is for getting the new location of the marker so that we can change the location in the backend
     markerDragEnd(m: marker, $event: MouseEvent) {
       console.log('dragEnd', m, $event);
       var updMarker={

          lat:parseFloat(m.lat),
          lng:parseFloat(m.lng),


       }
        var newLat=$event.coords.lat;
        var newLng=$event.coords.lng;

this._markerService.updateMarker(updMarker, newLat, newLng)

     }

///Markers Array
     markers: marker[] ;


// Polyline array default values
polyline=[

  {lat: 51.673858 lng: 7.995982},
{lat: 51.673858 lng: 7.965982},


]

//Adding Markers and submitting values from Form
addMarker(value: any){

console.log('adding Marker');
console.log(value)
 var newMarker={
   name: value.markerName,
   lat: parseFloat(value.markerLat),
   lng :parseFloat(value.markerLng),
   draggable: true,
   label: this.markerName,
 }

//Variable to push to the polyline every time a new marker added
var route={
  lat: parseFloat(value.markerLat),
  lng :parseFloat(value.markerLng),

}

// Pushing the new markers as well as new polylines
this.markers.push(newMarker)
this._markerService.addMarker(newMarker);
this.polyline.push(route)
console.log(newMarker)
}
// Its only removing the marker from the front end
removeMarker(marker){
for(var i=0; i<this.markers.length; i++){
if(marker.lat==this.markers[i].lat&& marker.lng==this.markers[i].lng)
{
  this.markers.splice(i,1);
}
}
//By calling this function we can remove the markers from the back-end
// Uncomment it and the markers are removed from the backend to
//this._markerService.removeMarker(marker)

console.log("Removing Markers");


}

}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;

}


interface pline {
	lat: number;
	lng: number;


}
