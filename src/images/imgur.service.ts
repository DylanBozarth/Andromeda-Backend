import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import imgurUploader from 'imgur-uploader';
import { File } from 'multer';

@Injectable()
export class ImgurService {
  constructor(private readonly configService: ConfigService) {}

  async uploadImage(file: File): Promise<string> {
    try {
      const result = await imgurUploader(file.buffer, {
        clientId: this.configService.get('IMGUR_CLIENT_ID'),
        timeout: 5000, // Set a timeout of 5000ms (5 seconds)
      });
      return result.link;
    } catch (error) {
      if (error.message === 'Request timed out') {
        throw new HttpException(
          {
            status: HttpStatus.REQUEST_TIMEOUT,
            error: 'Imgur API request timed out',
          },
          HttpStatus.REQUEST_TIMEOUT,
        );
      } else {
        throw new HttpException(
          {
            status: HttpStatus.SERVICE_UNAVAILABLE,
            error: `Failed to upload image to Imgur: ${error.message}`,
          },
          HttpStatus.SERVICE_UNAVAILABLE,
        );
      }
    }
  }
}
