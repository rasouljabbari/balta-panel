export const isValidIranianNationalCode = (value?: string) => {
    if (!value) return false;

    if (!/^\d{10}$/.test(value)) return false;

    // prevent repeated digits like 1111111111
    if (/^(\d)\1{9}$/.test(value)) return false;

    const check = Number(value[9]);
    const sum = value
        .split('')
        .slice(0, 9)
        .reduce((acc, digit, index) => acc + Number(digit) * (10 - index), 0);

    const remainder = sum % 11;

    return (
        (remainder < 2 && check === remainder) ||
        (remainder >= 2 && check === 11 - remainder)
    );
};