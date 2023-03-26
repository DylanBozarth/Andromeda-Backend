import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import imgurUploader from 'imgur-uploader';
import { File } from 'multer';

@Injectable()
export class ImgurService {
  constructor(private readonly configService: ConfigService) {}

  async uploadImage(file: File): Promise<string> {
    try {
      const result = await imgurUploader(file.buffer, {
        clientId: this.configService.get(process.env.IMGUR_CLIENT_ID),
      });
      return result.link;
    } catch (error) {
      throw new Error('Failed to upload image to Imgur');
    }
  }
}
