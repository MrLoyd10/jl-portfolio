<?php

namespace App\Data;

class Projects
{
  /**
   * Returns the full list of projects.
   *
   * Summary fields   → used by the homepage (FeaturedProjects section)
   * caseStudy fields → only passed to the detail page via ProjectController
   */
  public static function all(): array
  {
    /*
    * productionUsage
    * projectOutcome
    */

    return [
      // ! #1
      [
        'slug'       => 'project-atlas',
        'title'      => 'Project: Atlas',
        'systemType' => 'Industrial Control System',
        'highlight'  => 'A centralized dashboard that consolidates multiple servers and device types into one real-time view',
        'description' => 'An industrial monitoring and control platform built for ThinkWeMake that unifies lighting systems, CCTV, temperature sensors, and other equipment across multiple facilities into a single real-time dashboard — with both cloud-hosted and on-premise deployment support.',
        'technologies' => ['Inertia.js', 'React', 'Laravel', 'MySQL', 'WebSockets', 'Tailwind CSS', 'Shadcn UI'],
        'image'      => '/images/projects/atlas/main-page.png',
        'liveUrl'    => 'https://atlas.thinkwemake.vip/',
        'githubUrl'  => null,
        'category'   => 'Freelance Project',
        'status'     => 'In Production',
        'caseStudy'  => [
          'introduction' => [
            'Project Atlas is the primary industrial monitoring and control platform developed for ThinkWeMake. It was built to help industrial businesses modernize how they monitor, manage, and control their devices through a centralized web-based application.',
            'The platform supports both cloud-hosted and on-premise deployments, giving organizations the flexibility to choose the infrastructure model that best fits their operational and security requirements. It is actively being used by production clients in real-world industrial environments.',
          ],
          'challenge' => [
            'intro' => 'Many industrial facilities operate multiple devices across different locations — lighting systems, temperature sensors, switches, CCTV, and environmental monitoring equipment. Managing each system independently led to operational inefficiencies and limited cross-facility visibility.',
            'points' => [
              'Monitor devices in real time across multiple facilities',
              'Control devices remotely from a single interface',
              'Support multiple independent server deployments per client',
              'Provide centralized visibility regardless of infrastructure type',
              'Accommodate different device types with varying communication protocols',
            ],
          ],
          'solution' => [
            'Atlas was designed as a centralized management platform that aggregates multiple server deployments into a single dashboard. A client may operate several local servers, each connected to a different set of devices — instead of logging into each one separately, all servers can be connected into Atlas and managed from one place.',
            'For example, if a client runs three separate local servers — each housing its own collection of industrial devices — Atlas consolidates all device data into a single interface. This dramatically simplifies monitoring while giving operators a clearer picture of what is happening across the entire facility.',
            'The system was also built to scale alongside client requirements. New devices can be registered and integrated without requiring architectural changes, making Atlas practical for both small facilities and large multi-site operations.',
          ],
          'techStack' => [
            ['label' => 'Frontend',      'items' => ['Inertia.js', 'React', 'Tailwind CSS', 'Shadcn UI']],
            ['label' => 'Backend',        'items' => ['PHP', 'Laravel']],
            ['label' => 'Database',       'items' => ['MySQL']],
            ['label' => 'Communication',  'items' => ['REST API', 'WebSockets']],
          ],
          'keyFeatures' => [
            'Real-time device monitoring',
            'Remote device control',
            'Multi-server management from one dashboard',
            'User roles and permissions',
            'Cloud and on-premise deployment support',
          ],
          'role' => [
            'I was responsible for the complete software development and architecture of Project Atlas — covering frontend development, backend development, database design, system architecture, API design, and UI/UX planning.',
            'I also worked directly with the hardware deployment team to ensure reliable communication between the platform and the industrial devices installed across client environments.',
          ],
          'technicalChallenges' => [
            'The most complex aspect of the project was device integration. Industrial environments contain hardware with vastly different communication requirements, data structures, and control mechanisms — each new device type required dedicated application logic and close coordination with the hardware team.',
            'To address this, Atlas was built with a flexible integration architecture that supports multiple device types while keeping the user experience consistent. This approach allows the platform to adapt to new hardware and evolving client requirements without breaking what is already in production.',
          ],
          'screenshots' => [
            ['url' => '/images/projects/atlas/main-page.png', 'caption' => 'Main Page'],
            ['url' => '/images/projects/atlas/login.png', 'caption' => 'Login'],
            ['url' => '/images/projects/atlas/dashboard.png', 'caption' => 'Dashboard'],
            ['url' => '/images/projects/atlas/display-panels.png', 'caption' => 'Display Panels'],
            ['url' => '/images/projects/atlas/cctv.png', 'caption' => 'Cctv'],
            ['url' => '/images/projects/atlas/manage-devices.png', 'caption' => 'Manage Devices'],
            ['url' => '/images/projects/atlas/grouped-controls.png', 'caption' => 'Grouped Controls'],
            ['url' => '/images/projects/atlas/activity-logs.png', 'caption' => 'Activity Logs'],
            ['url' => '/images/projects/atlas/user-access.png', 'caption' => 'User Access'],
            ['url' => '/images/projects/atlas/role-permission.png', 'caption' => 'Role Permission'],
          ],
        ],
      ],
      // ! #2
      [
        'slug'        => 'document-stamp-management-system',
        'title'       => 'Document Stamp Management System',
        'systemType'  => 'Document Processing Platform',
        'highlight'   => 'A multi-tenant platform that digitizes document stamp requests, payments, and remittance workflows for multiple organizations in one system',
        'description' => 'A multi-tenant document stamp management platform that allows organizations to onboard as independent partners, manage customer requests, collect payments via ESkywardPay, and handle BIR remittance reporting — all within a single centralized system with organization-specific branding and dashboards.',
        'technologies' => ['Inertia.js', 'React', 'Laravel', 'MySQL', 'Tailwind CSS', 'Shadcn UI', 'ESkywardPay'],
        'image'       => '/images/projects/docstamp/login.png',
        'liveUrl'     => 'https://develop-docstamp.fessi.com.ph/',
        'githubUrl'   => null,
        'category'    => 'Professional Project',
        'status'      => 'Production Ready',
        'caseStudy'   => [
          'introduction' => [
            'The Document Stamp Management System was developed to modernize the process of requesting and managing document stamps. Traditionally, obtaining a document stamp requires manual processing and coordination with government offices. This platform digitizes the workflow by allowing customers to submit requests, complete payments online, and track the processing of their document stamp requirements through a centralized system.',
            'Beyond customer-facing functionality, the platform supports organizations that issue document stamps on behalf of their customers. Through a multi-tenant architecture, multiple organizations can operate within the same system while maintaining separate branding, reporting, transactions, and operational data — resulting in a scalable platform that simplifies document stamp processing while improving financial tracking and remittance management.',
          ],
          'challenge' => [
            'intro' => 'The document stamp process involves more than simply collecting customer information and payments. Different document types may belong to different tax classifications and BIR forms, each with its own rules, calculations, reporting requirements, and remittance procedures. Organizations issuing document stamps often also have unique business requirements, supported document types, and operational workflows.',
            'points' => [
              'Digitize a traditionally manual document stamp process',
              'Support multiple organizations within a single platform',
              'Manage customer requests and online payments',
              'Track collections and remittances per organization',
              'Handle different document stamp classifications and BIR forms',
              'Adapt to regulatory and business rule changes over time',
            ],
          ],
          'solution' => [
            'The platform was designed as a multi-tenant document stamp management system where organizations can onboard as independent partners or resellers. Each organization receives its own branded request portal, dashboard, reporting environment, and transaction records.',
            'Customers submit document stamp requests through the portal assigned to a specific organization. During the request process, users provide the required information and complete payment through ESkywardPay. Once payment is successfully processed, the system records the transaction, associates it with the correct organization, and prepares the required data for remittance tracking and reporting.',
            'The platform automatically manages ownership of transactions, ensuring collections, reports, and remittance records remain properly assigned to the appropriate organization — regardless of how many organizations are operating within the same system.',
          ],
          'techStack' => [
            ['label' => 'Frontend',         'items' => ['Inertia.js', 'React', 'Tailwind CSS', 'Shadcn UI']],
            ['label' => 'Backend',           'items' => ['PHP', 'Laravel']],
            ['label' => 'Database',          'items' => ['MySQL']],
            ['label' => 'Payment',           'items' => ['ESkywardPay']],
          ],
          'keyFeatures' => [
            'Online document stamp requests',
            'Multi-tenant architecture',
            'Organization-specific branding and dashboards',
            'Payment collection and verification via ESkywardPay',
            'Transaction ownership tracking',
            'BIR remittance reporting',
            'Organization-specific reporting',
            'Role-based access management',
            'Dynamic document stamp configuration',
          ],
          'role' => [
            'I served as Lead Developer for the project and was responsible for the complete software implementation — covering frontend development, backend development, database design, API development, software architecture design, and business logic implementation.',
            'While I handled the full technical implementation, I worked closely with subject matter experts who provided guidance on document stamp regulations, remittance requirements, and operational workflows. I also collaborated with the UI/UX team to translate business requirements into a user-friendly platform.',
          ],
          'technicalChallenges' => [
            'The most complex aspect of the project was implementing the calculation and processing logic for document stamps. Document stamp types can vary significantly depending on the tax code, classification, and regulatory requirements associated with each document — and different organizations may support different sets of document stamp types, resulting in varying computation rules and processing requirements. Building static calculations into the system would have made future updates difficult, so the platform was designed with a flexible and configurable computation model that allows document stamp rules to evolve without requiring major architectural changes.',
            'Another significant challenge was ensuring that payments, transaction ownership, remittance records, and reporting remained consistent across multiple organizations operating within the same platform. Careful attention was given to data isolation and financial tracking to ensure each organization only has access to its own records and operational data.',
          ],
          'screenshots' => [
            ['url' => '/images/projects/docstamp/public-form-unfilled.png', 'caption' => 'Public Form Unfilled'],
            ['url' => '/images/projects/docstamp/document-selection-form.png', 'caption' => 'Document Selection Form'],
            ['url' => '/images/projects/docstamp/public-form-filled.png', 'caption' => 'Public Form Filled'],
            ['url' => '/images/projects/docstamp/otp-form.png', 'caption' => 'Otp Form'],
            ['url' => '/images/projects/docstamp/otp-email.png', 'caption' => 'Otp Email'],
            ['url' => '/images/projects/docstamp/payment-link-email.png', 'caption' => 'Payment Link Email'],
            ['url' => '/images/projects/docstamp/payment-confirmation-email.png', 'caption' => 'Payment Confirmation Email'],
            ['url' => '/images/projects/docstamp/thank-you-page.png', 'caption' => 'Thank You Page'],
            ['url' => '/images/projects/docstamp/login.png', 'caption' => 'Login'],
            ['url' => '/images/projects/docstamp/analytics.png', 'caption' => 'Analytics'],
            ['url' => '/images/projects/docstamp/generation-errors.png', 'caption' => 'Generation Errors'],
            ['url' => '/images/projects/docstamp/bir-remittance.png', 'caption' => 'Bir Remittance'],
            ['url' => '/images/projects/docstamp/admin-form.png', 'caption' => 'Admin Form'],
            ['url' => '/images/projects/docstamp/transaction.png', 'caption' => 'Transaction'],
            ['url' => '/images/projects/docstamp/transaction-details.png', 'caption' => 'Transaction Details'],
            ['url' => '/images/projects/docstamp/user-management.png', 'caption' => 'User Management'],
            ['url' => '/images/projects/docstamp/app-settings.png', 'caption' => 'App Settings'],
            ['url' => '/images/projects/docstamp/form-2000.png', 'caption' => 'Form 2000'],
            ['url' => '/images/projects/docstamp/form-2000-detailed.png', 'caption' => 'Form 2000 Detailed'],
            ['url' => '/images/projects/docstamp/form-2000-ot.png', 'caption' => 'Form 2000 Ot'],
          ],
        ],
      ],
      // ! #3
      [
        'slug'        => 'eskywardpay',
        'title'       => 'ESkywardPay',
        'systemType'  => 'Payment Gateway Platform',
        'highlight'   => 'A centralized payment gateway that streamlines payment processing, transaction management, and reporting across multiple applications and business systems',
        'description' => 'ESkywardPay is a centralized payment gateway platform built on top of PayMongo that simplifies payment integration for multiple applications. Initially developed as an internal solution for Skyward and FSI systems, it evolved into a standalone product offering that handles payment processing, webhook management, reconciliation, and reporting across all connected systems.',
        'technologies' => ['Inertia.js', 'React', 'Laravel', 'MySQL', 'Tailwind CSS', 'Shadcn UI', 'PayMongo'],
        'image'       => '/images/projects/skyward-pay/login.png',
        'liveUrl'     => 'https://develop-admin-paymongo.fessi.com.ph/',
        'githubUrl'   => null,
        'category'    => 'Professional Project',
        'status'      => 'In Production',
        'caseStudy'   => [
          'introduction' => [
            'ESkywardPay is a centralized payment gateway platform built to streamline payment processing across multiple applications and business systems. The project initially started as an internal solution for Skyward and FSI applications, supporting use cases such as e-commerce checkout, booking payments, payment collection, and financial reconciliation.',
            'As the platform matured, it became clear that its architecture was flexible enough to support multiple clients and applications, leading to its evolution into a standalone product offering. Today, ESkywardPay serves as a centralized payment layer that simplifies payment integration, transaction management, and reporting across connected systems.',
          ],
          'challenge' => [
            'intro' => 'Integrating a payment gateway directly into every application creates several long-term challenges. Each application must independently manage payment processing, transaction tracking, webhook handling, reporting, and future payment provider updates. As the number of applications grows, maintaining these integrations becomes increasingly difficult and costly. Additionally, payment systems require a high level of reliability — a single inconsistency between payment status and transaction records can create operational and financial issues for both businesses and customers.',
            'points' => [
              'Eliminate redundant payment integrations across multiple applications',
              'Maintain accurate and consistent transaction records',
              'Handle webhook processing and payment provider communication centrally',
              'Simplify maintenance when payment provider changes occur',
              'Provide unified reporting and analytics across all connected systems',
              'Reduce integration complexity for future applications',
            ],
          ],
          'solution' => [
            'ESkywardPay was designed as a centralized payment gateway platform built on top of PayMongo. Instead of allowing each application to integrate directly with the payment provider, applications connect to ESkywardPay through a unified interface. The platform then manages communication with the payment gateway, transaction processing, webhook handling, reporting, and reconciliation.',
            'This architecture provides centralized transaction management, consistent payment processing across applications, reduced integration effort for future applications, and simplified maintenance when payment provider changes occur.',
            'Because all payment activity passes through a single platform, ESkywardPay also enables the generation of analytics, business insights, and operational reports that would otherwise be fragmented across multiple systems.',
          ],
          'techStack' => [
            ['label' => 'Frontend',            'items' => ['Inertia.js', 'React', 'Tailwind CSS', 'Shadcn UI']],
            ['label' => 'Backend',             'items' => ['PHP', 'Laravel']],
            ['label' => 'Database',            'items' => ['MySQL']],
            ['label' => 'External Integration', 'items' => ['PayMongo Payment Gateway']],
          ],
          'keyFeatures' => [
            'Payment link generation',
            'Hosted checkout pages',
            'Payment tracking and transaction history',
            'Webhook processing',
            'Audit trail management',
            'Automated report generation',
            'Failed payment monitoring',
            'Multiple payment method support',
            'Per-application payment method configuration',
            'Role-based access control',
          ],
          'role' => [
            'I was the sole developer responsible for designing and building ESkywardPay from the ground up — covering system architecture design, frontend development, backend development, database design, API design, payment gateway integration, security implementation, and reporting and analytics development.',
            'While I led the technical implementation, product direction and business requirements were refined through collaboration and brainstorming sessions with the broader team.',
          ],
          'technicalChallenges' => [
            'The most critical challenge was maintaining transaction consistency. In payment systems, accuracy is non-negotiable — every transaction status must correctly reflect the actual payment outcome. An incorrect payment status can lead to financial discrepancies, reconciliation issues, and poor customer experience. Special attention was given to payment status synchronization, webhook processing reliability, transaction verification, audit logging, and failure monitoring and recovery mechanisms.',
            'Another significant challenge involved coordinating payment events between ESkywardPay and connected applications. The platform not only processes updates from the payment provider but also distributes accurate transaction updates to external systems that rely on payment information. Because payment events are asynchronous by nature, ensuring consistency across all connected systems required careful design of event handling and status management workflows.',
          ],
          'screenshots' => [
            ['url' => '/images/projects/skyward-pay/payment-method-ewallets.png', 'caption' => 'Payment Method Ewallets'],
            ['url' => '/images/projects/skyward-pay/payment-method-online-banking.png', 'caption' => 'Payment Method Online Banking'],
            ['url' => '/images/projects/skyward-pay/payment-successful.png', 'caption' => 'Payment Successful'],
            ['url' => '/images/projects/skyward-pay/login.png', 'caption' => 'Login'],
            ['url' => '/images/projects/skyward-pay/dashboard.png', 'caption' => 'Dashboard'],
            ['url' => '/images/projects/skyward-pay/payments.png', 'caption' => 'Payments'],
            ['url' => '/images/projects/skyward-pay/reports.png', 'caption' => 'Reports'],
            ['url' => '/images/projects/skyward-pay/payment-methods.png', 'caption' => 'Payment Methods'],
            ['url' => '/images/projects/skyward-pay/wallet-credentials.png', 'caption' => 'Wallet Credentials'],
          ],
        ],
      ],
      // ! #4
      [
        'slug'        => 'delivery-booking-system',
        'title'       => 'Delivery Booking System',
        'systemType'  => 'Delivery Booking Platform',
        'highlight'   => 'A secure integration platform that bridges document processing and delivery services, processing hundreds of bookings daily through encrypted booking links',
        'description' => 'A delivery booking platform that streamlines the delivery process for apostilled and authenticated documents. The system integrates directly with an upstream document processing application through secure encrypted booking links, allowing applicants to arrange delivery with pre-populated information — eliminating manual data re-entry while maintaining consistency between systems.',
        'technologies' => ['Vue.js', 'Vite', 'Bootstrap', 'Laravel', 'MySQL', 'Skyward Payment Gateway'],
        'image'       => '/images/projects/delivery-booking/login.png',
        'liveUrl'     => 'https://staging-admin-apostille-delivery.fessi.com.ph/',
        'githubUrl'   => null,
        'category'    => 'Professional Project',
        'status'      => 'In Production',
        'caseStudy'   => [
          'introduction' => [
            'The Delivery Booking System was developed to streamline the delivery process for apostilled and authenticated documents. The platform serves as a bridge between the document processing system and the logistics provider, allowing applicants to seamlessly arrange document delivery after completing their application.',
            'Rather than requiring users to manually re-enter information, the system integrates directly with the upstream application process through secure encrypted booking links. This enables applicants to continue their delivery request with pre-populated information while ensuring data consistency between systems. The platform is actively used in production and processes hundreds of delivery bookings daily.',
          ],
          'challenge' => [
            'intro' => 'The delivery workflow begins in a separate application responsible for document processing. Once an applicant completes the necessary requirements, they are given the option to request document delivery. The challenge was creating a reliable integration between two independent systems while maintaining security, data accuracy, and a smooth user experience.',
            'points' => [
              'Secure transfer of applicant information between systems',
              'Automatic population of booking information',
              'Online payment processing',
              'Delivery booking management',
              'Status tracking and reporting',
              'Consistent synchronization with external partner systems',
            ],
          ],
          'solution' => [
            'The system was designed around a secure booking workflow that connects document processing and delivery services. The applicant completes their document application through the primary processing system, after which a secure encrypted booking link is generated and sent to them.',
            'The applicant accesses the Delivery Booking System using the provided link, where booking information is automatically populated using decrypted application data. The applicant then provides delivery details, selects a preferred courier, and completes payment through the integrated payment gateway. The booking is then created, forwarded for delivery processing, and tracked until completion.',
            'This approach eliminates repetitive data entry while ensuring booking information remains aligned with the original application.',
          ],
          'techStack' => [
            ['label' => 'Frontend',         'items' => ['Vue.js', 'Vite', 'Bootstrap']],
            ['label' => 'Backend',           'items' => ['PHP', 'Laravel']],
            ['label' => 'Database',          'items' => ['MySQL']],
            ['label' => 'Payment',           'items' => ['Skyward Payment Gateway']],
          ],
          'keyFeatures' => [
            'Secure encrypted booking links',
            'Automated booking information population',
            'Delivery address management',
            'Preferred receiver support',
            'Courier selection',
            'Online payment processing',
            'Booking status management',
            'Delivery tracking',
            'Administrative dashboard',
            'Delivery reporting',
          ],
          'role' => [
            'This project was developed by a team consisting of a UI/UX Designer, two Full Stack Developers, and a Project Lead. My primary responsibilities included frontend implementation, API integration, user interface updates and enhancements, and development of the dashboard, transaction, and reports modules.',
            'I was also responsible for handling integration changes between the Delivery Booking System and the partner application whenever data structures or API requirements evolved — including encrypted booking link processing and decryption.',
          ],
          'technicalChallenges' => [
            'The most challenging aspect of the project was maintaining reliable synchronization between independent systems. The delivery platform receives booking information through encrypted links generated by the external application. Because the encryption and booking link generation occur on the partner system, both systems must remain perfectly aligned — even minor differences in payload structure, encryption implementation, or expected data formats can prevent successful decryption and disrupt the booking process.',
            'Another critical challenge involved maintaining data integrity between the original application and the delivery booking workflow. The system relies on application identifiers and transferred data to correctly associate delivery requests with existing records. The solution required close coordination with the partner development team, careful validation of transferred data, and continuous alignment whenever changes were introduced on either side of the integration.',
          ],
          'productionUsage' => 'The platform is currently used in production and processes approximately 200 to 300 confirmed bookings per day, serving as a critical integration layer between document processing systems and logistics operations.',
          'screenshots' => [
            ['url' => '/images/projects/delivery-booking/form-notice.png', 'caption' => 'Form Notice'],
            ['url' => '/images/projects/delivery-booking/booking-form.png', 'caption' => 'Booking Form'],
            ['url' => '/images/projects/delivery-booking/booking-review.png', 'caption' => 'Booking Review'],
            ['url' => '/images/projects/delivery-booking/otp-form.png', 'caption' => 'Otp Form'],
            ['url' => '/images/projects/delivery-booking/payment-select.png', 'caption' => 'Payment Select'],
            ['url' => '/images/projects/delivery-booking/payment-qr.png', 'caption' => 'Payment Qr'],
            ['url' => '/images/projects/delivery-booking/booking-successful.png', 'caption' => 'Booking Successful'],
            ['url' => '/images/projects/delivery-booking/track-and-trace.png', 'caption' => 'Track And Trace'],
            ['url' => '/images/projects/delivery-booking/delivery-status.png', 'caption' => 'Delivery Status'],
            ['url' => '/images/projects/delivery-booking/login.png', 'caption' => 'Login'],
            ['url' => '/images/projects/delivery-booking/dashboard.png', 'caption' => 'Dashboard'],
            ['url' => '/images/projects/delivery-booking/transaction.png', 'caption' => 'Transaction'],
            ['url' => '/images/projects/delivery-booking/transaction-detailed.png', 'caption' => 'Transaction Detailed'],
            ['url' => '/images/projects/delivery-booking/report-by-applicant.png', 'caption' => 'Report By Applicant'],
            ['url' => '/images/projects/delivery-booking/report-by-final-dispatch.png', 'caption' => 'Report By Final Dispatch'],
          ],
        ],
      ],
      // ! #5
      [
        'slug'        => 'homeowners-association-management-system',
        'title'       => 'Homeowners Association Management System',
        'systemType'  => 'Community Management Platform',
        'highlight'   => 'A personal project exploring how technology can modernize community management through a centralized digital portal for residents and administrators',
        'description' => 'A web-based community management platform started as a personal project during college. Designed as a digital hub for homeowners, residents, and association administrators, the platform centralizes community announcements, amenities, leadership information, rental listings, and more — with a long-term vision of supporting online payments, service requests, and digital permits.',
        'technologies' => ['React'],
        'image'       => '/images/projects/hoa/homepage.png',
        'liveUrl'     => 'https://gw2-hai.vercel.app/homepage',
        'githubUrl'   => null,
        'category'    => 'Personal Project',
        'status'      => 'Paused',
        'caseStudy'   => [
          'introduction' => [
            'The Homeowners Association Management System was a personal project I started during my college years as a way to improve my software development skills and explore how technology could modernize community management. The idea originated from a simple question: What if a village or subdivision had a centralized digital platform where residents could easily access community information, announcements, services, and future payment transactions?',
            'The project was designed as a web-based platform that would serve as a digital hub for homeowners, residents, and association administrators. Although the project was not fully completed, it played a significant role in strengthening my frontend development skills and introducing me to larger-scale application planning and system design concepts.',
          ],
          'challenge' => [
            'intro' => 'Many homeowners associations still rely on fragmented communication channels such as bulletin boards, social media groups, printed announcements, and manual inquiries. As communities grow, information becomes harder to distribute efficiently, and residents often struggle to stay informed about community activities, services, and important updates.',
            'points' => [
              'Centralize community information scattered across multiple channels',
              'Improve communication between residents and association administrators',
              'Design a platform flexible enough to accommodate diverse community needs',
              'Plan for future expansion into payments, service requests, and resident management',
              'Maintain a simple user experience across many different types of community content',
            ],
          ],
          'solution' => [
            'The platform was designed to function as a digital community portal where residents could access information relevant to their subdivision or village. The public-facing application includes sections for community announcements, current projects and developments, village amenities, homeowners association leadership information, emergency contacts, house rental listings, and community job listings.',
            'The goal was to make important community information accessible through a single platform instead of being scattered across multiple channels.',
            'In addition to the implemented features, the long-term vision included expanding the platform to support monthly association fee payments, online service requests, resident account management, digital permits and approvals, and community event management — creating a complete digital ecosystem for homeowners associations and residential communities.',
          ],
          'techStack' => [
            ['label' => 'Frontend', 'items' => ['React']],
            ['label' => 'Backend',  'items' => ['Planned but not fully implemented']],
          ],
          'keyFeatures' => [
            'Community announcements',
            'Project updates',
            'Amenities directory',
            'Leadership directory',
            'Emergency contacts',
            'House rental listings',
            'Community job board',
          ],
          'role' => [
            'This was a personal project that I independently designed and developed. My responsibilities included product conceptualization, feature planning, frontend development, user interface design, data structure planning, and system architecture planning.',
            'The project served as both a learning platform and an opportunity to explore how software solutions can improve community management processes.',
          ],
          'technicalChallenges' => [
            'One of the most interesting challenges was designing a platform flexible enough to accommodate the diverse needs of a residential community. Unlike single-purpose applications, homeowners associations manage many different types of information — ranging from announcements and projects to rentals, service providers, and emergency resources. This required careful planning of how information would be organized and presented while maintaining a simple user experience for residents.',
            'Another challenge involved planning for future expansion. Even during the early stages, the architecture needed to consider features such as online payments, resident management, and community services, ensuring the platform could grow beyond a simple information portal.',
          ],
          'projectOutcome' => 'While the project was ultimately paused after I began my professional software development career, it remains one of the most influential projects in my learning journey. The experience strengthened my frontend development skills, improved my understanding of application architecture, and reinforced the importance of designing software around real-world community needs.',
          'screenshots' => [
            ['url' => '/images/projects/hoa/homepage.png', 'caption' => 'Homepage'],
            ['url' => '/images/projects/hoa/news-updates.png', 'caption' => 'News Updates'],
            ['url' => '/images/projects/hoa/news-update-details.png', 'caption' => 'News Update Details'],
            ['url' => '/images/projects/hoa/projects.png', 'caption' => 'Projects'],
            ['url' => '/images/projects/hoa/project-article.png', 'caption' => 'Project Article'],
            ['url' => '/images/projects/hoa/amenities.png', 'caption' => 'Amenities'],
            ['url' => '/images/projects/hoa/amenity-details.png', 'caption' => 'Amenity Details'],
            ['url' => '/images/projects/hoa/rental-properties.png', 'caption' => 'Rental Properties'],
            ['url' => '/images/projects/hoa/rentail-property-details.png', 'caption' => 'Rentail Property Details'],
            ['url' => '/images/projects/hoa/home-service-list.png', 'caption' => 'Home Service List'],
            ['url' => '/images/projects/hoa/about-us.png', 'caption' => 'About Us'],
          ],
        ],
      ],
      // ! #6
      [
        'slug'        => 'quiz-management-web-application',
        'title'       => 'Quiz Management Web Application',
        'systemType'  => 'Quiz Management Platform',
        'highlight'   => 'A personal project exploring decoupled frontend and backend architecture through a practical platform for creating, sharing, and tracking quizzes',
        'description' => 'A self-service quiz management platform built as a personal learning project. Users can create accounts, build and share quizzes with other registered users, track participation, and view results and statistics — all within a single application. The project also served as an opportunity to explore Nuxt.js, PostgreSQL, and decoupled frontend and backend architecture.',
        'technologies' => ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'Nuxt UI', 'Laravel', 'PostgreSQL'],
        'image'       => '/images/projects/quiz-wiz/landing-page.png',
        'liveUrl'     => 'https://quiz-wiz-pro.vercel.app/',
        'githubUrl'   => null,
        'category'    => 'Personal Project',
        'status'      => 'Completed',
        'caseStudy'   => [
          'introduction' => [
            'The Quiz Management Web Application was a personal project created as part of my continuous learning journey as a developer. At the time, I wanted to expand my experience beyond my usual technology stack while building something that could be genuinely useful. The idea originated from a simple need — a close friend who works as a teacher frequently used quizzes as part of her teaching activities, which inspired me to create a platform where users could easily create, share, and manage quizzes online.',
            'Beyond solving a practical use case, the project became an opportunity to experiment with modern frontend technologies and a decoupled application architecture.',
          ],
          'challenge' => [
            'intro' => 'Creating and distributing quizzes often involves using multiple tools for content creation, sharing, tracking responses, and reviewing results. The goal of this project was to provide a simple platform that consolidates all of these into one straightforward and user-friendly experience.',
            'points' => [
              'Create and manage quizzes from a single platform',
              'Share quizzes with other users within the application',
              'Track quiz attempts and participation',
              'View and analyze quiz results and statistics',
              'Maintain a simple and intuitive user experience throughout',
            ],
          ],
          'solution' => [
            'The application was designed as a self-service quiz management platform where users can create their own accounts and immediately begin creating quizzes without requiring administrative approval. Each user can create quizzes, share them with registered users within the platform, and track participation through a centralized dashboard.',
            'Recipients can answer quizzes directly within the application and instantly view their results upon completion. Quiz creators can monitor quiz performance through statistics and attempt tracking, allowing them to evaluate participation and engagement.',
            'The platform combines quiz creation, distribution, and result tracking into a single application.',
          ],
          'techStack' => [
            ['label' => 'Frontend', 'items' => ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'Nuxt UI']],
            ['label' => 'Backend',  'items' => ['PHP', 'Laravel']],
            ['label' => 'Database', 'items' => ['PostgreSQL']],
          ],
          'keyFeatures' => [
            'User registration and authentication',
            'Quiz creation and management',
            'Quiz sharing between users',
            'Quiz participation and submission',
            'Result viewing',
            'Attempt tracking',
            'Quiz statistics and analytics',
            'User-specific quiz management',
          ],
          'role' => [
            'This was a personal project that I independently designed and developed from scratch. My responsibilities included frontend development, backend development, API development, database design, authentication implementation, quiz management functionality, and result and statistics tracking.',
            'The project also served as an opportunity to explore technologies outside of my primary development stack.',
          ],
          'technicalChallenges' => [
            'One of the primary goals of this project was learning how to work with a decoupled frontend and backend architecture. Unlike traditional server-rendered applications, the frontend and backend were developed as separate projects, requiring API-based communication between the two systems. This approach introduced additional considerations around authentication, data handling, and application state management.',
            'Another challenge involved designing a flexible quiz structure capable of supporting quiz creation, user participation, result calculation, and statistics tracking while keeping the overall user experience simple and intuitive. Although the business logic was relatively straightforward, the project provided valuable experience in application architecture, API design, and frontend-backend integration.',
          ],
          'projectOutcome' => 'The application successfully achieved its primary objective of providing a simple and functional quiz management platform while serving as a practical learning project. It gave me hands-on experience with Nuxt.js, API-driven application development, and PostgreSQL — helping expand my technical knowledge beyond my existing technology stack and reinforcing the importance of building real applications while learning new technologies.',
          'screenshots' => [
            ['url' => '/images/projects/quiz-wiz/landing-page.png', 'caption' => 'Landing Page'],
            ['url' => '/images/projects/quiz-wiz/register.png', 'caption' => 'Register'],
            ['url' => '/images/projects/quiz-wiz/home.png', 'caption' => 'Home'],
            ['url' => '/images/projects/quiz-wiz/create-quiz.png', 'caption' => 'Create Quiz'],
            ['url' => '/images/projects/quiz-wiz/quiz-questioner-form.png', 'caption' => 'Quiz Questioner Form'],
            ['url' => '/images/projects/quiz-wiz/home-with-data.png', 'caption' => 'Home With Data'],
            ['url' => '/images/projects/quiz-wiz/take-quiz-confirmation.png', 'caption' => 'Take Quiz Confirmation'],
            ['url' => '/images/projects/quiz-wiz/quiz-question-1.png', 'caption' => 'Quiz Question 1'],
            ['url' => '/images/projects/quiz-wiz/quiz-question-2.png', 'caption' => 'Quiz Question 2'],
            ['url' => '/images/projects/quiz-wiz/quiz-question-3.png', 'caption' => 'Quiz Question 3'],
            ['url' => '/images/projects/quiz-wiz/quiz-summary.png', 'caption' => 'Quiz Summary'],
          ],
        ],
      ],
      // ! #7
      [
        'slug'        => 'lg-lopez-company-profile-cms',
        'title'       => 'LG Lopez Company Profile CMS',
        'systemType'  => 'Content Management System',
        'highlight'   => 'A custom CMS that gives administrators full control over a company profile website without requiring developer intervention or code changes',
        'description' => 'A custom content management platform developed for LG Lopez that serves as both a public-facing company profile website and an internal administration system. Administrators can independently manage services, projects, announcements, inquiries, and media through an intuitive dashboard — with all changes immediately reflected on the public website.',
        'technologies' => ['Inertia.js', 'React', 'Tailwind CSS', 'Shadcn UI', 'Laravel', 'MySQL'],
        'image'       => '/images/projects/lg/homepage-1.png',
        'liveUrl'     => 'https://lglopez.com/',
        'githubUrl'   => null,
        'category'    => 'Freelance Project',
        'status'      => 'In Production',
        'caseStudy'   => [
          'introduction' => [
            'The LG Lopez Company Profile CMS was developed to provide the company with a centralized platform for managing its digital presence. Rather than relying on static website updates or developer intervention, the system enables administrators to manage website content through an intuitive administrative dashboard.',
            'The platform serves as both a public-facing company profile website and an internal content management system, allowing the organization to maintain up-to-date information about its services, projects, announcements, and company information.',
          ],
          'challenge' => [
            'intro' => 'Maintaining company websites often requires technical assistance whenever content needs to be updated. This creates unnecessary delays and limits the ability of business teams to keep information current. The goal was to create a custom content management system that would allow administrators to manage website content independently while maintaining a consistent user experience across the public website.',
            'points' => [
              'Company information management',
              'Service management',
              'Project showcase management',
              'News and announcement publishing',
              'Inquiry handling',
              'Image and media management',
              'Simple enough for non-technical users to operate',
            ],
          ],
          'solution' => [
            'A custom content management platform was developed to give administrators complete control over the website\'s content without requiring code changes or developer assistance. Through the administrative dashboard, authorized users can manage company information, services, projects, images, and announcements that are automatically reflected on the public website.',
            'The platform also includes inquiry management functionality, allowing website visitors to submit inquiries that can be reviewed and managed through the administration panel.',
            'By centralizing content management into a single system, the company can keep its website updated while reducing dependency on technical resources.',
          ],
          'techStack' => [
            ['label' => 'Frontend', 'items' => ['Inertia.js', 'React', 'Tailwind CSS', 'Shadcn UI']],
            ['label' => 'Backend',  'items' => ['PHP', 'Laravel']],
            ['label' => 'Database', 'items' => ['MySQL']],
          ],
          'keyFeatures' => [
            'Company profile management',
            'Service management',
            'Project portfolio management',
            'News and announcements publishing',
            'Inquiry form management',
            'Contact management',
            'Media and image management',
            'Administrative dashboard',
            'Role-based content administration',
          ],
          'role' => [
            'I worked as a Full Stack Developer and was responsible for developing both the frontend and backend components of the system. My responsibilities included frontend development, backend development, database design, API implementation, content management functionality, and administrative dashboard development.',
          ],
          'technicalChallenges' => [
            'One of the primary challenges was designing a flexible content management structure that could support different content types while remaining simple for administrators to use. Each section of the website — such as services, projects, announcements, and company information — has unique data requirements and presentation rules. The system needed to accommodate these differences while providing a consistent management experience within the administration panel. To address this, the platform was designed with reusable content management patterns that simplified future maintenance and allowed administrators to manage content efficiently without technical knowledge.',
            'Another important consideration was ensuring that content updates made through the CMS would immediately and accurately reflect on the public-facing website, allowing the company to maintain an up-to-date online presence.',
          ],
          'productionUsage' => 'The platform is currently used by the company as its primary content management solution and supports the day-to-day management of website content by administrative users. The system allows the organization to independently manage its digital presence while providing a scalable foundation for future content and website enhancements.',
          'screenshots' => [
            ['url' => '/images/projects/lg/homepage-1.png', 'caption' => 'Homepage 1'],
            ['url' => '/images/projects/lg/homepage-2.png', 'caption' => 'Homepage 2'],
            ['url' => '/images/projects/lg/homepage-3.png', 'caption' => 'Homepage 3'],
            ['url' => '/images/projects/lg/homepage-4.png', 'caption' => 'Homepage 4'],
            ['url' => '/images/projects/lg/homepage-5.png', 'caption' => 'Homepage 5'],
            ['url' => '/images/projects/lg/homepage-6.png', 'caption' => 'Homepage 6'],
            ['url' => '/images/projects/lg/about-us.png', 'caption' => 'About Us'],
            ['url' => '/images/projects/lg/company-journey.png', 'caption' => 'Company Journey'],
            ['url' => '/images/projects/lg/news-updates.png', 'caption' => 'News Updates'],
            ['url' => '/images/projects/lg/news-update-detailed.png', 'caption' => 'News Update Detailed'],
            ['url' => '/images/projects/lg/contact-us.png', 'caption' => 'Contact Us'],
          ],
        ],
      ],
      // ! #8
      [
        'slug'        => 'fsixskyward-db-syncer',
        'title'       => 'FSIXSkyward DB Syncer',
        'systemType'  => 'Database Synchronization Service',
        'highlight'   => 'A Windows-based synchronization service that bridges legacy and modern databases, ensuring business continuity throughout a live database migration',
        'description' => 'An internal Windows desktop synchronization service developed to bridge legacy and modern database systems during a migration initiative. The application runs six independent syncers continuously in the background, keeping legacy local, modern local, and cloud-hosted databases aligned — with offline resilience and automatic cloud recovery built in.',
        'technologies' => ['C#', 'Windows Forms (.NET)'],
        'image'       => '/images/projects/syncer/syncer-main-1.jpg',
        'liveUrl'     => null,
        'githubUrl'   => null,
        'category'    => 'Professional Project',
        'status'      => 'In Production',
        'caseStudy'   => [
          'introduction' => [
            'FSIXSkyward DB Syncer is an internal synchronization service developed to bridge legacy and modern systems during a database migration initiative. As part of the organization\'s modernization efforts, operational systems were transitioned from a long-standing legacy database into a new architecture consisting of both local and cloud-hosted databases. To ensure business continuity throughout the migration process, a reliable synchronization layer was required to keep all systems aligned.',
            'The result was a Windows-based synchronization service responsible for continuously transferring and reconciling data between multiple databases, ensuring that both legacy and modern applications remained operational during the transition. Although simple in appearance, the application became a critical component of daily operations — if synchronization stops, dependent systems lose access to current operational data, directly affecting business workflows.',
          ],
          'challenge' => [
            'intro' => 'Migrating operational systems away from a legacy database is rarely a simple cutover process. Multiple applications continued to depend on the legacy database while newer systems relied on modern local and cloud-hosted databases. Running these environments simultaneously introduced the challenge of maintaining data consistency across multiple sources without disrupting active operations.',
            'points' => [
              'Support multiple database environments simultaneously',
              'Maintain data consistency across legacy and modern systems',
              'Operate continuously with minimal supervision',
              'Continue local synchronization during internet interruptions',
              'Recover cloud synchronization automatically when connectivity returns',
              'Provide visibility into synchronization activity and failures',
            ],
          ],
          'solution' => [
            'FSIXSkyward DB Syncer was developed as a Windows desktop application that functions as a long-running synchronization service. The application contains six dedicated syncers, each responsible for a specific synchronization process or data domain. Once synchronization is manually initiated, each syncer operates continuously in the background, monitoring and transferring data between systems as required.',
            'The synchronization flow supports the legacy local database, the new local database, and the cloud-hosted database — allowing the organization to maintain compatibility with existing systems while enabling newer applications to operate on the modern database infrastructure.',
            'The application was intentionally designed with a minimal user interface. Rather than focusing on end-user interactions, the emphasis was placed on stability, monitoring, and reliability.',
          ],
          'techStack' => [
            ['label' => 'Desktop Application', 'items' => ['C#', 'Windows Forms (.NET)']],
            ['label' => 'Databases',           'items' => ['Legacy Local Database', 'Modern Local Database', 'Cloud Database Server']],
            ['label' => 'Environment',         'items' => ['Windows Server Deployment', 'Continuous Background Processing']],
          ],
          'keyFeatures' => [
            'Multi-database synchronization',
            'Legacy-to-modern database migration support',
            'Six independent synchronization services',
            'Continuous background operation',
            'Offline local synchronization support',
            'Automatic cloud synchronization recovery',
            'Synchronization monitoring logs',
            'Synchronization status tracking',
            'Server-restricted deployment',
          ],
          'role' => [
            'I was responsible for the development and implementation of the synchronization service. My responsibilities included synchronization architecture implementation, database synchronization logic, background service processing, error handling and recovery workflows, synchronization monitoring interface, and production deployment support.',
            'The project also provided an opportunity to expand my experience beyond web development by working with C# and Windows desktop application development.',
          ],
          'technicalChallenges' => [
            'The most significant challenge was maintaining reliable synchronization across multiple database environments while ensuring operational continuity. Unlike traditional application development, synchronization systems must account for situations where data exists in multiple locations simultaneously — any interruption, failed transfer, duplicate synchronization, or inconsistent record state can impact downstream systems that rely on accurate data.',
            'Additional complexity came from supporting both local and cloud synchronization workflows. The application needed to continue synchronizing local databases even when internet connectivity was unavailable while safely resuming cloud synchronization once connectivity returned. Another challenge involved designing multiple independent syncers within a single application, each with its own responsibilities, schedules, and data requirements — requiring careful coordination while maintaining fault tolerance across the service. Because the application operates as a critical internal dependency, reliability and stability were prioritized above all other considerations.',
          ],
          'productionUsage' => 'The application currently runs in production as part of the organization\'s operational infrastructure, serving as the synchronization bridge between legacy systems and modern applications. While largely invisible to end users, the service plays a vital role in maintaining system continuity and supporting ongoing modernization efforts within the organization.',
          'screenshots' => [
            ['url' => '/images/projects/syncer/syncer-main-1.jpg', 'caption' => 'Syncer Main 1'],
            ['url' => '/images/projects/syncer/syncer-main-2.jpg', 'caption' => 'Syncer Main 2'],

            ['url' => '/images/projects/syncer/syncer-overall-1.jpg', 'caption' => 'Syncer Overall 1'],
            ['url' => '/images/projects/syncer/syncer-overall-2.jpg', 'caption' => 'Syncer Overall 2'],

            ['url' => '/images/projects/syncer/dop-sync.png', 'caption' => 'Dop Sync'],
            ['url' => '/images/projects/syncer/dc-amazon-sync.jpg', 'caption' => 'Dc Amazon Sync'],
            ['url' => '/images/projects/syncer/ma-amazon-sync.jpg', 'caption' => 'Ma Amazon Sync'],
            ['url' => '/images/projects/syncer/transmittal-amazon-sync.jpg', 'caption' => 'Transmittal Amazon Sync'],
            ['url' => '/images/projects/syncer/payout-sync.jpg', 'caption' => 'Payout Sync'],
          ],
        ],
      ],
      // ! #9
      [
        'slug'        => 'rfid-attendance-system',
        'title'       => 'RFID Attendance System',
        'systemType'  => 'Attendance Management System',
        'highlight'   => 'A college thesis project that automates attendance tracking through RFID technology, replacing manual recording with a centralized desktop solution',
        'description' => 'A desktop-based attendance management system developed as a college thesis project. Students and teachers tap an RFID card on a reader to automatically record time-in and time-out events, while administrators gain access to centralized attendance records, search and filtering tools, Excel exports, and account management features — all backed by a MySQL database designed following 3NF principles.',
        'technologies' => ['C#', 'Windows Forms (.NET)', 'MySQL', 'RFID Reader', 'Excel Export'],
        'image'       => '/images/projects/rfid-attendance/cover-photo.png',
        'liveUrl'     => null,
        'githubUrl'   => null,
        'category'    => 'Thesis Project',
        'status'      => 'Completed',
        'caseStudy'   => [
          'introduction' => [
            'The RFID Attendance System was developed as my college thesis project and served as one of my first complete end-to-end software solutions. The project was designed to modernize attendance tracking by replacing manual attendance recording with RFID-based identification. By simply tapping an RFID card on a reader, students and teachers could automatically record their attendance while administrators gained access to centralized attendance records, reporting tools, and account management features.',
            'Beyond fulfilling academic requirements, the project became a valuable learning experience in desktop application development, hardware integration, database design, and system architecture.',
          ],
          'challenge' => [
            'intro' => 'Traditional attendance tracking methods often rely on manual recording, which can be time-consuming, prone to human error, and difficult to monitor at scale. Educational institutions require an efficient way to record attendance accurately, track history, manage user information, generate reports, and reduce administrative workload.',
            'points' => [
              'Record attendance accurately',
              'Track student and teacher attendance history',
              'Manage user information',
              'Generate attendance reports',
              'Reduce administrative workload',
            ],
          ],
          'solution' => [
            'The RFID Attendance System combines RFID hardware and desktop software to automate attendance recording. Each registered student or administrator is assigned an RFID card linked to their profile. When a card is scanned through the RFID reader, the system validates the card and automatically determines whether the user is performing a time-in or time-out action.',
            'Attendance records are then stored in a centralized database where administrators can review, search, filter, export, and manage attendance information.',
            'The system also includes account management features for maintaining student and administrator records, course information, sections, and security settings.',
          ],
          'techStack' => [
            ['label' => 'Desktop Application', 'items' => ['C#', 'Windows Forms (.NET)']],
            ['label' => 'Database',            'items' => ['MySQL']],
            ['label' => 'Hardware',            'items' => ['RFID Reader (125 kHz Proximity Scanner)', 'RFID Cards']],
            ['label' => 'Reporting',           'items' => ['Excel Export Functionality']],
          ],
          'keyFeatures' => [
            'RFID-based attendance recording',
            'Automated time-in and time-out detection',
            'Student management',
            'Teacher and administrator management',
            'Attendance record tracking',
            'Search and filtering tools',
            'Excel export functionality',
            'Course and section management',
            'Password recovery system',
            'Account security management',
          ],
          'role' => [
            'This project was developed as my college thesis and served as a personal learning initiative to strengthen my software development skills. My responsibilities included system design, desktop application development, database design, RFID integration, attendance workflow implementation, reporting functionality, user management modules, and security feature implementation.',
            'The project provided hands-on experience in building a complete software solution from planning and development through testing and deployment.',
          ],
          'technicalChallenges' => [
            'One of the most significant challenges was integrating RFID hardware with the attendance system and ensuring that attendance events were recorded accurately. The application needed to determine whether a card scan represented a time-in or time-out event while preventing invalid attendance records — requiring attendance session tracking and validation logic to maintain accurate records.',
            'Another challenge involved designing a database structure capable of managing attendance records, user profiles, courses, sections, administrator accounts, and security-related data while maintaining proper normalization and minimizing redundancy. The final database structure was designed following Third Normal Form (3NF) principles to improve organization and data integrity. The project also introduced me to desktop application architecture, user management workflows, reporting systems, and hardware-software integration concepts that later became valuable in my professional development career.',
          ],
          'projectOutcome' => 'The RFID Attendance System successfully automated attendance tracking through RFID technology and provided administrators with centralized attendance management capabilities. More importantly, it served as a foundation for my software development journey — my first experience combining hardware integration, database management, security features, reporting, and desktop application development into a single complete solution.',
          'files' => [
            ['url' => '/images/projects/rfid-attendance/user-manual.pdf', 'label' => 'App User Manual (PDF)'],
            ['url' => '/images/projects/rfid-attendance/information-and-requirements.pdf', 'label' => 'System Information and Requirements (PDF)'],
          ]
        ],
      ],
      // ! #10
      [
        'slug'        => 'centralized-biometric-registration-system',
        'title'       => 'Centralized Biometric Registration System',
        'systemType'  => 'Biometric Enrollment Platform',
        'highlight'   => 'A centralized desktop enrollment platform that captures identity and biometric data once and shares it across multiple connected applications through API integration',
        'description' => 'A desktop-based centralized enrollment platform that acts as a single source of truth for identity registration across multiple applications. The system captures personal information alongside fingerprint, facial, iris, and digital signature biometrics — generating a unique identifier per individual and exposing registration data to connected applications through a REST API.',
        'technologies' => ['C#', '.NET', 'Windows Forms', 'MySQL', 'REST API'],
        'image'       => '/images/projects/biometrics/member-information-form.png',
        'liveUrl'     => null,
        'githubUrl'   => null,
        'category'    => 'Professional Project',
        'status'      => 'Completed',
        'caseStudy'   => [
          'introduction' => [
            'The Centralized Biometric Registration System was developed as a desktop application designed to serve as a shared enrollment platform for multiple applications requiring user registration and biometric capture. Instead of allowing each application to independently manage registration and biometric collection, the system provides a centralized enrollment process that captures a person\'s identity information and biometric data once, then makes that information available to connected applications.',
            'The platform was designed to support multiple biometric modalities and act as a single source of truth for identity enrollment across an expanding ecosystem of applications.',
          ],
          'challenge' => [
            'intro' => 'Many applications require user registration and identity verification, but allowing every application to manage its own registration process can create duplicate records, inconsistent information, and fragmented biometric data. The objective was to create a centralized registration platform that could register individuals once, capture multiple biometric identifiers, and share that information with external applications — while remaining flexible enough to integrate with additional applications over time.',
            'points' => [
              'Registering individuals once',
              'Capturing multiple biometric identifiers',
              'Assigning unique identifiers to each person',
              'Sharing registration information with external applications',
              'Supporting future application integrations',
              'Maintaining a consistent enrollment process across systems',
            ],
          ],
          'solution' => [
            'The platform was designed as a centralized enrollment service that manages identity registration and biometric capture. An external application initiates a registration request, after which an operator registers the individual through the Biometric Registration System — capturing personal information and biometric data and generating a unique identifier associated with the individual.',
            'Registration data is stored within the system, and the requesting application receives the registration reference and user information through API integration. The application can then use the registration record for future identification and validation processes.',
            'This approach eliminates duplicate registration processes while ensuring a consistent identity record across all connected applications.',
          ],
          'techStack' => [
            ['label' => 'Desktop Application', 'items' => ['C#', '.NET', 'Windows Forms']],
            ['label' => 'Database',            'items' => ['MySQL']],
            ['label' => 'Integration',         'items' => ['REST API']],
            ['label' => 'Biometric Devices',   'items' => ['Fingerprint Scanner', 'Webcam (Facial Recognition)', 'Iris Scanner', 'Signature Capture Pad']],
          ],
          'keyFeatures' => [
            'Centralized user enrollment',
            'Fingerprint capture',
            'Facial image capture',
            'Iris capture',
            'Digital signature capture',
            'Unique identity generation',
            'REST API integration',
            'Multi-application support',
            'Registration reference management',
          ],
          'role' => [
            'I served as the sole developer responsible for the system\'s implementation. My responsibilities included desktop application development, database design, API integration, biometric device integration, registration workflow implementation, and identity management architecture.',
            'I also collaborated with a UI/UX designer to create a user-friendly enrollment experience for operators.',
          ],
          'technicalChallenges' => [
            'The most challenging aspect of the project was integrating multiple biometric technologies into a single enrollment platform. Each biometric component originated from a different hardware vendor and was supplied with its own SDK, documentation, communication methods, and implementation requirements — covering fingerprint recognition, facial capture, iris scanning, and digital signature capture. Because each device relied on separate vendor libraries and development workflows, integrating them into a unified registration experience required significant coordination, testing, and troubleshooting.',
            'Another challenge involved creating a common registration workflow that could consistently collect biometric data while maintaining a single identity record for each individual. To address this, the system was designed around a unique identity model, allowing multiple biometric records to be associated with a single registration profile while remaining accessible to connected applications through API integrations.',
          ],
          'projectOutcome' => 'The project successfully demonstrated how biometric enrollment could be centralized and shared across multiple applications through a common registration platform. Beyond biometric capture itself, it provided valuable experience in hardware integration, SDK implementation, API-based system communication, and identity management workflows — and highlighted the challenges involved in working with multiple third-party device providers while designing software that serves as a common integration point for diverse technologies.',
          'screenshots' => [
            ['url' => '/images/projects/biometrics/member-information-form.png', 'caption' => 'Member Information Form'],
            ['url' => '/images/projects/biometrics/face-capture-form.png', 'caption' => 'Face Capture Form'],
            ['url' => '/images/projects/biometrics/fingerprint-scan-form.png', 'caption' => 'Fingerprint Scan Form'],
            ['url' => '/images/projects/biometrics/signature-form.png', 'caption' => 'Signature Form'],
            ['url' => '/images/projects/biometrics/iris-capture-form.png', 'caption' => 'Iris Capture Form'],
            ['url' => '/images/projects/biometrics/review-details.JPG', 'caption' => 'Review Details'],
            ['url' => '/images/projects/biometrics/detection-list.png', 'caption' => 'Detection List'],
            ['url' => '/images/projects/biometrics/hardware-1.png', 'caption' => 'Hardware 1'],
            ['url' => '/images/projects/biometrics/hardware-2.JPG', 'caption' => 'Hardware 2'],
            ['url' => '/images/projects/biometrics/hardware-3.png', 'caption' => 'Hardware 3'],
          ],
        ],
      ],
    ];
  }

  /**
   * Find a single project by its slug.
   * Returns null when no match is found.
   */
  public static function findBySlug(string $slug): ?array
  {
    foreach (static::all() as $project) {
      if ($project['slug'] === $slug) {
        return $project;
      }
    }

    return null;
  }

  /**
   * Return only the summary fields needed for the homepage cards.
   * Strips caseStudy so the homepage bundle stays small.
   */
  public static function summaries(): array
  {
    return array_map(function (array $project) {
      return array_diff_key($project, ['caseStudy' => true]);
    }, static::all());
  }
}
