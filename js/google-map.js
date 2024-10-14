// Create the map and set the default location
var myLatlng = [28.493623, 77.328394]; // Example: New York City
var map = L.map("map").setView(myLatlng, 12); // Set default view and zoom level

// Load and display tile layers
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

// Add a marker at the default location
var marker = L.marker(myLatlng)
  .addTo(map)
  .bindPopup("Default Location: CITY ARCHITECTS & PLANNING") // Popup on marker
  .openPopup();

// Optional: Get the user's current location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            var userLatlng = [position.coords.latitude, position.coords.longitude];
            map.setView(userLatlng, 15); // Set map view to user's location
            L.marker(userLatlng)
                .addTo(map) // Add marker for user's location
                .bindPopup("You are here!")
                .openPopup();
        },
    )
}
