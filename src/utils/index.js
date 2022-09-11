// Creating a promise out of the function
export const getLocationPromise = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      resolve({ latVal: lat, lngVal: lng });
    });
  } else {
    reject(new Error("your browser doesn't support geolocation API"));
  }
});

