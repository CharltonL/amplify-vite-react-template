import { post } from 'aws-amplify/api';

async function postTodo(input:{id:string, pictureStream: string}) {
  try {
    const restOperation = post({
      apiName: 'pictureUploaderAPI',
      path: '/picture',
      options: {
        body: input
      }
    });

    const { body } = await restOperation.response;
    const response = await body.json();

    console.log('POST call succeeded');
    console.log(response);
  } catch (e: any) {
    console.log('POST call failed: ', JSON.parse(e.response.body));
  }
}

export default postTodo