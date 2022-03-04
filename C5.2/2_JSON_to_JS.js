const parser = new DOMParser();

const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

const jsonObject = JSON.parse(jsonString);

let students = [];

let i;
for (i = 0; i < jsonObject.list.length; i++) {
  let student_let = jsonObject.list[i];
  students[i] = {
    name: student_let.name,
    age: Number(student_let.age),
    prof: student_let.prof
  };
}

let resutls = { list: students };
console.log(resutls);
