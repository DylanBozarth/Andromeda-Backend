import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuid } from 'uuid';
import ImgurUploader from 'imgur-upload';

interface UploadedFileDto {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

@Controller('images')
export class ImageController {
  private readonly imgurUploader: ImgurUploader;

  constructor() {
    this.imgurUploader = new ImgurUploader({
      clientid: process.env.IMGUR_CLIENT_ID,
    });
  }

  @Get()
  healthCheck() {
    return 'healthy';
    // try {
    //   const buildingData = await this.buildingService.getAllBuildings();
    //   return response.status(HttpStatus.OK).json({
    //     message: 'All buildings data found successfully',
    //     total: buildingData.length,
    //     buildingData,
    //   });
    // } catch (err) {
    //   return response.status(err.status).json(err.response);
    // }
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const fileName = uuid() + extname(file.originalname);
          cb(null, fileName);
        },
      }),
      limits: {
        fileSize: 1024 * 1024, // 1MB
      },
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg)$/)) {
          return cb(new Error('Only JPG files are allowed'), false);
        }
        cb(null, true);
      },
    }),
  )
  async uploadFile(@UploadedFile() file: UploadedFileDto) {
    if (!file) {
      throw new Error('No file uploaded');
    }
    try {
      const json = await this.imgurUploader.upload(file.path);
      return { url: json.link };
    } catch (err) {
      console.error('Failed to upload file to Imgur:', err);
      throw new Error('Failed to upload file');
    }
  }
}
