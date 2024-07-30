function enoughAirtime(usageString, availableAirtime) {
    const usage = usageString.split(',').map(item => item.trim());
    let totalCost = 0;
    usage.forEach(item => {
        if (item === 'call') totalCost += 2.75;
        if (item === 'sms') totalCost += 0.65;
        if (item === 'data') totalCost += 12;
    });
    return availableAirtime - totalCost;
}

function enoughAirtimeWidget() {
    return {
        usageString: '',
        availableAirtime: '',
        remainingAirtime: '',
        calculateAirtime() {
            this.remainingAirtime = `R${enoughAirtime(this.usageString, parseFloat(this.availableAirtime)).toFixed(2)}`;
        }
    }
}