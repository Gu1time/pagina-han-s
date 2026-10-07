/**
 * Products Data — Han's Laser Chile
 * ===================================
 * Complete product catalog based on hansme.net analysis.
 * All 6 categories: 2D Laser Cutting, Tube Cutting, 3D Cutting, Bending, Welding, Automation
 * 
 * Campos:
 *  - id: identificador único
 *  - name: nombre del producto
 *  - category: slug de la categoría
 *  - categoryLabel: nombre visible de la categoría
 *  - tagline: descripción corta (1 línea)
 *  - power: rango de potencia
 *  - sizes: formatos disponibles
 *  - image: URL de imagen (desde hansme.net)
 *  - badge: etiqueta especial (opcional)
 *  - highlights: características principales
 *  - specs: especificaciones técnicas [{label, value}]
 *  - detailUrl: URL en hansme.net para más info
 */

const PRODUCT_CATEGORIES = [
    { id: 'all', label: 'Todos', icon: '⊞' },
    { id: 'soldadura', label: 'Soldadura Láser', icon: '⚡' },
    { id: 'corte-2d', label: 'Corte Láser 2D', icon: '◻' },
    { id: 'corte-tubo', label: 'Corte de Tubos', icon: '◎' },
    { id: 'corte-3d', label: 'Corte Láser 3D', icon: '◇' },
    { id: 'plegado', label: 'Plegadoras', icon: '⌐' },
    { id: 'automatizacion', label: 'Automatización', icon: '⚙' }
];

const PRODUCTS = [
    // ==========================================
    // 2D LASER CUTTING (17 products)
    // ==========================================
    {
        id: 'hf-expert',
        name: 'HF Expert',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Máquina de corte láser de alta productividad',
        power: '6 – 60 kW',
        sizes: '3015 / 4020 / 6025 / 8025',
        image: 'https://www.hansme.net/uploads/20250725/e22c695eda3e86dae1e2dd5486446991.webp',
        badge: 'Top Ventas',
        highlights: [
            'Seguridad láser OD 5+ completamente cerrada',
            'Alta velocidad: 280m/min, aceleración 3g',
            'Diseño compacto con componentes integrados',
            'Sistema de aspiración de polvo por zonas',
            'Ahorro de gas hasta 67% con corte a baja presión N2',
            'Dispositivo Mix-M patentado para acero grueso'
        ],
        specs: [
            { label: 'Potencia disponible', value: '6kW / 12kW / 20kW / 30kW / 40kW / 50kW / 60kW' },
            { label: 'Área de trabajo (G3015)', value: '3100 × 1600 mm' },
            { label: 'Velocidad máx. ejes (X/Y)', value: '280 m/min' },
            { label: 'Aceleración máx.', value: '3g' },
            { label: 'Precisión', value: '0.03 mm' },
            { label: 'Repetibilidad', value: '0.02 mm' },
            { label: 'Peso máx. chapa (G3015)', value: '2,150 kg/mesa' },
            { label: 'Peso máx. chapa (G8025)', value: '9,600 kg/mesa' }
        ],
        detailUrl: 'https://www.hansme.net/detail/HF_Expert_Series'
    },
    {
        id: 'hf-s-smart',
        name: 'HF S Smart',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Corte láser de alta productividad inteligente',
        power: '6 – 40 kW',
        sizes: '3015 / 4020 / 6020 / 6025 / 8025 / 12025',
        image: 'https://www.hansme.net/uploads/20251113/e018dd198fe84918dd5dbe43eff75475.webp',
        highlights: [
            'Productividad optimizada para grandes formatos',
            'Hasta formato 12025 disponible',
            'Sistema CNC avanzado de Han\'s Laser'
        ],
        specs: [
            { label: 'Potencia disponible', value: '6kW / 12kW / 20kW / 30kW / 40kW' },
            { label: 'Formatos', value: '3015 / 4020 / 6020 / 6025 / 8025 / 12025' }
        ],
        detailUrl: 'https://www.hansme.net/detail/HF_S_Smart'
    },
    {
        id: 'hf-s-standard',
        name: 'HF S Standard',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Corte láser estándar de alta productividad',
        power: '6 – 40 kW',
        sizes: '3015 / 4020 / 6020 / 6025 / 8025 / 12025',
        image: 'https://www.hansme.net/uploads/20251113/e018dd198fe84918dd5dbe43eff75475.webp',
        highlights: [
            'Solución estándar de alto rendimiento',
            'Gran variedad de formatos',
            'Óptima relación costo-beneficio'
        ],
        specs: [
            { label: 'Potencia disponible', value: '6kW / 12kW / 20kW / 30kW / 40kW' },
            { label: 'Formatos', value: '3015 / 4020 / 6020 / 6025 / 8025 / 12025' }
        ],
        detailUrl: 'https://www.hansme.net/detail/HF_S_Standard'
    },
    {
        id: 'mini-s',
        name: 'MINI S',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Herramienta de corte láser inteligente — Nivel de entrada',
        power: '3 – 12 kW',
        sizes: 'Compacto',
        image: 'https://www.hansme.net/uploads/20251212/c40683d770fbe47083cf918f0d8b1c5d.webp',
        badge: 'Económica',
        highlights: [
            'Máquina de nivel de entrada costo-efectiva',
            'Ideal para talleres medianos',
            'Diseño inteligente y compacto'
        ],
        specs: [
            { label: 'Potencia disponible', value: '3kW / 6kW / 12kW' },
            { label: 'Tipo', value: 'Nivel de entrada' }
        ],
        detailUrl: 'https://www.hansme.net/detail/MINI_S'
    },
    {
        id: 'hf-mini',
        name: 'HF Mini',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Cortadora láser costo-efectiva',
        power: '6 – 40 kW',
        sizes: '3015 / 4020',
        image: 'https://www.hansme.net/uploads/20250725/981a3b878edb37b79b59cd30e4d599a1.webp',
        highlights: [
            'Excelente relación precio-rendimiento',
            'Potencia de hasta 40kW en formato compacto',
            'Ideal para producción de piezas'
        ],
        specs: [
            { label: 'Potencia disponible', value: '6kW / 12kW / 20kW / 30kW / 40kW' },
            { label: 'Formatos', value: '3015 / 4020' }
        ],
        detailUrl: 'https://www.hansme.net/detail/HF_Mini'
    },
    {
        id: 'hf-series',
        name: 'HF Series',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Máquina de corte láser de alta velocidad',
        power: '6 – 60 kW',
        sizes: '3015 / 4020 / 6025 / 8025 / 10025 / 12025 / 12030',
        image: 'https://www.hansme.net/uploads/20260402/76c1f91d18dc7fab1e803513757c0e91.webp',
        badge: 'Alta Velocidad',
        highlights: [
            'Máxima velocidad de corte',
            'Formatos desde 3015 hasta 12030',
            'Ultra alta potencia hasta 60kW'
        ],
        specs: [
            { label: 'Potencia disponible', value: '6kW / 12kW / 20kW / 30kW / 40kW / 50kW / 60kW' },
            { label: 'Formatos', value: '3015 a 12030' }
        ],
        detailUrl: 'https://www.hansme.net/detail/HF_Series'
    },
    {
        id: 'f-master',
        name: 'F Master Series',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Máquina de corte láser de alta precisión',
        power: '3 – 60 kW',
        sizes: '3 a 12 metros',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        badge: 'Alta Precisión',
        highlights: [
            'Precisión excepcional',
            'Formatos de 3 a 12 metros',
            'Amplio rango de potencias'
        ],
        specs: [
            { label: 'Potencia disponible', value: '3kW a 60kW' },
            { label: 'Formatos', value: '3 a 12 metros' }
        ],
        detailUrl: 'https://www.hansme.net/detail/F_Master_Series'
    },
    {
        id: 'g-o-series',
        name: 'G-O Series',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Cortadora láser de metal — Diseño compacto',
        power: '3 – 20 kW',
        sizes: 'Compacto',
        image: 'https://www.hansme.net/uploads/20250714/2290e9492473f0742b18a077cf77e326.webp',
        highlights: [
            'Diseño compacto',
            'Estructura segura y confiable',
            'Sistema CNC HAN\'S'
        ],
        specs: [
            { label: 'Potencia disponible', value: '3kW a 20kW' },
            { label: 'Sistema CNC', value: 'HAN\'S CNC' }
        ],
        detailUrl: 'https://www.hansme.net/detail/G-O_Series'
    },
    {
        id: 'g3015-o-pro',
        name: 'G3015-O PRO',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Cortadora láser de fibra con plataforma única',
        power: '3 – 20 kW',
        sizes: '3015',
        image: 'https://www.hansme.net/uploads/20251212/8fa71e7d180ee672af8ad56173d81a65.webp',
        highlights: [
            'Totalmente cerrada / cubierta de pórtico disponible',
            'Plataforma única',
            'Potencia de 3 a 20kW'
        ],
        specs: [
            { label: 'Potencia disponible', value: '3kW a 20kW' },
            { label: 'Opciones de cubierta', value: 'Totalmente cerrada / Cubierta de pórtico' }
        ],
        detailUrl: 'https://www.hansme.net/detail/G3015-O_PRO'
    },
    {
        id: 'g-j-series',
        name: 'G-J Series',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Reducir costos, maximizar eficiencia',
        power: '3 – 40 kW',
        sizes: '3 a 6 metros',
        image: 'https://www.hansme.net/uploads/20251113/e2364bc6f781a8ff8b534a963eed6abb.webp',
        highlights: [
            'Óptimo costo-beneficio',
            'Formatos de 3 a 6 metros',
            'Potencia hasta 40kW'
        ],
        specs: [
            { label: 'Potencia disponible', value: '3kW a 40kW' },
            { label: 'Formatos', value: '3 a 6 metros' }
        ],
        detailUrl: 'https://www.hansme.net/detail/G-J_Series'
    },
    {
        id: 'mps-d3',
        name: 'MPS-D3',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Cortadora láser de fibra abierta — Plataforma única',
        power: '3 – 6 kW',
        sizes: '3000 × 1500 mm',
        image: 'https://www.hansme.net/uploads/20260123/18c9c3fe1af3e896da05a7fd43bbff33.webp',
        highlights: [
            'Diseño abierto de plataforma única',
            'Área de trabajo: 3000 × 1500 mm',
            'Económica y eficiente'
        ],
        specs: [
            { label: 'Potencia disponible', value: '3000W / 6000W' },
            { label: 'Área de trabajo', value: '3000 × 1500 mm' }
        ],
        detailUrl: 'https://www.hansme.net/detail/MPS-D3'
    },
    {
        id: 'mps-c3',
        name: 'MPS-C3',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Corte costo-efectivo para chapa media y delgada',
        power: '3 – 6 kW',
        sizes: 'Contenedor 40HQ',
        image: 'https://www.hansme.net/uploads/20260123/b766069dec0db795325c180188895056.webp',
        badge: 'Container Ready',
        highlights: [
            'Máquina completa cabe en contenedor 40HQ',
            'Ideal para chapa media y delgada',
            'Instalación rápida'
        ],
        specs: [
            { label: 'Potencia disponible', value: '3000W / 6000W' },
            { label: 'Transporte', value: 'Cabe en contenedor 40HQ completa' }
        ],
        detailUrl: 'https://www.hansme.net/detail/MPS-C3'
    },
    {
        id: 'mps-c3-pro',
        name: 'MPS-C3 PRO',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Corte de alta velocidad para chapa media y delgada',
        power: '3 – 6 kW',
        sizes: 'Contenedor 40HQ',
        image: 'https://www.hansme.net/uploads/20260120/cb84b7c5c2b75a0d75bfb5e7f4dd8260.webp',
        highlights: [
            'Versión PRO de alta velocidad',
            'Cabe en contenedor 40HQ',
            'Mayor productividad'
        ],
        specs: [
            { label: 'Potencia disponible', value: '3000W / 6000W' },
            { label: 'Transporte', value: 'Cabe en contenedor 40HQ completa' }
        ],
        detailUrl: 'https://www.hansme.net/detail/MPS-C3_PRO'
    },
    {
        id: 'hf-50',
        name: 'HF 50 Series',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Máquina de corte láser de gama alta',
        power: '6 – 50 kW',
        sizes: '3015 / 4020 / 4025',
        image: 'https://www.hansme.net/uploads/20250808/33ef47849e3bb04fa63bb0972fe55576.webp',
        badge: 'Gama Alta',
        highlights: [
            'Máquina de gama alta',
            'Rendimiento superior',
            'Precisión excepcional'
        ],
        specs: [
            { label: 'Potencia disponible', value: '6kW / 12kW / 20kW / 30kW / 40kW / 50kW' },
            { label: 'Formatos', value: '3015 / 4020 / 4025' }
        ],
        detailUrl: 'https://www.hansme.net/detail/HF_50_Series'
    },
    {
        id: 'giant-series',
        name: 'GIANT Series',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Cortadora láser de ultra gran formato',
        power: '12 – 80 kW',
        sizes: 'Largo 110m+, Ancho 7m+',
        image: 'https://www.hansme.net/uploads/20260330/62e4a7a11e28018f6c55db982bd8b202.webp',
        badge: 'Ultra Grande',
        highlights: [
            'Área de trabajo personalizable: Largo 110m+, Ancho 7m+',
            'Potencia ultra alta hasta 80kW',
            'Para piezas de gran envergadura'
        ],
        specs: [
            { label: 'Potencia disponible', value: '12kW / 20kW / 30kW / 40kW / 80kW' },
            { label: 'Área de trabajo', value: 'Personalizable: Largo 110m+, Ancho 7m+' }
        ],
        detailUrl: 'https://www.hansme.net/detail/GIANT_Series'
    },
    {
        id: 's-pro',
        name: 'S PRO-A/G',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Cortadora láser de gran formato con riel lineal',
        power: '12 – 60 kW',
        sizes: '6025 / 8025 / 13025 / 26025 / 30025',
        image: 'https://www.hansme.net/uploads/20250723/d3652f5f61eeff61d0ca8117e9448efb.webp',
        highlights: [
            'Riel lineal para máxima precisión',
            'Formatos hasta 30025',
            'Potencia hasta 60kW'
        ],
        specs: [
            { label: 'Potencia disponible', value: '12kW / 20kW / 30kW / 40kW / 60kW' },
            { label: 'Formatos', value: '6025 / 8025 / 13025 / 26025 / 30025' }
        ],
        detailUrl: 'https://www.hansme.net/detail/Linear_Rail_Large_Format_Laser_Cutting_Machine'
    },
    {
        id: 'grc-series',
        name: 'GRC Series',
        category: 'corte-2d',
        categoryLabel: 'Corte Láser 2D',
        tagline: 'Sistema de corte láser alimentado por bobina',
        power: 'Consultar',
        sizes: 'Bobina',
        image: 'https://www.hansme.net/uploads/20260121/e51391386d0f46ce65a7f74f5e272fbf.webp',
        badge: 'Bobina',
        highlights: [
            'Corte sincrónico rápido multi-cabezal',
            'Alimentación directa desde bobina',
            'Producción continua de alta eficiencia'
        ],
        specs: [
            { label: 'Tipo', value: 'Sistema alimentado por bobina' },
            { label: 'Cabezales', value: 'Simple / múltiple sincrónico' }
        ],
        detailUrl: 'https://www.hansme.net/detail/GRC_Series'
    },

    // ==========================================
    // TUBE LASER CUTTING (7 products)
    // ==========================================
    {
        id: 'tx-series',
        name: 'TX Series',
        category: 'corte-tubo',
        categoryLabel: 'Corte de Tubos',
        tagline: 'Cortadora láser de tubos de servicio pesado',
        power: 'Consultar',
        sizes: 'Tubos grandes',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        badge: 'Servicio Pesado',
        highlights: [
            'Corte de tubos de alta capacidad',
            'Diseño robusto para uso industrial',
            'Procesamiento de tubos grandes'
        ],
        specs: [
            { label: 'Tipo', value: 'Cortadora de tubos de servicio pesado' }
        ],
        detailUrl: 'https://www.hansme.net/detail/TX_Series'
    },
    {
        id: 'pd-series',
        name: 'PD Series',
        category: 'corte-tubo',
        categoryLabel: 'Corte de Tubos',
        tagline: 'Cortadora láser de tubos profesional',
        power: 'Consultar',
        sizes: 'Tubos estándar',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        highlights: [
            'Corte profesional de tubos',
            'Alta precisión y velocidad',
            'Múltiples perfiles de tubo'
        ],
        specs: [
            { label: 'Tipo', value: 'Cortadora de tubos profesional' }
        ],
        detailUrl: 'https://www.hansme.net/detail/PD_Series'
    },
    {
        id: 'plt-series',
        name: 'PLT Series',
        category: 'corte-tubo',
        categoryLabel: 'Corte de Tubos',
        tagline: 'Cortadora láser de placa y tubo combinada',
        power: 'Consultar',
        sizes: 'Placa + Tubo',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        badge: '2-en-1',
        highlights: [
            'Combina corte de placa y tubo',
            'Mayor versatilidad en un solo equipo',
            'Ahorro de espacio y costo'
        ],
        specs: [
            { label: 'Tipo', value: 'Cortadora combinada placa + tubo' }
        ],
        detailUrl: 'https://www.hansme.net/detail/PLT_Series'
    },
    {
        id: 'h-beam',
        name: 'H Beam Laser Cutter',
        category: 'corte-tubo',
        categoryLabel: 'Corte de Tubos',
        tagline: 'Cortadora láser de vigas H',
        power: 'Consultar',
        sizes: 'Vigas H',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        badge: 'Vigas H',
        highlights: [
            'Corte especializado de perfiles H',
            'Ideal para construcción metálica',
            'Alta precisión en perfiles estructurales'
        ],
        specs: [
            { label: 'Tipo', value: 'Cortadora especializada de vigas H' }
        ],
        detailUrl: 'https://www.hansme.net/detail/H_Beam_laser_cutting_machine'
    },
    {
        id: 'mps-t5',
        name: 'MPS-T5',
        category: 'corte-tubo',
        categoryLabel: 'Corte de Tubos',
        tagline: 'Cortadora láser de tubos compacta',
        power: 'Consultar',
        sizes: 'Tubos compactos',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        highlights: [
            'Diseño compacto',
            'Ideal para talleres',
            'Fácil de operar'
        ],
        specs: [
            { label: 'Tipo', value: 'Cortadora de tubos compacta' }
        ],
        detailUrl: 'https://www.hansme.net/detail/MPS-T5'
    },
    {
        id: 'f1-series',
        name: 'F1 Series',
        category: 'corte-tubo',
        categoryLabel: 'Corte de Tubos',
        tagline: 'Corte de tubos de diámetro pequeño a alta velocidad',
        power: 'Consultar',
        sizes: 'Diámetro pequeño',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        badge: 'Alta Velocidad',
        highlights: [
            'Alta velocidad para tubos de diámetro pequeño',
            'Producción en masa eficiente',
            'Cambio rápido de material'
        ],
        specs: [
            { label: 'Tipo', value: 'Corte de tubos de diámetro pequeño a alta velocidad' }
        ],
        detailUrl: 'https://www.hansme.net/detail/High-Speed_Small-Diameter_Tube_Cutting'
    },
    {
        id: 'td-series',
        name: 'TD Series',
        category: 'corte-tubo',
        categoryLabel: 'Corte de Tubos',
        tagline: 'Cortadora láser de tubos estándar',
        power: 'Consultar',
        sizes: 'Estándar',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        highlights: [
            'Solución estándar para corte de tubos',
            'Buena relación costo-beneficio',
            'Amplia compatibilidad de materiales'
        ],
        specs: [
            { label: 'Tipo', value: 'Cortadora de tubos estándar' }
        ],
        detailUrl: 'https://www.hansme.net/detail/TD_Series'
    },

    // ==========================================
    // 3D LASER CUTTING (1 product)
    // ==========================================
    {
        id: 'wd-series',
        name: 'WD Series',
        category: 'corte-3d',
        categoryLabel: 'Corte Láser 3D',
        tagline: 'Máquina de corte láser 3D de 5 ejes',
        power: 'Consultar',
        sizes: '5 ejes',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        badge: '5 Ejes',
        highlights: [
            'Corte 3D con 5 ejes de movimiento',
            'Para piezas automotrices y aeroespaciales',
            'Máxima flexibilidad de corte'
        ],
        specs: [
            { label: 'Tipo', value: 'Cortadora 3D de 5 ejes' },
            { label: 'Aplicaciones', value: 'Automotriz, Aeroespacial, Piezas 3D' }
        ],
        detailUrl: 'https://www.hansme.net/detail/3D_5-axis_Laser_Cutting_Machine'
    },

    // ==========================================
    // BENDING MACHINES (5 products)
    // ==========================================
    {
        id: 'hbs-series',
        name: 'HBS Series',
        category: 'plegado',
        categoryLabel: 'Plegadoras',
        tagline: 'Plegadora estándar de alto rendimiento',
        power: 'Consultar',
        sizes: 'Estándar',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        highlights: [
            'Plegadora estándar de alto rendimiento',
            'Control CNC preciso',
            'Amplia capacidad de plegado'
        ],
        specs: [
            { label: 'Tipo', value: 'Plegadora estándar' }
        ],
        detailUrl: 'https://www.hansme.net/detail/HBS_Series'
    },
    {
        id: 'bending-cell',
        name: 'Bending Automation Cell',
        category: 'plegado',
        categoryLabel: 'Plegadoras',
        tagline: 'Celda de plegado automatizada',
        power: 'Consultar',
        sizes: 'Celda robotizada',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        badge: 'Robotizada',
        highlights: [
            'Plegado totalmente automatizado',
            'Integración robótica',
            'Producción sin intervención manual'
        ],
        specs: [
            { label: 'Tipo', value: 'Celda de plegado automatizada' }
        ],
        detailUrl: 'https://www.hansme.net/detail/Bending_Automation_Cell'
    },
    {
        id: 'hbi-series',
        name: 'HBI Series',
        category: 'plegado',
        categoryLabel: 'Plegadoras',
        tagline: 'Plegadora inteligente',
        power: 'Consultar',
        sizes: 'Inteligente',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        highlights: [
            'Sistema inteligente de plegado',
            'Ajuste automático de parámetros',
            'Mayor precisión y repetibilidad'
        ],
        specs: [
            { label: 'Tipo', value: 'Plegadora inteligente' }
        ],
        detailUrl: 'https://www.hansme.net/detail/HBI_Series'
    },
    {
        id: 'hbe-series',
        name: 'HBE Series',
        category: 'plegado',
        categoryLabel: 'Plegadoras',
        tagline: 'Plegadora económica',
        power: 'Consultar',
        sizes: 'Económica',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        badge: 'Económica',
        highlights: [
            'Solución económica de plegado',
            'Ideal para pequeños talleres',
            'Fácil operación'
        ],
        specs: [
            { label: 'Tipo', value: 'Plegadora económica' }
        ],
        detailUrl: 'https://www.hansme.net/detail/HBE_Series'
    },
    {
        id: 'hbd-series',
        name: 'HBD Series',
        category: 'plegado',
        categoryLabel: 'Plegadoras',
        tagline: 'Plegadora de servicio pesado',
        power: 'Consultar',
        sizes: 'Servicio pesado',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        badge: 'Servicio Pesado',
        highlights: [
            'Para piezas de gran espesor y longitud',
            'Alta fuerza de plegado',
            'Estructura reforzada'
        ],
        specs: [
            { label: 'Tipo', value: 'Plegadora de servicio pesado' }
        ],
        detailUrl: 'https://www.hansme.net/detail/HBD_Series'
    },

    // ==========================================
    // LASER WELDING (3 products)
    // ==========================================
    {
        id: 'mps-hw',
        name: 'MPS-HW Series',
        category: 'soldadura',
        categoryLabel: 'Soldadura Láser',
        tagline: 'Alta velocidad de soldadura / Ahorro de costos — 1000W-2000W disponible',
        power: '1000 – 2000 W',
        sizes: 'Industrial',
        image: 'https://www.hansme.net/uploads/20250318/59b7587b6627b935c8a7b7f36cbe61ee.png',
        highlights: [
            'Alta velocidad de soldadura',
            'Ahorro de costos operativos',
            '1000W y 2000W disponible',
            'Para líneas de producción'
        ],
        specs: [
            { label: 'Potencia disponible', value: '1000W / 2000W' },
            { label: 'Tipo', value: 'Sistema de soldadura láser industrial' }
        ],
        detailUrl: 'https://www.hansme.net/detail/MPS-HW__Series'
    },
    {
        id: 'dzw-pro',
        name: 'DZW PRO Series',
        category: 'soldadura',
        categoryLabel: 'Soldadura Láser',
        tagline: 'Soldadora láser portátil profesional 4-en-1',
        power: '1500 – 3000 W',
        sizes: 'Portátil',
        image: 'https://www.hansme.net/uploads/20250821/4a8e0b062e4408b569f9b6f1a03536ba.webp',
        badge: '4-en-1',
        highlights: [
            'Soldar con aporte, sin aporte, cortar y limpiar',
            '67% más compacta que la competencia',
            'Refrigeración por agua integrada',
            'Control mediante App móvil',
            'Diseño sellado IP anti-polvo/humedad',
            'Alimentador de alambre automático'
        ],
        specs: [
            { label: 'Potencia disponible', value: '1500W / 2000W / 3000W' },
            { label: 'Longitud de onda', value: '1064 ± 10 nm' },
            { label: 'Funciones', value: '4-en-1 (Soldar, Cortar, Limpiar)' },
            { label: 'Espesor máx. Acero Inox.', value: '0.6 – 8.0 mm' },
            { label: 'Espesor máx. Acero Carbono', value: '0.6 – 8.0 mm' },
            { label: 'Espesor máx. Aluminio', value: '0.6 – 6.0 mm' },
            { label: 'Refrigeración', value: 'Agua integrada' },
            { label: 'Alimentador de Alambre', value: 'Automático Ø 0.8 – 2.0 mm' }
        ],
        detailUrl: 'https://www.hansme.net/detail/DZW_PRO_Series'
    },
    {
        id: 'w-series',
        name: 'W Series',
        category: 'soldadura',
        categoryLabel: 'Soldadura Láser',
        tagline: 'Soldadora láser manual — Refrigeración por agua o aire',
        power: '1500 – 2000 W',
        sizes: 'Manual/Portátil',
        image: 'https://www.hansme.net/uploads/20251202/1b6926856623d2880a754c78ba0ec288.webp',
        highlights: [
            'Refrigeración por agua: HW1500W / HW2000W',
            'Refrigeración por aire: HW1500WF-IPG / HW1500-HL',
            'Soldadura láser manual portátil',
            'Fácil de operar en campo'
        ],
        specs: [
            { label: 'Modelos agua', value: 'HW1500W / HW2000W' },
            { label: 'Modelos aire', value: 'HW1500WF-IPG / HW1500-HL' },
            { label: 'Tipo', value: 'Soldadora láser manual portátil' }
        ],
        detailUrl: 'https://www.hansme.net/detail/W_Series_Handheld_Laser_Welding_Machine'
    },

    // ==========================================
    // AUTOMATION (3 products)
    // ==========================================
    {
        id: 'sl-series',
        name: 'SL Series',
        category: 'automatizacion',
        categoryLabel: 'Automatización',
        tagline: 'Sistema de almacenamiento y carga automática',
        power: 'N/A',
        sizes: 'Modular',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        highlights: [
            'Almacenamiento y carga automática de chapas',
            'Integración con cortadoras láser',
            'Mayor productividad sin intervención'
        ],
        specs: [
            { label: 'Tipo', value: 'Sistema de almacenamiento y carga' }
        ],
        detailUrl: 'https://www.hansme.net/detail/SL_Series'
    },
    {
        id: 'slu-series',
        name: 'SLU Series',
        category: 'automatizacion',
        categoryLabel: 'Automatización',
        tagline: 'Sistema avanzado de almacenamiento y carga',
        power: 'N/A',
        sizes: 'Modular avanzado',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        highlights: [
            'Sistema avanzado de almacenamiento',
            'Carga y descarga automatizada',
            'Optimización del flujo de producción'
        ],
        specs: [
            { label: 'Tipo', value: 'Sistema avanzado de almacenamiento y carga' }
        ],
        detailUrl: 'https://www.hansme.net/detail/SLU_Series'
    },
    {
        id: 'alu-series',
        name: 'ALU Series',
        category: 'automatizacion',
        categoryLabel: 'Automatización',
        tagline: 'Solución integral de automatización láser',
        power: 'N/A',
        sizes: 'Línea completa',
        image: 'https://www.hansme.net/uploads/20250613/2ca38cfd4a414e7c3c855c82966b475e.webp',
        badge: 'Línea Completa',
        highlights: [
            'Solución integral de automatización',
            'Desde almacenamiento hasta descarga',
            'Fábrica inteligente 4.0'
        ],
        specs: [
            { label: 'Tipo', value: 'Solución integral de automatización láser' }
        ],
        detailUrl: 'https://www.hansme.net/detail/ALU_Series_Laser_Automation_Solution'
    }
];

/**
 * Industries / Solutions Data
 */
const INDUSTRIES = [
    {
        id: 'acero',
        name: 'Procesamiento de Acero',
        icon: '🔩',
        description: 'Soluciones de corte, soldadura y procesamiento para la industria del acero y metales.',
        url: 'https://www.hansme.net/stories/Steel_Metal_Processing'
    },
    {
        id: 'automatizacion-ind',
        name: 'Automatización Industrial',
        icon: '🤖',
        description: 'Líneas de producción automatizadas con tecnología láser integrada.',
        url: 'https://www.hansme.net/stories/Industrial_Automation'
    },
    {
        id: 'muebles',
        name: 'Industria del Mueble',
        icon: '🪑',
        description: 'Corte y procesamiento de metal para fabricación de muebles modernos.',
        url: 'https://www.hansme.net/stories/Furniture_Industry'
    },
    {
        id: 'automotriz',
        name: 'Industria Automotriz',
        icon: '🚗',
        description: 'Componentes automotrices con precisión y velocidad de producción.',
        url: 'https://www.hansme.net/stories/Automotive_Industry'
    },
    {
        id: 'naval',
        name: 'Industria Naval',
        icon: '🚢',
        description: 'Corte de gran formato para construcción naval y marina.',
        url: 'https://www.hansme.net/stories/Shipbuilding_Industry'
    },
    {
        id: 'mecanica',
        name: 'Ingeniería Mecánica',
        icon: '⚙️',
        description: 'Fabricación de componentes mecánicos de alta precisión.',
        url: 'https://www.hansme.net/stories/Mechanicall_Engineering'
    },
    {
        id: 'ferreteria',
        name: 'Accesorios y Ferretería',
        icon: '🔧',
        description: 'Producción masiva de piezas y accesorios metálicos.',
        url: 'https://www.hansme.net/stories/Hardware_Accessories'
    },
    {
        id: 'energia',
        name: 'Nuevas Energías',
        icon: '⚡',
        description: 'Soluciones para la industria solar, eólica y de vehículos eléctricos.',
        url: 'https://www.hansme.net/stories/New_Energy_industry'
    },
    {
        id: 'mineria',
        name: 'Minería',
        icon: '⛏️',
        description: 'Equipos de corte y soldadura para la industria minera chilena.',
        url: '#contacto'
    },
    {
        id: 'construccion',
        name: 'Construcción',
        icon: '🏗️',
        description: 'Corte de perfiles estructurales, vigas y componentes de construcción.',
        url: 'https://www.hansme.net/industry/Construction_Industry'
    }
];

/**
 * Company Stats
 */
const COMPANY_STATS = [
    { number: 1996, label: 'Fundación', suffix: '' },
    { number: 6926, label: 'Patentes', suffix: '+' },
    { number: 34, label: 'Investigadores', suffix: '%' },
    { number: 6, label: 'Plantas', suffix: '' },
    { number: 180, label: 'Oficinas Globales', suffix: '+' },
    { number: 100, label: 'Países', suffix: '+' }
];

/**
 * Success Stories
 */
const SUCCESS_STORIES = [
    { name: 'CIMC', industry: 'Logística y Energía' },
    { name: 'Yutong Bus', industry: 'Automotriz' },
    { name: 'Daming International', industry: 'Acero' },
    { name: 'CRRC', industry: 'Transporte Ferroviario' },
    { name: 'Hitachi', industry: 'Automatización' },
    { name: 'XCMG', industry: 'Ingeniería Mecánica' },
    { name: 'ITER', industry: 'Fusión Nuclear' }
];
