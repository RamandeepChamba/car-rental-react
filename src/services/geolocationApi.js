export async function getLocation() {
  let curPosition = {};
  let theError = null;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        curPosition.lat = position.coords.latitude;
        curPosition.lng = position.coords.longitude;
      },
      (error) => {
        theError = error.message;
      }
    );
  } else {
    theError = "Geolocation is not supported by this browser.";
  }
  if (theError) return theError;
  return curPosition;
}
