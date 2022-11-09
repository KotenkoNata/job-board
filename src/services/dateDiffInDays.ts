export default function dateDiffInDays(a: string, b:string) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    let first = new Date(a);
    let second = new Date(b);

    const utc1 = Date.UTC(first.getFullYear(), first.getMonth(), first.getDate());
    const utc2 = Date.UTC(second.getFullYear(), second.getMonth(), second.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}