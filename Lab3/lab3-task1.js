const buffer_array = Buffer.from([8,6,7,5,3,0,9]);
const buffer_string = Buffer.from("I'm a string!", "utf-8");
console.log(buffer_array);
console.log(buffer_string);

//convert buffer_string to a string and output
console.log(buffer_string.toString());

//convert buffer_string to hex and output
console.log(buffer_string.toString('hex'));

//convert buffer_string to utf-8 and read from 0 to 10
console.log(buffer_string.toString('utf8', 0, 10));

//join the buffer_array and buffer_string and output
const new_buffer = Buffer.concat([buffer_string, buffer_array]);
console.log(new_buffer)

//convert the joined_buffer to JSON and output
console.log(new_buffer.toJSON())
