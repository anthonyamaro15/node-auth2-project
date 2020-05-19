require("dotenv");
const server = require("./api/server");

const PORT = process.env.PORT || 4003;

server.listen(PORT, () => console.log(`server running in port ${PORT}`));
