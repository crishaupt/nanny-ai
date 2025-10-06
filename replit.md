# Nanny-AI Website

## Overview
Nanny-AI is an **Intelligent Business Orchestrator** designed to humanize AI by coordinating tasks, people, and information seamlessly across everyday work—while ensuring decisions and actions remain under user control. The platform helps businesses grow through automatic coordination, simple language interfaces, and transparent guidance that anyone can use regardless of technical background. It focuses on improving productivity through intelligent orchestration across communication, meetings, research, workflow, data analysis, and continuous improvement, all while maintaining human control and accountability.

## User Preferences
Preferred communication style: Simple, everyday language.
Email submissions: tjackson0792@gmail.com (configured via Replit Mail integration)
Business location: Chicago, IL

## System Architecture

### Core Product Positioning
Nanny-AI is positioned as an **Intelligent Business Orchestrator** that humanizes AI for everyday users. This emphasizes automatic coordination of tasks/people/information, simple language interfaces without technical jargon, and transparent control that empowers non-technical users. The core approach is "Coordinate, Simplify, Empower," where AI orchestrates work behind the scenes, translates complexity into plain language, and users maintain full control through transparent, easy-to-understand options.

### Four Core Principles
1.  **Human in Control**: User retains accountability with approvals and undo options.
2.  **Orchestrate, Don't Replace**: AI coordinates work behind the scenes while users focus on judgment and strategic decisions.
3.  **Transparent & Explainable**: All outputs show sources, reasoning, trade-offs, and limitations in simple language.
4.  **Responsible by Design**: Built-in guardrails for privacy, fairness, and harm prevention.

### Frontend Architecture
-   **Static Website**: Multi-page HTML with traditional navigation.
-   **Responsive Design**: Mobile-first using CSS Grid and Flexbox.
-   **Typography**: Inter font family (300-700 weights).
-   **Visual Design**: Clean, modern light theme with blue accent (#3182ce).
-   **Icons**: Font Awesome 6.4.0.

### Page Structure and Content Strategy
-   **Homepage (`index.html`)**: Introduces "Intelligent Business Orchestrator," core principles, capabilities overview, "Coordinate, Simplify, Empower" process, and guardrails.
-   **Services Page (`services.html`)**: "Intelligent Orchestration Capabilities" covering Communication, Meetings, Research, Task & Workflow, Data & Analysis, and Continuous Improvement, all emphasizing human-friendly coordination.
-   **Use Cases Page (`use-cases.html`)**: Real-world examples demonstrating the "Coordinate, Simplify, Empower" workflow.
-   **About Page (`about.html`)**: Explains "Coordinate, Simplify, Empower" methodology, core principles, what Nanny-AI doesn't automate, success measures, and orchestration philosophy.
-   **Resources Page (`resources.html`)**: Free downloads (AI Readiness Checklist, ROI Calculator, Implementation Mistakes Guide), educational content, and case studies.
-   **Contact Page (`contact.html`)**: Contact form integrated with Replit Mail, displaying business location (Chicago, IL).
-   **Industries Page (`industries.html`)**: Shows industry-specific applications.

### Styling and Visual Design
-   **Color Scheme**: Light theme with primary blue accent (#3182ce) and various neutrals.
-   **Animation System**: CSS fade-in and slide-up for progressive enhancement.
-   **Component-Based CSS**: Modular classes (e.g., `.card`, `.grid-N`, `.section-header`).
-   **Mobile Responsive**: Hamburger menu and adaptive layouts.

### Content Strategy
The strategy evolved from AI consulting to a human-centered AI platform, now focusing on an Intelligent Business Orchestrator. The emphasis is on humanizing AI for everyday users, automatic coordination, simple language, control, and transparency, differentiating from generic "copilot" tools by highlighting intelligent orchestration that anyone can use without technical expertise.

### Key Messaging Points
-   **What Nanny-AI Does**: Automatically coordinates tasks/people/information, provides simple language interfaces, shows transparent previews, maintains human approval, and enables easy rollback.
-   **What Nanny-AI Does NOT Do**: Automate high-stakes decisions, replace human judgment, execute in ambiguous situations, auto-send messages, or make decisions without user approval.
-   **Success Metrics**: Time saved through coordination, ease of use for non-technical users, increased confidence-in-control, adoption of orchestration features, and reduced errors.

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