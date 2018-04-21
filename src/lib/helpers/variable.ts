
export function vCheck(stringToCheck: string, regex: RegExp = /({{[^}]*}})/) {
    const regExpPattern: RegExp = new RegExp(regex, 'g');
    const containsVariable: boolean = regExpPattern.test(stringToCheck);
    return containsVariable;
}
