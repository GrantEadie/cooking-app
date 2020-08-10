function convert(tablespoons) {
  return tablespoons + 15;
}

const tablespoons = parseInt(prompt("Enter tablespoons:"));
const result = convert(tablespoons);
alert(result);