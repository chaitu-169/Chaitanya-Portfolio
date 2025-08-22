import { EmailTemplate } from '../../../components/email-template.jsx';
import { EmailTemplate2 } from '../../../components/email-template.jsx';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const json = await req.json();
    const { name, email, message } = json;
    try {
        const data = await resend.batch.send([{
            from: `${name} <onboarding@resend.dev>`,
            to: ['sriramchaitu383@gmail.com'],
            reply_to: [`${email}`],
            subject: `New message from ${name}`,
            react: EmailTemplate({ messageData: message, name: name, email: email }),
        },
        {
            from: `Sriram Chaitanya <sriramchaitu383@gmail.com>`,
            to: [`${email}`],
            subject: `Reply from Sriram Chaitanya`,
            react: EmailTemplate2({ name: name}),
        }]
        );

        return Response.json(data);
    } catch (error) {
        return Response.json({ error: error.message });
    }
}
