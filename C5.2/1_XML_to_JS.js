/* подготовка данных */

/* Создание экземпляра класса DOMParser. он позволит нам парсить XML */
const parser = new DOMParser();
//console.log('parser', parser);
// XML, который будем парсить
const xmlString = `
  <list>
	<student>
		<name lang="en">
			<first>Ivan</first>
			<second>Ivanov</second>
		</name>
		<age>35</age>
		<prof>teacher</prof>
	</student>
	<student>
		<name lang="ru">
			<first>Петр</first>
			<second>Петров</second>
		</name>
		<age>58</age>
		<prof>driver</prof>
	</student>
  </list>
`;
// console.log("xmlString", xmlString);

/* получение данных */
// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
// console.log(studentNode.length);
// console.log(studentNode);
let arrayFromStudents = [];

for (let i = 0; i < studentNode.length; i++) {
	let student_object = studentNode[i];
	let nameNode = student_object.querySelector("name");
	let firstNode = nameNode.querySelector("first");
	let secondNode = nameNode.querySelector("second");
	let ageNode = student_object.querySelector("age");
	let profNode = student_object.querySelector("prof");
	let langAttr = nameNode.getAttribute("lang");
//  console.log(firstNode.textContent, secondNode.textContent, ageNode.textContent, profNode.textContent, langAttr)
	arrayFromStudents[i] = {
		name: firstNode.textContent + ' ' + secondNode.textContent,
		age: Number(ageNode.textContent),
		prof: profNode.textContent,
		lang: langAttr}
}
const result = {'list': arrayFromStudents}

console.log(result)
