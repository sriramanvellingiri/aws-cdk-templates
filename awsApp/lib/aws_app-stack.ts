import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket, EventType } from 'aws-cdk-lib/aws-s3';
import { SqsDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

      // l1 Construct of an S3 Bucket
      const levellS3Bucket = new CfnBucket(this, 'MyFirstLevel1ConstructBucket', {
        versioningConfiguration: {
          status: "Enabled"
        }
      });

      // l2 construct of an S3 Bucket 
      const level2S3Bucket = new Bucket(this, 'MyFirstLevel2ConstructBucket', {
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        bucketName: "myfirstlevel2constructbucketfororiginal",
        versioned: true
      });

      // Create a SQS Queue 
      const queue = new Queue(this, ' MyQueue', {
        queueName: 'TestBucketQueue'
      });

      level2S3Bucket.addEventNotification(EventType.OBJECT_CREATED, new SqsDestination(queue));

      

  }
}
