function calculatePAYE(taxableIncome) {
    if (taxableIncome <= 24000) {
        return taxableIncome * 0.10;
    } else if (taxableIncome <= 32333) {
        return (2400 + (taxableIncome - 24000) * 0.25);
    } else if (taxableIncome <= 500000) {
        return (6000 + (taxableIncome - 32333) * 0.30);
    } else if (taxableIncome <= 800000) {
        return (128400 + (taxableIncome - 500000) * 0.325);
    } else {
        return (218900 + (taxableIncome - 800000) * 0.35);
    }
}

function calculateNHIF(grossPay) {
    
    if (grossPay <= 5999) {
        return 150;
    } else if (grossPay <= 7999) {
        return 300;
    } else if (grossPay <= 11999) {
        return 400;
    } else if (grossPay <= 14999) {
        return 500;
    } else if (grossPay <= 19999) {
        return 600;
    } else if (grossPay <= 24999) {
        return 750;
    } else if (grossPay <= 29999) {
        return 850;
    } else if (grossPay <= 34999) {
        return 900;
    } else if (grossPay <= 39999) {
        return 950;
    } else if (grossPay <= 44999) {
        return 1000;
    } else if (grossPay <= 49999) {
        return 1100;
    } else if (grossPay <= 59999) {
        return 1200;
    } else if (grossPay <= 69999) {
        return 1300;
    } else if (grossPay <= 79999) {
        return 1400;
    } else if (grossPay <= 89999) {
        return 1500;
    } else if (grossPay <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

function calculateNSSF(grossPay) {
    // NSSF contribution rates
    let nssfEmployeeRate = 0.06;
    let nssfEmployerRate = 0.06;
    let nssfEmployee = 0;
    let nssfEmployer = 0;
    
    if (grossPay <= 7000) {
        nssfEmployee = grossPay * nssfEmployeeRate;
        nssfEmployer = grossPay * nssfEmployerRate;
    } else if (grossPay <= 36000) {
        nssfEmployee = 420; // 7000 * 0.06
        nssfEmployer = 420; // 7000 * 0.06
    }
    
    return {
        employee: nssfEmployee,
        employer: nssfEmployer
    };
}

