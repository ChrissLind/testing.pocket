let total = 50.00;
let percent = .13;
let roundTarget = .02;

let baseTip = total * percent;

let payment = total + baseTip;

let roundedPayment
if (roundTarget) {
    if (payment % 1 == 0) {
        roundedPayment = payment + roundTarget;
    } else {
        roundedPayment = Math.ceil(payment) - (1.00 - roundTarget);
    }

    if (roundedPayment < payment) {
        roundedPayment += 1
    }
    console.log(`Base tip ${baseTip.toFixed(2)}`)
    console.log(`Regular payment: ${payment.toFixed(2)}`)
    console.log(`Rounded payment: ${roundedPayment.toFixed(2)}`)
} else {
    console.log(`Base tip: ${baseTip.toFixed(2)}`)
    console.log(`Payment: ${payment.toFixed(2)}`)
}

