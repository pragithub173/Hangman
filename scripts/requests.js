//async / await

const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
};

// this if for fetch

// const getPuzzle = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to fetch puzzle");
//       }
//     })
//     .then((data) => {
//       return data.puzzle;
//     });
// };

// //for promise
// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest()

//   request.addEventListener('readystatechange', (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//           const data = JSON.parse(e.target.responseText)
//           resolve(data.puzzle)
//       } else if (e.target.readyState === 4) {
//           reject('An error has taken place')
//       }
//   })

//   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//   request.send()
// })

// this is for call back

// const getPuzzle = (callback) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       callback(undefined, data.puzzle);
//     } else if (e.target.readyState === 4) {
//       callback("An error has taken place", undefined);
//     }
//   });

//   request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3");
//   request.send();
// };

//country

// this is for call back
// const getCountry = (countryCode, callback) => {
//   //passing with country code and call back function
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       const country = data.find(
//         (country) => country.alpha2Code === countryCode
//       );
//       callback(undefined, country);
//       // console.log(country.name);
//     } else if (e.target.readyState === 4) {
//       //console.log("Unable to fetch data");
//       callback("Unable to fetch data");
//     }
//   });

//   request.open("GET", "http://restcountries.eu/rest/v2/all");
//   request.send();
// };

//this is for promise
// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//   const countryRequest = new XMLHttpRequest()

//   countryRequest.addEventListener('readystatechange', (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//           const data = JSON.parse(e.target.responseText)
//           const country = data.find((country) => country.alpha2Code === countryCode)
//           resolve(country)
//       } else if (e.target.readyStatet === 4) {
//           reject('Unable to fetch data')
//       }
//   })

//   countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//   countryRequest.send()
// })

// this is for fetch
// const getCountry = (countryCode) => {
//   return fetch("http://restcountries.eu/rest/v2/all")
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to fetch data");
//       }
//     })
//     .then((data) => {
//       return data.find((country) => country.alpha2Code === countryCode);
//     });
// };

const getCountry = async (countryCode) => {
  let response = await fetch("http://restcountries.eu/rest/v2/all");

  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.alpha2Code === countryCode);
  } else {
    throw new Error("Unable to fetch data");
  }
};

//116 promise challenge
// const getLocation = () => {
//   return fetch("https://ipinfo.io/json?token=883575b3921488").then(
//     (response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to fetch data");
//       }
//     }
//   );
// };

//async await

const getLocation = async () => {
  const response = await fetch("https://ipinfo.io/json?token=883575b3921488");
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Unable to fetch data");
  }
};

const getCurrentContry = async () => {
  let location = await getLocation();
  let country = await getCountry(location.country);

  return country;
};
