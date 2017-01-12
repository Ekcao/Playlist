export default function deepCopy(obj) {
    return Object.assign({}, JSON.parse(JSON.stringify(obj)));
}