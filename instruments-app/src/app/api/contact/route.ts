import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {

        const body = await req.json();

        const {
            name,
            email,
            phone,
            country,
            state,
            city,
            message,
        } = body;

        // SEND ENQUIRY TO COMPANY EMAILS
        await resend.emails.send({
            from: "Instruments & Controls <enquiry@instrumentsandcontrols.in>",

            to: [
                "modynassociates@gmail.com",
                "instrumentsncontrols@gmail.com",
                "info.instrumentsncontrol@gmail.com",
            ],

            replyTo: email,

            subject: `New Contact Enquiry from ${name}`,

            html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #f9fafb; border-radius: 12px; border: 1px solid #e5e7eb;">
          <h2 style="color: #111827; font-size: 24px; font-weight: 700; margin-bottom: 24px; border-bottom: 2px solid #3b82f6; padding-bottom: 12px;">
            New Business Enquiry
          </h2>

          <div style="background-color: #ffffff; padding: 24px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 16px;">
              <span style="color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Customer Details</span>
            </div>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #4b5563; font-weight: 600; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #4b5563; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0; color: #111827;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #4b5563; font-weight: 600;">Phone:</td>
                <td style="padding: 8px 0; color: #111827;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #4b5563; font-weight: 600;">Location:</td>
                <td style="padding: 8px 0; color: #111827;">${city}, ${state}, ${country}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #f3f4f6;">
              <span style="color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Message</span>
              <p style="color: #1f2937; line-height: 1.6; margin-top: 12px; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <p style="font-size: 12px; color: #9ca3af; text-align: center; margin-top: 32px;">
            Submitted on ${new Date().toLocaleString()} via Instruments & Controls Website
          </p>
        </div>
      `,
        });

        // AUTO REPLY TO USER
        await resend.emails.send({
            from: "Instruments & Controls <enquiry@instrumentsandcontrols.in>",

            to: email,

            subject: "Thank You For Contacting Us",

            html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; color: #374151;">
          <h2 style="color: #111827; font-size: 24px; font-weight: 700; margin-bottom: 24px;">
            Thank You for Reaching Out!
          </h2>

          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Dear <strong>${name}</strong>,
          </p>

          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            We have successfully received your enquiry. Our engineering team is currently reviewing your message and will get back to you as soon as possible.
          </p>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 30px 0;">
            <p style="margin: 0; font-size: 14px; color: #4b5563;">
              <strong>Summary of your request:</strong><br/>
              "${message.length > 100 ? message.substring(0, 100) + '...' : message}"
            </p>
          </div>

          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 8px;">
            Best Regards,
          </p>
          <p style="font-size: 18px; font-weight: 700; color: #3b82f6; margin: 0;">
            Instruments & Controls Team
          </p>
        </div>
      `,
        });

        return Response.json({
            success: true,
            message: "Email sent successfully",
        });

    } catch (error: any) {

        console.error("Resend API Error:", error);

        return Response.json(
            {
                success: false,
                message: error.message || "Something went wrong",
            },
            {
                status: 500,
            }
        );
    }
}