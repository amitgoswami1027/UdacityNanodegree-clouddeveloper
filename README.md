
## Udacity Cloud Projects - AWS_Cloud_Developer
## Debugging & Troubleshooting
### Project2 : Udagram portal deployment & development
1. Problem -01 : Not able to connect to the AWS Postgres DB inspite of having all valid security group - inbound and outbound rules defined to connect and made the DB public: 
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
   


####Comments ported after mergeing the pull request from the f-auth - authentication changes to feature branch
### New F-auth branch is created to keep track of the changes done as part of the authentication in the branch. This way its easy to go back and see what is changes from the master branch. 
####Comments ported after mergeing the pull request from the f-auth - authentication changes to feature branch

## AWS_Cloud_Developer
Deploy Static Website on AWS

In this project, you will deploy a static website to AWS using S3, CloudFront, and IAM.

The files included are: 

index.html - The Index document for the website.
/img - The background image file for the website.
/vendor - Bootssrap CSS framework, Font, and JavaScript libraries needed for the website to function.
/css - CSS files for the website.

## Commands
npm install ts-node --save-dev
npm install typescript -g 
npm install typescript --save-dev

 


