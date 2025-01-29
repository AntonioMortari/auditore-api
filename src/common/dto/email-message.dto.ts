export interface EmailMessageDto {
  to: string;
  from?: string;
  subject: string;
  html: string;
}
