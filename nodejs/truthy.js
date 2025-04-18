let value = 0;
if (
  value == 0 ||
  value == undefined ||
  value == null ||
  value == false ||
  isNaN(value) ||
  value == ""
) {
  console.log("falsy한 값");
} else {
  console.log("truthy한 값");
}

if (value) {
  console.log("truthy한 값");
} else {
  console.log("falsy한 값");
}

if (!value) {
  console.log("falsy한 값");
} else {
  console.log("truthy한 값");
}
