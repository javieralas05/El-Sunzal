function iniciarMap(){
    var coord = {lat:13.495244 ,lng: -89.3902411};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: coord,
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}