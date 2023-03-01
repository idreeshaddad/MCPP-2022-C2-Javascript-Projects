var isInvoicePaid = false;
var isDarkTheme = false;

function togglePay() {
    isInvoicePaid = !isInvoicePaid;

    if (isInvoicePaid) {
        document.getElementById("theImagez").src = "paid.png";
        document.getElementById("payButton").innerHTML = "Unpay the Bill";
    }
    else {
        document.getElementById("theImagez").src = "not-paid.png";
        document.getElementById("payButton").innerHTML = "Pay the Bill";
    }
}

function toggleTheme() {

    if (isDarkTheme) {
        document.getElementById('body').classList.remove('dark-theme');
        document.getElementById('changeThemeButton').innerHTML = "Set to Dark Theme";
    }
    else {
        document.getElementById('body').classList.add('dark-theme');
        document.getElementById('changeThemeButton').innerHTML = "Set to Light Theme";
    }

    isDarkTheme = !isDarkTheme;

}