import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImgurService } from './imgur.service';

@Controller('image')
export class ImageController {
  constructor(private readonly imgurService: ImgurService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file, @Res() res) {
    try {
      const imgUrl = await this.imgurService.uploadImage(file);
      return res.status(200).json({ url: imgUrl });
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'An error occurred while uploading the image.' });
    }
  }
}
