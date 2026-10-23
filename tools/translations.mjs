export const translations = {
  en: {
    meta: {
      title: 'TugQL — a portable, human-readable query language',
      description: 'TugQL (formerly DTQL) is a portable, human-readable query language. One query runs unchanged across Git, SQLite, PostgreSQL and Firestore — featuring an intuitive SQL-like text syntax and a lossless, schema-validated query tree (TugQT).',
      ogDescription: 'TugQL: portable, human-readable query language and structured query tree (TugQT) across backends. Formerly known as DTQL.',
      jsonLdDescription: 'A portable, human-readable query language and structured query tree (TugQT) for databases and data abstraction layers.'
    },
    nav: {
      why: 'Why',
      example: 'Example',
      mapping: 'Mapping',
      scope: 'Scope',
      stack: 'Stack',
      implementations: 'Implementations',
      star: 'Star'
    },
    hero: {
      eyebrow: 'Open specification · formerly DTQL',
      titleLine1: 'Queries you can',
      titleAccent: 'read, diff,',
      titleLine2: ' and trust.',
      lede: '<strong>TugQL</strong> is a portable, human-readable query language. It combines a clean SQL-like text syntax with a <strong>1:1, lossless</strong> structured query tree representation (<strong>TugQT</strong>) serialized as plain YAML/JSON. Save a query, hand-edit it, diff it in version control, and execute it across backends without loss.',
      readSpec: 'Read the spec',
      seeExample: 'See an example',
      codeSampleAria: 'A TugQL query document'
    },
    why: {
      eyebrow: '01 — Why TugQL',
      title: 'A query is data. Treat it like data.',
      kicker: 'TugQL turns a query into an understandable, diffable document you can store, review, and version — portable across every backend it runs on.',
      cards: [
        {
          title: 'Human-readable',
          body: 'Intuitive SQL-like authoring syntax for people, plus plain YAML/JSON query tree (TugQT) for tooling — anyone can inspect it, understand it, and edit it.'
        },
        {
          title: 'Lossless round-trip',
          body: 'Canonical query lowering reconstructs queries structurally equal to the source. Nothing is silently dropped, mangled, or approximated.'
        },
        {
          title: 'Schema-validated',
          body: 'Published with full JSON Schema validation (draft 2020-12). Any tool, in any language, can validate a query structure before execution.'
        },
        {
          title: 'Diff-friendly',
          body: 'Canonical formatting and deterministic tree serialization. Saved queries diff cleanly in Git and review like standard code.'
        },
        {
          title: 'Portable by design',
          body: 'TugQL exposes functionality that is portable across backends, so one query runs unchanged across Git, SQLite, PostgreSQL, or Firestore.'
        },
        {
          title: 'Not full SQL',
          body: 'A deliberately focused, well-defined portable subset. Unportable constructs are rejected explicitly rather than translated dangerously.'
        }
      ]
    },
    example: {
      eyebrow: '02 — Example',
      title: 'A query as TugQL &amp; TugQT',
      kicker: 'Author in TugQL text syntax; persist or exchange as a TugQT structured query tree.',
      p1: 'Authors write queries in <strong>TugQL</strong> text syntax — readable, compact, and SQL-like. Underneath, the parser produces <strong>TugQT (Tug Query Tree)</strong>, a canonical, machine-readable representation.',
      p2: 'Every node maps deterministically between syntax and tree. Malformed input or schema violations return actionable diagnostics with precise source spans.',
      noteTitle: 'Note on naming:',
      noteText: 'TugQL was formerly known as DTQL. Existing DTQL documents and query files remain supported for backwards compatibility.',
      codeSampleAria: 'Example TugQT query tree'
    },
    mapping: {
      eyebrow: '03 — node → TugQT',
      title: 'Mapping',
      kicker: 'Each in-scope query node has a defined structured representation.',
      thNode: 'Query node',
      thRep: 'TugQT representation',
      rows: [
        { node: 'From over a root collection', rep: '<code>from: { name, alias? }</code>' },
        { node: 'Column', rep: 'item under <code>columns:</code> — an expression plus optional <code>as:</code>' },
        { node: 'Comparison', rep: '<code>{ op, left, right }</code>' },
        { node: 'Group condition (And)', rep: '<code>{ and: [ … ] }</code>' },
        { node: 'Group condition (Or)', rep: '<code>{ or: [ … ] }</code>' },
        { node: 'Order expression', rep: 'item under <code>orderBy:</code> — an expression plus optional <code>desc: true</code>' },
        { node: 'Field reference', rep: '<code>{ field: &lt;name&gt; }</code>' },
        { node: 'Constant', rep: '<code>{ value: &lt;scalar&gt; }</code>' },
        { node: 'Array', rep: '<code>{ values: [ &lt;scalar&gt;, … ] }</code>' },
        { node: 'Operator', rep: '<code>==</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>' },
        { node: 'Limit / Offset', rep: '<code>limit: &lt;int&gt;</code> / <code>offset: &lt;int&gt;</code>' }
      ],
      caption: 'An expression sets <strong>exactly one</strong> of <code>field</code>, <code>value</code> or <code>values</code>, which discriminates a field reference, a constant, or an array.'
    },
    scope: {
      eyebrow: '04 — covered subset',
      title: 'What TugQL represents',
      kicker: 'Single source collections or joined trees, selected columns, filter expressions, ordering, and paging. Anything out of scope is rejected — never silently dropped.',
      inScopeTitle: 'In scope',
      inScopeBody: 'Collection sources · selected columns · comparison and And/Or group trees · ordering · limit / offset · joins · parameters. Expressions: field reference, constant, array. Operators: <code>==</code>, <code>!=</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>And</code>, <code>Or</code>.',
      outScopeTitle: 'Out of scope (rejected)',
      outScopeBody: 'Unbounded cartesian joins · arbitrary dialect-specific vendor syntax · untyped mutation operators outside schema authority. Serialization errors out — it never emits a document that loses query semantics.',
      losslessTitle: 'Lossless &amp; canonical',
      losslessBody: '<code>resolve(parse(text))</code> produces deterministic query trees; serialization is canonical, so saved queries diff cleanly across versions.'
    },
    stack: {
      eyebrow: '05 — where it runs',
      title: 'One query, many backends',
      kicker: 'TugQL is the portable query surface. It maps onto a data abstraction layer (DALgo) that adapts it to whatever storage sits underneath.',
      p: 'Because TugQL expresses the portable subset, a query written once behaves consistently whether resolving against a Git repository (inGitDB), an embedded SQLite file, a PostgreSQL database, or Firestore.',
      flowAria: 'TugQL maps through a data abstraction layer to several storage backends',
      tugqlLabel: 'TugQL',
      tugqlSub: 'portable query language',
      dalgoLabel: 'DALgo',
      dalgoSub: 'data abstraction layer'
    },
    implementations: {
      eyebrow: '06 — get started',
      title: 'Specification &amp; implementations',
      kicker: 'The language is an open specification with a published schema and implementations in Go and TypeScript.',
      cards: [
        {
          badge: 'specification · schema',
          title: 'tugql/tugql',
          desc: 'The TugQL specification, the canonical JSON Schema (draft 2020-12), and validated example documents. Formerly known as DTQL.',
          meta: 'github.com/tugql/tugql',
          url: 'https://github.com/tugql/tugql'
        },
        {
          badge: 'reference implementation · Go',
          title: 'dal-go/dalgo/dtql',
          desc: 'The Go library: parse, validate, resolve, format, and execute TugQL queries with lossless round-trip guarantees.',
          meta: 'go get github.com/dal-go/dalgo/dtql',
          url: 'https://github.com/dal-go/dalgo/tree/main/dtql'
        }
      ]
    },
    datatug: {
      eyebrow: 'Used in product development',
      title: 'Explore data and query it with DataTug.',
      kicker: '<a href="https://datatug.app">DataTug</a> helps developers explore database schemas, build and run queries, and understand results. Its work on query contracts with TugQL and TugQT is ongoing. <a href="https://datatug.app/en/under-the-hood/tools-we-built/#query">Explore the tools behind DataTug.</a>'
    },
    closing: {
      title: 'Save it. Diff it. Run it anywhere.',
      p: 'TugQL makes a query a first-class, reviewable artifact — readable by people, validated by tooling, and portable across the backends it runs on.',
      readSpec: 'Read the spec',
      getLibrary: 'Get the Go library'
    },
    footer: {
      copyright: '© 2026 TugQL contributors',
      spec: 'Specification',
      goImpl: 'Go implementation',
      example: 'Example',
      mapping: 'Mapping',
      tag: 'An open, portable query language (formerly DTQL). Canonical home: <a href="https://tugql.org">tugql.org</a>'
    }
  },

  es: {
    meta: {
      title: 'TugQL — un lenguaje de consulta portátil y legible por humanos',
      description: 'TugQL (anteriormente DTQL) es un lenguaje de consulta portátil y legible por humanos. Una consulta se ejecuta sin cambios en Git, SQLite, PostgreSQL y Firestore, con sintaxis limpia tipo SQL y un árbol de consulta sin pérdidas validado por esquema (TugQT).',
      ogDescription: 'TugQL: lenguaje de consulta portátil y legible con árbol estructurado (TugQT) entre motores. Anteriormente DTQL.',
      jsonLdDescription: 'Un lenguaje de consulta portátil y legible por humanos con árbol de consulta estructurado (TugQT) para bases de datos y capas de abstracción.'
    },
    nav: {
      why: 'Por qué',
      example: 'Ejemplo',
      mapping: 'Mapeo',
      scope: 'Alcance',
      stack: 'Stack',
      implementations: 'Implementaciones',
      star: 'Star'
    },
    hero: {
      eyebrow: 'Especificación abierta · anteriormente DTQL',
      titleLine1: 'Consultas que puedes',
      titleAccent: 'leer, comparar',
      titleLine2: ' y confiar.',
      lede: '<strong>TugQL</strong> es un lenguaje de consulta portátil y legible por humanos. Combina una sintaxis de texto limpia similar a SQL con una representación de árbol estructurado <strong>1:1 y sin pérdidas</strong> (<strong>TugQT</strong>) serializada como YAML/JSON estándar. Guarda una consulta, edítala a mano, compárala en control de versiones y ejecútala en múltiples motores sin pérdida de datos.',
      readSpec: 'Leer la especificación',
      seeExample: 'Ver un ejemplo',
      codeSampleAria: 'Un documento de consulta TugQL'
    },
    why: {
      eyebrow: '01 — Por qué TugQL',
      title: 'Una consulta es un dato. Trátala como tal.',
      kicker: 'TugQL convierte una consulta en un documento comprensible y comparable que puedes almacenar, revisar y versionar — portátil en cualquier backend.',
      cards: [
        {
          title: 'Legible por humanos',
          body: 'Sintaxis intuitiva de autoría tipo SQL para personas, junto a un árbol de consulta YAML/JSON (TugQT) para herramientas: cualquiera puede inspeccionarlo y editarlo.'
        },
        {
          title: 'Ida y vuelta sin pérdidas',
          body: 'La transformación canónica reconstruye consultas estructuralmente idénticas al origen. Nada se descarta ni se aproxima en silencio.'
        },
        {
          title: 'Validado por esquema',
          body: 'Publicado con validación JSON Schema completa (draft 2020-12). Cualquier herramienta en cualquier lenguaje puede validar consultas antes de ejecutarlas.'
        },
        {
          title: 'Amigable con diffs',
          body: 'Formato canónico y serialización determinista. Las consultas guardadas muestran diffs limpios en Git y se revisan como código estándar.'
        },
        {
          title: 'Portátil por diseño',
          body: 'TugQL expone funcionalidad portable entre plataformas: una misma consulta se ejecuta sin cambios en Git, SQLite, PostgreSQL o Firestore.'
        },
        {
          title: 'No es todo SQL',
          body: 'Un subconjunto portable deliberadamente enfocado y bien definido. Las construcciones no portables se rechazan explícitamente en lugar de traducirse erróneamente.'
        }
      ]
    },
    example: {
      eyebrow: '02 — Ejemplo',
      title: 'Una consulta en TugQL y TugQT',
      kicker: 'Escribe en sintaxis de texto TugQL; almacena o intercambia como árbol de consulta estructurado TugQT.',
      p1: 'Los autores escriben consultas en la sintaxis de texto de <strong>TugQL</strong> — legible, compacta y similar a SQL. Por debajo, el analizador produce <strong>TugQT (Tug Query Tree)</strong>, una representación canónica y legible por máquinas.',
      p2: 'Cada nodo se asigna de forma determinista entre la sintaxis y el árbol. Entradas con errores o que violen el esquema devuelven diagnósticos precisos.',
      noteTitle: 'Nota sobre el nombre:',
      noteText: 'TugQL se conocía anteriormente como DTQL. Los documentos y archivos de consulta DTQL existentes siguen siendo compatibles.',
      codeSampleAria: 'Árbol de consulta TugQT de ejemplo'
    },
    mapping: {
      eyebrow: '03 — nodo → TugQT',
      title: 'Mapeo',
      kicker: 'Cada nodo de consulta tiene una representación estructurada definida.',
      thNode: 'Nodo de consulta',
      thRep: 'Representación en TugQT',
      rows: [
        { node: 'From sobre una colección raíz', rep: '<code>from: { name, alias? }</code>' },
        { node: 'Columna', rep: 'elemento bajo <code>columns:</code> — expresión con <code>as:</code> opcional' },
        { node: 'Comparación', rep: '<code>{ op, left, right }</code>' },
        { node: 'Condición de grupo (And)', rep: '<code>{ and: [ … ] }</code>' },
        { node: 'Condición de grupo (Or)', rep: '<code>{ or: [ … ] }</code>' },
        { node: 'Expresión de orden', rep: 'elemento bajo <code>orderBy:</code> — expresión con <code>desc: true</code> opcional' },
        { node: 'Referencia a campo', rep: '<code>{ field: &lt;nombre&gt; }</code>' },
        { node: 'Constante', rep: '<code>{ value: &lt;escalar&gt; }</code>' },
        { node: 'Array', rep: '<code>{ values: [ &lt;escalar&gt;, … ] }</code>' },
        { node: 'Operador', rep: '<code>==</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>' },
        { node: 'Límite / Desplazamiento', rep: '<code>limit: &lt;int&gt;</code> / <code>offset: &lt;int&gt;</code>' }
      ],
      caption: 'Una expresión define <strong>exactamente uno</strong> de <code>field</code>, <code>value</code> o <code>values</code>, diferenciando una referencia a campo, una constante o un array.'
    },
    scope: {
      eyebrow: '04 — subconjunto cubierto',
      title: 'Qué representa TugQL',
      kicker: 'Colecciones individuales o uniones, columnas seleccionadas, filtros, ordenación y paginación. Todo lo fuera de alcance se rechaza — nunca se descarta en silencio.',
      inScopeTitle: 'Dentro del alcance',
      inScopeBody: 'Orígenes de colección · columnas seleccionadas · árboles de comparación y grupos And/Or · ordenación · limit / offset · joins · parámetros. Expresiones: campo, constante, array. Operadores: <code>==</code>, <code>!=</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>And</code>, <code>Or</code>.',
      outScopeTitle: 'Fuera de alcance (rechazado)',
      outScopeBody: 'Joins cartesianos ilimitados · sintaxis propietaria específica de motor · mutaciones no tipadas fuera de la autoridad del esquema. La serialización falla intencionadamente antes de perder la semántica.',
      losslessTitle: 'Sin pérdidas y canónico',
      losslessBody: '<code>resolve(parse(text))</code> produce árboles deterministas; la serialización es canónica para que las consultas guardadas se comparen limpiamente entre versiones.'
    },
    stack: {
      eyebrow: '05 — dónde se ejecuta',
      title: 'Una consulta, muchos backends',
      kicker: 'TugQL es la superficie de consulta portátil. Se conecta a una capa de abstracción de datos (DALgo) que la adapta a cualquier almacenamiento subyacente.',
      p: 'Debido a que TugQL expresa el subconjunto portable, una consulta escrita una vez se comporta de manera uniforme tanto en Git (inGitDB), SQLite, PostgreSQL como en Firestore.',
      flowAria: 'TugQL se mapea mediante una capa de abstracción a varios motores de almacenamiento',
      tugqlLabel: 'TugQL',
      tugqlSub: 'lenguaje de consulta portátil',
      dalgoLabel: 'DALgo',
      dalgoSub: 'capa de abstracción de datos'
    },
    implementations: {
      eyebrow: '06 — empezar',
      title: 'Especificación e implementaciones',
      kicker: 'El lenguaje es una especificación abierta con esquema publicado e implementaciones en Go y TypeScript.',
      cards: [
        {
          badge: 'especificación · esquema',
          title: 'tugql/tugql',
          desc: 'La especificación de TugQL, el JSON Schema canónico (draft 2020-12) y documentos de ejemplo validados. Anteriormente DTQL.',
          meta: 'github.com/tugql/tugql',
          url: 'https://github.com/tugql/tugql'
        },
        {
          badge: 'implementación de referencia · Go',
          title: 'dal-go/dalgo/dtql',
          desc: 'Librería en Go: analiza, valida, resuelve, formatea y ejecuta consultas TugQL con garantías de ida y vuelta sin pérdidas.',
          meta: 'go get github.com/dal-go/dalgo/dtql',
          url: 'https://github.com/dal-go/dalgo/tree/main/dtql'
        }
      ]
    },
    datatug: {
      eyebrow: 'Uso en desarrollo de productos',
      title: 'Explora y consulta datos con DataTug.',
      kicker: '<a href="https://datatug.app">DataTug</a> ayuda a los desarrolladores a explorar esquemas, crear y ejecutar consultas y analizar resultados. Su trabajo en contratos de consulta con TugQL y TugQT continúa. <a href="https://datatug.app/en/under-the-hood/tools-we-built/#query">Explora las herramientas tras DataTug.</a>'
    },
    closing: {
      title: 'Guárdala. Compárala. Ejecútala donde sea.',
      p: 'TugQL hace de cada consulta un artefacto revisable de primera clase: legible por personas, validado por herramientas y portátil entre plataformas.',
      readSpec: 'Leer la especificación',
      getLibrary: 'Obtener la librería Go'
    },
    footer: {
      copyright: '© 2026 Colaboradores de TugQL',
      spec: 'Especificación',
      goImpl: 'Implementación en Go',
      example: 'Ejemplo',
      mapping: 'Mapeo',
      tag: 'Un lenguaje de consulta abierto y portátil (anteriormente DTQL). Sitio oficial: <a href="https://tugql.org">tugql.org</a>'
    }
  },

  de: {
    meta: {
      title: 'TugQL — eine portable, menschenlesbare Abfragesprache',
      description: 'TugQL (ehemals DTQL) ist eine portable, menschenlesbare Abfragesprache. Eine Abfrage läuft unverändert auf Git, SQLite, PostgreSQL und Firestore — mit intuitiver SQL-ähnlicher Textsyntax und verlustfreiem Abfragebaum (TugQT).',
      ogDescription: 'TugQL: portable, menschenlesbare Abfragesprache und strukturierter Abfragebaum (TugQT) über mehrere Backends. Ehemals DTQL.',
      jsonLdDescription: 'Eine portable, menschenlesbare Abfragesprache und strukturierter Abfragebaum (TugQT) für Datenbanken und Datenabstraktionsschichten.'
    },
    nav: {
      why: 'Warum',
      example: 'Beispiel',
      mapping: 'Zuordnung',
      scope: 'Umfang',
      stack: 'Stack',
      implementations: 'Implementierungen',
      star: 'Star'
    },
    hero: {
      eyebrow: 'Offene Spezifikation · ehemals DTQL',
      titleLine1: 'Abfragen, die Sie',
      titleAccent: 'lesen, diffen',
      titleLine2: ' und vertrauen können.',
      lede: '<strong>TugQL</strong> ist eine portable, menschenlesbare Abfragesprache. Sie kombiniert eine saubere SQL-ähnliche Textsyntax mit einer <strong>verlustfreien 1:1</strong>-Darstellung als strukturierter Abfragebaum (<strong>TugQT</strong>), serialisiert in einfachem YAML/JSON. Speichern Sie eine Abfrage, bearbeiten Sie sie von Hand, überprüfen Sie Diffs in der Versionskontrolle und führen Sie sie verlustfrei über verschiedene Backends aus.',
      readSpec: 'Spezifikation lesen',
      seeExample: 'Beispiel ansehen',
      codeSampleAria: 'Ein TugQL-Abfragedokument'
    },
    why: {
      eyebrow: '01 — Warum TugQL',
      title: 'Eine Abfrage sind Daten. Behandeln Sie sie wie Daten.',
      kicker: 'TugQL macht aus einer Abfrage ein verständliches, diffbares Dokument, das Sie speichern, überprüfen und versionieren können — portabel auf jedem Backend.',
      cards: [
        {
          title: 'Menschenlesbar',
          body: 'Intuitive SQL-ähnliche Syntax für Entwickler, plus einfacher YAML/JSON-Abfragebaum (TugQT) für Tools — jeder kann sie inspizieren, verstehen und bearbeiten.'
        },
        {
          title: 'Verlustfreier Roundtrip',
          body: 'Kanonische Transformation rekonstruiert Abfragen strukturell identisch zur Quelle. Nichts wird stillschweigend verworfen oder angenähert.'
        },
        {
          title: 'Schemavalidiert',
          body: 'Veröffentlicht mit vollständiger JSON-Schema-Validierung (Draft 2020-12). Jedes Tool in jeder Sprache kann Abfragestrukturen vor der Ausführung validieren.'
        },
        {
          title: 'Diff-freundlich',
          body: 'Kanonische Formatierung und deterministische Baum-Serialisierung. Gespeicherte Abfragen diffen sauber in Git und lassen sich wie Code reviewen.'
        },
        {
          title: 'Portabel durch Design',
          body: 'TugQL bietet Funktionalität, die über verschiedene Speicher hinweg portabel ist — dieselbe Abfrage läuft ohne Änderung auf Git, SQLite, PostgreSQL oder Firestore.'
        },
        {
          title: 'Kein volles SQL',
          body: 'Eine bewusst fokussierte, wohldefinierte portable Teilmenge. Nicht-portable Konstrukte werden explizit abgewiesen, statt gefährlich fehlübersetzt zu werden.'
        }
      ]
    },
    example: {
      eyebrow: '02 — Beispiel',
      title: 'Eine Abfrage als TugQL &amp; TugQT',
      kicker: 'In TugQL-Textsyntax verfassen; als strukturierter TugQT-Abfragebaum speichern oder austauschen.',
      p1: 'Abfragen werden in <strong>TugQL</strong>-Textsyntax verfasst — lesbar, kompakt und SQL-nah. Darunter erzeugt der Parser <strong>TugQT (Tug Query Tree)</strong>, eine kanonische, maschinenlesbare Repräsentation.',
      p2: 'Jeder Knoten wird deterministisch zwischen Syntax und Baum abgebildet. Fehlerhafte Eingaben oder Schemaverletzungen liefern präzise Diagnosen.',
      noteTitle: 'Hinweis zur Namensgebung:',
      noteText: 'TugQL hieß früher DTQL. Bestehende DTQL-Dokumente und Abfragedateien werden zur Abwärtskompatibilität weiterhin unterstützt.',
      codeSampleAria: 'Beispiel-TugQT-Abfragebaum'
    },
    mapping: {
      eyebrow: '03 — Knoten → TugQT',
      title: 'Zuordnung',
      kicker: 'Jeder abgedeckte Abfrageknoten besitzt eine definierte strukturierte Darstellung.',
      thNode: 'Abfrageknoten',
      thRep: 'TugQT-Darstellung',
      rows: [
        { node: 'From über eine Quell-Sammlung', rep: '<code>from: { name, alias? }</code>' },
        { node: 'Spalte', rep: 'Element unter <code>columns:</code> — Ausdruck mit optionalem <code>as:</code>' },
        { node: 'Vergleich', rep: '<code>{ op, left, right }</code>' },
        { node: 'Gruppenbedingung (And)', rep: '<code>{ and: [ … ] }</code>' },
        { node: 'Gruppenbedingung (Or)', rep: '<code>{ or: [ … ] }</code>' },
        { node: 'Sortierausdruck', rep: 'Element unter <code>orderBy:</code> — Ausdruck mit optionalem <code>desc: true</code>' },
        { node: 'Feldreferenz', rep: '<code>{ field: &lt;name&gt; }</code>' },
        { node: 'Konstante', rep: '<code>{ value: &lt;skalar&gt; }</code>' },
        { node: 'Array', rep: '<code>{ values: [ &lt;skalar&gt;, … ] }</code>' },
        { node: 'Operator', rep: '<code>==</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>' },
        { node: 'Limit / Offset', rep: '<code>limit: &lt;int&gt;</code> / <code>offset: &lt;int&gt;</code>' }
      ],
      caption: 'Ein Ausdruck setzt <strong>genau eines</strong> von <code>field</code>, <code>value</code> oder <code>values</code>, was eine Feldreferenz, eine Konstante oder ein Array unterscheidet.'
    },
    scope: {
      eyebrow: '04 — abgedeckte Teilmenge',
      title: 'Was TugQL abbildet',
      kicker: 'Einzelsammlungen oder Verknüpfungen, Spaltenauswahl, Filterausdrücke, Sortierung und Paginierung. Alles außerhalb des Umfangs wird abgelehnt — niemals stillschweigend verworfen.',
      inScopeTitle: 'Im Umfang',
      inScopeBody: 'Sammlungsquellen · ausgewählte Spalten · Vergleiche und And/Or-Bäume · Sortierung · Limit / Offset · Joins · Parameter. Ausdrücke: Feld, Konstante, Array. Operatoren: <code>==</code>, <code>!=</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>And</code>, <code>Or</code>.',
      outScopeTitle: 'Außerhalb des Umfangs (abgelehnt)',
      outScopeBody: 'Unbeschränkte kartesische Joins · herstellerspezifische Dialektsyntax · ungetypte Mutationsoperatoren außerhalb des Schemas. Die Serialisierung bricht ab, statt Semantik zu verlieren.',
      losslessTitle: 'Verlustfrei &amp; kanonisch',
      losslessBody: '<code>resolve(parse(text))</code> erzeugt deterministische Abfragebäume; die Serialisierung ist kanonisch, damit Diffs in Versionskontrollen sauber bleiben.'
    },
    stack: {
      eyebrow: '05 — wo es läuft',
      title: 'Eine Abfrage, viele Backends',
      kicker: 'TugQL ist die portable Abfrageebene. Es verbindet sich mit einer Datenabstraktionsschicht (DALgo), die es an den jeweiligen Speicher anpasst.',
      p: 'Weil TugQL die portable Teilmenge abbildet, verhält sich eine einmal geschriebene Abfrage identisch — egal ob auf einem Git-Repository (inGitDB), SQLite, PostgreSQL oder Firestore.',
      flowAria: 'TugQL verbindet sich über eine Abstraktionsschicht mit verschiedenen Speichersystemen',
      tugqlLabel: 'TugQL',
      tugqlSub: 'portable Abfragesprache',
      dalgoLabel: 'DALgo',
      dalgoSub: 'Datenabstraktionsschicht'
    },
    implementations: {
      eyebrow: '06 — loslegen',
      title: 'Spezifikation &amp; Implementierungen',
      kicker: 'Die Sprache ist eine offene Spezifikation mit publiziertem Schema und Implementierungen in Go und TypeScript.',
      cards: [
        {
          badge: 'Spezifikation · Schema',
          title: 'tugql/tugql',
          desc: 'Die TugQL-Spezifikation, das kanonische JSON Schema (Draft 2020-12) und validierte Beispieldokumente. Ehemals DTQL.',
          meta: 'github.com/tugql/tugql',
          url: 'https://github.com/tugql/tugql'
        },
        {
          badge: 'Referenzimplementierung · Go',
          title: 'dal-go/dalgo/dtql',
          desc: 'Die Go-Bibliothek: Parsen, Validieren, Auflösen, Formatieren und Ausführen von TugQL-Abfragen mit verlustfreier Garantie.',
          meta: 'go get github.com/dal-go/dalgo/dtql',
          url: 'https://github.com/dal-go/dalgo/tree/main/dtql'
        }
      ]
    },
    datatug: {
      eyebrow: 'Einsatz in der Produktentwicklung',
      title: 'Daten erkunden und abfragen mit DataTug.',
      kicker: '<a href="https://datatug.app">DataTug</a> hilft Entwicklern beim Erkunden von Datenbankschemata, Erstellen und Ausführen von Abfragen und Verstehen der Ergebnisse. Die Arbeit an Abfrageverträgen mit TugQL und TugQT läuft kontinuierlich. <a href="https://datatug.app/en/under-the-hood/tools-we-built/#query">Erkunden Sie die Werkzeuge hinter DataTug.</a>'
    },
    closing: {
      title: 'Speichern. Diffen. Überall ausführen.',
      p: 'TugQL macht eine Abfrage zu einem erstklassigen, überprüfbaren Artefakt — lesbar für Menschen, validiert von Werkzeugen und portabel auf allen Backends.',
      readSpec: 'Spezifikation lesen',
      getLibrary: 'Go-Bibliothek holen'
    },
    footer: {
      copyright: '© 2026 TugQL-Mitwirkende',
      spec: 'Spezifikation',
      goImpl: 'Go-Implementierung',
      example: 'Beispiel',
      mapping: 'Zuordnung',
      tag: 'Eine offene, portable Abfragesprache (ehemals DTQL). Offizielle Seite: <a href="https://tugql.org">tugql.org</a>'
    }
  },

  fr: {
    meta: {
      title: 'TugQL — un langage de requête portable et lisible par les humains',
      description: 'TugQL (anciennement DTQL) est un langage de requête portable et lisible par les humains. Une même requête s’exécute sans modification sur Git, SQLite, PostgreSQL et Firestore — syntaxe textuelle type SQL et arbre de requêtes sans perte (TugQT).',
      ogDescription: 'TugQL : langage de requête portable et lisible avec arbre structuré (TugQT) multi-moteurs. Anciennement DTQL.',
      jsonLdDescription: 'Un langage de requête portable et lisible par les humains avec arbre de requêtes structuré (TugQT) pour bases de données et couches d’abstraction.'
    },
    nav: {
      why: 'Pourquoi',
      example: 'Exemple',
      mapping: 'Correspondance',
      scope: 'Périmètre',
      stack: 'Stack',
      implementations: 'Implémentations',
      star: 'Star'
    },
    hero: {
      eyebrow: 'Spécification ouverte · anciennement DTQL',
      titleLine1: 'Des requêtes faciles à',
      titleAccent: 'lire, comparer',
      titleLine2: ' et fiables.',
      lede: '<strong>TugQL</strong> est un langage de requête portable et lisible par les humains. Il associe une syntaxe textuelle épurée inspirée du SQL à une représentation arborescente structurée <strong>1:1 et sans perte</strong> (<strong>TugQT</strong>) sérialisée en YAML/JSON brut. Enregistrez une requête, modifiez-la à la main, comparez ses versions dans Git et exécutez-la sur plusieurs moteurs sans aucune perte.',
      readSpec: 'Lire la spécification',
      seeExample: 'Voir un exemple',
      codeSampleAria: 'Un document de requête TugQL'
    },
    why: {
      eyebrow: '01 — Pourquoi TugQL',
      title: 'Une requête est une donnée. Traitez-la comme telle.',
      kicker: 'TugQL transforme une requête en un document clair et diffable que vous pouvez stocker, réviser et versionner — portable sur tous vos backends.',
      cards: [
        {
          title: 'Lisible par les humains',
          body: 'Syntaxe de rédaction intuitive type SQL pour les développeurs, plus arbre de requêtes YAML/JSON (TugQT) pour l’outillage : accessible à tous pour inspection et modification.'
        },
        {
          title: 'Aller-retour sans perte',
          body: 'La simplification canonique reconstruit des requêtes structurellement identiques à la source. Rien n’est abandonné ou déformé silencieusement.'
        },
        {
          title: 'Validé par schéma',
          body: 'Publié avec validation JSON Schema intégrale (draft 2020-12). N’importe quel outil, dans n’importe quel langage, peut valider la structure d’une requête.'
        },
        {
          title: 'Idéal pour les diffs',
          body: 'Formatage canonique et sérialisation arborescente déterministe. Les requêtes enregistrées produisent des diffs nets dans Git et se relisent comme du code classique.'
        },
        {
          title: 'Portable par conception',
          body: 'TugQL expose des fonctionnalités universellement portables : une requête écrite une fois s’exécute à l’identique sur Git, SQLite, PostgreSQL ou Firestore.'
        },
        {
          title: 'Pas tout SQL',
          body: 'Un sous-ensemble portable volontairement ciblé et rigoureusement défini. Les constructions non portables sont explicitement rejetées plutôt que mal traduites.'
        }
      ]
    },
    example: {
      eyebrow: '02 — Exemple',
      title: 'Une requête en TugQL &amp; TugQT',
      kicker: 'Rédigez en syntaxe textuelle TugQL ; conservez ou échangez sous forme d’arbre de requêtes structuré TugQT.',
      p1: 'Les auteurs rédigent les requêtes dans la syntaxe textuelle <strong>TugQL</strong> — claire, compacte et proche du SQL. En sous-main, l’analyseur génère <strong>TugQT (Tug Query Tree)</strong>, une représentation canonique lisible par machine.',
      p2: 'Chaque nœud correspond de façon déterministe entre la syntaxe et l’arbre. Les erreurs de saisie ou de schéma renvoient des diagnostics exploitables avec localisation exacte.',
      noteTitle: 'Précision sur le nom :',
      noteText: 'TugQL était auparavant nommé DTQL. Les documents et fichiers de requête DTQL existants restent pris en charge pour assurer la rétrocompatibilité.',
      codeSampleAria: 'Exemple d’arbre de requêtes TugQT'
    },
    mapping: {
      eyebrow: '03 — nœud → TugQT',
      title: 'Correspondance',
      kicker: 'Chaque nœud de requête couvert dispose d’une représentation structurée définie.',
      thNode: 'Nœud de requête',
      thRep: 'Représentation TugQT',
      rows: [
        { node: 'From sur une collection racine', rep: '<code>from: { name, alias? }</code>' },
        { node: 'Colonne', rep: 'élément sous <code>columns:</code> — expression avec <code>as:</code> optionnel' },
        { node: 'Comparaison', rep: '<code>{ op, left, right }</code>' },
        { node: 'Condition de groupe (And)', rep: '<code>{ and: [ … ] }</code>' },
        { node: 'Condition de groupe (Or)', rep: '<code>{ or: [ … ] }</code>' },
        { node: 'Expression d’ordre', rep: 'élément sous <code>orderBy:</code> — expression avec <code>desc: true</code> optionnel' },
        { node: 'Référence de champ', rep: '<code>{ field: &lt;nom&gt; }</code>' },
        { node: 'Constante', rep: '<code>{ value: &lt;scalaire&gt; }</code>' },
        { node: 'Tableau', rep: '<code>{ values: [ &lt;scalaire&gt;, … ] }</code>' },
        { node: 'Opérateur', rep: '<code>==</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>' },
        { node: 'Limite / Décalage', rep: '<code>limit: &lt;int&gt;</code> / <code>offset: &lt;int&gt;</code>' }
      ],
      caption: 'Une expression définit <strong>exactement un</strong> parmi <code>field</code>, <code>value</code> ou <code>values</code>, ce qui distingue une référence de champ, une constante ou un tableau.'
    },
    scope: {
      eyebrow: '04 — périmètre couvert',
      title: 'Ce que représente TugQL',
      kicker: 'Collections simples ou jointures, colonnes sélectionnées, expressions de filtrage, tri et pagination. Tout ce qui sort du périmètre est rejeté — jamais ignoré en silence.',
      inScopeTitle: 'Dans le périmètre',
      inScopeBody: 'Sources de collections · colonnes sélectionnées · arbres de comparaison et groupes And/Or · tri · limit / offset · jointures · paramètres. Expressions : référence de champ, constante, tableau. Opérateurs : <code>==</code>, <code>!=</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>And</code>, <code>Or</code>.',
      outScopeTitle: 'Hors périmètre (rejeté)',
      outScopeBody: 'Jointures cartésiennes non bornées · syntaxe spécifique à un éditeur · opérateurs de mutation non typés hors schéma. La sérialisation échoue plutôt que de perdre la sémantique de la requête.',
      losslessTitle: 'Sans perte &amp; canonique',
      losslessBody: '<code>resolve(parse(text))</code> produit des arbres déterministes ; la sérialisation est canonique afin que les requêtes sauvegardées se comparent nettement d’une version à l’autre.'
    },
    stack: {
      eyebrow: '05 — environnements d’exécution',
      title: 'Une requête, plusieurs moteurs',
      kicker: 'TugQL constitue la surface de requête portable. Il s’appuie sur une couche d’abstraction de données (DALgo) qui l’adapte au stockage sous-jacent.',
      p: 'Parce que TugQL formalise le sous-ensemble portable, une requête écrite une fois se comporte de manière identique qu’elle s’exécute sur un dépôt Git (inGitDB), SQLite, PostgreSQL ou Firestore.',
      flowAria: 'TugQL s’adapte via une couche d’abstraction à divers moteurs de stockage',
      tugqlLabel: 'TugQL',
      tugqlSub: 'langage de requête portable',
      dalgoLabel: 'DALgo',
      dalgoSub: 'couche d’abstraction de données'
    },
    implementations: {
      eyebrow: '06 — démarrer',
      title: 'Spécification &amp; implémentations',
      kicker: 'Le langage est une spécification ouverte accompagnée d’un schéma publié et d’implémentations en Go et TypeScript.',
      cards: [
        {
          badge: 'spécification · schéma',
          title: 'tugql/tugql',
          desc: 'La spécification TugQL, le schéma canonique JSON Schema (draft 2020-12) et les exemples validés. Anciennement DTQL.',
          meta: 'github.com/tugql/tugql',
          url: 'https://github.com/tugql/tugql'
        },
        {
          badge: 'implémentation de référence · Go',
          title: 'dal-go/dalgo/dtql',
          desc: 'La bibliothèque Go : analyser, valider, résoudre, formater et exécuter des requêtes TugQL avec garanties d’aller-retour sans perte.',
          meta: 'go get github.com/dal-go/dalgo/dtql',
          url: 'https://github.com/dal-go/dalgo/tree/main/dtql'
        }
      ]
    },
    datatug: {
      eyebrow: 'Utilisé pour le développement produit',
      title: 'Explorez et interrogez vos données avec DataTug.',
      kicker: '<a href="https://datatug.app">DataTug</a> aide les développeurs à explorer les schémas de bases de données, construire et exécuter des requêtes et interpréter les résultats. L’intégration des contrats de requête avec TugQL et TugQT se poursuit. <a href="https://datatug.app/en/under-the-hood/tools-we-built/#query">Découvrez les outils développés pour DataTug.</a>'
    },
    closing: {
      title: 'Enregistrez. Comparez. Exécutez partout.',
      p: 'TugQL fait de la requête un artefact révisable de premier ordre — lisible par les humains, validé par l’outillage et portable sur tous vos moteurs.',
      readSpec: 'Lire la spécification',
      getLibrary: 'Obtenir la bibliothèque Go'
    },
    footer: {
      copyright: '© 2026 Contributeurs TugQL',
      spec: 'Spécification',
      goImpl: 'Implémentation Go',
      example: 'Exemple',
      mapping: 'Correspondance',
      tag: 'Un langage de requête ouvert et portable (anciennement DTQL). Accueil officiel : <a href="https://tugql.org">tugql.org</a>'
    }
  },

  'pt-br': {
    meta: {
      title: 'TugQL — uma linguagem de consulta portátil e legível por humanos',
      description: 'TugQL (anteriormente DTQL) é uma linguagem de consulta portátil e legível por humanos. Uma mesma consulta roda inalterada no Git, SQLite, PostgreSQL e Firestore — com sintaxe limpa estilo SQL e árvore de consulta sem perdas validada por esquema (TugQT).',
      ogDescription: 'TugQL: linguagem de consulta portátil e legível com árvore estruturada (TugQT) entre backends. Antigo DTQL.',
      jsonLdDescription: 'Uma linguagem de consulta portátil e legível por humanos com árvore de consulta estruturada (TugQT) para bancos de dados e camadas de abstração.'
    },
    nav: {
      why: 'Por que',
      example: 'Exemplo',
      mapping: 'Mapeamento',
      scope: 'Escopo',
      stack: 'Stack',
      implementations: 'Implementações',
      star: 'Star'
    },
    hero: {
      eyebrow: 'Especificação aberta · anteriormente DTQL',
      titleLine1: 'Consultas que você pode',
      titleAccent: 'ler, comparar',
      titleLine2: ' e confiar.',
      lede: '<strong>TugQL</strong> é uma linguagem de consulta portátil e legível por humanos. Ela combina uma sintaxe de texto limpa semelhante a SQL com uma representação estruturada de árvore de consulta <strong>1:1 e sem perdas</strong> (<strong>TugQT</strong>) serializada como YAML/JSON simples. Salve uma consulta, edite-a manualmente, veja o diff no controle de versão e execute-a entre backends sem perdas.',
      readSpec: 'Ler a especificação',
      seeExample: 'Ver um exemplo',
      codeSampleAria: 'Um documento de consulta TugQL'
    },
    why: {
      eyebrow: '01 — Por que TugQL',
      title: 'Uma consulta é um dado. Trate-a como dado.',
      kicker: 'TugQL transforma uma consulta em um documento compreensível e versionável que você pode armazenar, revisar e comparar — portátil em qualquer backend.',
      cards: [
        {
          title: 'Legível por humanos',
          body: 'Sintaxe intuitiva semelhante a SQL para pessoas, além de árvore de consulta YAML/JSON simples (TugQT) para ferramentas — qualquer um pode inspecionar e editar.'
        },
        {
          title: 'Ida e volta sem perdas',
          body: 'A transformação canônica reconstrói consultas estruturalmente idênticas à origem. Nada é silenciosamente descartado ou aproximado.'
        },
        {
          title: 'Validado por esquema',
          body: 'Publicado com validação completa em JSON Schema (draft 2020-12). Qualquer ferramenta em qualquer linguagem pode validar consultas antes da execução.'
        },
        {
          title: 'Ideal para diffs',
          body: 'Formatação canônica e serialização determinística da árvore. Consultas salvas geram diffs limpos no Git e são revisadas como código.'
        },
        {
          title: 'Portátil por design',
          body: 'TugQL expõe funcionalidades portáteis entre plataformas: a mesma consulta executa sem alterações no Git, SQLite, PostgreSQL ou Firestore.'
        },
        {
          title: 'Não é SQL completo',
          body: 'Um subconjunto portátil deliberadamente focado e bem definido. Recursos não portáteis são rejeitados explicitamente em vez de traduzidos de forma insegura.'
        }
      ]
    },
    example: {
      eyebrow: '02 — Exemplo',
      title: 'Uma consulta em TugQL e TugQT',
      kicker: 'Escreva na sintaxe de texto TugQL; armazene ou compartilhe como árvore de consulta estruturada TugQT.',
      p1: 'Desenvolvedores escrevem consultas na sintaxe de texto do <strong>TugQL</strong> — legível, compacta e parecida com SQL. Por baixo, o parser produz o <strong>TugQT (Tug Query Tree)</strong>, uma representação canônica legível por máquina.',
      p2: 'Cada nó mapeia deterministicamente entre sintaxe e árvore. Erros de entrada ou violações de esquema retornam diagnósticos com localização precisa no código.',
      noteTitle: 'Nota sobre a nomenclatura:',
      noteText: 'TugQL era anteriormente conhecido como DTQL. Documentos e arquivos de consulta DTQL existentes continuam suportados para compatibilidade com versões anteriores.',
      codeSampleAria: 'Árvore de consulta TugQT de exemplo'
    },
    mapping: {
      eyebrow: '03 — nó → TugQT',
      title: 'Mapeamento',
      kicker: 'Cada nó de consulta possui uma representação estruturada definida.',
      thNode: 'Nó de consulta',
      thRep: 'Representação TugQT',
      rows: [
        { node: 'From sobre uma coleção raiz', rep: '<code>from: { name, alias? }</code>' },
        { node: 'Coluna', rep: 'item sob <code>columns:</code> — expressão com <code>as:</code> opcional' },
        { node: 'Comparação', rep: '<code>{ op, left, right }</code>' },
        { node: 'Condição em grupo (And)', rep: '<code>{ and: [ … ] }</code>' },
        { node: 'Condição em grupo (Or)', rep: '<code>{ or: [ … ] }</code>' },
        { node: 'Expressão de ordenação', rep: 'item sob <code>orderBy:</code> — expressão com <code>desc: true</code> opcional' },
        { node: 'Referência a campo', rep: '<code>{ field: &lt;nome&gt; }</code>' },
        { node: 'Constante', rep: '<code>{ value: &lt;escalar&gt; }</code>' },
        { node: 'Array', rep: '<code>{ values: [ &lt;escalar&gt;, … ] }</code>' },
        { node: 'Operador', rep: '<code>==</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>' },
        { node: 'Limit / Offset', rep: '<code>limit: &lt;int&gt;</code> / <code>offset: &lt;int&gt;</code>' }
      ],
      caption: 'Uma expressão define <strong>exatamente um</strong> entre <code>field</code>, <code>value</code> ou <code>values</code>, identificando uma referência de campo, constante ou array.'
    },
    scope: {
      eyebrow: '04 — subconjunto coberto',
      title: 'O que o TugQL representa',
      kicker: 'Coleções individuais ou unidas, colunas selecionadas, expressões de filtro, ordenação e paginação. Tudo fora de escopo é rejeitado — nunca descartado em silêncio.',
      inScopeTitle: 'No escopo',
      inScopeBody: 'Fontes de coleção · colunas selecionadas · comparações e grupos And/Or · ordenação · limit / offset · joins · parâmetros. Expressões: campo, constante, array. Operadores: <code>==</code>, <code>!=</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>And</code>, <code>Or</code>.',
      outScopeTitle: 'Fora de escopo (rejeitado)',
      outScopeBody: 'Joins cartesianos ilimitados · sintaxe proprietária específica de banco · operadores de mutação sem tipo fora do esquema. A serialização falha explicitamente para evitar perda semântica.',
      losslessTitle: 'Sem perdas e canônico',
      losslessBody: '<code>resolve(parse(text))</code> produz árvores determinísticas; a serialização é canônica para que consultas salvas mostrem diffs limpos entre versões.'
    },
    stack: {
      eyebrow: '05 — onde roda',
      title: 'Uma consulta, muitos backends',
      kicker: 'O TugQL é a superfície de consulta portátil. Ele se integra a uma camada de abstração de dados (DALgo) que se adapta a qualquer armazenamento subjacente.',
      p: 'Como o TugQL expressa o subconjunto portátil, uma consulta escrita uma vez se comporta de forma idêntica tanto em um repositório Git (inGitDB), SQLite, PostgreSQL ou Firestore.',
      flowAria: 'TugQL se mapeia através de uma camada de abstração para diversos bancos de dados',
      tugqlLabel: 'TugQL',
      tugqlSub: 'linguagem de consulta portátil',
      dalgoLabel: 'DALgo',
      dalgoSub: 'camada de abstração de dados'
    },
    implementations: {
      eyebrow: '06 — comece a usar',
      title: 'Especificação e implementações',
      kicker: 'A linguagem é uma especificação aberta com esquema publicado e implementações em Go e TypeScript.',
      cards: [
        {
          badge: 'especificação · esquema',
          title: 'tugql/tugql',
          desc: 'A especificação TugQL, o JSON Schema canônico (draft 2020-12) e documentos de exemplo validados. Anteriormente DTQL.',
          meta: 'github.com/tugql/tugql',
          url: 'https://github.com/tugql/tugql'
        },
        {
          badge: 'implementação de referência · Go',
          title: 'dal-go/dalgo/dtql',
          desc: 'A biblioteca em Go: faça parse, valide, resolva, formate e execute consultas TugQL com garantias de ida e volta sem perdas.',
          meta: 'go get github.com/dal-go/dalgo/dtql',
          url: 'https://github.com/dal-go/dalgo/tree/main/dtql'
        }
      ]
    },
    datatug: {
      eyebrow: 'Usado no desenvolvimento de produtos',
      title: 'Explore e consulte dados com o DataTug.',
      kicker: '<a href="https://datatug.app">DataTug</a> ajuda desenvolvedores a explorar esquemas, criar e executar consultas e entender resultados. O trabalho com contratos de consulta usando TugQL e TugQT é contínuo. <a href="https://datatug.app/en/under-the-hood/tools-we-built/#query">Conheça as ferramentas por trás do DataTug.</a>'
    },
    closing: {
      title: 'Salve. Compare. Execute em qualquer lugar.',
      p: 'O TugQL torna uma consulta um artefato de primeira classe e auditável — legível por pessoas, validado por ferramentas e portátil entre plataformas.',
      readSpec: 'Ler a especificação',
      getLibrary: 'Obter a biblioteca Go'
    },
    footer: {
      copyright: '© 2026 Colaboradores do TugQL',
      spec: 'Especificação',
      goImpl: 'Implementação em Go',
      example: 'Exemplo',
      mapping: 'Mapeamento',
      tag: 'Uma linguagem de consulta aberta e portátil (antigo DTQL). Site canônico: <a href="https://tugql.org">tugql.org</a>'
    }
  },

  ru: {
    meta: {
      title: 'TugQL — переносимый, человекочитаемый язык запросов',
      description: 'TugQL (ранее DTQL) — переносимый, человекочитаемый язык запросов. Один и тот же запрос выполняется без изменений в Git, SQLite, PostgreSQL и Firestore — с интуитивным SQL-подобным синтаксисом и деревом запросов без потерь (TugQT).',
      ogDescription: 'TugQL: переносимый человекочитаемый язык запросов и структурированное дерево запросов (TugQT) для различных баз данных. Ранее DTQL.',
      jsonLdDescription: 'Переносимый, понятный человеку язык запросов и структурированное дерево запросов (TugQT) для баз данных и слоев абстракции данных.'
    },
    nav: {
      why: 'Преимущества',
      example: 'Пример',
      mapping: 'Сопоставление',
      scope: 'Возможности',
      stack: 'Стек',
      implementations: 'Реализации',
      star: 'Star'
    },
    hero: {
      eyebrow: 'Открытая спецификация · ранее DTQL',
      titleLine1: 'Запросы, которые можно',
      titleAccent: 'читать, сравнивать',
      titleLine2: ' и доверять.',
      lede: '<strong>TugQL</strong> — переносимый, человекочитаемый язык запросов. Он сочетает чистый SQL-подобный синтаксис с <strong>эквивалентным представлением 1:1 без потерь</strong> в виде дерева запросов (<strong>TugQT</strong>), сериализуемого в обычный YAML/JSON. Сохраняйте запрос, редактируйте вручную, просматривайте diff в Git и выполняйте на различных хранилищах без потерь данных.',
      readSpec: 'Читать спецификацию',
      seeExample: 'Смотреть пример',
      codeSampleAria: 'Документ запроса TugQL'
    },
    why: {
      eyebrow: '01 — Зачем нужен TugQL',
      title: 'Запрос — это данные. Относитесь к нему как к данным.',
      kicker: 'TugQL превращает запрос в понятный, версионируемый документ, который можно хранить, рецензировать и сравнивать — переносимый на любой бекенд.',
      cards: [
        {
          title: 'Понятен человеку',
          body: 'Интуитивный SQL-подобный синтаксис для разработчиков плюс дерево запроса YAML/JSON (TugQT) для инструментов — каждый может проверить и изменить его.'
        },
        {
          title: 'Преобразование без потерь',
          body: 'Каноническая нормализация восстанавливает запросы, структурно идентичные исходным. Ничто не отбрасывается и не искажается втихую.'
        },
        {
          title: 'Валидация по схеме',
          body: 'Опубликовано с полной валидацией через JSON Schema (draft 2020-12). Любой инструмент на любом языке может проверить структуру запроса перед выполнением.'
        },
        {
          title: 'Удобен для diff в Git',
          body: 'Каноническое форматирование и детерминированная сериализация дерева. Сохраненные запросы наглядно диффаются в Git и рецензируются как код.'
        },
        {
          title: 'Переносим по дизайну',
          body: 'TugQL предоставляет функциональность, переносимую между базами данных: один и тот же запрос без изменений работает в Git, SQLite, PostgreSQL или Firestore.'
        },
        {
          title: 'Не полный SQL',
          body: 'Осознанно сфокусированное, четко определенное переносимое подмножество. Непереносимые конструкции явно отклоняются, а не транслируются с рисками.'
        }
      ]
    },
    example: {
      eyebrow: '02 — Пример',
      title: 'Запрос в виде TugQL и TugQT',
      kicker: 'Пишите в текстовом синтаксисе TugQL; храните или передавайте в виде структурированного дерева TugQT.',
      p1: 'Разработчики составляют запросы в текстовом синтаксисе <strong>TugQL</strong> — наглядном, компактном и близком к SQL. Внутри парсер формирует <strong>TugQT (Tug Query Tree)</strong> — каноническое машиночитаемое представление.',
      p2: 'Каждый узел однозначно сопоставляется между синтаксисом и деревом. Ошибки ввода или нарушения схемы возвращают четкую диагностику с точными координатами в тексте.',
      noteTitle: 'О переименовании:',
      noteText: 'Ранее TugQL назывался DTQL. Существующие документы и файлы запросов DTQL продолжают поддерживаться для обратной совместимости.',
      codeSampleAria: 'Пример дерева запросов TugQT'
    },
    mapping: {
      eyebrow: '03 — узел → TugQT',
      title: 'Сопоставление',
      kicker: 'Каждый поддерживаемый узел запроса имеет строго определенное представление в структуре.',
      thNode: 'Узел запроса',
      thRep: 'Представление в TugQT',
      rows: [
        { node: 'From по корневой коллекции', rep: '<code>from: { name, alias? }</code>' },
        { node: 'Колонка', rep: 'элемент в <code>columns:</code> — выражение с необязательным <code>as:</code>' },
        { node: 'Сравнение', rep: '<code>{ op, left, right }</code>' },
        { node: 'Группа условий (And)', rep: '<code>{ and: [ … ] }</code>' },
        { node: 'Группа условий (Or)', rep: '<code>{ or: [ … ] }</code>' },
        { node: 'Выражение сортировки', rep: 'элемент в <code>orderBy:</code> — выражение с необязательным <code>desc: true</code>' },
        { node: 'Ссылка на поле', rep: '<code>{ field: &lt;name&gt; }</code>' },
        { node: 'Константа', rep: '<code>{ value: &lt;скаляр&gt; }</code>' },
        { node: 'Массив', rep: '<code>{ values: [ &lt;скаляр&gt;, … ] }</code>' },
        { node: 'Оператор', rep: '<code>==</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>' },
        { node: 'Limit / Offset', rep: '<code>limit: &lt;int&gt;</code> / <code>offset: &lt;int&gt;</code>' }
      ],
      caption: 'Выражение задает <strong>ровно одно</strong> из полей: <code>field</code>, <code>value</code> или <code>values</code>, что определяет ссылку на поле, константу или массив.'
    },
    scope: {
      eyebrow: '04 — поддерживаемое подмножество',
      title: 'Что описывает TugQL',
      kicker: 'Коллекции и деревья объединений, выбираемые колонки, фильтрация, сортировка и пагинация. Все, что вне рамок, отклоняется — и никогда не отбрасывается втихую.',
      inScopeTitle: 'Поддерживается',
      inScopeBody: 'Источники данных · выбранные колонки · сравнения и группы And/Or · сортировка · limit / offset · joins · параметры. Выражения: ссылка на поле, константа, массив. Операторы: <code>==</code>, <code>!=</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>And</code>, <code>Or</code>.',
      outScopeTitle: 'Не поддерживается (ошибка)',
      outScopeBody: 'Неограниченные декартовы произведения · диалектный синтаксис конкретных СУБД · нетипизированные операторы модификации вне схемы. Сериализация выдает ошибку, чтобы исключить потерю смысла запроса.',
      losslessTitle: 'Без потерь и канонично',
      losslessBody: '<code>resolve(parse(text))</code> создает детерминированные деревья; сериализация канонична, поэтому сохраненные запросы дают чистые diff при сравнении версий.'
    },
    stack: {
      eyebrow: '05 — где выполняется',
      title: 'Один запрос — разные хранилища',
      kicker: 'TugQL — это переносимый интерфейс запросов. Он опирается на слой абстракции данных (DALgo), который адаптирует его к конкретным базам данных.',
      p: 'Поскольку TugQL охватывает переносимое подмножество, однажды написанный запрос ведет себя одинаково как при выполнении над Git-репозиторием (inGitDB), так и в SQLite, PostgreSQL или Firestore.',
      flowAria: 'TugQL проецируется через слой абстракции данных на несколько целевых хранилищ',
      tugqlLabel: 'TugQL',
      tugqlSub: 'переносимый язык запросов',
      dalgoLabel: 'DALgo',
      dalgoSub: 'слой абстракции данных'
    },
    implementations: {
      eyebrow: '06 — с чего начать',
      title: 'Спецификация и реализации',
      kicker: 'Язык представляет собой открытую спецификацию с опубликованной схемой и реализациями на Go и TypeScript.',
      cards: [
        {
          badge: 'спецификация · схема',
          title: 'tugql/tugql',
          desc: 'Спецификация TugQL, каноническая JSON Schema (draft 2020-12) и проверенные примеры документов. Ранее DTQL.',
          meta: 'github.com/tugql/tugql',
          url: 'https://github.com/tugql/tugql'
        },
        {
          badge: 'эталонная реализация · Go',
          title: 'dal-go/dalgo/dtql',
          desc: 'Библиотека на Go: парсинг, валидация, резолвинг, форматирование и выполнение запросов TugQL с гарантией обратимости без потерь.',
          meta: 'go get github.com/dal-go/dalgo/dtql',
          url: 'https://github.com/dal-go/dalgo/tree/main/dtql'
        }
      ]
    },
    datatug: {
      eyebrow: 'Используется в реальных продуктах',
      title: 'Исследуйте и запрашивайте данные с помощью DataTug.',
      kicker: '<a href="https://datatug.app">DataTug</a> помогает разработчикам исследовать схемы БД, составлять и запускать запросы и анализировать результаты. Интеграция контрактов запросов TugQL и TugQT активно развивается. <a href="https://datatug.app/en/under-the-hood/tools-we-built/#query">Познакомьтесь с инструментами DataTug.</a>'
    },
    closing: {
      title: 'Сохраняйте. Сравнивайте. Запускайте где угодно.',
      p: 'TugQL превращает запрос в первоклассный артефакт — понятный человеку, валидируемый инструментами и переносимый между любыми хранилищами.',
      readSpec: 'Читать спецификацию',
      getLibrary: 'Скачать библиотеку для Go'
    },
    footer: {
      copyright: '© 2026 Авторы и контрибьюторы TugQL',
      spec: 'Спецификация',
      goImpl: 'Реализация на Go',
      example: 'Пример',
      mapping: 'Сопоставление',
      tag: 'Открытый переносимый язык запросов (ранее DTQL). Канонический сайт: <a href="https://tugql.org">tugql.org</a>'
    }
  },

  uk: {
    meta: {
      title: 'TugQL — портативна, людиночитана мова запитів',
      description: 'TugQL (раніше DTQL) — портативна, людиночитана мова запитів. Один і той самий запит виконується без змін у Git, SQLite, PostgreSQL та Firestore — з інтуїтивним SQL-подібним синтаксисом і деревом запитів без втрат (TugQT).',
      ogDescription: 'TugQL: портативна людиночитана мова запитів та структуроване дерево запитів (TugQT) для різних баз даних. Раніше DTQL.',
      jsonLdDescription: 'Портативна, зрозуміла людині мова запитів та структуроване дерево запитів (TugQT) для баз даних і шарів абстракції.'
    },
    nav: {
      why: 'Чому TugQL',
      example: 'Приклад',
      mapping: 'Відповідність',
      scope: 'Можливості',
      stack: 'Стек',
      implementations: 'Реалізації',
      star: 'Star'
    },
    hero: {
      eyebrow: 'Відкрита специфікація · раніше DTQL',
      titleLine1: 'Запити, які можна',
      titleAccent: 'читати, порівнювати',
      titleLine2: ' і довіряти.',
      lede: '<strong>TugQL</strong> — портативна, людиночитана мова запитів. Вона поєднує чистий SQL-подібний синтаксис із <strong>еквівалентним представленням 1:1 без втрат</strong> у вигляді структурованого дерева запитів (<strong>TugQT</strong>), серіалізованого у звичайний YAML/JSON. Зберігайте запит, редагуйте вручну, переглядайте diff у системі контролю версій та виконуйте на різних бекендах без втрат.',
      readSpec: 'Читати специфікацію',
      seeExample: 'Переглянути приклад',
      codeSampleAria: 'Документ запиту TugQL'
    },
    why: {
      eyebrow: '01 — Чому TugQL',
      title: 'Запит — це дані. Працюйте з ним як з даними.',
      kicker: 'TugQL перетворює запит на зрозумілий документ із підтримкою diff, який можна зберігати, рецензувати та версіонувати — портативний на будь-якому бекенді.',
      cards: [
        {
          title: 'Зрозумілий людині',
          body: 'Інтуїтивний SQL-подібний синтаксис для людей плюс просте дерево запиту YAML/JSON (TugQT) для інструментів — кожен може перевірити та відредагувати.'
        },
        {
          title: 'Перетворення без втрат',
          body: 'Канонічна нормалізація відтворює запити, структурно ідентичні вихідним. Жодна деталь не втрачається і не спотворюється непомітно.'
        },
        {
          title: 'Валідований за схемою',
          body: 'Опубліковано з повною валідацією через JSON Schema (draft 2020-12). Будь-який інструмент будь-якою мовою може перевірити структуру запиту.'
        },
        {
          title: 'Зручний для diff у Git',
          body: 'Канонічне форматування та детермінована серіалізація. Збережені запити дають чистий diff у Git і перевіряються як звичайний код.'
        },
        {
          title: 'Портативний за задумом',
          body: 'TugQL надає функціональність, універсальну між різними сховищами: запит без змін працює у Git, SQLite, PostgreSQL або Firestore.'
        },
        {
          title: 'Не повний SQL',
          body: 'Свідомо сфокусована, чітко окреслена портативна підмножина. Непереносні конструкції відхиляються явно, а не транслюються з ризиками.'
        }
      ]
    },
    example: {
      eyebrow: '02 — Приклад',
      title: 'Запит у вигляді TugQL та TugQT',
      kicker: 'Створюйте у текстовому синтаксисі TugQL; зберігайте чи передавайте як структуроване дерево TugQT.',
      p1: 'Розробники пишуть запити в текстовому синтаксисі <strong>TugQL</strong> — наочному, компактному та схожому на SQL. Усередині парсер створює <strong>TugQT (Tug Query Tree)</strong> — канонічне машиночитане представлення.',
      p2: 'Кожен вузол детерміновано співвідноситься між синтаксисом і деревом. Помилки введення або порушення схеми повертають точну діагностику з вказівкою місця в тексті.',
      noteTitle: 'Щодо назви:',
      noteText: 'Раніше TugQL мав назву DTQL. Наявні документи та файли запитів DTQL продовжують підтримуватися для зворотної сумісності.',
      codeSampleAria: 'Приклад дерева запитів TugQT'
    },
    mapping: {
      eyebrow: '03 — вузол → TugQT',
      title: 'Відповідність',
      kicker: 'Кожен підтримуваний вузол запиту має чітко визначене структуроване представлення.',
      thNode: 'Вузол запиту',
      thRep: 'Представлення в TugQT',
      rows: [
        { node: 'From по кореневій колекції', rep: '<code>from: { name, alias? }</code>' },
        { node: 'Колонка', rep: 'елемент у <code>columns:</code> — вираз із необов’язковим <code>as:</code>' },
        { node: 'Порівняння', rep: '<code>{ op, left, right }</code>' },
        { node: 'Групова умова (And)', rep: '<code>{ and: [ … ] }</code>' },
        { node: 'Групова умова (Or)', rep: '<code>{ or: [ … ] }</code>' },
        { node: 'Вираз сортування', rep: 'елемент у <code>orderBy:</code> — вираз із необов’язковим <code>desc: true</code>' },
        { node: 'Посилання на поле', rep: '<code>{ field: &lt;name&gt; }</code>' },
        { node: 'Константа', rep: '<code>{ value: &lt;скаляр&gt; }</code>' },
        { node: 'Масив', rep: '<code>{ values: [ &lt;скаляр&gt;, … ] }</code>' },
        { node: 'Оператор', rep: '<code>==</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>' },
        { node: 'Limit / Offset', rep: '<code>limit: &lt;int&gt;</code> / <code>offset: &lt;int&gt;</code>' }
      ],
      caption: 'Вираз встановлює <strong>рівно одне</strong> з полів: <code>field</code>, <code>value</code> або <code>values</code>, що розрізняє посилання на поле, константу або масив.'
    },
    scope: {
      eyebrow: '04 — підтримувана підмножина',
      title: 'Що охоплює TugQL',
      kicker: 'Колекції та об’єднання, вибір колонок, фільтрація, сортування та пагінація. Усе за межами відхиляється — і ніколи не ігнорується мовчки.',
      inScopeTitle: 'Підтримується',
      inScopeBody: 'Джерела колекцій · вибрані колонки · порівняння та дерева And/Or · сортування · limit / offset · joins · параметри. Вирази: поле, константа, масив. Оператори: <code>==</code>, <code>!=</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>And</code>, <code>Or</code>.',
      outScopeTitle: 'Поза межами (помилка)',
      outScopeBody: 'Необмежені декартові добутки · діалектний синтаксис окремих СКБД · нетипізовані оператори модифікації поза схемою. Серіалізація завершується помилкою, щоб не втратити семантику запиту.',
      losslessTitle: 'Без втрат і канонічно',
      losslessBody: '<code>resolve(parse(text))</code> генерує детерміновані дерева; серіалізація канонічна, тому збережені запити дають чистий diff при порівнянні версій.'
    },
    stack: {
      eyebrow: '05 — де виконується',
      title: 'Один запит, багато бекендів',
      kicker: 'TugQL — це портативний інтерфейс запитів. Він спирається на шар абстракції даних (DALgo), що адаптує його до будь-якого сховища.',
      p: 'Оскільки TugQL визначає портативну підмножину, одного разу написаний запит поводиться однаково як над Git-репозиторієм (inGitDB), так і в SQLite, PostgreSQL або Firestore.',
      flowAria: 'TugQL проєктується через шар абстракції даних на декілька цільових сховищ',
      tugqlLabel: 'TugQL',
      tugqlSub: 'портативна мова запитів',
      dalgoLabel: 'DALgo',
      dalgoSub: 'шар абстракції даних'
    },
    implementations: {
      eyebrow: '06 — початок роботи',
      title: 'Специфікація та реалізації',
      kicker: 'Мова є відкритою специфікацією з опублікованою схемою та реалізаціями мовами Go і TypeScript.',
      cards: [
        {
          badge: 'специфікація · схема',
          title: 'tugql/tugql',
          desc: 'Специфікація TugQL, канонічна JSON Schema (draft 2020-12) та перевірені приклади документів. Раніше DTQL.',
          meta: 'github.com/tugql/tugql',
          url: 'https://github.com/tugql/tugql'
        },
        {
          badge: 'еталонна реалізація · Go',
          title: 'dal-go/dalgo/dtql',
          desc: 'Бібліотека для Go: парсинг, валідація, резолвінг, форматування та виконання запитів TugQL з гарантією оборотності без втрат.',
          meta: 'go get github.com/dal-go/dalgo/dtql',
          url: 'https://github.com/dal-go/dalgo/tree/main/dtql'
        }
      ]
    },
    datatug: {
      eyebrow: 'Використовується у розробці продуктів',
      title: 'Досліджуйте та запитуйте дані разом із DataTug.',
      kicker: '<a href="https://datatug.app">DataTug</a> допомагає розробникам досліджувати схеми баз даних, створювати та виконувати запити й розуміти результати. Робота над контрактами запитів TugQL та TugQT активно триває. <a href="https://datatug.app/en/under-the-hood/tools-we-built/#query">Дізнайтеся більше про інструменти DataTug.</a>'
    },
    closing: {
      title: 'Зберігайте. Порівнюйте. Виконуйте будь-де.',
      p: 'TugQL робить запит повноцінним артефактом — зрозумілим для людей, валідованим інструментами та портативним для будь-яких баз даних.',
      readSpec: 'Читати специфікацію',
      getLibrary: 'Отримати бібліотеку для Go'
    },
    footer: {
      copyright: '© 2026 Автори та учасники TugQL',
      spec: 'Специфікація',
      goImpl: 'Реалізація на Go',
      example: 'Приклад',
      mapping: 'Відповідність',
      tag: 'Відкрита портативна мова запитів (раніше DTQL). Офіційний сайт: <a href="https://tugql.org">tugql.org</a>'
    }
  },

  ja: {
    meta: {
      title: 'TugQL — ポータブルで人間が読みやすいクエリ言語',
      description: 'TugQL（旧称 DTQL）はポータブルで人間が読みやすいクエリ言語です。Git、SQLite、PostgreSQL、Firestore上でクエリがそのまま動作し、直感的なSQL風構文とスキーマ検証済みのロスレスなクエリツリー（TugQT）を備えています。',
      ogDescription: 'TugQL: 複数バックエンドに対応するポータブルで可読性の高いクエリ言語と構造化クエリツリー（TugQT）。旧称 DTQL。',
      jsonLdDescription: 'データベースおよびデータ抽象化レイヤー向けのポータブルで人間が読みやすいクエリ言語および構造化クエリツリー（TugQT）。'
    },
    nav: {
      why: '特長',
      example: '例',
      mapping: 'マッピング',
      scope: '適用範囲',
      stack: 'スタック',
      implementations: '実装',
      star: 'Star'
    },
    hero: {
      eyebrow: 'オープン仕様 · 旧称 DTQL',
      titleLine1: '読める、',
      titleAccent: '差分が取れる、',
      titleLine2: '信頼できるクエリ。',
      lede: '<strong>TugQL</strong>は、ポータブルで人間が読みやすいクエリ言語です。洗練されたSQL風テキスト構文と、プレーンなYAML/JSONとしてシリアライズ可能な<strong>1:1完全ロスレス</strong>の構造化クエリツリー（<strong>TugQT</strong>）を融合。クエリを保存し、手作業で編集し、バージョン管理で差分を確認し、複数のバックエンドで情報の欠落なく実行できます。',
      readSpec: '仕様を読む',
      seeExample: '例を見る',
      codeSampleAria: 'TugQLクエリドキュメント'
    },
    why: {
      eyebrow: '01 — TugQLが選ばれる理由',
      title: 'クエリはデータです。データとして扱いましょう。',
      kicker: 'TugQLはクエリを、保存・レビュー・バージョン管理が可能な、理解しやすく差分が取れるドキュメントへと変革します。あらゆるバックエンドで動作します。',
      cards: [
        {
          title: '高い可読性',
          body: '人間にとって直感的なSQL風の記述構文に加え、ツール向けにはプレーンなYAML/JSONクエリツリー（TugQT）を提供。誰でも検証・理解・編集が可能です。'
        },
        {
          title: 'ロスレスな相互変換',
          body: '正規化処理により、元のクエリと構造的に同等なクエリを正確に復元。暗黙的に破棄されたり、変形されたりすることはありません。'
        },
        {
          title: 'スキーマ検証済み',
          body: '完全なJSON Schema（Draft 2020-12）とともに公開。あらゆる言語のあらゆるツールで、実行前にクエリ構造を検証できます。'
        },
        {
          title: '差分（Diff）に強い',
          body: '正規フォーマットと決定論的なツリーシリアライズ。保存されたクエリはGitで綺麗に差分が表示され、通常のコードと同様にレビューできます。'
        },
        {
          title: '設計段階からのポータビリティ',
          body: 'バックエンド間で移植可能な機能に絞り込んでいるため、1つのクエリがGit、SQLite、PostgreSQL、Firestore上でそのまま動作します。'
        },
        {
          title: '完全なSQLではない理由',
          body: 'あえてポータブルなサブセットに集中して厳密に定義。非互換な構文は危険に変換せず、明確にエラーとして拒絶します。'
        }
      ]
    },
    example: {
      eyebrow: '02 — 例',
      title: 'TugQLテキスト構文とTugQTツリー',
      kicker: 'TugQLテキスト構文で記述し、構造化クエリツリーTugQTとして永続化・交換します。',
      p1: 'ユーザーは親しみやすく簡潔な<strong>TugQL</strong>テキスト構文でクエリを記述します。パーサーはそれを機械可読な正規表現である<strong>TugQT（Tug Query Tree）</strong>へと変換します。',
      p2: 'すべてのノードが構文とツリーの間で決定論的に対応します。不正な入力やスキーマ違反は、ソース上の正確な位置を明示した診断メッセージを返します。',
      noteTitle: '名称に関する注意:',
      noteText: 'TugQLは旧称DTQLとして知られていました。既存のDTQLドキュメントやクエリファイルも後方互換性のために継続サポートされます。',
      codeSampleAria: 'TugQTクエリツリーの例'
    },
    mapping: {
      eyebrow: '03 — ノード → TugQT',
      title: 'マッピング',
      kicker: '対象範囲内の各クエリノードには、明確に定義された構造化表現が存在します。',
      thNode: 'クエリノード',
      thRep: 'TugQT表現',
      rows: [
        { node: 'ルートコレクションに対するFrom', rep: '<code>from: { name, alias? }</code>' },
        { node: 'カラム', rep: '<code>columns:</code> 配下の要素 — 式と任意の <code>as:</code>' },
        { node: '比較', rep: '<code>{ op, left, right }</code>' },
        { node: 'グループ条件（And）', rep: '<code>{ and: [ … ] }</code>' },
        { node: 'グループ条件（Or）', rep: '<code>{ or: [ … ] }</code>' },
        { node: '順序式', rep: '<code>orderBy:</code> 配下の要素 — 式と任意の <code>desc: true</code>' },
        { node: 'フィールド参照', rep: '<code>{ field: &lt;name&gt; }</code>' },
        { node: '定数', rep: '<code>{ value: &lt;scalar&gt; }</code>' },
        { node: '配列', rep: '<code>{ values: [ &lt;scalar&gt;, … ] }</code>' },
        { node: '演算子', rep: '<code>==</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>' },
        { node: 'Limit / Offset', rep: '<code>limit: &lt;int&gt;</code> / <code>offset: &lt;int&gt;</code>' }
      ],
      caption: '式には <code>field</code>、<code>value</code>、<code>values</code> の<strong>いずれか1つだけ</strong>を設定し、フィールド参照、定数、配列を識別します。'
    },
    scope: {
      eyebrow: '04 — 対応サブセット',
      title: 'TugQLがサポートする範囲',
      kicker: '単一コレクションまたは結合ツリー、カラム選択、フィルタ式、並び替え、ページネーション。範囲外の構文は拒絶され、勝手に無視されることはありません。',
      inScopeTitle: '対象範囲内',
      inScopeBody: 'コレクションソース · 選択カラム · 比較およびAnd/Orグループツリー · 並び替え · limit / offset · 結合 · パラメータ。式: フィールド参照、定数、配列。演算子: <code>==</code>, <code>!=</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>And</code>, <code>Or</code>。',
      outScopeTitle: '対象外（拒絶される構文）',
      outScopeBody: '制限のない直積結合 · 特定DB専用のベンダー構文 · スキーマ管理外の非型付け更新演算子。セマンティクスが損なわれる前にシリアライズがエラー終了します。',
      losslessTitle: 'ロスレス＆正規化',
      losslessBody: '<code>resolve(parse(text))</code> は決定論的なクエリツリーを生成します。シリアライズも正規化されているため、保存されたクエリはGitで綺麗に差分比較できます。'
    },
    stack: {
      eyebrow: '05 — 動作環境',
      title: '1つのクエリ、多彩なバックエンド',
      kicker: 'TugQLはポータブルなクエリ層です。データ抽象化レイヤー（DALgo）を介して、背後にあるあらゆるストレージへと適合させます。',
      p: 'TugQLがポータブルなサブセットのみを表現するため、一度記述したクエリはGitリポジトリ（inGitDB）、SQLite、PostgreSQL、Firestoreのいずれに対しても一貫して動作します。',
      flowAria: 'TugQLはデータ抽象化レイヤーを介して複数のストレージバックエンドにマッピングされます',
      tugqlLabel: 'TugQL',
      tugqlSub: 'ポータブルクエリ言語',
      dalgoLabel: 'DALgo',
      dalgoSub: 'データ抽象化レイヤー'
    },
    implementations: {
      eyebrow: '06 — はじめの一歩',
      title: '仕様と実装',
      kicker: '本言語はオープン仕様であり、スキーマが公開され、GoおよびTypeScriptによる実装が提供されています。',
      cards: [
        {
          badge: '仕様 · スキーマ',
          title: 'tugql/tugql',
          desc: 'TugQL仕様書、正規JSON Schema（Draft 2020-12）、および検証済みサンプルドキュメント。旧称 DTQL。',
          meta: 'github.com/tugql/tugql',
          url: 'https://github.com/tugql/tugql'
        },
        {
          badge: '参照実装 · Go',
          title: 'dal-go/dalgo/dtql',
          desc: 'Go言語ライブラリ: 完全な可逆性を保証しながらTugQLクエリのパース、検証、解決、フォーマット、実行を行います。',
          meta: 'go get github.com/dal-go/dalgo/dtql',
          url: 'https://github.com/dal-go/dalgo/tree/main/dtql'
        }
      ]
    },
    datatug: {
      eyebrow: '実際のプロダクト開発での採用',
      title: 'DataTugでデータを探索し、クエリを実行。',
      kicker: '<a href="https://datatug.app">DataTug</a>は開発者がデータベーススキーマを探索し、クエリを作成・実行し、結果を理解することを支援します。TugQLおよびTugQTとのクエリ連携は現在も進行中です。<a href="https://datatug.app/en/under-the-hood/tools-we-built/#query">DataTugの基盤ツールを見る。</a>'
    },
    closing: {
      title: '保存する。差分を見る。どこでも動かす。',
      p: 'TugQLはクエリをファーストクラスのレビュー可能な成果物へと進化させます — 人間が読め、ツールで検証され、あらゆるバックエンドで動作します。',
      readSpec: '仕様を読む',
      getLibrary: 'Goライブラリを入手'
    },
    footer: {
      copyright: '© 2026 TugQL コントリビューター',
      spec: '仕様書',
      goImpl: 'Go実装',
      example: '例',
      mapping: 'マッピング',
      tag: 'オープンでポータブルなクエリ言語（旧称 DTQL）。公式ホーム: <a href="https://tugql.org">tugql.org</a>'
    }
  },

  'zh-cn': {
    meta: {
      title: 'TugQL — 便携、易于人类阅读的查询语言',
      description: 'TugQL（原名 DTQL）是一种便携、易于人类阅读的查询语言。同一查询无需修改即可在 Git、SQLite、PostgreSQL 和 Firestore 上运行——兼具直观的类 SQL 文本语法与经模式验证的无损查询树（TugQT）。',
      ogDescription: 'TugQL：跨后端的便携、易读查询语言与结构化查询树（TugQT）。原名 DTQL。',
      jsonLdDescription: '适用于数据库和数据抽象层的便携、易于人类阅读的查询语言及结构化查询树（TugQT）。'
    },
    nav: {
      why: '优势',
      example: '示例',
      mapping: '映射',
      scope: '范围',
      stack: '技术栈',
      implementations: '实现',
      star: 'Star'
    },
    hero: {
      eyebrow: '开放规范 · 原名 DTQL',
      titleLine1: '可阅读、',
      titleAccent: '可比对、',
      titleLine2: '可信赖的查询。',
      lede: '<strong>TugQL</strong> 是一种便携、易于人类阅读的查询语言。它将简洁的类 SQL 文本语法与以普通 YAML/JSON 序列化的 <strong>1:1 无损</strong>结构化查询树（<strong>TugQT</strong>）相结合。您可以保存查询、手工编辑、在版本控制中比对差异，并在不同的后端无损执行。',
      readSpec: '阅读规范',
      seeExample: '查看示例',
      codeSampleAria: 'TugQL 查询文档'
    },
    why: {
      eyebrow: '01 — 为什么选择 TugQL',
      title: '查询即数据。请像对待数据一样对待它。',
      kicker: 'TugQL 将查询转变为清晰明了、可对比差异的文档，支持存储、审查与版本控制——在任何支持的后端之间无缝迁移。',
      cards: [
        {
          title: '易于人类阅读',
          body: '面向开发者的直观类 SQL 编写语法，以及面向工具链的纯 YAML/JSON 查询树（TugQT）——任何人都可以审查、理解和修改。'
        },
        {
          title: '无损往返转换',
          body: '规范的查询降阶能够重建与原始输入结构完全等价的查询。不会有任何内容被悄悄丢弃或近似替代。'
        },
        {
          title: '经模式验证',
          body: '发布了完整的 JSON Schema 校验（draft 2020-12）。任何语言的任何工具都可以在执行前验证查询结构的正确性。'
        },
        {
          title: '版本控制友好',
          body: '规范的格式化与确定性的语法树序列化。保存的查询在 Git 中呈现干净清晰的 diff，能像代码一样进行 code review。'
        },
        {
          title: '天生具备跨平台便携性',
          body: 'TugQL 提炼了跨后端通用的核心能力，因此同一个查询无需更改即可直接运行于 Git、SQLite、PostgreSQL 或 Firestore。'
        },
        {
          title: '并非全量 SQL',
          body: '刻意聚焦于定义明确的便携式子集。非通用语法会被明确拒绝，而不是进行具有不可预知风险的转换。'
        }
      ]
    },
    example: {
      eyebrow: '02 — 示例',
      title: 'TugQL 文本语法与 TugQT 树',
      kicker: '使用 TugQL 文本语法编写；以 TugQT 结构化查询树格式存储或传输。',
      p1: '开发者使用 <strong>TugQL</strong> 文本语法编写查询——清晰、紧凑且类似 SQL。在底层，解析器生成 <strong>TugQT（Tug Query Tree）</strong>，这是一种规范的机器可读表示形式。',
      p2: '每个节点在文本语法和树结构之间都有确定性的双向映射。语法错误或模式违规将返回包含精确源码位置的诊断信息。',
      noteTitle: '关于命名的说明：',
      noteText: 'TugQL 原名 DTQL。现有的 DTQL 文档和查询文件将继续获得向后兼容支持。',
      codeSampleAria: 'TugQT 查询树示例'
    },
    mapping: {
      eyebrow: '03 — 节点 → TugQT',
      title: '映射规则',
      kicker: '支持范围内的每个查询节点都有明确定义的结构化表示。',
      thNode: '查询节点',
      thRep: 'TugQT 表示方式',
      rows: [
        { node: '根集合的 From 查询', rep: '<code>from: { name, alias? }</code>' },
        { node: '列定义', rep: '<code>columns:</code> 下的项——包含表达式及可选的 <code>as:</code>' },
        { node: '比较操作', rep: '<code>{ op, left, right }</code>' },
        { node: '条件组合（And）', rep: '<code>{ and: [ … ] }</code>' },
        { node: '条件组合（Or）', rep: '<code>{ or: [ … ] }</code>' },
        { node: '排序表达式', rep: '<code>orderBy:</code> 下的项——包含表达式及可选的 <code>desc: true</code>' },
        { node: '字段引用', rep: '<code>{ field: &lt;name&gt; }</code>' },
        { node: '常量', rep: '<code>{ value: &lt;scalar&gt; }</code>' },
        { node: '数组', rep: '<code>{ values: [ &lt;scalar&gt;, … ] }</code>' },
        { node: '运算符', rep: '<code>==</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>' },
        { node: 'Limit / Offset', rep: '<code>limit: &lt;int&gt;</code> / <code>offset: &lt;int&gt;</code>' }
      ],
      caption: '表达式只设置 <code>field</code>、<code>value</code> 或 <code>values</code> 中的<strong>恰好一项</strong>，以此区分字段引用、常量或数组。'
    },
    scope: {
      eyebrow: '04 — 覆盖子集',
      title: 'TugQL 支持的特性范围',
      kicker: '单个集合来源或连接树、选定列、过滤表达式、排序和分页。任何超出范围的内容都会被明确拒绝——绝不会悄悄丢弃。',
      inScopeTitle: '支持范围内',
      inScopeBody: '集合源 · 选定列 · 比较及 And/Or 树 · 排序 · limit / offset · 连接 · 参数。表达式：字段引用、常量、数组。运算符：<code>==</code>, <code>!=</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>And</code>, <code>Or</code>。',
      outScopeTitle: '超出范围（报错拒绝）',
      outScopeBody: '无约束的笛卡尔积 · 厂商特定的私有 SQL 方言 · 缺乏模式约束的无类型修改操作。序列化时会直接报错，确保绝不破坏查询语义。',
      losslessTitle: '无损且规范',
      losslessBody: '<code>resolve(parse(text))</code> 生成确定性的查询树；序列化具有规范性，因此保存的查询能够在不同版本之间清晰呈现 diff。'
    },
    stack: {
      eyebrow: '05 — 运行环境',
      title: '一次编写，多端运行',
      kicker: 'TugQL 是通用的便携查询层。它映射到底层数据抽象层（DALgo），后者将其适配到底层的各种存储引擎中。',
      p: '因为 TugQL 仅表达跨平台的通用子集，所以编写一次的查询在 Git 仓库（inGitDB）、嵌入式 SQLite 文件、PostgreSQL 数据库或 Firestore 上的行为完全一致。',
      flowAria: 'TugQL 通过数据抽象层映射到多个存储后端',
      tugqlLabel: 'TugQL',
      tugqlSub: '便携查询语言',
      dalgoLabel: 'DALgo',
      dalgoSub: '数据抽象层'
    },
    implementations: {
      eyebrow: '06 — 快速上手',
      title: '规范与实现',
      kicker: '该语言是一项开放规范，拥有公开发布的 Schema，以及 Go 和 TypeScript 实现。',
      cards: [
        {
          badge: '规范 · Schema',
          title: 'tugql/tugql',
          desc: 'TugQL 规范文档、标准 JSON Schema（draft 2020-12）以及经验证的示例文件。原名 DTQL。',
          meta: 'github.com/tugql/tugql',
          url: 'https://github.com/tugql/tugql'
        },
        {
          badge: '参考实现 · Go',
          title: 'dal-go/dalgo/dtql',
          desc: 'Go 语言库：提供解析、验证、求解、格式化以及执行 TugQL 查询的能力，具备无损双向转换保证。',
          meta: 'go get github.com/dal-go/dalgo/dtql',
          url: 'https://github.com/dal-go/dalgo/tree/main/dtql'
        }
      ]
    },
    datatug: {
      eyebrow: '应用于真实产品开发',
      title: '使用 DataTug 探索并查询数据。',
      kicker: '<a href="https://datatug.app">DataTug</a> 帮助开发者浏览数据库模式、构建并运行查询并深入分析结果。其基于 TugQL 和 TugQT 的查询协议研发正在持续推进。<a href="https://datatug.app/en/under-the-hood/tools-we-built/#query">探索 DataTug 背后的工具。</a>'
    },
    closing: {
      title: '保存它。比对它。随处运行它。',
      p: 'TugQL 让查询成为一等公民的审查产物——人类可读、工具可验证，并且能在多种后端之间无缝移植。',
      readSpec: '阅读规范',
      getLibrary: '获取 Go 语言库'
    },
    footer: {
      copyright: '© 2026 TugQL 贡献者',
      spec: '规范文档',
      goImpl: 'Go 语言实现',
      example: '示例',
      mapping: '映射',
      tag: '开放、便携的查询语言（原名 DTQL）。权威主页：<a href="https://tugql.org">tugql.org</a>'
    }
  },

  ko: {
    meta: {
      title: 'TugQL — 이식 가능하고 사람이 읽기 쉬운 쿼리 언어',
      description: 'TugQL(구 DTQL)은 이식 가능하고 사람이 읽기 쉬운 쿼리 언어입니다. 직관적인 SQL 유사 텍스트 구문과 스키마 검증을 거친 무손실 쿼리 트리(TugQT)를 통해 단 하나의 쿼리가 Git, SQLite, PostgreSQL, Firestore에서 그대로 실행됩니다.',
      ogDescription: 'TugQL: 여러 백엔드에서 작동하는 이식 가능하고 가독성 높은 쿼리 언어 및 구조화된 쿼리 트리(TugQT). 구 DTQL.',
      jsonLdDescription: '데이터베이스 및 데이터 추상화 계층을 위한 이식 가능하고 사람이 읽기 쉬운 쿼리 언어 및 구조화된 쿼리 트리(TugQT).'
    },
    nav: {
      why: '특징',
      example: '예제',
      mapping: '매핑',
      scope: '범위',
      stack: '스택',
      implementations: '구현체',
      star: 'Star'
    },
    hero: {
      eyebrow: '오픈 사양 · 구 DTQL',
      titleLine1: '직접 읽고,',
      titleAccent: '비교하고,',
      titleLine2: ' 신뢰할 수 있는 쿼리.',
      lede: '<strong>TugQL</strong>은 이식 가능하고 사람이 읽기 쉬운 쿼리 언어입니다. 깔끔한 SQL 유사 텍스트 구문과 일반 YAML/JSON으로 직렬화되는 <strong>1:1 무손실</strong> 구조화 쿼리 트리 표현(<strong>TugQT</strong>)을 결합했습니다. 쿼리를 저장하고, 직접 수정하고, 버전 관리에서 diff를 확인하며, 여러 백엔드에서 손실 없이 실행할 수 있습니다.',
      readSpec: '사양 읽기',
      seeExample: '예제 보기',
      codeSampleAria: 'TugQL 쿼리 문서'
    },
    why: {
      eyebrow: '01 — 왜 TugQL인가',
      title: '쿼리도 데이터입니다. 데이터답게 다루세요.',
      kicker: 'TugQL은 쿼리를 저장, 검토, 버전 관리할 수 있는 명확하고 diff 확인이 쉬운 문서로 변환합니다. 모든 백엔드에서 이식 가능합니다.',
      cards: [
        {
          title: '사람이 읽기 쉬운 형태',
          body: '사람을 위한 직관적인 SQL 유사 구문과 도구를 위한 순수 YAML/JSON 쿼리 트리(TugQT)를 제공하여 누구나 검사, 이해, 수정할 수 있습니다.'
        },
        {
          title: '무손실 왕복 변환',
          body: '표준 정규화 처리를 통해 원본과 구조적으로 동일한 쿼리를 온전히 복원합니다. 조용히 삭제되거나 왜곡되는 부분이 전혀 없습니다.'
        },
        {
          title: '스키마 검증 지원',
          body: '완전한 JSON Schema(draft 2020-12) 검증을 제공합니다. 어떤 언어의 도구든 실행 전 쿼리 구조의 유효성을 검증할 수 있습니다.'
        },
        {
          title: 'Diff 친화적 구조',
          body: '표준 형식과 결정론적 트리 직렬화를 지원합니다. 저장된 쿼리는 Git에서 깔끔한 diff를 보여주며 일반 코드처럼 리뷰할 수 있습니다.'
        },
        {
          title: '설계부터 고려된 이식성',
          body: '여러 백엔드에서 공통으로 지원하는 기능만 선별하여, 하나의 쿼리가 Git, SQLite, PostgreSQL, Firestore에서 수정 없이 그대로 실행됩니다.'
        },
        {
          title: '전체 SQL이 아닌 이유',
          body: '이식 가능한 핵심 서브셋에만 의도적으로 집중했습니다. 비표준 문법은 무리하게 변환하지 않고 명시적으로 거부합니다.'
        }
      ]
    },
    example: {
      eyebrow: '02 — 예제',
      title: 'TugQL 텍스트 및 TugQT 쿼리 트리',
      kicker: 'TugQL 텍스트 구문으로 작성하고, 구조화된 TugQT 쿼리 트리로 저장하거나 교환하세요.',
      p1: '작성자는 읽기 쉽고 간결한 SQL 스타일의 <strong>TugQL</strong> 텍스트 구문으로 쿼리를 작성합니다. 내부적으로 파서는 기계가 읽을 수 있는 표준 표현인 <strong>TugQT(Tug Query Tree)</strong>를 생성합니다.',
      p2: '모든 노드는 구문과 트리 간에 결정론적으로 매핑됩니다. 잘못된 입력이나 스키마 위반 시 정확한 소스 위치와 함께 명확한 진단 정보를 반환합니다.',
      noteTitle: '명칭 변경 안내:',
      noteText: 'TugQL은 이전에 DTQL로 알려져 있었습니다. 기존 DTQL 문서 및 쿼리 파일도 하위 호환성을 위해 계속 지원됩니다.',
      codeSampleAria: 'TugQT 쿼리 트리 예제'
    },
    mapping: {
      eyebrow: '03 — 노드 → TugQT',
      title: '매핑',
      kicker: '지원 범위 내의 각 쿼리 노드는 명확히 정의된 구조화된 표현을 가집니다.',
      thNode: '쿼리 노드',
      thRep: 'TugQT 표현',
      rows: [
        { node: '루트 컬렉션 대상 From', rep: '<code>from: { name, alias? }</code>' },
        { node: '컬럼', rep: '<code>columns:</code> 하위 항목 — 식 및 선택적 <code>as:</code>' },
        { node: '비교', rep: '<code>{ op, left, right }</code>' },
        { node: '그룹 조건 (And)', rep: '<code>{ and: [ … ] }</code>' },
        { node: '그룹 조건 (Or)', rep: '<code>{ or: [ … ] }</code>' },
        { node: '정렬 식', rep: '<code>orderBy:</code> 하위 항목 — 식 및 선택적 <code>desc: true</code>' },
        { node: '필드 참조', rep: '<code>{ field: &lt;name&gt; }</code>' },
        { node: '상수', rep: '<code>{ value: &lt;scalar&gt; }</code>' },
        { node: '배열', rep: '<code>{ values: [ &lt;scalar&gt;, … ] }</code>' },
        { node: '연산자', rep: '<code>==</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>' },
        { node: 'Limit / Offset', rep: '<code>limit: &lt;int&gt;</code> / <code>offset: &lt;int&gt;</code>' }
      ],
      caption: '식은 <code>field</code>, <code>value</code>, <code>values</code> 중 <strong>정확히 하나</strong>만 설정하여 필드 참조, 상수, 배열을 구분합니다.'
    },
    scope: {
      eyebrow: '04 — 지원 범위',
      title: 'TugQL이 표현하는 범위',
      kicker: '단일 컬렉션 또는 조인 트리, 선택 컬럼, 필터 식, 정렬 및 페이징. 범위를 벗어난 구문은 명시적으로 거부되며 조용히 누락되지 않습니다.',
      inScopeTitle: '지원 범위',
      inScopeBody: '컬렉션 소스 · 선택 컬럼 · 비교 및 And/Or 그룹 트리 · 정렬 · limit / offset · 조인 · 파라미터. 식: 필드 참조, 상수, 배열. 연산자: <code>==</code>, <code>!=</code>, <code>In</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>And</code>, <code>Or</code>.',
      outScopeTitle: '범위 외 (거부됨)',
      outScopeBody: '제한 없는 카티션 곱 · 데이터베이스 전용 벤더 구문 · 스키마 범위를 벗어난 비타입 수정 연산자. 쿼리 의미가 손실되기 전에 직렬화가 오류를 발생시킵니다.',
      losslessTitle: '무손실 및 표준화',
      losslessBody: '<code>resolve(parse(text))</code>는 결정론적 쿼리 트리를 생성합니다. 직렬화가 표준화되어 있어 저장된 쿼리가 버전 간에 명확한 diff를 제공합니다.'
    },
    stack: {
      eyebrow: '05 — 실행 환경',
      title: '하나의 쿼리, 다양한 백엔드',
      kicker: 'TugQL은 이식 가능한 쿼리 인터페이스입니다. 하위 스토리지에 맞게 쿼리를 적응시키는 데이터 추상화 계층(DALgo)과 연결됩니다.',
      p: 'TugQL은 이식 가능한 서브셋만 표현하므로, 한 번 작성된 쿼리는 Git 저장소(inGitDB), SQLite 파일, PostgreSQL 데이터베이스, Firestore 어디서나 일관되게 동작합니다.',
      flowAria: 'TugQL은 데이터 추상화 계층을 통해 여러 스토리지 백엔드로 매핑됩니다',
      tugqlLabel: 'TugQL',
      tugqlSub: '이식 가능한 쿼리 언어',
      dalgoLabel: 'DALgo',
      dalgoSub: '데이터 추상화 계층'
    },
    implementations: {
      eyebrow: '06 — 시작하기',
      title: '사양 및 구현체',
      kicker: '이 언어는 공개된 스키마와 Go 및 TypeScript 구현체를 갖춘 오픈 사양입니다.',
      cards: [
        {
          badge: '사양 · 스키마',
          title: 'tugql/tugql',
          desc: 'TugQL 사양, 표준 JSON Schema(draft 2020-12) 및 검증된 예제 문서. 구 DTQL.',
          meta: 'github.com/tugql/tugql',
          url: 'https://github.com/tugql/tugql'
        },
        {
          badge: '참조 구현체 · Go',
          title: 'dal-go/dalgo/dtql',
          desc: 'Go 라이브러리: 무손실 왕복 변환 보장과 함께 TugQL 쿼리를 파싱, 검증, 해석, 포맷 및 실행합니다.',
          meta: 'go get github.com/dal-go/dalgo/dtql',
          url: 'https://github.com/dal-go/dalgo/tree/main/dtql'
        }
      ]
    },
    datatug: {
      eyebrow: '실제 제품 개발 활용',
      title: 'DataTug로 데이터를 탐색하고 쿼리하세요.',
      kicker: '<a href="https://datatug.app">DataTug</a>는 개발자가 데이터베이스 스키마를 탐색하고, 쿼리를 작성 및 실행하며, 결과를 분석할 수 있도록 돕습니다. TugQL 및 TugQT 기반 쿼리 계약 연동이 지속적으로 진행 중입니다. <a href="https://datatug.app/en/under-the-hood/tools-we-built/#query">DataTug의 도구 살펴보기.</a>'
    },
    closing: {
      title: '저장하고. 비교하고. 어디서나 실행하세요.',
      p: 'TugQL은 쿼리를 사람이 읽을 수 있고, 도구로 검증되며, 모든 백엔드에서 동작하는 일급 아티팩트로 만들어줍니다.',
      readSpec: '사양 읽기',
      getLibrary: 'Go 라이브러리 다운로드'
    },
    footer: {
      copyright: '© 2026 TugQL 기여자 일동',
      spec: '사양서',
      goImpl: 'Go 구현체',
      example: '예제',
      mapping: '매핑',
      tag: '오픈 이식형 쿼리 언어(구 DTQL). 공식 홈페이지: <a href="https://tugql.org">tugql.org</a>'
    }
  }
};
