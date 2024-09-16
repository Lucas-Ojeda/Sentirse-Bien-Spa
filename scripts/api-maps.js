function iniciarMap(){
    var coord = {lat:-27.4511154 ,lng: -58.9790106};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 18,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}