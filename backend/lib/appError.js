class AppError extends Error {
  message;
	statusCode;
	status;
	stack;

    constructor(message, statusCode) {
      super(message)
      this.message = message || 'Something went wrong with your request';
      this.statusCode = statusCode || 500;
      this.status = statusCode.toString().startsWith('4') ? 'fail' : 'error';


      Error.captureStackTrace(this, this.constructor);
    }
};


module.exports = AppError;
