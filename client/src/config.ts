// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '9d3lv12d14'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'ruhulamingp.auth0.com',            // Auth0 domain
  clientId: 'Kq9RQuD2eQ7ea3IXSqkMQacjU5f4Prkv',          // Auth0 client id
  callbackUrl: 'http://capston-todo.s3-website.us-east-1.amazonaws.com/callback'
}
