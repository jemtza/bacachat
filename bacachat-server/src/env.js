export const expiration = process.env.JWT_EXPIRATION_MS
  ? parseInt(process.env.JWT_EXPIRATION_MS)
  : 24 * 60 * 60 * 1000;
export const secret = process.env.JWT_SECRET || 'b4c4ch47';
export const origin = process.env.ORIGIN || 'http://localhost:3000';
export const port = process.env.PORT || 4000;
export const dbUri = 'mongodb://mongo:27017';
