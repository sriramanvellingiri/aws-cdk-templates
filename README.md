# aws-cdk-templates

This project contains constructs, stacks and apps and used as IaaS(Infrastructure as Service)

* create a S3 bucket using L1 and L2 constructs.
* Create a SQS queue and when the file is uploaded in S3 add a notification to the SQS.

## Prerequistics

* Check the Node version >= 18

* configure the aws-cli 

```
https://docs.aws.amazon.com/cli/v1/userguide/install-linux-al2017.html
```

* Install aws cdk

```
npm install -g aws-cdk
```

* Install typescript 

```
npm install -g typescript
```

## Generate the cdk project 

The below command will generate the project with typescript.

```
cdk init app --language typescript
```

## Generate the bootstap templates in AWS Cloudformation 

```
cdk bootstrap 

```

## Deploy the code and transform the code to a infrastructure in AWS

```
cdk deploy 
```


