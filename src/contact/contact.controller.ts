import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ContactDto } from './dto/contact.dto';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async contact(@Body() dto: ContactDto) {
    try {
      await this.contactService.contact(dto);

      return {
        success: true,
        message: 'Message sent successfully',
      };
    } catch (err) {
      if (err instanceof HttpException) {
        throw err;
      }

      return {
        success: false,
        message: err?.message,
      };
    }
  }
}
