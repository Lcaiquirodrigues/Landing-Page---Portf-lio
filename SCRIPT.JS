/* ==========================================================================
   6. VARIÁVEIS DOS BOTÕES DO MENU SUPERIOR (EDITE OS BOTÕES AQUI)
   ========================================================================== */
const MENU_NAV_DATA = [
    { texto: "Home", targetId: "#top" },
    { texto: "Sobre mim", targetId: "#sobre" },
    { texto: "Habilidades", targetId: "#habilidades" },
    { texto: "Projetos", targetId: "#projetos" },
    { texto: "Contato", targetId: "#contato" }
];

/* ==========================================================================
   7. BANCO DE DADOS LOCAL E TEXTOS GERAIS
   ========================================================================== */
const PORTFOLIO_DATA = {
    // Informações Pessoais Principais
    primeiroNome: "Caiqui",
    sobrenome: "Rodrigues",
    cargo: "ANALISTA DE DADOS & BI",
    headline: "Transformando dados em insights estratégicos para gerar valor, otimizar processos e apoiar decisões mais inteligentes.",
    fotoUrl: "https://i.ibb.co/Z474THr/Ellipse-7.png",

    // Títulos das Seções da Página
    titulosSeções: {
        sobre: "Sobre mim",
        academico: "Formação Acadêmica",
        habilidades: "Principais habilidades",
        projetos: "Projetos - Power BI",
        contato: "Contato",
        areaFooter: "Análise de Dados"
    },

    // Ícones de Tecnologias (Hero Section)
    tecnologias: [
        { nome: "Power BI", icone: "fa-solid fa-chart-column" },
        { nome: "Excel", icone: "fa-solid fa-file-excel" },
        { nome: "SQL", icone: "fa-solid fa-database" },
        { nome: "Python", icone: "fa-brands fa-python" },
        { nome: "Figma", icone: "fa-brands fa-figma" }
    ],

    // Formação Acadêmica
    academicos: [
        { nivel: "Graduado", curso: "Análise e Desenvolvimento de Sistemas" },
        { nivel: "Pós-graduado", curso: "Análise de Dados" }
    ],

    // Parágrafos do Sobre Mim
    sobreTexto1: "Busco unir tecnologia, pensamento analítico e inteligência de dados para gerar valor e resultados.",
    sobreTexto2: "Atuo com análise e visualização de dados, criando dashboards interativos e soluções utilizando Power BI, Python, SQL e Excel para transformar dados em insights claros e apoiar decisões estratégicas.",

    // Bloco de Habilidades
    habilidades: [
        {
            titulo: "ETL",
            icone: "fa-solid fa-database",
            descricao: "Extração, transformação e carga de dados de múltiplas fontes com qualidade e consistência."
        },
        {
            titulo: "DataViz & Storytelling",
            icone: "fa-solid fa-chart-pie",
            descricao: "Relatórios claros e visuais impactantes que comunicam o que realmente importa."
        },
        {
            titulo: "Capacidade Analítica",
            icone: "fa-solid fa-chart-line",
            descricao: "Pensamento crítico aplicado a métricas de negócio para gerar insights acionáveis."
        }
    ],

    // Lista de Projetos
    projetos: [
        {
            tag: "DASHBOARD",
            nomeDestaque: "CR MODAS",
            descricao: "Análise de faturamento, ticket médio e desempenho por segmento e região, com mapa geográfico e visão temporal.",
            imagemUrl: "https://i.ibb.co/ccdqpL8F/cr-MODAS.png", 
            link: "https://app.powerbi.com/view?r=eyJrIjoiZDNhNmI0NTItZjg0Yy00ZmY5LWJkYTUtNjQzM2YxODlkOTNiIiwidCI6IjAwNDdkNzc3LWNlMDQtNDYwMi05YTNkLTQzZmVkYmIyNzg3ZiJ9"
        },
        {
            tag: "DASHBOARD",
            nomeDestaque: "SUPERSTORE",
            descricao: "Visão executiva de vendas, lucro e margem por segmento, gerência, categoria e país, com foco em performance.",
            imagemUrl: "https://i.ibb.co/YBdMfcQB/SUPER-STORE.png", 
            link: "https://app.powerbi.com/view?r=eyJrIjoiODVlZmRmMGYtYWI5Yi00ZjIyLTkxZjEtZDI0MWQzNjQ1MDljIiwidCI6IjAwNDdkNzc3LWNlMDQtNDYwMi05YTNkLTQzZmVkYmIyNzg3ZiJ9"
        },
        {
            tag: "DASHBOARD",
            nomeDestaque: "NIKE",
            descricao: "Catálogo interativo de produtos com indicadores de estoque, preço médio e desempenho por modelo.",
            imagemUrl: "https://i.ibb.co/Fqc8McX7/NIKE.png", 
            link: "https://app.powerbi.com/view?r=eyJrIjoiMmI3ZTM5ZGMtZTdiZC00ZDQ3LWJiMTMtZjVlY2E0Njk2ZmZjIiwidCI6IjAwNDdkNzc3LWNlMDQtNDYwMi05YTNkLTQzZmVkYmIyNzg3ZiJ9"
        }
    ],

    // Canais de Contato
    contatos: [
        {
            label: "WHATSAPP",
            valor: "82 9 9442-8788",
            icone: "fa-brands fa-whatsapp",
            link: "https://wa.me/5582994428788"
        },
        {
            label: "LINKEDIN",
            valor: "/in/caiquirodrigues/",
            icone: "fa-brands fa-linkedin-in",
            link: "https://linkedin.com/in/caiquirodrigues"
        },
        {
            label: "EMAIL",
            valor: "caiquirodrigues84@gmail.com",
            icone: "fa-solid fa-envelope",
            link: "mailto:caiquirodrigues84@gmail.com"
        },
        {
            label: "INSTAGRAM",
            valor: "@caiquirodrigues",
            icone: "fa-brands fa-instagram",
            link: "https://instagram.com/caiquirodrigues"
        }
    ]
};

/* ==========================================================================
   8. ENGINE DE RENDERIZAÇÃO AUTOMÁTICA
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    
    // Renderiza os Botões da Navbar (usando MENU_NAV_DATA)
    const containerNav = document.getElementById('container-navbar-links');
    containerNav.innerHTML = '';
    MENU_NAV_DATA.forEach(item => {
        const link = document.createElement('a');
        link.className = 'nav-link';
        link.href = item.targetId;
        link.textContent = item.texto;
        containerNav.appendChild(link);
    });

    // Renderiza Textos do Cabeçalho
    document.getElementById('data-primeiro-nome').textContent = PORTFOLIO_DATA.primeiroNome;
    document.getElementById('data-sobrenome').textContent = PORTFOLIO_DATA.sobrenome;
    document.getElementById('data-cargo').textContent = PORTFOLIO_DATA.cargo;
    document.getElementById('data-headline').textContent = PORTFOLIO_DATA.headline;
    
    // Renderiza Títulos Dinâmicos
    document.getElementById('title-sobre').textContent = PORTFOLIO_DATA.titulosSeções.sobre;
    document.getElementById('title-academico').textContent = PORTFOLIO_DATA.titulosSeções.academico;
    document.getElementById('title-habilidades').textContent = PORTFOLIO_DATA.titulosSeções.habilidades;
    document.getElementById('title-projetos').textContent = PORTFOLIO_DATA.titulosSeções.projetos;
    document.getElementById('title-contatos').textContent = PORTFOLIO_DATA.titulosSeções.contato;
    document.getElementById('data-area-footer').textContent = PORTFOLIO_DATA.titulosSeções.areaFooter;

    // Foto de Perfil
    const imgFoto = document.getElementById('data-foto');
    imgFoto.src = PORTFOLIO_DATA.fotoUrl;
    imgFoto.alt = `${PORTFOLIO_DATA.primeiroNome} ${PORTFOLIO_DATA.sobrenome}`;

    // Renderiza Ícones Tecnológicos
    const containerTech = document.getElementById('container-tech-icons');
    containerTech.innerHTML = '';
    PORTFOLIO_DATA.tecnologias.forEach(tech => {
        const el = document.createElement('div');
        el.className = 'tech-icon-item';
        el.innerHTML = `
            <i class="${tech.icone}"></i>
            <span class="tooltip">${tech.nome}</span>
        `;
        containerTech.appendChild(el);
    });

    // Renderiza Formação Acadêmica
    const containerAcad = document.getElementById('container-academico');
    containerAcad.innerHTML = '';
    PORTFOLIO_DATA.academicos.forEach(acad => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${acad.nivel}</strong> em ${acad.curso}`;
        containerAcad.appendChild(li);
    });

    // Renderiza Textos Sobre Mim
    document.getElementById('data-sobre-1').textContent = PORTFOLIO_DATA.sobreTexto1;
    document.getElementById('data-sobre-2').textContent = PORTFOLIO_DATA.sobreTexto2;

    // Renderiza Habilidades
    const containerHab = document.getElementById('container-habilidades');
    containerHab.innerHTML = '';
    PORTFOLIO_DATA.habilidades.forEach(hab => {
        const el = document.createElement('div');
        el.className = 'skill-card';
        el.innerHTML = `
            <div class="skill-header">
                <i class="${hab.icone} skill-icon"></i>
                <span class="skill-title">${hab.titulo}</span>
            </div>
            <div class="skill-desc">${hab.descricao}</div>
        `;
        containerHab.appendChild(el);
    });

    // Renderiza Projetos com Expansão Vertical
    const containerProj = document.getElementById('container-projetos');
    containerProj.innerHTML = '';
    PORTFOLIO_DATA.projetos.forEach(proj => {
        const el = document.createElement('div');
        el.className = 'project-card';
        el.innerHTML = `
            <div class="project-title">${proj.tag} <span>${proj.nomeDestaque}</span></div>
            <div class="project-desc">${proj.descricao}</div>
            
            <div class="project-expand-content">
                <img src="${proj.imagemUrl}" alt="Preview ${proj.nomeDestaque}" class="project-preview-img">
                <a href="${proj.link}" target="_blank" class="project-btn">
                    Ver Dashboard <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        `;
        containerProj.appendChild(el);
    });

    // Renderiza Contatos
    const containerCont = document.getElementById('container-contatos');
    containerCont.innerHTML = '';
    PORTFOLIO_DATA.contatos.forEach(cont => {
        const el = document.createElement('a');
        el.className = 'contact-card';
        el.href = cont.link;
        el.target = "_blank";
        el.innerHTML = `
            <div class="contact-icon"><i class="${cont.icone}"></i></div>
            <div class="contact-info">
                <span class="contact-label">${cont.label}</span>
                <span class="contact-value">${cont.valor}</span>
            </div>
        `;
        containerCont.appendChild(el);
    });

    // Footer Dinâmico (Ano corrente automático + Nome)
    document.getElementById('data-ano').textContent = new Date().getFullYear();
    document.getElementById('data-nome-footer').textContent = `${PORTFOLIO_DATA.primeiroNome} ${PORTFOLIO_DATA.sobrenome}`;
});