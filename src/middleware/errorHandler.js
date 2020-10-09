// import { errorResponse } from '../helpers';

// const errorHandler = (err, req, res) => {
//   let messages = err.errors.map(e => e.field);
//   if (err && err.message === 'validation error') {
//     if (messages.length && messages.length > 1) {
//       messages = `${messages.join(', ')} are required fields`;
//     } else {
//       messages = `${messages.join(', ')} is required field`;
//     }
//   }
//   return errorResponse(req, res, messages, 400, err);
// };

// export default errorHandler;
