const os = require("os");
console.log("Free memory :", os.freemem());
console.log("total memory:" , os.totalmem());
console.log("platform:", os.platform());
console.log("architecture:", os.platform());
console.log("cpu info", os.cpus());
console.log("home directory:",os.homedir())