export function validatePositiveNumber(num: number) {
    return num < 0 ? 0 : num;
}

export const reportError = ({ message }: { message: any }) => {
    console.log(message)
}

export function validateMaxQuality(newQuality: number, maxQuality: number) {
    return newQuality >= maxQuality ? maxQuality : newQuality;
}

export function validateNoNegativeNumber(num: number) {
    try {
        return num < 0 ? 0 : num;
    }
    catch (error) {
        return 0;
    }
}
