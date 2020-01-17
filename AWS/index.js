const got    = require("got");
const chalk  = require('chalk');
const os     = require('os');
const fs     = require('fs');

const AWS    = require('aws-sdk');
const credentials = require("./credentials.json")

/**pip3 Install aws cli, aws config*/


//https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html

AWS.config.update({region:"us-east-1"});

//console.log(AWS.config);

var ec2 = new AWS.EC2();

/*Key pair has to be created first to perform the action***/

var params = {
    KeyName: "my-key-pair6"
   };

ec2.createKeyPair(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else {  console.log(data.KeyMaterial);
            var jsonData = data.KeyMaterial;
            fs.writeFile("my-key-pair6.pem", jsonData, function(err) {
            if (err) {
                console.log(err);
    }
});
    }
});

var params = {
    ImageId: "ami-0c322300a1dd5dc79",
    InstanceType: "t2.micro", 
    KeyName: "my-key-pair6", 
    MaxCount: 1, 
    MinCount: 1, 
   };

ec2.runInstances(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else{
        // console.log(data.Instances)
        for(let key of data.Instances){
            console.log(key)
        }
    }
});