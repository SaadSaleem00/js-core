const memoryAddresses = [
  { address: "0x001", value: 100 },
  { address: "0x002", value: 45 },
  { address: "0x003", value: 100 },
  { address: "0x004", value: 12 },
];

// Array filter
let filter = memoryAddresses.filter((entry) => entry.address === "0x003");
console.log("Filtered Address:", filter);

// Index-based loop traversal
for (let i = 0; i < memoryAddresses.length; i++) {
  if (memoryAddresses[i].value === 12) {
    console.log("Found target value via loop:", memoryAddresses[i]);
  }
}