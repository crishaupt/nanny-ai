// Replit Mail integration for contact form
// Reference: blueprint:replitmail integration

async function sendContactForm(formData) {
    try {
        const response = await fetch('https://connectors.replit.com/api/v2/mailer/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X_REPLIT_TOKEN': getAuthToken()
            },
            body: JSON.stringify({
                to: 'tjackson0792@gmail.com',
                subject: `New AI Assessment Request from ${formData.company_name}`,
                text: `
New AI Readiness Assessment Request

Company Information:
- Company: ${formData.company_name}
- Industry: ${formData.industry}
- Company Size: ${formData.company_size}

Contact Information:
- Name: ${formData.contact_name}
- Email: ${formData.email}

Assessment Details:
- Main Challenge: ${formData.main_challenge}
- Current AI Experience: ${formData.ai_experience}
- Implementation Timeline: ${formData.timeline}

Newsletter Subscription: ${formData.newsletter ? 'Yes' : 'No'}

Submitted on: ${new Date().toLocaleString()}
                `,
                html: `
                    <h2>New AI Readiness Assessment Request</h2>
                    
                    <h3>Company Information:</h3>
                    <ul>
                        <li><strong>Company:</strong> ${formData.company_name}</li>
                        <li><strong>Industry:</strong> ${formData.industry}</li>
                        <li><strong>Company Size:</strong> ${formData.company_size}</li>
                    </ul>
                    
                    <h3>Contact Information:</h3>
                    <ul>
                        <li><strong>Name:</strong> ${formData.contact_name}</li>
                        <li><strong>Email:</strong> ${formData.email}</li>
                    </ul>
                    
                    <h3>Assessment Details:</h3>
                    <ul>
                        <li><strong>Main Challenge:</strong> ${formData.main_challenge}</li>
                        <li><strong>Current AI Experience:</strong> ${formData.ai_experience}</li>
                        <li><strong>Implementation Timeline:</strong> ${formData.timeline}</li>
                    </ul>
                    
                    <p><strong>Newsletter Subscription:</strong> ${formData.newsletter ? 'Yes' : 'No'}</p>
                    
                    <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
                `
            })
        });

        if (!response.ok) {
            throw new Error('Failed to send email');
        }

        return await response.json();
    } catch (error) {
        console.error('Email sending failed:', error);
        throw error;
    }
}

function getAuthToken() {
    const xReplitToken = process.env.REPL_IDENTITY
        ? "repl " + process.env.REPL_IDENTITY
        : process.env.WEB_REPL_RENEWAL
        ? "depl " + process.env.WEB_REPL_RENEWAL
        : null;

    if (!xReplitToken) {
        throw new Error("No authentication token found");
    }

    return xReplitToken;
}