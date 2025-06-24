// services/cvService.ts
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface CVData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    aboutMe: string;
    dateOfBirth: string;
    maritalStatus: string;
    nationality: string;
    gender: string;
  };
  education: Array<{
    institution: string;
    qualification: string;
    year: string;
  }>;
  experience: Array<{
    position: string;
    company: string;
    duration: string;
  }>;
  skills: string[];
  references: Array<{
    name: string;
    position: string;
    contact: string;
  }>;
  profileImage?: string;
}

interface GeneratedCV {
  downloadUrl: string;
  cvId: string;
  fileName: string;
}

export const generateCV = async (cvData: CVData): Promise<GeneratedCV> => {
  try {
    // Create a temporary div to render the CV
    const cvElement = createCVElement(cvData);
    document.body.appendChild(cvElement);

    // Convert to canvas
    const canvas = await html2canvas(cvElement, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: 794, // A4 width in pixels at 96 DPI
      height: 1123, // A4 height in pixels at 96 DPI
    });

    // Remove temporary element
    document.body.removeChild(cvElement);

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);

    // Convert PDF to blob
    const pdfBlob = pdf.output('blob');
    
    // Generate unique filename
    const fileName = `cv_${cvData.personalInfo.fullName.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}.pdf`;
    
    // Create URL for download
    const downloadUrl = URL.createObjectURL(pdfBlob);

    return {
      downloadUrl,
      cvId: fileName,
      fileName: fileName
    };

  } catch (error) {
    console.error('Error generating CV:', error);
    throw new Error('Failed to generate CV');
  }
};

const createCVElement = (cvData: CVData): HTMLElement => {
  const cvElement = document.createElement('div');
  cvElement.style.width = '794px';
  cvElement.style.height = '1123px';
  cvElement.style.backgroundColor = '#ffffff';
  cvElement.style.fontFamily = 'Arial, sans-serif';
  cvElement.style.position = 'absolute';
  cvElement.style.left = '-9999px';
  cvElement.style.top = '0';

  cvElement.innerHTML = `
    <div style="height: 100%; display: flex; flex-direction: column;">
      <!-- Header Section -->
      <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 30px; display: flex; align-items: center; gap: 25px;">
        ${cvData.profileImage ? `
          <div style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden; background: white; flex-shrink: 0; border: 4px solid rgba(255,255,255,0.3);">
            <img src="${cvData.profileImage}" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
        ` : ''}
        <div style="flex: 1;">
          <h1 style="margin: 0; font-size: 36px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">
            ${cvData.personalInfo.fullName}
          </h1>
          <div style="margin-top: 15px; font-size: 16px; opacity: 0.9; line-height: 1.6;">
            ${cvData.personalInfo.email ? `<div style="margin-bottom: 5px;">📧 ${cvData.personalInfo.email}</div>` : ''}
            ${cvData.personalInfo.phone ? `<div style="margin-bottom: 5px;">📱 ${cvData.personalInfo.phone}</div>` : ''}
            ${cvData.personalInfo.address ? `<div>📍 ${cvData.personalInfo.address}</div>` : ''}
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div style="flex: 1; display: flex;">
        <!-- Left Column -->
        <div style="width: 35%; background: #f8fafc; padding: 30px; border-right: 3px solid #e2e8f0;">
          <!-- Personal Details -->
          <div style="margin-bottom: 30px;">
            <h2 style="color: #2563eb; font-size: 18px; font-weight: bold; margin: 0 0 15px 0; text-transform: uppercase; border-bottom: 2px solid #2563eb; padding-bottom: 5px;">
              Personal Details
            </h2>
            <div style="font-size: 14px; line-height: 1.8;">
              ${cvData.personalInfo.dateOfBirth ? `<div style="margin-bottom: 8px;"><strong>Date of Birth:</strong> ${cvData.personalInfo.dateOfBirth}</div>` : ''}
              ${cvData.personalInfo.maritalStatus ? `<div style="margin-bottom: 8px;"><strong>Marital Status:</strong> ${cvData.personalInfo.maritalStatus}</div>` : ''}
              ${cvData.personalInfo.nationality ? `<div style="margin-bottom: 8px;"><strong>Nationality:</strong> ${cvData.personalInfo.nationality}</div>` : ''}
              ${cvData.personalInfo.gender ? `<div><strong>Gender:</strong> ${cvData.personalInfo.gender}</div>` : ''}
            </div>
          </div>

          <!-- Skills -->
          ${cvData.skills.filter(skill => skill.trim()).length > 0 ? `
            <div style="margin-bottom: 30px;">
              <h2 style="color: #2563eb; font-size: 18px; font-weight: bold; margin: 0 0 15px 0; text-transform: uppercase; border-bottom: 2px solid #2563eb; padding-bottom: 5px;">
                Skills
              </h2>
              <div style="font-size: 14px;">
                ${cvData.skills.filter(skill => skill.trim()).map(skill => `
                  <div style="margin-bottom: 8px; padding: 8px 12px; background: white; border-radius: 5px; border-left: 3px solid #2563eb;">
                    ${skill}
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- References -->
          ${cvData.references.filter(ref => ref.name || ref.position || ref.contact).length > 0 ? `
            <div>
              <h2 style="color: #2563eb; font-size: 18px; font-weight: bold; margin: 0 0 15px 0; text-transform: uppercase; border-bottom: 2px solid #2563eb; padding-bottom: 5px;">
                References
              </h2>
              <div style="font-size: 13px;">
                ${cvData.references.filter(ref => ref.name || ref.position || ref.contact).map(ref => `
                  <div style="margin-bottom: 15px; padding: 12px; background: white; border-radius: 5px;">
                    ${ref.name ? `<div style="font-weight: bold; color: #1e40af; margin-bottom: 3px;">${ref.name}</div>` : ''}
                    ${ref.position ? `<div style="margin-bottom: 3px;">${ref.position}</div>` : ''}
                    ${ref.contact ? `<div style="color: #64748b;">${ref.contact}</div>` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Right Column -->
        <div style="width: 65%; padding: 30px;">
          <!-- About Me -->
          ${cvData.personalInfo.aboutMe ? `
            <div style="margin-bottom: 30px;">
              <h2 style="color: #2563eb; font-size: 20px; font-weight: bold; margin: 0 0 15px 0; text-transform: uppercase; border-bottom: 2px solid #2563eb; padding-bottom: 5px;">
                About Me
              </h2>
              <p style="font-size: 14px; line-height: 1.8; color: #374151; margin: 0;">
                ${cvData.personalInfo.aboutMe}
              </p>
            </div>
          ` : ''}

          <!-- Education -->
          ${cvData.education.filter(edu => edu.institution || edu.qualification).length > 0 ? `
            <div style="margin-bottom: 30px;">
              <h2 style="color: #2563eb; font-size: 20px; font-weight: bold; margin: 0 0 15px 0; text-transform: uppercase; border-bottom: 2px solid #2563eb; padding-bottom: 5px;">
                Education
              </h2>
              <div>
                ${cvData.education.filter(edu => edu.institution || edu.qualification).map(edu => `
                  <div style="margin-bottom: 20px; padding-left: 20px; border-left: 3px solid #2563eb; position: relative;">
                    <div style="position: absolute; left: -7px; top: 0; width: 12px; height: 12px; background: #2563eb; border-radius: 50%;"></div>
                    ${edu.institution ? `<div style="font-weight: bold; font-size: 16px; color: #1e40af; margin-bottom: 5px;">${edu.institution}</div>` : ''}
                    ${edu.qualification ? `<div style="font-size: 14px; color: #374151; margin-bottom: 3px;">${edu.qualification}</div>` : ''}
                    ${edu.year ? `<div style="font-size: 13px; color: #64748b; font-style: italic;">${edu.year}</div>` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Experience -->
          ${cvData.experience.filter(exp => exp.position || exp.company).length > 0 ? `
            <div>
              <h2 style="color: #2563eb; font-size: 20px; font-weight: bold; margin: 0 0 15px 0; text-transform: uppercase; border-bottom: 2px solid #2563eb; padding-bottom: 5px;">
                Experience
              </h2>
              <div>
                ${cvData.experience.filter(exp => exp.position || exp.company).map(exp => `
                  <div style="margin-bottom: 20px; padding-left: 20px; border-left: 3px solid #2563eb; position: relative;">
                    <div style="position: absolute; left: -7px; top: 0; width: 12px; height: 12px; background: #2563eb; border-radius: 50%;"></div>
                    ${exp.position ? `<div style="font-weight: bold; font-size: 16px; color: #1e40af; margin-bottom: 5px;">${exp.position}</div>` : ''}
                    ${exp.company ? `<div style="font-size: 14px; color: #374151; margin-bottom: 3px;">${exp.company}</div>` : ''}
                    ${exp.duration ? `<div style="font-size: 13px; color: #64748b; font-style: italic;">${exp.duration}</div>` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  return cvElement;
};

export const saveCVToUserProfile = async (userId: string, cvData: GeneratedCV): Promise<void> => {
  try {
    // This would normally save to a database
    // For now, we'll just log it
    console.log('Saving CV to user profile:', { userId, cvData });
  } catch (error) {
    console.error('Error saving CV to user profile:', error);
  }
};

