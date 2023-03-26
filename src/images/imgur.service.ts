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
      });
      return result.link;
    } catch (error) {
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
