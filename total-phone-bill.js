function totalPhoneBill(phoneString) {
    const calls = phoneString.split(',').filter(call => call.trim() === 'call').length;
    const sms = phoneString.split(',').filter(sms => sms.trim() === 'sms').length;
    return `R${(calls * 2.75 + sms * 0.65).toFixed(2)}`;
}

function totalPhoneBillWidget() {
    return {
        phoneString: '',
        totalBill: '',
        calculateBill() {
            this.totalBill = totalPhoneBill(this.phoneString);
        }
    }
}