/*
Define a function, attendanceCheck, that accepts a day of the week as a string.

Using the globally-defined classRoom array, attendanceCheck should return a new array with only the names of the students present on the inputted day of the week.


classCheck('Monday'); // => ['Marnie', 'Shoshanna']

classCheck('Wednesday'); // => ['Marnie', 'Lena']
*/

let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
//we have one array with 4 elements.

const attendanceCheck = (day) => {
  let names = []
  for (let i = 0; i <classRoom.length; i++) {
    let student = classRoom[i]
    for (let name in student){
      let attendance = student[name]
      for (let j = 0; j < attendance.length; j++) {
        //doing a for loop because  key value pairs are housed in an array
        let attended = attendance[j]
        if (attended[day]) {
          names.push(name)
        }
      }
  }
  } 
  return names
}
