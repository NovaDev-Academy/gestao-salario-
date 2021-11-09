import { createParamDecorator } from '@nestjs/common';
export const JobData = createParamDecorator((data: string, req) => {
  return data ? req.body && req.body[data] : req.body;
});