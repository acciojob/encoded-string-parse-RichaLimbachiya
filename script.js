function parseCode(str) {
  // Split the string on one or more zeros using regex
  const parts = str.split(/0+/);

  // Return the object with extracted parts
  return {
    firstName: parts[0],
    lastName: parts[1],
    id: parts[2]
  };
}
