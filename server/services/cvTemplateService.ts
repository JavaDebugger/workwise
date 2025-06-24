// server/services/cvTemplateService.ts
import PDFDocument from 'pdfkit';

interface CVData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  professionalSummary: string;
  experience: Array<{
    jobTitle: string;
    employer: string;
    location?: string;
    startDate: string;
    endDate?: string;
    isCurrentJob: boolean;
    description: string;
  }>;
  education: Array<{
    degree: string;
    school: string;
    location?: string;
    graduationDate: string;
  }>;
  skills: string[];
  languages?: Array<{
    language: string;
    proficiency: string;
  }>;
  references?: Array<{
    name: string;
    position: string;
    company: string;
    email: string;
    phone: string;
  }>;
}

export async function generateCVPDF(data: CVData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        margins: { top: 50, bottom: 50, left: 72, right: 72 },
        size: 'A4',
      });

      const buffers: Buffer[] = [];
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => resolve(Buffer.concat(buffers)));

      // Header with personal info
      doc.fontSize(24).font('Helvetica-Bold').text(data.personalInfo.fullName, { align: 'center' });
      doc.moveDown(0.5);
      doc.fontSize(10).font('Helvetica').text([
        data.personalInfo.email,
        data.personalInfo.phone,
        data.personalInfo.address
      ].join(' | '), { align: 'center' });
      doc.moveDown();

      // Professional Summary
      doc.fontSize(14).font('Helvetica-Bold').text('Professional Summary');
      doc.moveDown(0.5);
      doc.fontSize(10).font('Helvetica').text(data.professionalSummary);
      doc.moveDown();

      // Work Experience
      doc.fontSize(14).font('Helvetica-Bold').text('Work Experience');
      doc.moveDown(0.5);
      data.experience.forEach(exp => {
        doc.fontSize(12).font('Helvetica-Bold').text(exp.jobTitle);
        doc.fontSize(10).font('Helvetica').text(`${exp.employer}${exp.location ? `, ${exp.location}` : ''}`);
        doc.fontSize(10).font('Helvetica-Oblique')
          .text(`${exp.startDate} - ${exp.isCurrentJob ? 'Present' : exp.endDate}`);
        doc.fontSize(10).font('Helvetica').text(exp.description);
        doc.moveDown();
      });

      // Education
      doc.fontSize(14).font('Helvetica-Bold').text('Education');
      doc.moveDown(0.5);
      data.education.forEach(edu => {
        doc.fontSize(12).font('Helvetica-Bold').text(edu.degree);
        doc.fontSize(10).font('Helvetica').text(`${edu.school}${edu.location ? `, ${edu.location}` : ''}`);
        doc.fontSize(10).font('Helvetica-Oblique').text(edu.graduationDate);
        doc.moveDown();
      });

      // Skills
      doc.fontSize(14).font('Helvetica-Bold').text('Skills');
      doc.moveDown(0.5);
      doc.fontSize(10).font('Helvetica').text(data.skills.join(', '));
      doc.moveDown();

      // Languages (if any)
      if (data.languages && data.languages.length > 0) {
        doc.fontSize(14).font('Helvetica-Bold').text('Languages');
        doc.moveDown(0.5);
        data.languages.forEach(lang => {
          doc.fontSize(10).font('Helvetica')
            .text(`${lang.language} - ${lang.proficiency}`);
        });
        doc.moveDown();
      }

      // References (if any)
      if (data.references && data.references.length > 0) {
        doc.fontSize(14).font('Helvetica-Bold').text('References');
        doc.moveDown(0.5);
        data.references.forEach(ref => {
          doc.fontSize(10).font('Helvetica-Bold').text(ref.name);
          doc.fontSize(10).font('Helvetica')
            .text(`${ref.position}, ${ref.company}`);
          doc.fontSize(10).font('Helvetica')
            .text(`${ref.email} | ${ref.phone}`);
          doc.moveDown();
        });
      }

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}
