function checkAccess(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {

  if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    return "Secure";
  } else {
    return "Unsafe";
  }
}

console.log("Test 1:", checkAccess(true, true, true, true));
console.log("Test 2:", checkAccess(false, true, true, true));
console.log("Test 3:", checkAccess(true, false, true, true));
console.log("Test 4:", checkAccess(true, true, false, true));
console.log("Test 5:", checkAccess(true, true, true, false));

const isDoorLocked = true, isWindowClosed = true, isAlarmOn = false, isOwnerInside = true;

const unsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;
console.log("Using !/||  :", unsafe ? "Unsafe" : "Secure");