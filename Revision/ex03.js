
const payments = [
    {petName: "Chester", amount: 50, status: "APPROVED"},
    {petName: "Mochi", amount: 80, status: "PENDING"},
    {petName: "Mira", amount: 40, status: "DECLINED"}
];

// Display Mochi's payment status
console.log(payments[1].petName + "'s payment status: " + payments[1].status);

// JavaScript SWITCH condition
for (const payment of payments) {
    switch (payment.status) {
        case "APPROVED":
            console.log("Pet-care service for " + payment.petName + " confirmed");
            break;

        case "PENDING":
            console.log("Payment for " + payment.petName + " is being processed");
            break;

        case "DECLINED":
            console.log("Payment for " + payment.petName + " unsuccessful");
            break;
    }
}
