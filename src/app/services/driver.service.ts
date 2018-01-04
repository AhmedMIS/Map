import {Injectable} from '@angular/core'
import {Init} from '../init-driver'

@Injectable()

export class DriverService extends Init{
  constructor(){
super();
console.log("Marker Service Initializing");
this.load();

  }

getMarkers(){

var markers=JSON.parse(localStorage.getItem('markers'));
return markers;

}
//Adding the marking to the backend
addMarker(newMarker){
//Fetch the markers which are there
var markers=JSON.parse(localStorage.getItem('markers'));
//Pushh the _markerService
markers.push(newMarker);
// set the localStorag
localStorage.setItem('markers',JSON.stringify(markers));

}
/// This is the Updated opsition of the marker
updateMarker(marker,newlat,newlng){
var markers=JSON.parse(localStorage.getItem('markers'));
for(var i=0 ; i<markers.length;i++)
{
if(marker.lat==markers[i].lat && marker.lng==markers[i].lng) {
  markers[i].lat = newlat,
  markers[i].lng= newlng

}

}

localStorage.setItem('markers',JSON.stringify(markers));
console.log("We have updated the marker")

}

removeMarker(marker){
  var markers=JSON.parse(localStorage.getItem('markers'));
  for(var i=0; i<markers.length; i++){
  if(marker.lat==markers[i].lat&& marker.lng==markers[i].lng)
  {
    markers.splice(i,1);
  }
  }

localStorage.setItem('markers',JSON.stringify(markers));

}


}
