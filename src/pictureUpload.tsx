import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "YOUR_REGION" });
const docClient = DynamoDBDocumentClient.from(client);

export const addItemToDynamoDB = async (item: {id: String, pictureStream: String}) => {
  const params = {
    TableName: "dynamo123trigger",
    Item: item
  };

  try {
    const command = new PutCommand(params);
    await docClient.send(command);
    console.log("Item added successfully");
  } catch (error) {
    console.error("Error adding item:", error);
  }
};