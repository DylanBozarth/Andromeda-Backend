import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { File } from 'multer';

@Injectable()
export class ImgurService {
  constructor(private readonly configService: ConfigService) {}

  async uploadImage(file: File): Promise<string> {
    try {
      const clientId = this.configService.get('IMGUR_CLIENT_ID');
      const response = await axios.post(
        'https://api.imgur.com/3/image',
        file.buffer,
        {
          headers: {
            Authorization: `Client-ID ${clientId}`,
            'Content-Type': 'multipart/form-data',
          },
          timeout: 5000, // Set a timeout of 5000ms (5 seconds)
        },
      );

      return response.data.data.link;
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
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
