import { addItemToDynamoDB } from "./pictureUpload";

function MyComponent() {
    const handleAddItem = async () => {
      const newItem = {
        id: Date.now().toString(), // Use a unique identifier
        pictureStream: "https://example.com/image.jpg"
      };
  
      await addItemToDynamoDB(newItem);
    };
  
    return (
      <div>
        <button onClick={handleAddItem}>Add Item to DynamoDB</button>
      </div>
    );
  }
  
  export default MyComponent;