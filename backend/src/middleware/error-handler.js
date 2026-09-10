export function notFoundHandler(request, response) {
  response.status(404).json({
    error: {
      code: 'ROUTE_NOT_FOUND',
      message: `No route matches ${request.method} ${request.originalUrl}`,
      requestId: request.id,
    },
  });
}

export function errorHandler(error, request, response, _next) {
  void _next;
  const status = Number.isInteger(error.status) ? error.status : 500;
  const exposeMessage = status < 500;

  if (status >= 500) {
    console.error(`[${request.id}]`, error);
  }

  response.status(status).json({
    error: {
      code: error.code || 'INTERNAL_SERVER_ERROR',
      message: exposeMessage ? error.message : 'An unexpected error occurred',
      requestId: request.id,
    },
  });
}
