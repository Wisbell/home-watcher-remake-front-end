export const environment = {
  production: true,
  apiUrl: 'https://home-watcher-api.herokuapp.com',
  // NOTE: http will not work as intended due to lack of security
  // raspPiUrl: 'http://home-watcher.serverless.social',
  // TODO: Add ability to update rasp pi url during run time
  raspPiUrl: 'https://42d38b30.ngrok.io',
};
