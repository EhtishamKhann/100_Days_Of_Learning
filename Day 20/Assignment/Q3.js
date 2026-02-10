// What is the ouput of the following code 

const object = {
    message : "Hello World",

    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage,1000);

// so the expected answer is that it prints undefined after 1 second because this is here window.