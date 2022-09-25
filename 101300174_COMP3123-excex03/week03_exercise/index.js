var http = require("http");
//TODO - Use Employee Module here
let emp = require("./Employee.js")

console.log("Lab 03 -  NodeJs");
//TODO - Fix any errors you found working with lab exercise
//Define Server Port
const port = process.env.PORT || 8091
//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
        }

        if (req.url === '/employee') {
            res.write(JSON.stringify(emp, null, 4))
            //TODO - Display all details for employees in JSON format
        }

        if (req.url === '/employee/names') {
                var arr = []
                for (let x in emp) {
                    empName = emp[x].firstName + " "+ emp[x].lastName
                    arr.push(empName)
                }
                arr.sort()
                
                res.write(JSON.stringify(arr))
        }
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]

        if (req.url === '/employee/totalsalary') {
            const sal = emp.reduce((partialSum, a) => a.Salary + partialSum, 0);
            res.write(JSON.stringify({ total_salary: sal }));
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
    }
    res.end(`\n{"Status": "${http.STATUS_CODES[200]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})