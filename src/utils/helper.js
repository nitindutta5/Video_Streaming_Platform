
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export const randomNameGenerator = num => {
    let res = '';
    for (let i = 0; i < num; i++) {
        const random = Math.floor(Math.random() * 27);
        res += String.fromCharCode(97 + random);
    };
    return res;
};
