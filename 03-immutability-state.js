const memoryAddresses = [
  { address: "0x001", value: 100 },
  { address: "0x002", value: 50 },
  { address: "0x003", value: 100 },
  { address: "0x004", value: 25 },
];

const frozenmemory = [];

// Non-mutating state update
for (let i = 0; i < memoryAddresses.length; i++) {
  if (memoryAddresses[i].value === 100) {
    frozenmemory.push({ ...memoryAddresses[i], value: 9999, frozen: true });
  } else {
    frozenmemory.push({ ...memoryAddresses[i] });
  }
}

console.log("Frozen Memory (New Array):", frozenmemory);
console.log("Original Memory (Untouched):", memoryAddresses);