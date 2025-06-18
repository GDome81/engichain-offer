// English translations for Engichain
const translations_en = {
    nav: {
        home: 'Home',
        features: 'Features',
        howItWorks: 'How It Works',
        pricing: 'Pricing',
        contact: 'Contact'
    },
    sectors: {
        nautico: '⚓ Maritime',
        sanitario: '🏥 Healthcare',
        automotive: '🚗 Automotive',
        generale: '📋 Business'
    },
    hero: {
        nautico: {
            subtitle: 'Blockchain Document Certification for the Maritime Sector',
            description1: 'Engichain is a platform that offers a <strong>complete blockchain document certification solution</strong> with flexible and scalable architecture. For the end user, this means being able to associate every document (e.g. technical reports, certifications, drawings) to a specific vessel and activity, with the guarantee that the document is authenticable over time.',
            description2: 'In addition to certifying the file hash on blockchain, Engichain structures all associated information (document name, type, client, vessel, date, technician, etc.) in a queryable database. This enables advanced search and analysis features, for example:',
            feature1: 'list all documents of a certain type on a specific vessel;',
            feature2: 'filter by period, type of intervention or certifying authority;',
            feature3: 'retrieve the complete history of changes associated with a single vessel or client.'
        },
        sanitario: {
            subtitle: 'Blockchain Document Certification for the Healthcare Sector',
            description1: 'Engichain offers a <strong>complete blockchain certification solution</strong> for the healthcare sector. Certify medical records, medical reports, pharmaceutical certifications and health documentation with guaranteed integrity and traceability over time.',
            description2: 'The platform structures all associated information (document type, patient, doctor, healthcare facility, date, etc.) in a secure and queryable database. This enables advanced features for healthcare:',
            feature1: 'certification of medical reports and medical records with guaranteed immutability;',
            feature2: 'tracking of drugs and medical devices along the supply chain;',
            feature3: 'guarantee of GDPR compliance and international health standards.'
        },
        automotive: {
            subtitle: 'Blockchain Document Certification for the Automotive Industry',
            description1: 'Engichain offers a <strong>specialized blockchain solution for the automotive industry</strong> that certifies technical documents, quality certifications, maintenance manuals and compliance documentation for vehicles and components.',
            description2: 'The platform organizes information such as vehicle model, chassis number, supplier, production date, responsible technician in a structured database. Specific features for automotive:',
            feature1: 'certification of homologation documents and regulatory compliance;',
            feature2: 'tracking of complete history of maintenance and modifications for each vehicle;',
            feature3: 'guarantee of authenticity of technical manuals and safety procedures.'
        },
        generale: {
            subtitle: 'Blockchain Document Certification - Business Solution',
            description1: 'Engichain is a <strong>business blockchain platform</strong> for certifying any type of business document. Ideal for contracts, certifications, technical reports, quality documentation and compliance in any sector.',
            description2: 'The platform adapts its data structure to specific business needs, organizing information such as client, project, manager, date, document type. Business advantages:',
            feature1: 'certification of any document with guaranteed integrity over time;',
            feature2: 'organization and search of documents by client, project or type;',
            feature3: 'guarantee of regulatory compliance and complete audit trail for any sector.'
        },
        cta: 'Get Started'
    },
    features: {
        blockchain: {
            title: 'Blockchain Security',
            description: 'Immutable certification on public blockchain with integrity guarantee and timestamp.'
        },
        settore: {
            nautico: {
                title: 'Maritime Sector',
                description: 'Specialized solution to certify technical modifications on vessels and ISO regulatory compliance.'
            },
            sanitario: {
                title: 'Healthcare Sector',
                description: 'Secure certification for medical records, medical reports and pharmaceutical documentation with GDPR compliance.'
            },
            automotive: {
                title: 'Automotive Sector',
                description: 'Complete traceability for technical documents, homologations and vehicle maintenance history.'
            },
            generale: {
                title: 'Business Solution',
                description: 'Blockchain certification for any type of business document and regulatory compliance.'
            }
        },
        cloud: {
            title: 'Secure and Flexible Cloud',
            description: 'Secure hosting with possibility to use customer cloud or Engichain infrastructure.'
        },
        ricerca: {
            nautico: {
                title: 'Advanced Search',
                description: 'Queryable database to filter documents by vessel, period, intervention type or certifying authority.'
            },
            sanitario: {
                title: 'Secure Search',
                description: 'Protected database to search documents by patient, doctor, healthcare facility or type.'
            },
            automotive: {
                title: 'Technical Search',
                description: 'Search system by vehicle, chassis number, model, supplier or intervention type.'
            },
            generale: {
                title: 'Advanced Search',
                description: 'Flexible database to filter documents by client, project, date or document type.'
            }
        },
        api: {
            title: 'RESTful API',
            description: 'Simple integration through REST API or customizable whitelabel frontend.'
        },
        tracciabilita: {
            nautico: {
                title: 'Complete Traceability',
                description: 'Complete history of all changes associated with each vessel or client.'
            },
            sanitario: {
                title: 'Healthcare Traceability',
                description: 'Complete history of medical and pharmaceutical documents with secure and GDPR-compliant audit trail.'
            },
            automotive: {
                title: 'Vehicle Traceability',
                description: 'Complete history of maintenance, modifications and certifications for each vehicle.'
            },
            generale: {
                title: 'Business Traceability',
                description: 'Complete history of all documents associated with clients, projects or business activities.'
            }
        }
    },
    modals: {
        whyImportant: 'Why it matters',
        blockchain: {
            title: 'Blockchain Security',
            sections: {
                0: {
                    title: 'Immutable Technology',
                    content: 'We use public blockchains like Ethereum and Algorand to ensure that every document hash is permanently recorded and unmodifiable. Once written on the blockchain, no one can alter or delete the certification.'
                },
                1: {
                    title: 'Certified Timestamp',
                    content: 'The hash is recorded on public blockchain along with a timestamp, guaranteeing immutability and certain date of certification.'
                },
                2: {
                    title: 'Independent Verification',
                    content: 'At any time you can prove that a file is identical to the certified one, by recalculating the SHA-256 hash and comparing it with the one recorded on the blockchain.'
                }
            },
            highlight: 'Blockchain guarantees immutability and certain date of certification, providing proof of integrity without exposing document contents.'
        },
        settore: {
            nautico: {
                title: 'Maritime Sector Specialization',
                sections: {
                    0: {
                        title: 'Regulatory Compliance',
                        content: 'Complete support for maritime sector regulations, including ISO certifications, MCA and other international maritime authorities.'
                    },
                    1: {
                        title: 'Vessel Management',
                        content: 'Each vessel is represented as a unique entity in the platform, with structured metadata for each intervention or technical modification.'
                    },
                    2: {
                        title: 'Technical Documentation',
                        content: 'Certification of technical reports, drawings, compliance certificates and documentation of structural or plant modifications.'
                    }
                },
                highlight: 'Specialized solution that understands the specificities of the maritime sector and ensures compliance with international maritime regulations.'
            },
            sanitario: {
                title: 'Healthcare Sector Specialization',
                sections: {
                    0: {
                        title: 'GDPR Compliance',
                        content: 'Full compliance with General Data Protection Regulation, with advanced encryption and access controls to protect sensitive patient data.'
                    },
                    1: {
                        title: 'Patient Management',
                        content: 'Each patient is represented as a unique entity with structured metadata for medical records, reports, prescriptions and medical documentation.'
                    },
                    2: {
                        title: 'Pharmaceutical Traceability',
                        content: 'Certification of drugs, medical devices and pharmaceutical documentation throughout the supply chain, from production to administration.'
                    }
                },
                highlight: 'Specialized solution for healthcare sector with maximum data security and compliance with international medical regulations.'
            },
            automotive: {
                title: 'Automotive Sector Specialization',
                sections: {
                    0: {
                        title: 'Vehicle Homologations',
                        content: 'Certification of homologation documents, safety tests, CE compliance certificates and regulatory documentation for vehicles and components.'
                    },
                    1: {
                        title: 'Vehicle Management',
                        content: 'Each vehicle is uniquely identified through chassis number, with structured metadata for maintenance, modifications and technical updates.'
                    },
                    2: {
                        title: 'Supply Chain',
                        content: 'Complete traceability of automotive supply chain, from component production to final assembly, with quality and origin certification.'
                    }
                },
                highlight: 'Specialized solution for automotive industry with focus on homologations, quality and supply chain traceability.'
            },
            generale: {
                title: 'Complete Business Solution',
                sections: {
                    0: {
                        title: 'Sectoral Flexibility',
                        content: 'Platform adaptable to any business sector, with customizable data structures for contracts, certifications, technical documentation and compliance.'
                    },
                    1: {
                        title: 'Project Management',
                        content: 'Document organization by projects, clients, suppliers with structured metadata for type, responsible, deadlines and approval status.'
                    },
                    2: {
                        title: 'Audit and Compliance',
                        content: 'Complete audit trail for regulatory compliance in any sector, with automatic reporting and monitoring dashboards.'
                    }
                },
                highlight: 'Flexible business solution that adapts to any sector while maintaining all the advantages of blockchain certification.'
            }
        },
        cloud: {
            title: 'Secure and Flexible Cloud',
            sections: {
                0: {
                    title: 'Secure Storage',
                    content: 'Files are uploaded to secure cloud storage (AWS S3 managed by Engichain) with document hosting included in subscription packages.'
                },
                1: {
                    title: 'Infrastructure Flexibility',
                    content: 'Possibility to use customer cloud or hosting on Engichain. Customer can use their own cloud or rely on cloud provided by Engichain.'
                },
                2: {
                    title: 'Authentication',
                    content: 'Support for Amazon Cognito and JWT for Single Sign-On, with monthly download limits to prevent system abuse.'
                }
            },
            highlight: 'Flexibility in choosing between Engichain cloud or your infrastructure, maintaining all platform advantages.'
        },
        ricerca: {
            title: 'Advanced Search and Filters',
            sections: {
                0: {
                    title: 'Advanced Filters',
                    content: 'Queryable database to filter documents by entity, period, intervention type or certifying authority. Search by document type, client and responsible technician.'
                },
                1: {
                    title: 'Metadata Management',
                    content: 'Structuring of all associated information (document name, type, client, entity, date, technician) in queryable database for advanced functionality.'
                },
                2: {
                    title: 'Complete History',
                    content: 'Recovery of complete history of changes associated with a single entity or client, with history consultation through user interface.'
                }
            },
            highlight: 'Structured database that allows listing all documents of a certain type on a specific entity and analyzing complete history.'
        },
        api: {
            title: 'RESTful API and Integration',
            sections: {
                0: {
                    title: 'RESTful API',
                    content: 'Endpoints for file and metadata upload, hash calculation and blockchain registration, reading certifications associated with entity or client, hash verification.'
                },
                1: {
                    title: 'Whitelabel Frontend',
                    content: 'Ready-to-use user interface, customizable with brand and logo. Allows manual document upload, metadata entry and certification history search.'
                },
                2: {
                    title: 'Integrated Authentication',
                    content: 'Support for Amazon Cognito and JWT for Single Sign-On. Simple and scalable integration with possibility to use or not Engichain cloud infrastructure.'
                }
            },
            highlight: 'Flexible choice between RESTful API for direct integration or customizable whitelabel frontend for immediate use.'
        },
        tracciabilita: {
            title: 'Complete Traceability',
            sections: {
                0: {
                    title: 'Unique Entities',
                    content: 'Each entity is represented as unique entity in the platform. Each modification/intervention is an element connected to the entity with structured metadata.'
                },
                1: {
                    title: 'Structured Metadata',
                    content: 'Each intervention includes complete metadata: intervention type, responsible, attached documentation, date, certifying authority and other associated information.'
                },
                2: {
                    title: 'Document Centralization',
                    content: 'Centralization and traceability of technical documentation with possibility to associate each document to a specific entity and activity.'
                }
            },
            highlight: 'Complete traceability that allows recovering the history of all changes associated with each entity or client.'
        }
    },
    howItWorks: {
        title: 'How Engichain Works',
        step1: {
            title: 'Data Registration',
            description: 'Each entity is registered as unique entity with structured metadata for each intervention.'
        },
        step2: {
            title: 'Cloud Upload',
            description: 'Documents are uploaded to secure cloud storage, with AWS S3 or your infrastructure.'
        },
        step3: {
            title: 'Blockchain Certification',
            description: 'The SHA-256 hash of the file is recorded on public blockchain with immutable timestamp.'
        },
        step4: {
            title: 'Verification and Integrity',
            description: 'Future verification of document integrity by recalculating hash and comparing with blockchain.'
        }
    },
    setupCosts: {
        title: 'Initial Setup Costs',
        table: {
            service: 'Service',
            cost: 'Cost',
            notes: 'Notes',
            apiIntegration: 'API or Frontend Integration',
            apiCost: '€2,000 - €5,000',
            apiNotes: 'Initial setup and customization',
            whitelabelCustomization: 'Whitelabel Customization',
            whitelabelCost: '€1,000 - €3,000',
            whitelabelNotes: 'Brand, logo and UI customizations',
            training: 'Training and Support',
            trainingCost: '€500 - €1,500',
            trainingNotes: 'Team training and documentation'
        }
    },
    monthlyPlans: {
        title: 'Monthly Plans',
        starter: {
            name: 'Starter',
            price: '€99',
            period: '/month',
            description: 'Perfect for small businesses',
            features: [
                '100 certifications/month',
                '1GB cloud storage',
                'RESTful API',
                'Email support'
            ],
            cta: 'Start Free'
        },
        professional: {
            name: 'Professional',
            price: '€299',
            period: '/month',
            description: 'Ideal for growing companies',
            features: [
                '500 certifications/month',
                '10GB cloud storage',
                'Whitelabel frontend',
                'Priority support',
                'Analytics dashboard'
            ],
            cta: 'Choose Professional',
            popular: 'Most Popular'
        },
        enterprise: {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            description: 'For large organizations',
            features: [
                'Unlimited certifications',
                'Custom storage',
                'Dedicated infrastructure',
                '24/7 support',
                'Guaranteed SLA'
            ],
            cta: 'Contact Us'
        }
    },
    contact: {
        title: 'Start Your Project',
        subtitle: 'Contact us for a free consultation and discover how Engichain can transform your company\'s document management.',
        form: {
            name: 'Full Name',
            email: 'Email',
            company: 'Company',
            phone: 'Phone',
            message: 'Describe your project and needs...',
            submit: 'Send Request',
            sending: 'Sending...',
            error: 'Error sending email. Please try again later.',
            success: 'Email sent successfully!'
        },
        success: {
            title: 'Message sent successfully!',
            message: 'Thank you for your interest in Engichain. We have received your request and will contact you within 24 hours to discuss your project.',
            close: 'Close'
        }
    },
    footer: {
        copyright: '© 2024 Engichain. All rights reserved. | Blockchain Document Certification',
        terms: 'Terms and Conditions',
        privacy: 'Privacy & Cookie Policy'
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_en;
}