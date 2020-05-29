var input = document.getElementById("input") 

//Getting the button then making sure that per click it runs this function
document.querySelector('#getDetails').addEventListener("click",function() {
  //This if makes sure the input is not empty
  if (input.value === "") {
    alert("Input cannot be empty")
  }
  else{
    //If the input is not empty
    //Fetch the API
  fetch('https://api.covid19api.com/total/dayone/country/' + input.value)
  .then(res => res.json())  //Converting it from an object to a JSON file
  .then(data => {   //This is the data we are working with'
  //Checl the console; You would see that its a lot of data
    console.log(data)   //This is just a check to show that our code runs and it returns our data
    var lastItem = data[data.length - 1];     //This is to get the very last Item on the data returned array
    console.log(lastItem)   //This judt shows that it works

    //From here we can now start placing our data in places
    output = `
    <h2>${lastItem.Country}</h2>
    <p>Confired: ${lastItem.Confirmed}</p>
    <p>Active: ${lastItem.Active}</p>
    <p>Recovered: ${lastItem.Recovered}</p>
    <p>Deaths: ${lastItem.Deaths}</p>
    `
    //Then assign them to a div in the HTML
    document.getElementById("displayResults").innerHTML = output 
  })
  
  //Incase if there is an error, this will show the error in the console
  .catch(err => console.log(err))
}
})
