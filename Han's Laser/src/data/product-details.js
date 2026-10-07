/**
 * Product Detail Data — Han's Laser Chile
 * Rich detail pages with overview features, technical comparison tables
 * and welding samples. Starting with welding machines.
 */

const PRODUCT_DETAILS = {

    // ==========================================
    // DZW PRO SERIES — WELDING
    // ==========================================
    'dzw-pro': {
        id: 'dzw-pro',
        name: 'DZW PRO Series',
        subtitle: 'Soldadora Láser Portátil Profesional',
        tagline: 'Diseño compacto, máximo potencial',
        heroImage: 'https://www.hansme.net/uploads/20250821/a0c651b56aca0657e1de7b8596720ed4.webp',
        videoUrl: 'https://www.hansme.net/uploads/20250319/7d804767c638ad806cea98a4bf3835a9.mp4',
        description: 'Menaje de cocina, ferretería, procesamiento de chapa metálica o construcción estructural, incluso proyectos DIY — la serie DZW PRO puede desplegar todas sus ventajas. Sus funciones potentes y métodos de trabajo eficientes la convierten en una herramienta indispensable en múltiples industrias.',
        overview: [
            {
                title: 'Método de Enfriamiento',
                description: 'Todas las potencias están refrigeradas por agua, lo que extiende la vida del láser y reduce la tasa de fallas; la calidad del cordón de soldadura es más estable.',
                image: 'https://www.hansme.net/uploads/20250821/0f9f88b5ceeec4a64b288fb84df1f10a.webp',
                layout: 'vertical'
            },
            {
                title: 'Fácil de Transportar',
                description: 'Cuatro ruedas universales y cuatro hebillas en la parte inferior son resistentes al aceite, suciedad e impactos. Confiables y duraderas, fáciles de mover, se pueden fijar en cualquier momento.',
                image: 'https://www.hansme.net/uploads/20251202/c928f92d882ff7414aef2f0201df3907.webp',
                layout: 'vertical'
            },
            {
                title: 'Pistola de Soldadura Profesional',
                description: [
                    'Todos los parámetros son visibles, con múltiples alarmas de seguridad para prevenir problemas y facilitar la resolución de fallas.',
                    'Espejos de protección/enfoque tipo cajón mejoran el acceso de mantenimiento. Módulos integrados colimador-QBH permiten reemplazo plug-and-play en sitio.'
                ],
                image: 'https://www.hansme.net/uploads/20251202/631ef48f103037361a26c76eb3813c96.webp',
                layout: 'vertical'
            },
            {
                title: 'Corte, Remoción de Óxido y Limpieza de Cordón',
                description: [
                    'Para placas delgadas (≤3mm), solo cambiando la boquilla, sin cambiar la pistola.',
                    'Limpia superficies con óxido y pintura hasta 120mm de ancho con solo cambiar la boquilla.',
                    'Limpia cordones de soldadura de 5mm de ancho con solo cambiar la boquilla.'
                ],
                image: 'https://www.hansme.net/uploads/20251202/22b678f04f21e3af2fcf62837e6ba7f9.webp',
                layout: 'horizontal'
            },
            {
                title: 'Alimentador de Alambre Portátil',
                description: [
                    'Nuevo diseño de soldadura láser inteligente asegura alimentación automática de alambre estable y calidad de soldadura premium.',
                    'Control de alambre multi-modo (automático/manual/retirar/reponer) se adapta a las demandas de producción.',
                    'Soporta alambres de Ø 0.8, 1.0, 1.2, 1.6 y 2.0 mm.'
                ],
                image: 'https://www.hansme.net/uploads/20251202/e88b276bb88b2c096fd8c683d93cfa18.webp',
                layout: 'vertical'
            },
            {
                title: 'Láser Altamente Integrado',
                description: [
                    '67% más pequeño y 50% más ligero con diseño completamente sellado a prueba de polvo y humedad para operación sostenida.',
                    'App móvil permite monitoreo en tiempo real del láser (potencia, configuraciones, códigos de error) para mantenimiento rápido.',
                    '1500/2000W: 25μm (10m); 3000W: 50μm (12m). Fibras ultra largas para piezas grandes y condiciones diversas.'
                ],
                image: 'https://www.hansme.net/uploads/20251202/b7c48b94691bbe1af298f13bcb2fb658.webp',
                layout: 'vertical'
            }
        ],
        weldingSamples: [
            'https://www.hansme.net/uploads/20251202/8d255b45e544f37c33dfa57f3f548a43.webp',
            'https://www.hansme.net/uploads/20251202/f788a53ce8971ce79f349b36201ca6e2.webp',
            'https://www.hansme.net/uploads/20251202/a014d161ef58fc344ec16c0be1b8228c.webp'
        ],
        technicalDisclaimer: '* Solo como referencia, todos los datos están sujetos a los documentos técnicos reales.',
        technicalModels: ['DZW-1500W', 'DZW-2000W', 'DZW-3000W'],
        technicalData: {
            labels: [
                'Espesor máx. de chapa',
                'Potencia máx. total',
                'Longitud de onda láser',
                'Velocidad de soldadura',
                'Grieta de soldadura',
                'Alimentación eléctrica',
                'Temperatura ambiente',
                'Humedad ambiente',
                'Peso de la máquina',
                'Dimensiones (A×P×H)'
            ],
            models: [
                {
                    name: 'DZW-1500W',
                    image: 'https://www.hansme.net/uploads/20250318/7eb19186332b4ce95377265f2453b8f8.png',
                    values: [
                        'Ac. Inox: 0.6-4.0mm / Ac. Carbono: 0.6-5.0mm / Aluminio: 0.6-3.0mm',
                        '8.5 kW',
                        '1064 ± 10 nm',
                        '—',
                        'Sin aporte ≤ 0.3',
                        'AC220V, 50Hz',
                        '10°C ~ 40°C',
                        '< 70% (sin condensación)',
                        '102 kg',
                        'L1080 × W580 × H780 mm'
                    ]
                },
                {
                    name: 'DZW-2000W',
                    image: 'https://www.hansme.net/uploads/20250318/7eb19186332b4ce95377265f2453b8f8.png',
                    values: [
                        'Ac. Inox: 0.6-5.0mm / Ac. Carbono: 0.6-6.0mm / Aluminio: 0.6-4.0mm',
                        '11 kW',
                        '1064 ± 10 nm',
                        '0 – 600 cm/min (varía según modelo, espesor y pieza)',
                        'Con aporte ≤ 0.5',
                        'AC220V, 50Hz',
                        '10°C ~ 40°C',
                        '< 70% (sin condensación)',
                        '111 kg',
                        'L1080 × W580 × H780 mm'
                    ]
                },
                {
                    name: 'DZW-3000W',
                    image: 'https://www.hansme.net/uploads/20250318/7eb19186332b4ce95377265f2453b8f8.png',
                    values: [
                        'Ac. Inox: 0.6-8.0mm / Ac. Carbono: 0.6-8.0mm / Aluminio: 0.6-6.0mm',
                        '11 kW',
                        '1064 ± 10 nm',
                        '—',
                        '—',
                        'AC380V, 50Hz',
                        '10°C ~ 40°C',
                        '< 70% (sin condensación)',
                        '145 kg',
                        'L1100 × W580 × H900 mm'
                    ]
                }
            ]
        },
        relatedProducts: ['mps-hw', 'w-series']
    },

    // ==========================================
    // MPS-HW SERIES — WELDING
    // ==========================================
    'mps-hw': {
        id: 'mps-hw',
        name: 'MPS-HW Series',
        subtitle: 'Sistema de Soldadura Láser Industrial',
        tagline: 'Alta velocidad de soldadura / Ahorro de costos — 1000W-2000W disponible',
        heroImage: 'https://www.hansme.net/uploads/20250318/59b7587b6627b935c8a7b7f36cbe61ee.png',
        description: 'La serie MPS-HW es un sistema de soldadura láser industrial diseñado para integrarse en líneas de producción automatizadas. Ofrece alta estabilidad, repetibilidad excepcional y rendimiento continuo para aplicaciones de manufactura de gran volumen.',
        overview: [
            {
                title: 'Alta Velocidad de Soldadura',
                description: 'Sistema diseñado para líneas de producción con alta velocidad y bajo costo operativo. Disponible en 1000W y 2000W para adaptarse a diferentes necesidades industriales.',
                image: 'https://www.hansme.net/uploads/20250318/59b7587b6627b935c8a7b7f36cbe61ee.png',
                layout: 'horizontal'
            },
            {
                title: 'Integración con Automatización',
                description: 'Compatible con robots industriales, posicionadores y ejes rotativos para realizar soldadura automática completa. Se integra perfectamente en flujos de trabajo existentes.',
                image: 'https://www.hansme.net/uploads/20250318/59b7587b6627b935c8a7b7f36cbe61ee.png',
                layout: 'vertical'
            }
        ],
        technicalDisclaimer: '* Solo como referencia, todos los datos están sujetos a los documentos técnicos reales.',
        technicalModels: ['MPS-HW'],
        technicalData: {
            labels: [
                'Potencia disponible',
                'Tipo de equipo',
                'Aplicación principal',
                'Compatibilidad'
            ],
            models: [
                {
                    name: 'MPS-HW',
                    values: [
                        '1000W / 2000W',
                        'Sistema de soldadura láser industrial',
                        'Líneas de producción automatizadas',
                        'Robots, posicionadores, ejes rotativos'
                    ]
                }
            ]
        },
        relatedProducts: ['dzw-pro', 'w-series']
    },

    // ==========================================
    // W SERIES — WELDING
    // ==========================================
    'w-series': {
        id: 'w-series',
        name: 'W Series',
        subtitle: 'Soldadora Láser Manual Portátil',
        tagline: 'Soldadora láser manual — Refrigeración por agua o aire',
        heroImage: 'https://www.hansme.net/uploads/20251202/1b6926856623d2880a754c78ba0ec288.webp',
        description: 'La serie W es una soldadora láser manual disponible con refrigeración por agua (HW1500W / HW2000W) o por aire (HW1500WF-IPG / HW1500-HL). Diseñada para máxima portabilidad y facilidad de uso en campo.',
        overview: [
            {
                title: 'Ultra Portátil',
                description: 'Diseño compacto y ligero que permite llevar la soldadura láser a cualquier lugar. Ideal para trabajo en campo y reparaciones in situ.',
                image: 'https://www.hansme.net/uploads/20251202/1b6926856623d2880a754c78ba0ec288.webp',
                layout: 'vertical'
            },
            {
                title: 'Fácil Operación',
                description: 'Interfaz intuitiva que permite a operadores comenzar a trabajar rápidamente. Mínima curva de aprendizaje con máxima calidad de soldadura.',
                image: 'https://www.hansme.net/uploads/20251202/1b6926856623d2880a754c78ba0ec288.webp',
                layout: 'vertical'
            }
        ],
        technicalDisclaimer: '* Solo como referencia, todos los datos están sujetos a los documentos técnicos reales.',
        technicalModels: ['HW1500W', 'HW2000W', 'HW1500WF-IPG'],
        technicalData: {
            labels: [
                'Tipo de equipo',
                'Refrigeración',
                'Potencia',
                'Aplicación principal'
            ],
            models: [
                {
                    name: 'HW1500W',
                    values: [
                        'Soldadora láser manual portátil',
                        'Agua',
                        '1500W',
                        'Trabajo en campo, reparaciones'
                    ]
                },
                {
                    name: 'HW2000W',
                    values: [
                        'Soldadora láser manual portátil',
                        'Agua',
                        '2000W',
                        'Trabajo en campo, reparaciones'
                    ]
                },
                {
                    name: 'HW1500WF-IPG',
                    values: [
                        'Soldadora láser manual portátil',
                        'Aire',
                        '1500W',
                        'Trabajo en campo, instalaciones'
                    ]
                }
            ]
        },
        relatedProducts: ['dzw-pro', 'mps-hw']
    }
};
