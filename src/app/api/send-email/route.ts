import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)


console.log("api key",process.env.RESEND_API_KEY)
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
from: 'Contact <hello@badrghanbi.com>',   
   to:   process.env.YOUR_EMAIL!,
      replyTo: email,                                    // reply goes directly to the sender
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; padding: 32px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="margin: 0 0 24px; font-size: 20px; color: #111;">New portfolio message</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #888; width: 80px;">From</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #888;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #111;">
                <a href="mailto:${email}" style="color: #0070f3;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 14px 0 0; font-size: 13px; color: #888; vertical-align: top;">Message</td>
              <td style="padding: 14px 0 0; font-size: 14px; color: #111; line-height: 1.7;">
                ${message.replace(/\n/g, '<br/>')}
              </td>
            </tr>
          </table>

          <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #f0f0f0;">
            <a href="mailto:${email}" style="display: inline-block; background: #111; color: #fff; font-size: 13px; padding: 10px 20px; border-radius: 6px; text-decoration: none;">
              Reply to ${name}
            </a>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ message: error.message }, { status: 500 })
    }

    return NextResponse.json({ message: 'success' })

  } catch (err) {
    console.error('Send email error:', err)
    return NextResponse.json(
      { message: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}