/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
 const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
  ];
  const groups = 3;
  
  function result(students, groups) {
    
    var mod = students.length % groups;
    var result  = [];
    
    var diff = 0;
    var lastIndex = 0;

    for (let i = 0; i < groups; i++) {

        var map = [];

        for (let j = 0; j < mod; j++) {
            map.push(students[lastIndex]);
            lastIndex++;
        }

        result.push(map)
    }

    return result
  }
  
  console.log(result(students, groups));