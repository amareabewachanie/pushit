import {ArgumentsHost, Catch, ExceptionFilter, HttpStatus} from "@nestjs/common";

@Catch()
export class FallbackExceptionFilter implements ExceptionFilter{
  catch(exception: any, host: ArgumentsHost)  {


    const ctx = host.switchToHttp(),
       response = ctx.getResponse(),
       request=ctx.getRequest();


    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: 500,
      path: request.url,
      errorMessage: exception.message ? exception.message :
        'Unexpected error occurred'
    })

  }
}
