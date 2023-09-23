import { Injectable } from '@nestjs/common';

@Injectable()
export class SectorsService {
  getHello(): string {
    return 'THE SECTORS';
  }
}
