import { Resend } from 'resend';
import { z } from 'zod';
import { NextResponse } from 'next/server';

const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const applicationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(7, 'Phone number is required'),
  location: z.string().min(2, 'Current location is required'),
  position: z.string().min(1, 'Position is required'),
  immediateAvailability: z
    .string()
    .refine((v) => v === 'yes' || v === 'no', 'Availability is required'),
  preferredLocation: z.string().optional(),
  highestQualification: z.string().min(1, 'Highest qualification is required'),
  yearsOfExperience: z.string().min(1, 'Years of experience is required'),
  previousEmployer: z.string().optional(),
  keySkills: z.string().min(5, 'Key skills are required'),
  coverLetter: z.string().optional(),
  declaration: z.string().refine((v) => v === 'true', 'Declaration must be confirmed'),
  honeypot: z.string().max(0, 'Bot detected'),
});

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fields = {
      fullName: formData.get('fullName') ?? '',
      email: formData.get('email') ?? '',
      phone: formData.get('phone') ?? '',
      location: formData.get('location') ?? '',
      position: formData.get('position') ?? '',
      immediateAvailability: formData.get('immediateAvailability') ?? '',
      preferredLocation: formData.get('preferredLocation') ?? '',
      highestQualification: formData.get('highestQualification') ?? '',
      yearsOfExperience: formData.get('yearsOfExperience') ?? '',
      previousEmployer: formData.get('previousEmployer') ?? '',
      keySkills: formData.get('keySkills') ?? '',
      coverLetter: formData.get('coverLetter') ?? '',
      declaration: formData.get('declaration') ?? '',
      honeypot: formData.get('honeypot') ?? '',
    };

    const parsed = applicationSchema.safeParse(fields);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0].message },
        { status: 400 }
      );
    }

    const cvFile = formData.get('cv');

    if (!cvFile || typeof cvFile === 'string') {
      return NextResponse.json({ error: 'CV/Resume is required' }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(cvFile.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only PDF, DOC, and DOCX are accepted.' },
        { status: 400 }
      );
    }

    if (cvFile.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File size exceeds 5MB limit.' }, { status: 400 });
    }

    const cvBuffer = Buffer.from(await cvFile.arrayBuffer());

    const resend = new Resend(process.env.RESEND_API_KEY);

    const {
      fullName, email, phone, location, position, immediateAvailability,
      preferredLocation, highestQualification, yearsOfExperience,
      previousEmployer, keySkills, coverLetter,
    } = parsed.data;

    const availabilityLabel = immediateAvailability === 'yes' ? 'Yes' : 'No';

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; background: #f4f4f4; }
            .wrapper { max-width: 600px; margin: 30px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: #214f3c; padding: 24px 32px; }
            .header h1 { color: #fff; margin: 0; font-size: 20px; }
            .header p { color: #a8d5bb; margin: 4px 0 0; font-size: 14px; }
            .body { padding: 32px; }
            .section-title { font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #214f3c; margin: 24px 0 12px; border-bottom: 2px solid #214f3c; padding-bottom: 4px; }
            .field { margin-bottom: 14px; }
            .label { font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #888; margin-bottom: 4px; }
            .value { font-size: 15px; color: #222; }
            .skills { background: #f9f9f9; border-left: 3px solid #214f3c; padding: 16px; border-radius: 4px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
            .footer { background: #f4f4f4; padding: 16px 32px; font-size: 12px; color: #999; text-align: center; }
            .divider { border: none; border-top: 1px solid #eee; margin: 24px 0; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>New Job Application</h1>
              <p>Position: ${position}</p>
            </div>
            <div class="body">

              <div class="section-title">Section 1: Personal Information</div>
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${fullName}</div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color:#214f3c;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">Current Location</div>
                <div class="value">${location}</div>
              </div>

              <div class="section-title">Section 2: Job Details</div>
              <div class="field">
                <div class="label">Position Applied For</div>
                <div class="value">${position}</div>
              </div>
              <div class="field">
                <div class="label">Available to Resume Immediately</div>
                <div class="value">${availabilityLabel}</div>
              </div>
              ${preferredLocation ? `
              <div class="field">
                <div class="label">Preferred Work Location</div>
                <div class="value">${preferredLocation}</div>
              </div>
              ` : ''}

              <div class="section-title">Section 3: Experience &amp; Education</div>
              <div class="field">
                <div class="label">Highest Qualification</div>
                <div class="value">${highestQualification}</div>
              </div>
              <div class="field">
                <div class="label">Years of Work Experience</div>
                <div class="value">${yearsOfExperience}</div>
              </div>
              ${previousEmployer ? `
              <div class="field">
                <div class="label">Previous Employer / Current Workplace</div>
                <div class="value">${previousEmployer}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Key Skills</div>
                <div class="skills">${keySkills}</div>
              </div>

              ${coverLetter ? `
              <hr class="divider" />
              <div class="field">
                <div class="label">Cover Letter</div>
                <div class="skills">${coverLetter}</div>
              </div>
              ` : ''}

              <p style="font-size:13px;color:#666;margin-top:24px;">
                The applicant's CV is attached to this email. Reply directly to reach <strong>${fullName}</strong>.
              </p>
            </div>
            <div class="footer">
              Sent via TA Commodity Careers Portal &bull; <a href="https://tacommodity.com" style="color:#214f3c;">tacommodity.com</a>
            </div>
          </div>
        </body>
      </html>
    `;

    await resend.emails.send({
      from: 'TA Commodity Careers <noreply@tacommodity.com>',
      to: '"TA Commodity Careers" <info@tacommodity.com>',
      replyTo: `"${fullName}" <${email}>`,
      subject: `New Job Application - ${position}`,
      html: emailHtml,
      attachments: [
        {
          filename: cvFile.name,
          content: cvBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[/api/apply]', err);
    return NextResponse.json(
      { error: 'Failed to send application. Please try again later.' },
      { status: 500 }
    );
  }
}
