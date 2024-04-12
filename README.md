# aws-cdk-templates

This project contains constructs, stacks and apps and used as IaaS(Infrastructure as Service)

* create a S3 bucket using L1 and L2 constructs.
* Create a SQS queue and when the file is uploaded in S3 add a notification to the SQS.

## prerequistics

* Check the Node version >= 18

* configure the aws-cli 

* Install aws cdk

```
npm install -g aws-cdk
```

* Install typescript 

```
npm install -g typescript
```

## Generate the cdk project 

```
cdk init app --language typescript
```

## Generate the bootstap files to the CDK 

```
cdk bootstrap 

```

## Deplopy the code and transform to to the AWS

```
cdk bootstrap 
```


