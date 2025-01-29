import { Injectable, Logger } from '@nestjs/common';
import { ContactDto } from './dto/contact.dto';
import { EmailService } from 'src/services/email.service';
import { configuration } from 'src/config/configuration';
import { contactTemplate } from 'src/templates/contact.template';

@Injectable()
export class ContactService {
  private logger: Logger;

  constructor(private readonly emailService: EmailService) {
    this.logger = new Logger(ContactService.name);
  }

  async contact(dto: ContactDto) {
    try {
      const { email, message, name } = dto;

      await this.emailService.sendMessage({
        subject: `Novo contato recebido de ${name}`,
        to: configuration.email.recipient,
        html: contactTemplate({
          email,
          message,
          name,
        }),
      });

      return;
    } catch (err) {
      this.logger.error('Error sending email: ', err);

      throw new Error(err);
    }
  }
}
