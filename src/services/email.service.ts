import { createTransport, Transporter, TransportOptions } from 'nodemailer';
import { Logger } from '@nestjs/common';
import { EmailMessageDto } from 'src/common/dto/email-message.dto';
import { configuration } from 'src/config/configuration';

export class EmailService {
  private transporter: Transporter;

  constructor(private readonly logger: Logger) {
    const { apiKey, port, smtp } = configuration.email.sendgrid;
    this.logger = new Logger(EmailService.name);

    this.transporter = createTransport({
      host: smtp,
      port: parseInt(port, 10),
      auth: {
        user: 'apikey',
        pass: apiKey,
      },
    } as TransportOptions);
  }

  async sendMessage(dto: EmailMessageDto): Promise<void> {
    try {
      if (!dto.from) {
        dto.from = process.env.EMAIL_SENDGRID;
      }
      const result = await this.transporter.sendMail(dto);
      this.logger.log(
        `Example mail sent to ${
          dto.to
        } successfully. Result: ${JSON.stringify(result)}`,
      );
    } catch (error) {
      this.logger.error(`Error to send email: ${error}`);
    }
  }
}
