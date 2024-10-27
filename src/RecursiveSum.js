let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };


  /*function sumSalariesWithIterativeObjectKeys(department){
     let totalSalary = 0; //To store the total salary
     let departments = [department]; //Array to hold departments to process

     //while there are departments to process
     while(departments.length>0){
      let current = departments.shift() //get the current department
      console.log(222, current);
      //{sales: Array(2), development: {…}}

      // Get the keys of the current object (e.g., "sales", "development")
      let keys = Object.keys(current);
      console.log(1111, keys)
      //(2) ['sales', 'development']

      //Iterate over the keys

      for(let key of keys){
          let value = current[key];
          console.log(333, value)
          //(2) [{…}, {…}]
          //{sites: Array(2), internals: Array(1)}
          if(Array.isArray(value)){
            // If the value is an array, it's a list of employees. Sum their salaries.

            for(let employee of value){
              totalSalary = totalSalary + employee.salary;
            }
          }
          else if(typeof value === "object"){
          // If the value is an object, it's a sub-department. Add it to the list for further processing.
           departments.push(value)
          }
      }

     }
  return totalSalary;

  }


  console.log("Total Salary: ", sumSalariesWithIterativeObjectKeys(company));*/
   /*** 
    *   222 {sales: Array(2), development: {…}}
        VM67:39 1111 (2) ['sales', 'development']
        VM67:46 333 (2) [{…}, {…}]
        VM67:46 333 {sites: Array(2), internals: Array(1)}
        VM67:34 222 {sites: Array(2), internals: Array(1)}
        VM67:39 1111 (2) ['sites', 'internals']
        VM67:46 333 (2) [{…}, {…}]
        VM67:46 333 [{…}]
        VM67:68 Total Salary:  7700      
    * 
    */

   /*function sumSalariesIterative(department){

    let totalSalary = 0;
    let current = department;

    while(true){
        if(Array.isArray(current)){
           // If it's an array of employees, sum their salaries
          for(let employee of current){
          totalSalary = totalSalary + employee.salary;
           }  
        }
        else{
            // If it's an object (department), iterate over its keys
            let subdepartments = Object.values(current)
            console.log(555, subdepartments)

            if (subdepartments.length === 0) {
              // No more sub-departments, break the loop
              break;
            }

            // Pick the first sub-department to process next
            current = subdepartments.shift();

          // Traverse remaining sub-departments iteratively
          for(let subDepartment of subdepartments){
             // If it contains employees, sum their salaries
             if(Array.isArray(subDepartment)){
              for(let employee of subDepartment){
                  totalSalary = totalSalary + employee.salary;
              }
             }
             else{
               // Otherwise, traverse sub-departments
               current = subDepartment;
             }
          }

        }
    // Break if no more traversal is required
    if (current === null || Object.keys(current).length === 0) {
      break;
    }
    }

    return totalSalary;

    }
    sumSalariesIterative(company)*/

    //recursive
    function sumSalaries(department){
         if(Array.isArray(department)){
          // If department is an array, sum up the salaries of employees
          return department.reduce((acc, currentEmployee)=>(acc+ currentEmployee.salary), 0)
         }
         else{
          let sum = 0;

          for(let subDep of Object.values(department)){
              console.log(666, subDep);
              sum = sum + sumSalaries(subDep);
          }
          return sum;
         }
    }
    console.log("Total Salary: ", sumSalaries(company));


    function iterativeSum(n){
      let sum = 0;
      for(let i =1; i<=n ; i++){
        sum = sum + i
      }
      return sum
    }

    console.log(iterativeSum(100))

    function recursiveSum(n){
     
        if(n==1)
          return 1;
        else
         n = n + recursiveSum(n-1)
         return n;
    }

    console.log(recursiveSum(100))

    function sumTo(n) {
      return n * (n + 1) / 2;
    }

    console.log(sumTo(100))

    function factorial(n){
       return (n!==1) ? n*factorial(n-1) : 1
    }

    console.log(factorial(5))


    let list = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };

    function printlist(list){
           let temp = list;

           while(temp){
            console.log(temp.value)
            temp = temp.next;
           }
    }

    console.log(printlist(list))


    function printListRecursive(list){
      console.log(list.value)
      
      if(list.next){
        printListRecursive(list.next)
      }
    }

    console.log(printListRecursive(list))


    function printReverseList(list){
      let arr = [];
      let temp = list;

      while(temp){
        arr.push(temp.value)
        temp = temp.next;
      }

      for(let i = arr.length -1; i>=0; i--){
        console.log(arr[i])
      }
    }

    printReverseList(list)


    function printReverseListRecursive(list){
       if(list.next){
        console.log(111, list.next)
        printReverseListRecursive(list.next)
        console.log(3333, list.value)
       }
       console.log(list.value)
       console.log(2222, list.value)
    }
    printReverseListRecursive(list)