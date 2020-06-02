import uuid from "./uuid.js";


function generateCorrelationId() {
    console.log(uuid);
    console.log(uuid.v4());
    return `${uuid.v4()}`;
}


export default function () {
    generateCorrelationId()
};

