interface IContactTemplateParams {
  name: string;
  message: string;
  email: string;
}

export const contactTemplate = ({
  email,
  message,
  name,
}: IContactTemplateParams) => {
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Novo Contato - Auditore</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .header {
      background-color: #3498db;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
    }
    .content p {
      margin: 10px 0;
      line-height: 1.6;
      color: #333333;
    }
    .content ul {
      list-style: none;
      padding: 0;
    }
    .content ul li {
      margin: 8px 0;
    }
    .message-box {
      margin-top: 20px;
      padding: 15px;
      background: #f9f9f9;
      border-left: 4px solid #3498db;
      border-radius: 4px;
      font-style: italic;
      color: #555555;
    }
    .footer {
      background-color: #f4f4f4;
      text-align: center;
      padding: 10px;
      font-size: 12px;
      color: #777777;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Novo Contato - Auditore</h1>
    </div>
    <div class="content">
      <p><strong>Olá Equipe Auditore,</strong></p>
      <p>Você recebeu uma nova mensagem de contato através do site.</p>
      <ul>
        <li><strong>Nome:</strong>  ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
      </ul>
      <p><strong>Mensagem:</strong></p>
      <div class="message-box">
        ${message}
      </div>
    </div>
    <div class="footer">
      <p>Equipe Auditore</p>
    </div>
  </div>
</body>
</html>
    `;
};
