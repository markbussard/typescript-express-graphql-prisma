import sgMail, { type MailDataRequired } from '@sendgrid/mail';

import { SENDGRID_API_KEY } from '~/config';

sgMail.setApiKey(SENDGRID_API_KEY);

export class EmailService {
  public async send(data: MailDataRequired | MailDataRequired[]) {
    const response = await sgMail.send(data);
    return response;
  }
}
