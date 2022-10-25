let total = 25.00;
let percent = .17;
let roundTarget = .02;

let baseTip = total * percent

let roundedTip;
if (baseTip % 1 === 0) {
    roundedTip = baseTip + roundTarget
} else {
    roundedTip = Math.ceil(baseTip) - (1.00 - roundTarget)
}

if (roundedTip < baseTip) {
    roundedTip += 1
}
console.log(`Base Tip: ${baseTip.toFixed(2)}`)
console.log(`Rounded Tip: ${roundedTip.toFixed(2)}`)
console.log(`Total to pay: ${(total + roundedTip).toFixed(2)}`)
