const juan = {
    name: "Juanito",
    age: 18,
    approvedCourse: ["Curso1"],
    addCourse(newCourse){
        this.approvedCourse.push(newCourse);
    }
};

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));

Object.seal(juan);
Object.freeze(juan);


console.log(Object.getOwnPropertyDescriptors(juan));