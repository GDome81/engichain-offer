// Traduzioni italiane per Engichain
const translations_it = {
    nav: {
        home: 'Home',
        features: 'Funzionalità',
        howItWorks: 'Come Funziona',
        pricing: 'Prezzi',
        contact: 'Contatti'
    },
    sectors: {
        nautico: '⚓ Nautico',
        sanitario: '🏥 Sanitario',
        automotive: '🚗 Automotive',
        generale: '📋 Generale'
    },
    hero: {
        nautico: {
            subtitle: 'Certificazione Documentale via Blockchain per il Settore Nautico',
            description1: 'Engichain è una piattaforma che offre una <strong>soluzione completa di certificazione documentale blockchain</strong> con architettura flessibile e scalabile. Per i nostri clienti, questo significa poter associare ogni documento (es. relazioni tecniche, certificazioni, disegni) a una specifica imbarcazione e attività, con la garanzia che il documento sia autenticabile nel tempo.',
            description2: 'Oltre alla certificazione dell\'hash del file su blockchain, Engichain struttura tutte le informazioni associate (nome documento, tipo, cliente, imbarcazione, data, tecnico, ecc.) in un database interrogabile. Questo permette funzionalità di ricerca e analisi avanzate, ad esempio:',
            feature1: 'elencare tutti i documenti di un certo tipo su una specifica imbarcazione;',
            feature2: 'filtrare per periodo, tipo di intervento o ente certificatore;',
            feature3: 'recuperare la storia completa delle modifiche associate a una singola imbarcazione o cliente.'
        },
        sanitario: {
            subtitle: 'Certificazione Documentale via Blockchain per il Settore Sanitario',
            description1: 'Engichain offre una <strong>soluzione completa di certificazione blockchain</strong> per il settore sanitario. Certifica cartelle cliniche, referti medici, certificazioni farmaceutiche e documentazione sanitaria con garanzia di integrità e tracciabilità nel tempo.',
            description2: 'La piattaforma struttura tutte le informazioni associate (tipo documento, paziente, medico, struttura sanitaria, data, ecc.) in un database sicuro e interrogabile. Questo permette funzionalità avanzate per il settore sanitario:',
            feature1: 'certificazione di referti medici e cartelle cliniche con garanzia di immutabilità;',
            feature2: 'tracciamento di farmaci e dispositivi medici lungo la filiera;',
            feature3: 'garanzia di conformità GDPR e standard sanitari internazionali.'
        },
        automotive: {
            subtitle: 'Certificazione Documentale via Blockchain per il Settore Automotive',
            description1: 'Engichain offre una <strong>soluzione blockchain specializzata per l\'industria automotive</strong> che certifica documenti tecnici, certificazioni di qualità, manuali di manutenzione e documentazione di conformità per veicoli e componenti.',
            description2: 'La piattaforma organizza informazioni come modello veicolo, numero telaio, fornitore, data produzione, tecnico responsabile in un database strutturato. Funzionalità specifiche per l\'automotive:',
            feature1: 'certificazione di documenti di omologazione e conformità normativa;',
            feature2: 'tracciamento della storia completa di manutenzioni e modifiche per ogni veicolo;',
            feature3: 'garanzia di autenticità di manuali tecnici e procedure di sicurezza.'
        },
        generale: {
            subtitle: 'Certificazione Documentale via Blockchain',
            description1: 'Engichain è una <strong>soluzione completa di certificazione blockchain</strong> per la certificazione di qualsiasi tipo di documento. Ideale per contratti, certificazioni, relazioni tecniche, documentazione di qualità e conformità in ogni settore.',
            description2: 'La piattaforma adatta la sua struttura dati alle specifiche esigenze aziendali, organizzando informazioni come cliente, progetto, responsabile, data, tipo documento. Vantaggi aziendali:',
            feature1: 'certificazione di qualsiasi documento con garanzia di integrità nel tempo;',
            feature2: 'organizzazione e ricerca documenti per cliente, progetto o tipologia;',
            feature3: 'garanzia di conformità normativa e audit trail completo per ogni settore.'
        },
        cta: 'Inizia Ora'
    },
    features: {
        blockchain: {
            title: 'Sicurezza Blockchain',
            description: 'Certificazione immutabile su blockchain pubblica con garanzia di integrità e timestamp.'
        },
        settore: {
            nautico: {
                title: 'Settore Nautico',
                description: 'Soluzione specializzata per certificare modifiche tecniche su imbarcazioni e conformità normative ISO.'
            },
            sanitario: {
                title: 'Settore Sanitario',
                description: 'Certificazione sicura per cartelle cliniche, referti medici e documentazione farmaceutica con conformità GDPR.'
            },
            automotive: {
                title: 'Settore Automotive',
                description: 'Tracciabilità completa per documenti tecnici, omologazioni e storia manutenzione veicoli.'
            },
            generale: {
                title: 'Certificazione',
                description: 'Certificazione blockchain per qualsiasi tipo di documento e conformità normativa.'
            }
        },
        cloud: {
            title: 'Cloud Sicuro e Flessibile',
            description: 'Hosting sicuro con possibilità di utilizzare il cloud del cliente o l\'infrastruttura Engichain.'
        },
        ricerca: {
            nautico: {
                title: 'Ricerca Avanzata',
                description: 'Database interrogabile per filtrare documenti per imbarcazione, periodo, tipo intervento o ente certificatore.'
            },
            sanitario: {
                title: 'Ricerca Sicura',
                description: 'Database protetto per ricerca documenti per paziente, medico, struttura sanitaria o tipologia.'
            },
            automotive: {
                title: 'Ricerca Tecnica',
                description: 'Sistema di ricerca per veicolo, numero telaio, modello, fornitore o tipo intervento.'
            },
            generale: {
                title: 'Ricerca Avanzata',
                description: 'Database flessibile per filtrare documenti per cliente, progetto, data o tipo documento.'
            }
        },
        api: {
            title: 'API RESTful',
            description: 'Integrazione semplice tramite API REST o frontend whitelabel personalizzabile.'
        },
        tracciabilita: {
            nautico: {
                title: 'Tracciabilità Completa',
                description: 'Storia completa di tutte le modifiche associate a ogni imbarcazione o cliente.'
            },
            sanitario: {
                title: 'Tracciabilità Sanitaria',
                description: 'Storia completa di documenti medici e farmaceutici con audit trail sicuro e conforme GDPR.'
            },
            automotive: {
                title: 'Tracciabilità Veicolo',
                description: 'Storia completa di manutenzioni, modifiche e certificazioni per ogni veicolo.'
            },
            generale: {
                title: 'Tracciabilità Aziendale',
                description: 'Storia completa di tutti i documenti associati a clienti, progetti o attività aziendali.'
            }
        }
    },
    modals: {
        whyImportant: 'Perché è importante',
        blockchain: {
            title: 'Sicurezza Blockchain',
            sections: {
                0: {
                    title: 'Tecnologia Immutabile',
                    content: 'Utilizziamo blockchain pubbliche come Ethereum e Algorand per garantire che ogni hash documentale sia permanentemente registrato e non modificabile. Una volta scritto sulla blockchain, nessuno può alterare o cancellare la certificazione.'
                },
                1: {
                    title: 'Marca Temporale Certificata',
                    content: 'L\'hash viene registrato su blockchain pubblica insieme a una marca temporale, garantendo immutabilità e data certa della certificazione.'
                },
                2: {
                    title: 'Verifica Indipendente',
                    content: 'In qualunque momento si può dimostrare che un file è identico a quello certificato, ricalcolando l\'hash SHA-256 e confrontandolo con quello registrato sulla blockchain.'
                }
            },
            highlight: 'La blockchain garantisce immutabilità e data certa della certificazione, fornendo prova di integrità senza esporre i contenuti del documento.'
        },
        settore: {
            nautico: {
                title: 'Specializzazione Settore Nautico',
                sections: {
                    0: {
                        title: 'Conformità Normativa',
                        content: 'Supporto completo per le normative del settore nautico, incluse certificazioni ISO, MCA e altre autorità marittime internazionali.'
                    },
                    1: {
                        title: 'Gestione Imbarcazioni',
                        content: 'Ogni imbarcazione è rappresentata come entità unica nella piattaforma, con metadati strutturati per ogni intervento o modifica tecnica.'
                    },
                    2: {
                        title: 'Documentazione Tecnica',
                        content: 'Certificazione di relazioni tecniche, disegni, certificati di conformità e documentazione di modifiche strutturali o impiantistiche.'
                    }
                },
                highlight: 'Soluzione specializzata che comprende le specificità del settore nautico e garantisce conformità alle normative marittime internazionali.'
            },
            sanitario: {
                title: 'Specializzazione Settore Sanitario',
                sections: {
                    0: {
                        title: 'Conformità GDPR',
                        content: 'Piena conformità al Regolamento Generale sulla Protezione dei Dati, con crittografia avanzata e controlli di accesso per proteggere i dati sensibili dei pazienti.'
                    },
                    1: {
                        title: 'Gestione Pazienti',
                        content: 'Ogni paziente è rappresentato come entità unica con metadati strutturati per cartelle cliniche, referti, prescrizioni e documentazione medica.'
                    },
                    2: {
                        title: 'Tracciabilità Farmaceutica',
                        content: 'Certificazione di farmaci, dispositivi medici e documentazione farmaceutica lungo tutta la filiera, dalla produzione alla somministrazione.'
                    }
                },
                highlight: 'Soluzione specializzata per il settore sanitario con massima sicurezza dei dati e conformità alle normative mediche internazionali.'
            },
            automotive: {
                title: 'Specializzazione Settore Automotive',
                sections: {
                    0: {
                        title: 'Omologazioni Veicoli',
                        content: 'Certificazione di documenti di omologazione, test di sicurezza, certificati di conformità CE e documentazione normativa per veicoli e componenti.'
                    },
                    1: {
                        title: 'Gestione Veicoli',
                        content: 'Ogni veicolo è identificato univocamente tramite numero telaio, con metadati strutturati per manutenzioni, modifiche e aggiornamenti tecnici.'
                    },
                    2: {
                        title: 'Supply Chain',
                        content: 'Tracciabilità completa della filiera automotive, dalla produzione componenti all\'assemblaggio finale, con certificazione di qualità e origine.'
                    }
                },
                highlight: 'Soluzione specializzata per l\'industria automotive con focus su omologazioni, qualità e tracciabilità della supply chain.'
            },
            generale: {
                title: 'Soluzione Aziendale Completa',
                sections: {
                    0: {
                        title: 'Flessibilità Settoriale',
                        content: 'Piattaforma adattabile a qualsiasi settore aziendale, con strutture dati personalizzabili per contratti, certificazioni, documentazione tecnica e conformità.'
                    },
                    1: {
                        title: 'Gestione Progetti',
                        content: 'Organizzazione documenti per progetti, clienti, fornitori con metadati strutturati per tipologia, responsabile, scadenze e stato approvazione.'
                    },
                    2: {
                        title: 'Audit e Compliance',
                        content: 'Audit trail completo per conformità normativa in qualsiasi settore, con reportistica automatica e dashboard di monitoraggio.'
                    }
                },
                highlight: 'Soluzione aziendale flessibile che si adatta a qualsiasi settore mantenendo tutti i vantaggi della certificazione blockchain.'
            }
        },
        cloud: {
            title: 'Cloud Sicuro e Flessibile',
            sections: {
                0: {
                    title: 'Storage Sicuro',
                    content: 'I file vengono caricati in cloud storage sicuro (AWS S3 gestito da Engichain) con hosting documenti incluso nei pacchetti in abbonamento.'
                },
                1: {
                    title: 'Flessibilità Infrastruttura',
                    content: 'Possibilità di utilizzare il cloud del cliente o hosting su Engichain. Il cliente può utilizzare il proprio cloud o affidarsi al cloud fornito da Engichain.'
                },
                2: {
                    title: 'Autenticazione',
                    content: 'Supporto per Amazon Cognito e JWT per Single Sign-On, con limiti di download mensili per prevenire abusi del sistema.'
                }
            },
            highlight: 'Flessibilità nella scelta tra cloud Engichain o la vostra infrastruttura, mantenendo tutti i vantaggi della piattaforma.'
        },
        ricerca: {
            title: 'Ricerca Avanzata e Filtri',
            sections: {
                0: {
                    title: 'Filtri Avanzati',
                    content: 'Database interrogabile per filtrare documenti per entità, periodo, tipo intervento o ente certificatore. Ricerca per tipo documento, cliente e tecnico responsabile.'
                },
                1: {
                    title: 'Gestione Metadati',
                    content: 'Strutturazione di tutte le informazioni associate (nome documento, tipo, cliente, entità, data, tecnico) in database interrogabile per funzionalità avanzate.'
                },
                2: {
                    title: 'Storia Completa',
                    content: 'Recupero della storia completa delle modifiche associate a una singola entità o cliente, con consultazione della cronologia tramite interfaccia utente.'
                }
            },
            highlight: 'Database strutturato che permette di elencare tutti i documenti di un certo tipo su una specifica entità e analizzare la storia completa.'
        },
        api: {
            title: 'API RESTful e Integrazione',
            sections: {
                0: {
                    title: 'API RESTful',
                    content: 'Endpoint per upload file e metadati, calcolo hash e registrazione blockchain, lettura certificazioni associate a entità o cliente, verifica hash.'
                },
                1: {
                    title: 'Frontend Whitelabel',
                    content: 'Interfaccia utente pronta all\'uso, personalizzabile con brand e logo. Permette upload manuale documenti, inserimento metadati e ricerca cronologia certificazioni.'
                },
                2: {
                    title: 'Autenticazione Integrata',
                    content: 'Supporto per Amazon Cognito e JWT per Single Sign-On. Integrazione semplice e scalabile con possibilità di utilizzare o meno l\'infrastruttura cloud di Engichain.'
                }
            },
            highlight: 'Scelta flessibile tra API RESTful per integrazione diretta o frontend whitelabel personalizzabile per utilizzo immediato.'
        },
        tracciabilita: {
            title: 'Tracciabilità Completa',
            sections: {
                0: {
                    title: 'Entità Univoche',
                    content: 'Ogni entità viene rappresentata come entità unica nella piattaforma. Ogni modifica/intervento è un elemento collegato all\'entità con metadati strutturati.'
                },
                1: {
                    title: 'Metadati Strutturati',
                    content: 'Ogni intervento include metadati completi: tipo intervento, responsabile, documentazione allegata, data, ente certificatore e altre informazioni associate.'
                },
                2: {
                    title: 'Centralizzazione Documenti',
                    content: 'Centralizzazione e tracciabilità della documentazione tecnica con possibilità di associare ogni documento a una specifica entità e attività.'
                }
            },
            highlight: 'Tracciabilità completa che permette di recuperare la storia di tutte le modifiche associate a ogni entità o cliente.'
        }
    },
    howItWorks: {
        title: 'Come Funziona Engichain',
        step1: {
            title: 'Registrazione Dati',
            description: 'Ogni entità viene registrata come entità unica con metadati strutturati per ogni intervento.'
        },
        step2: {
            title: 'Upload Cloud',
            description: 'I documenti vengono caricati in cloud storage sicuro, con AWS S3 o la vostra infrastruttura.'
        },
        step3: {
            title: 'Certificazione Blockchain',
            description: 'L\'hash SHA-256 del file viene registrato su blockchain pubblica con timestamp immutabile.'
        },
        step4: {
            title: 'Verifica e Integrità',
            description: 'Verifica futura dell\'integrità del documento ricalcolando l\'hash e confrontandolo con la blockchain.'
        }
    },
    setupCosts: {
        title: 'Costi di Setup Iniziale',
        table: {
            service: 'Servizio',
            cost: 'Costo',
            notes: 'Note',
            apiIntegration: 'Integrazione API o Frontend',
            apiCost: '€2.000 - €5.000',
            apiNotes: 'Setup iniziale e personalizzazione',
            whitelabelCustomization: 'Personalizzazione Whitelabel',
            whitelabelCost: '€1.000 - €3.000',
            whitelabelNotes: 'Brand, logo e personalizzazioni UI',
            training: 'Formazione e Supporto',
            trainingCost: '€500 - €1.500',
            trainingNotes: 'Formazione team e documentazione'
        }
    },
    monthlyPlans: {
        title: 'Piani Mensili',
        starter: {
            name: 'Starter',
            price: '€99',
            period: '/mese',
            description: 'Perfetto per piccole aziende',
            features: [
                '100 certificazioni/mese',
                '1GB storage cloud',
                'API RESTful',
                'Supporto email'
            ],
            cta: 'Inizia Gratis'
        },
        professional: {
            name: 'Professional',
            price: '€299',
            period: '/mese',
            description: 'Ideale per aziende in crescita',
            features: [
                '500 certificazioni/mese',
                '10GB storage cloud',
                'Frontend whitelabel',
                'Supporto prioritario',
                'Dashboard analytics'
            ],
            cta: 'Scegli Professional',
            popular: 'Più Popolare'
        },
        enterprise: {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            description: 'Per grandi organizzazioni',
            features: [
                'Certificazioni illimitate',
                'Storage personalizzato',
                'Infrastruttura dedicata',
                'Supporto 24/7',
                'SLA garantito'
            ],
            cta: 'Contattaci'
        }
    },
    contact: {
        title: 'Inizia il Tuo Progetto',
        subtitle: 'Contattaci per una consulenza gratuita e scopri come Engichain può trasformare la gestione documentale della tua azienda.',
        form: {
            name: 'Nome Completo',
            email: 'Email',
            company: 'Azienda',
            phone: 'Telefono',
            message: 'Descrivi il tuo progetto e le tue esigenze...',
            submit: 'Invia Richiesta',
            sending: 'Invio in corso...',
            error: 'Errore nell\'invio dell\'email. Riprova più tardi.',
            success: 'Email inviata con successo!'
        },
        success: {
            title: 'Messaggio inviato con successo!',
            message: 'Grazie per il tuo interesse in Engichain. Abbiamo ricevuto la tua richiesta e ti contatteremo entro 24 ore per discutere del tuo progetto.',
            close: 'Chiudi'
        }
    },
    footer: {
        copyright: '© 2024 Engichain. Tutti i diritti riservati. | Certificazione Documentale Blockchain',
        terms: 'Termini e Condizioni',
        privacy: 'Privacy & Cookie Policy'
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_it;
}