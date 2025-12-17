
# EmailJS Setup Guide

To send emails to the **visitor** (the person who filled out the form) and the **business**, you need to configure your EmailJS Template correctly.

## 1. Environment Variables
Ensure your `.env` file in the project root exists and has these values:
```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```
*Restart the server (`npm run dev`) after changing the `.env` file.*

## 2. Configure Email Template (Dashboard)

1.  Login to [EmailJS Dashboard](https://dashboard.emailjs.com/).
2.  Go to **Email Templates** and click on your template.
3.  **To Email**: Change this field to `{{to_email}}`.
    *   This tells EmailJS to send the email to the address provided in the form variable `to_email`.
4.  **From Name**: Set to `{{from_name}}`.
5.  **Subject**: Set to `{{subject}}`.
6.  **Content**: Use `{{message}}` in the body.
7.  **Auto-Reply (Optional)**: If you want to send *two* emails (one to the user, one to yourself), you might need to create two templates or check if the "To Email" field allows comma-separated values like `your@email.com, {{to_email}}`. 
    *   *Simpler Approach*: Usually, the "To Email" in the main template is your business email. To send a copy to the user, enable the **Auto-Reply** feature in EmailJS or creating a second template/job.
    *   **For this specific request**: If you want the *Main* email to go to the User:
        *   Set **To Email**: `{{to_email}}`
    *   If you want the Main email to go to YOU, but a copy to the user:
        *   Set **To Email**: `your@email.com`
        *   Set **BCC**: `{{to_email}}`

## 3. Verify Code Variables
The code sends these variables:
- `to_email`: The email entered by the user.
- `from_name`: The name entered by the user.
- `subject`: The subject entered by the user.
- `message`: The message entered by the user.

Ensure your template uses exactly these variable names (e.g. `{{to_email}}`).
