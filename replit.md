# Nanny-AI Website

## Overview
Nanny-AI is an **AI Mentor** (not a copilot) designed to provide proactive coaching, contextual guidance, and strategic insights for routine work, while ensuring decisions and actions remain under user control. The platform aims to help businesses grow through personalized recommendations, real-time feedback, and skill-building support, emphasizing approvals, transparency, and continuous learning. It focuses on improving productivity, building expertise, and fostering professional development across communication, meetings, research, workflow, data analysis, and learning activities, all while maintaining human control and accountability.

## User Preferences
Preferred communication style: Simple, everyday language.
Email submissions: tjackson0792@gmail.com (configured via Replit Mail integration)
Business location: Chicago, IL

## System Architecture

### Core Product Positioning
Nanny-AI is positioned as an **AI Mentor**, **Personalized AI Guide**, or **Intelligent Business Orchestrator**. This emphasizes proactive, contextual training, goal-focused coaching, real-time feedback, and integration with organizational standards. The core approach is "Mentor, Guide, Teach," where AI provides coaching, users review recommendations transparently, and users build expertise through clear explanations.

### Four Core Principles
1.  **Human in Control**: User retains accountability with approvals and undo options.
2.  **Mentor, Don't Replace**: AI coaches, while users develop expertise and strategic thinking.
3.  **Transparent & Explainable**: All outputs show sources, reasoning, trade-offs, and limitations.
4.  **Responsible by Design**: Built-in guardrails for privacy, fairness, and harm prevention.

### Frontend Architecture
-   **Static Website**: Multi-page HTML with traditional navigation.
-   **Responsive Design**: Mobile-first using CSS Grid and Flexbox.
-   **Typography**: Inter font family (300-700 weights).
-   **Visual Design**: Clean, modern light theme with blue accent (#3182ce).
-   **Icons**: Font Awesome 6.4.0.

### Page Structure and Content Strategy
-   **Homepage (`index.html`)**: Introduces "AI Mentor," core principles, capabilities overview, "Mentor, Guide, Teach" process, and guardrails.
-   **Services Page (`services.html`)**: "Mentoring Capabilities" covering Communication, Meetings, Research, Task & Workflow, Data & Analysis, and Learning & Coaching, all emphasizing skill development.
-   **Use Cases Page (`use-cases.html`)**: Real-world examples demonstrating the "propose, preview, explain" workflow.
-   **About Page (`about.html`)**: Explains "Mentor, Guide, Teach" methodology, core principles, what Nanny-AI doesn't automate, success measures, and the "Why Nanny-AI" philosophy.
-   **Resources Page (`resources.html`)**: Free downloads (AI Readiness Checklist, ROI Calculator, Implementation Mistakes Guide), educational content, and case studies.
-   **Contact Page (`contact.html`)**: Contact form integrated with Replit Mail, displaying business location (Chicago, IL).
-   **Industries Page (`industries.html`)**: Shows industry-specific applications.

### Styling and Visual Design
-   **Color Scheme**: Light theme with primary blue accent (#3182ce) and various neutrals.
-   **Animation System**: CSS fade-in and slide-up for progressive enhancement.
-   **Component-Based CSS**: Modular classes (e.g., `.card`, `.grid-N`, `.section-header`).
-   **Mobile Responsive**: Hamburger menu and adaptive layouts.

### Content Strategy
The strategy evolved from AI consulting to a human-centered AI platform, now focusing on an AI Mentor platform. The emphasis is on mentoring, learning, growth, control, and transparency, differentiating from generic "copilot" tools by highlighting proactive coaching and strategic guidance.

### Key Messaging Points
-   **What Nanny-AI Does**: Proposes context-based assistance, provides editable previews, explains reasoning, maintains human approval, tracks progress, and enables rollback.
-   **What Nanny-AI Does NOT Do**: Automate high-stakes decisions, replace human judgment, execute in ambiguous situations, auto-send messages, or make decisions without user approval.
-   **Success Metrics**: Time saved, quality gains, increased confidence-in-control, adoption of coaching features, skill development, and reduced errors.

### Design System
-   **Colors**: Primary blue (#3182ce), various grays, and accent colors for success, warning, and error states.
-   **Grid System**: `.grid-1` to `.grid-4` for responsive column layouts.
-   **Component Classes**: Standardized styling for `.card`, `.card-icon`, `.section-header`, `.hero`, `.feature-list`, and `.btn` elements.
-   **Animation Classes**: `.fade-in`, `.slide-up`, `.visible` for visual effects.

## External Dependencies

### Third-Party Services
-   **Google Fonts**: Inter font family.
-   **Font Awesome CDN**: Version 6.4.0 for icons.
-   **jQuery**: Version 3.6.0 for animations and interactions.
-   **Replit Mail**: Email integration for contact forms, sending to tjackson0792@gmail.com.

### Form Processing
-   **Replit Mail Integration**: Handles contact form submissions.
-   **`replitmail.js`**: Custom script for email delivery.

### Performance Considerations
-   **CDN Usage**: External resources loaded from CDNs.
-   **Minimal Dependencies**: Lightweight approach for fast loading.
-   **Static HTML**: Optimized for performance.