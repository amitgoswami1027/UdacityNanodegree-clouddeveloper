## AWS_Cloud_Developer - Nano Degree
Udacity Cloud developer Nanodegree program, consists of few Projects and this repository is created for my work related to the nanodegree program. All my daily work and incremetal commits are captured in this repo. Also I am documenting all the debugging and troubleshooting which I struggled with during the program.

## Udacity Cloud Projects - AWS_Cloud_Developer
## Debugging & Troubleshooting
### Project2 : Udagram portal deployment & development
1. Problem -01 : Not able to connect to the AWS Postgres DB inspite of having all valid security group - inbound and outbound rules 
    defined to connect and made the DB public: 
    Solution : https://stackoverflow.com/questions/51014647/aws-postgres-db-does-not-exist-when-connecting-with-pg
2. Problem -02 : eb not recognized as internal command -- error
   Clone : https://github.com/aws/aws-elastic-beanstalk-cli-setup
   Follow the ReadMe instructions for setting up. Elastic beanstalk cli.
3. Problem -03 : Not able to use "post" method, While issuing post requests on postman for the udacity-c2-rest-api and getting errors
   My solution was: to install latest versions of following modules: (This solves the issue)
   npm i sequelize@latest --save
   npm i sequelize-typescript@latest --save
4. Problem -04 : Not able to use "put" the files in S3 using "Post Man" :
   The account provided- AWSEducate with aws credit doesnot allow you to generate them.
   You need to use another AWS account to generate the access key id and secret access key, to compelete the project
   S3 bucket should have all necessary public access to access from the internet.
5. Deploying on the elastic beanstalk, we need to use 'eb init' and 'eb deploy' commands and these commands will navigate to do the 
   needful. One of the problem that I face in bundling the code in one zip file. I was using windows OS for development so some of the 
   basic unix commands were not accessable like cp, zip and we need to install utilizites and set the environment variables to fix this    problem. One of the utility I used to fix these problem were - Unixutil.


####Comments ported after mergeing the pull request from the f-auth - authentication changes to feature branch
### New F-auth branch is created to keep track of the changes done as part of the authentication in the branch. This way its easy to go back and see what is changes from the master branch. 
####Comments ported after mergeing the pull request from the f-auth - authentication changes to feature branch



## Commands
npm install ts-node --save-dev
npm install typescript -g 
npm install typescript --save-dev

//Build & Deploy Elasticbean package
npm install rimraf -g
  "build": "npm run clean && tsc && xcopy /e /i src\\config www\\config && copy /v .npmrc www\\.npmrc && copy /v package.json www\\package.json && cd www && zip -r Archive.zip . && cd ..",
  

 


