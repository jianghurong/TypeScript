interface CreatePerson {
    (name: string, age: number) : object;
}
let p1: CreatePerson;
p1 = function(n: string, a: number) {
    return {"name": n, "age": a};
}