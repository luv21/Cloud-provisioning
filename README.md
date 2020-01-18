#### HW0-DevOps
#CSC-519 HW0

This Homework helps to automate the provisioning of VM's from two cloud providers namely:
1) Digital Ocean
2)AWS

## Repository Contents

The repository has two folders each for the two cloud providers. Both the folders contain the code code to perform the tasks mentioned in the Homework. The instructions to run the code have been given below:


## 1. DigitalOcean

The code makes use of the got api https://github.com/sindresorhus/got#readme for making http requests, suitable for interacting with a REST API.

1. Create an account on [DigitalOcean](https://www.digitalocean.com/)
2. Ensure node.js (latest version v12.14.1 ) is installed on your system along with npm. You can download it using this [link](https://nodejs.org/en/download/).
3. Clone the repository using the below command.
https://github.ncsu.edu/lkhuran/HW0-DevOps.git

4. Navigate to the digitalOcean folder by typing
    cd digitalOcean
5. Now we should install the dependencies to run the application by typing
    npm install

### Credentials and Authentication
1.  we need to make sure the application is authenticated before running the code. The best way would be to set the environmental variables. Log into your [DigitalOcean account](https://cloud.digitalocean.com/login) and navigate to *API* and create your new Personal Access Token. 

2. Once you have your token, we will set them in our environment variables.
3. Enter the following code in your Linux machine terminal
    export NCSU_DOTOKEN = Personal Token
   For Windows Machine type setx DOTOKEN = YOUR_TOKEN

### Running the Code

1. Before running the code we need to create the key-pair that will be used for doing ssh into the droplet. In the putty or your vs code terminal write the below command to create the key.
 ssh-keygen

2. Store the keypair in the same folder. Two files will be there key and key.pub. Copy the key.pub file and put it as the value of the public_key field of the data1 json object in the createkeys function of the index.js file.

3. Now we will finish the first 5 tasks (list regions, list images, create keys, create droplet and print droplet info.

4. Now we will run the code by typing :
    node index.js
    This will run the code display the regions, images, create the keys, create the droplet and display its info including the IP address.

5. Now ping the ip address of the droplet that is printed. You should be able to ping the same.

6. You can also ssh into the droplet by 
    ssh - <key_file> root@ <IP>





### 2. AWS

## Prerequisites
1. Make sure that you have a account on AWS.

2. Navigate to the cloned folder and go inside the AWS directory .
    cd AWS

Authentication and Credentials
1. Login to your AWS account.

2.we need to make sure the application is authenticated. The best way would be to set the environmental variables. Log into your [AWS Management Console](https://console.aws.amazon.com/) and navigate to *My Security Credentials*. You will require two keys : 
* Access Key
* Secret Access Key
2.Both the  keys should be set them as environment variables.
    
    Mac/Linux
    export AWS_ACCESS_KEY_ID = YOUR_TOKEN
    export AWS_SECRET_ACCESS_KEY = YOUR_TOKEN
    Windows
    setx AWS_ACCESS_KEY_ID = YOUR_TOKEN
    setx AWS_SECRET_ACCESS_KEY = YOUR_TOKEN

This can also be done using a credentials.json file and saving these two keys in the credentials.json file.

3. We will also have to set the default region.
    
    Mac/Linux
    export AWS_DEFAULT_REGION=us-east-2
    Windows
    setx AWS_DEFAULT_REGION=us-east-2

4. Running the code 
    Type node index.js

5. This will create the key-pair in your local repository and also an EC-2 instance.

6. You can ping the public Ip by ping <IP>

7. You can also ssh in the VM by typing 

ssh -i <key.pem> ec2-user@<public_ip>


### Note:Opunit checks and the Moodle and Stack Overflow Pages have been shown in the screencast.

### SCREENCAST VIDEO LINK 

https://drive.google.com/file/d/1kxJDZC6effwsxu9lAm4KpILg5zA7fdZf/view?usp=sharing
