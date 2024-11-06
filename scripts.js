// 1. Set Interval and Timeout Example
/* 
const interval = setInterval(() => {
    console.log("running");
});
setTimeout(() => {
    console.log("hello");
    clearInterval(interval); // clear interval after timeout for demo
}, 2000);
*/

// 2. Display Current File and Directory Paths
/* 
console.log(__filename); // Logs the current file path
console.log(__dirname);  // Logs the current directory path
*/

// 3. Get Filename from Path
/* 
const path = require("path");
console.log(path.basename(__filename)); // Logs the filename of the current file
*/

// 4. Get File Extension
/* 
const path = require("path");
console.log(path.extname(__filename)); // Logs the file extension of the current file
*/

// 5. Get Directory Name from Path
/* 
const path = require("path");
console.log(path.dirname(__filename)); // Logs the directory of the current file
*/

// 6. Join Paths Example
/* 
const path = require("path");
console.log(path.join(__dirname, "api", "scripts.js")); // Joins paths into a full path
*/

// 7. Create a Directory (Non-Recursive)
/* 
const fs = require("fs");
const path = require("path");
fs.mkdir(path.join(__dirname, "/api"), (err) => {
    if (err) throw err;
});
console.log("Directory created");
*/

// 8. Create Nested Directories (Recursive)
/* 
const fs = require("fs");
const path = require("path");
fs.mkdir(path.join(__dirname, "/api2/api3"), { recursive: true }, (err) => {
    if (err) throw err;
});
console.log("Nested directories created");
*/

// 9. Remove Directory (Recursive)
/* 
const fs = require("fs");
const path = require("path");
fs.rmdir(path.join(__dirname, "/api2"), { recursive: true }, (err) => {
    if (err) throw err;
});
console.log("Directory removed");
*/

// 10. Write to a File
/* 
const fs = require("fs");
const path = require("path");
fs.writeFile(
    path.join(__dirname, "/api/file.txt"),
    "User Name: sharissa",
    (err) => {
        if (err) throw err;
        console.log("File has been written");
    }
);
*/

// 11. Write to a File with Variable Substitution
/* 
const fs = require("fs");
const path = require("path");
const user = "me1";
fs.writeFile(
    path.join(__dirname, "/api/file2.txt"),
    `User Name: ${user}`, // Template literals for variable substitution
    (err) => {
        if (err) throw err;
        console.log("File has been saved with user name");
    }
);
*/

// 12. Append to a File
/*const fs = require("fs");
const path = require("path");
const user = "sharissa";
fs.appendFile(
    path.join(__dirname, "/api/file3.txt"),
    `\nUser Name: ${user}`, // Append new line with user info
    (err) => {
        if (err) throw err;
        console.log("User name appended to file");
    }
);
*/

// 13. Import EventEmitter module

/*const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("message", (data) => {
    console.log(data); // Logs message data to console
});

emitter.on("logout", (data) => {
    console.log(data); // Logs logout data to console
});


emitter.emit("message", "User logged in"); // Triggers the "message" event
emitter.emit("message", "User logged in again"); // Triggers the "message" event again
*/


// 14. Event Emitter Example: Handling Requests and Errors

/*const EventEmitter = require("events");
const emitter = new EventEmitter();

// Listener for "request" event
emitter.on("request", (req) => {
    console.log(`Received request for ${req.url}`);
    
    if (req.url === "/error") {
        emitter.emit("error", new Error("An error occurred"));
    } else {
        console.log(`Processing request for ${req.url}`);
    }
});

// Listener for "error" event
emitter.on("error", (err) => {
    console.log(`Error occurred: ${err.message}`);
});

// Emitting "request" events with different URLs
emitter.emit("request", { url: "/home" });
emitter.emit("request", { url: "/about" });
emitter.emit("request", { url: "/error" });*/

// Event Emitter Example: Handling Requests and Errors


const fs = require("fs");
const path = require("path");
const user = "sharissa";

// 1. Write to a New File
fs.writeFile(
    path.join(__dirname, "/api/newfile.txt"), // Specify the new file name and path
    `User Name: ${user}`,                    // Initial content for the file
    (err) => {
        if (err) throw err;
        console.log("File has been written with initial content.");

        // 2. Append Content to the File
        fs.appendFile(
            path.join(__dirname, "/api/newfile.txt"),
            `\nAdditional User Info: ${user}`, // Content to append to the file
            (err) => {
                if (err) throw err;
                console.log("Additional content has been appended to the file.");

                // 3. Delete the File
                fs.unlink(path.join(__dirname, "/api/newfile.txt"), (err) => {
                    if (err) throw err;
                    console.log("File has been deleted.");
                });
            }
        );
    }
);
