import { Project, Experience, Certification, SkillCategory, Education } from './types';

export const PROFILE = {
  name: "L P Revanth Kumar Potu",
  fullName: "Lakshmi Praneeth Revanth Kumar Potu",
  title: "Data Engineer",
  tagline: "Designing cloud data platforms that scale with your business.",
  bio: "Data and software engineer with 4+ years building cloud-native data platforms and AI-powered applications on Azure, AWS, Snowflake, and Databricks. I design scalable ETL/ELT pipelines and real-time streaming systems, recently cutting ETL runtime by 35% through workflow redesign and reusable pipeline patterns. Beyond pipelines, I've shipped production RAG systems and AI-integrated services, with deep focus on data quality, secure lakehouse architecture, and infrastructure automation using Terraform and Azure DevOps. I'm currently exploring new opportunities in the US where I can help teams ship reliable data and AI platforms at scale.",
  email: "poturevanth@gmail.com",
  phone: "+1(410) 892-2025",
  linkedin: "https://www.linkedin.com/in/poturevanth/",
  github: "https://github.com/Revanthpotu",
  location: "United States"
};

export const TECHNICAL_EXPERTISE = [
  "Data Engineering",
  "Software Engineering",
  "AI & RAG Systems",
  "Cloud & Lakehouse Architecture",
  "Real-time Streaming",
  "DevOps & CI/CD"
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Data Pipelines",
    skills: ["Python", "SQL", "PySpark", "Pandas", "Airflow", "dbt", "Azure Data Factory", "Databricks Workflows", "Great Expectations"]
  },
  {
    category: "Real-time Streaming",
    skills: ["Kafka", "Azure Event Hubs", "AWS Kinesis", "Spark Structured Streaming", "Delta Lake CDC"]
  },
  {
    category: "Cloud & Lakehouse",
    skills: ["Databricks", "Snowflake", "Azure Synapse", "ADLS", "AWS S3", "AWS Glue", "AWS EMR", "AWS Redshift", "Delta Lake", "Apache Iceberg", "Unity Catalog"]
  },
  {
    category: "AI & RAG Systems",
    skills: ["OpenAI API", "Anthropic API", "Gemini API", "LangChain", "LlamaIndex", "Pinecone", "Chroma", "pgvector", "FastAPI"]
  },
  {
    category: "Software Engineering",
    skills: ["Python", "Java", "TypeScript", "C++", "FastAPI", "REST APIs", "MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Git"]
  },
  {
    category: "DevOps & Infrastructure",
    skills: ["Terraform", "Docker", "Kubernetes", "AWS EC2", "AWS Lambda", "AWS Step Functions", "CloudWatch", "Azure DevOps", "GitHub Actions", "CI/CD"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    name: "Azure Data Engineer Associate",
    issuer: "Microsoft",
    link: "https://learn.microsoft.com/en-us/users/lakshmipraneethrevanthkumarpotu-1951/credentials/c6c3f4b40cf7dc26",
    image: "azure-badge.png"
  },
  {
    id: 2,
    name: "AWS Certified Data Engineer Associate",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/1826a5b5-f261-41ef-b614-f1cd6d31eb7d",
    image: "aws-badge.png"
  },
  {
    id: 3,
    name: "SnowPro Core Certification",
    issuer: "Snowflake",
    link: "https://achieve.snowflake.com/356327b2-036e-49fc-a75c-dcccecb8934b#acc.X9ITPOz1",
    image: "snowflake-badge.png"
  },
  {
    id: 4,
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    link: "#", // Link not provided
    image: "ml-specialization-badge.png"
  },
  {
    id: 5,
    name: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    link: "#", // Link not provided
    image: "databricks-badge.png"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Shineteck INC",
    title: "Data Engineer — Banking Domain",
    client: "Banking Client (Confidential)",
    location: "United States",
    date: "June 2023 - Present",
    summary: "Building data infrastructure for a large US banking client — real-time streaming pipelines, AI/RAG systems for regulatory compliance, and cloud-native data platforms powering fraud detection, analytics, and enterprise decision-making.",
    achievements: [
      "Architected on-premise RAG system for regulatory and compliance document analysis using Claude, LangChain, and Chroma (migrated from Pinecone for data-residency requirements), serving hundreds of analyst queries daily.",
      "Built Kafka-based streaming pipelines in Python and Java processing 100M+ daily events, implementing real-time enrichment and ML feature generation supporting 4+ fraud detection models.",
      "Engineered end-to-end observability using Prometheus and Grafana with automated alerting for consumer lag and throughput bottlenecks, maintaining 99.9% uptime across production systems.",
      "Designed Redshift data marts using star and snowflake schemas powering 30+ Power BI dashboards. Optimized query runtime from 10 minutes to under 2 minutes through sort key optimization and materialized views.",
      "Developed Databricks Delta Live Tables pipelines with PySpark implementing medallion architecture, processing semi-structured JSON and Avro data with Unity Catalog for governance, access control, and lineage tracking.",
      "Standardized data access for 12 downstream services by orchestrating 50+ daily Airflow DAGs, exposing curated datasets via Delta Lake tables on S3 and serving aggregated metrics through RESTful APIs.",
      "Automated environment provisioning using Terraform and AWS CodePipeline, leveraging Kubernetes and Helm for container orchestration — cutting deployment time from 4 hours to 15 minutes.",
      "Reduced production defects by 30% through an automated testing framework for PySpark pipelines, achieving 92% code coverage with unit, integration, and regression test suites."
    ],
    achievementCards: [
      {
        icon: "Sparkles",
        title: "On-Prem RAG for Compliance",
        metric: "Production AI",
        description: "Architected on-premise RAG system for regulatory and compliance document analysis using Claude, LangChain, and Chroma. Migrated from Pinecone to meet data-residency requirements. Serves hundreds of analyst queries daily."
      },
      {
        icon: "Zap",
        title: "Real-Time Streaming & ML Features",
        metric: "100M+ events/day",
        description: "Built Kafka-based streaming pipelines in Python and Java, implementing real-time enrichment and ML feature generation supporting 4+ fraud detection models."
      },
      {
        icon: "Activity",
        title: "Infrastructure Monitoring",
        metric: "99.9% uptime",
        description: "Engineered end-to-end observability using Prometheus and Grafana with automated alerting for consumer lag and throughput bottlenecks across production systems."
      },
      {
        icon: "Database",
        title: "Data Warehousing & Analytics",
        metric: "10min → 2min queries",
        description: "Designed Redshift data marts using star and snowflake schemas powering 30+ Power BI dashboards. Optimized query runtime through sort key optimization and materialized views."
      },
      {
        icon: "Layers",
        title: "Lakehouse Architecture & Governance",
        metric: "Unity Catalog + Delta",
        description: "Developed Databricks Delta Live Tables pipelines with PySpark implementing medallion architecture. Processed semi-structured JSON and Avro data with Unity Catalog for governance, access control, and lineage tracking."
      },
      {
        icon: "GitBranch",
        title: "Pipeline Orchestration & Data Serving",
        metric: "50+ DAGs orchestrated",
        description: "Standardized data access for 12 downstream services by orchestrating daily Airflow DAGs. Exposed curated datasets via Delta Lake tables on S3 and served aggregated metrics through RESTful APIs."
      },
      {
        icon: "Cloud",
        title: "Cloud Infrastructure & DevOps",
        metric: "4hr → 15min deploys",
        description: "Automated environment provisioning using Terraform and AWS CodePipeline, leveraging Kubernetes and Helm for container orchestration."
      },
      {
        icon: "CheckCircle2",
        title: "Testing & Quality Engineering",
        metric: "92% code coverage",
        description: "Reduced production defects by 30% through an automated testing framework for PySpark pipelines, with comprehensive unit, integration, and regression test suites."
      }
    ],
    techStack: ["AWS S3", "Redshift", "Kafka", "Airflow", "Databricks", "Delta Lake", "Unity Catalog", "PySpark", "Python", "Java", "SQL", "Terraform", "Kubernetes", "Helm", "AWS CodePipeline", "Prometheus", "Grafana", "Claude", "LangChain", "Chroma"]
  },
  {
    id: 2,
    company: "Confidential",
    title: "Data Engineer",
    date: "May 2021 - July 2022",
    achievements: [
      "Engineered and optimized ETL pipelines in Python and SQL, processing 10M+ daily records, reducing data ingestion time.",
      "Architected and deployed data warehousing solutions using Azure Synapse and Snowflake, enabling faster analytics for global client projects with a 30% improvement in query performance.",
      "Mitigated data quality and schema inconsistencies by creating automated validation scripts in PySpark, enhancing overall data accuracy.",
      "Directed migration of legacy ETL workflows to Databricks with a 5-member cross-functional team, improving scalability and achieving pipeline reliability.",
      "Executed monitoring and alerting frameworks using Power BI, Azure Monitor, and SQL, accelerating anomaly detection and incident response by 35%.",
      "Streamlined data ingestion from many enterprise systems using APIs and Azure Data Factory, boosting cross-platform data availability and analytical efficiency."
    ],
    techStack: ["Azure Synapse", "Snowflake", "Python", "PySpark", "Azure Data Factory", "Power BI", "Azure Monitor", "SQL"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    school: "University at Buffalo",
    degree: "Master's in Data Science",
    location: "New York, USA",
    date: "Aug 2022 - Dec 2023",
    logo: "buffalo-logo.png",
    grade: "CGPA: 3.922/4.0"
  },
  {
    id: 2,
    school: "Sathyabama University",
    degree: "Bachelor's in Computer Science",
    location: "Chennai, India",
    date: "Aug 2017 - June 2021",
    logo: "sathyabama-logo.png",
    grade: "CGPA: 8.5/10"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "HealthStream — Real-Time Patient Data Integration Pipeline",
    overview: "Production-grade real-time data integration platform unifying patient data from 3 heterogeneous healthcare systems, powered by event-driven stream processing and AI-driven operational automation.",
    problem: "Hospitals run lab results, EHR diagnoses, and pharmacy data on completely different systems (CSV feeds, PostgreSQL, MySQL). There's no single real-time view of a patient, and operational work like onboarding new data sources or triaging failed messages consumes engineering time that should go to clinicians.",
    solution: "Built a 3-broker Kafka backbone with Avro + Schema Registry for schema-on-write enforcement. Used Debezium CDC for pharmacy (captures DELETEs), JDBC connector for EHR, and a Python producer for lab CSVs. ksqlDB handles windowed joins and stream enrichment; Redis serves materialized patient views with <1ms reads and 24-hour TTL. Built three GPT-4o function-calling agents — a Clinical agent for doctor queries, an Integration agent that automates source onboarding, and a Monitor agent that auto-triages the Dead Letter Queue. Maps cleanly to AWS production (MSK, Managed Flink, ElastiCache, ECS, Glue Schema Registry).",
    impact: "Delivered a unified patient view across 3 source systems with sub-millisecond reads, automated operational workflows through 18 agent tools spanning ingestion/monitoring/clinical, and a production-style security model (TLS in-transit, KMS at-rest, IAM + ACLs).",
    technologies: ["Apache Kafka", "ksqlDB", "Debezium CDC", "Avro", "Schema Registry", "Redis", "GPT-4o", "Python", "Flask", "Docker"],
    githubUrl: "https://github.com/Revanthpotu/healthstream-realtime-patient-pipeline"
  },
  {
    id: 2,
    title: "Real-Time Kafka Pipeline with Medallion Architecture",
    overview: "Production-style real-time pipeline streaming e-commerce events through Kafka, validating and filtering via a stream processor, and delivering clean data to S3 via Kafka Connect.",
    problem: "Batch ingestion introduces hours of latency and can't handle real-time analytics needs. Raw streaming data arrives dirty — missing keys, negative amounts, invalid enums — and needs validation before downstream consumers touch it.",
    solution: "Built a Bronze → Silver medallion architecture: Python producer generates e-commerce events (intentionally ~25% invalid to simulate real-world dirty data) with customer_id as the Kafka message key for per-customer ordering. Stream processor consumes from raw_events, validates against 5 business rules, forwards clean events to silver topic using manual offset commits for at-least-once delivery. Kafka Connect S3 Sink ships validated events to S3 in configurable batches. Orchestrated via Docker Compose with Zookeeper, 4 Kafka-stack containers, and Kafka UI for monitoring.",
    impact: "Real-time ingestion with ~75% yield after validation, customer-level ordering preserved, at-least-once delivery guarantees, and a zero-code S3 sink. Architected with documented paths to Snowflake Snowpipe loading and exactly-once semantics for production hardening.",
    technologies: ["Apache Kafka", "Kafka Connect", "Zookeeper", "Python", "AWS S3", "Docker", "Medallion Architecture"],
    githubUrl: "https://github.com/Revanthpotu/kafka-realtime-pipeline"
  },
  {
    id: 3,
    title: "dbt + Snowflake ELT Pipeline",
    overview: "Production-grade ELT pipeline built with dbt Core modelling e-commerce order data across Raw → Staging → Marts layers, running locally on DuckDB in 60 seconds with zero Snowflake credentials needed.",
    problem: "Analytics teams need reliable, tested, documented data models — but dbt projects are often hard to onboard and expensive to develop against. Running dev iterations against Snowflake burns credits and slows feedback loops.",
    solution: "Built a dual-target dbt project: DuckDB for local development (zero credentials, instant feedback) and Snowflake for production (single `--target prod` flag). Modelled the full analytics stack: 4 staging views (1:1 with sources), 4 mart tables (fct_orders, dim_customers, mart_product_performance, mart_monthly_revenue). Implemented 41 tests — generic (not_null, unique, accepted_values, relationships) plus 3 custom singular SQL tests covering revenue integrity, line-item DQ, and YTD monotonicity. GitHub Actions CI runs seed → run → test → docs → SQLFluff lint on every push.",
    impact: "Zero-config local development for contributors, single-flag Snowflake promotion for production, 41 automated tests enforcing schema and business invariants, full dbt docs catalog with lineage graphs. Models a real star schema with RFM-lite customer segmentation and MoM revenue analytics.",
    technologies: ["dbt Core", "Snowflake", "DuckDB", "SQL", "Docker", "GitHub Actions", "SQLFluff"],
    githubUrl: "https://github.com/Revanthpotu/dbt-snowflake-elt-pipeline"
  },
  {
    id: 4,
    title: "Text-to-SQL Agent with Safety Guardrails",
    overview: "LangChain-powered agent that converts natural language questions into SQL queries, executes them safely against a database, and explains results in plain English — running entirely locally on Ollama.",
    problem: "Non-technical stakeholders need to query data but can't write SQL. Giving LLMs direct database access creates catastrophic risk — a hallucinated DROP TABLE or UPDATE statement can destroy production data in one prompt.",
    solution: "Built a LangChain agent with Ollama (llama3.2) as the default LLM and OpenAI as optional fallback. Added a mandatory safety validator layer that runs before every query execution, blocking DROP, DELETE, UPDATE, INSERT, TRUNCATE, ALTER, CREATE, GRANT, and REVOKE — only SELECT and WITH...SELECT CTEs are allowed. Validator runs independently of the LLM, so even a compromised or hallucinating model can't execute destructive queries. Schema introspection via SQLAlchemy lets the agent reason about any PostgreSQL or SQLite database dynamically. Streamlit UI with example question prompts for non-technical users.",
    impact: "Production-safe natural language to SQL with a defensible safety layer, zero API cost through local Ollama, works out-of-the-box against any PostgreSQL or SQLite database. Demonstrates the core pattern for deploying LLM agents against sensitive data systems without trust-by-default risks.",
    technologies: ["LangChain", "Ollama", "PostgreSQL", "SQLAlchemy", "Streamlit", "Docker", "pytest"],
    githubUrl: "https://github.com/Revanthpotu/text-to-sql-agent"
  },
  {
    id: 5,
    title: "Production Data Quality Framework",
    overview: "Production-grade data quality validation system built with Great Expectations, featuring automated expectation suites across 5 data quality dimensions, HTML reporting, alerting dispatcher, Docker packaging, and GitHub Actions CI.",
    problem: "Bad data doesn't fail loudly — it silently corrupts dashboards, trains flawed ML models, and breaks downstream consumers before anyone notices. Schema drift, null explosions, and business-rule violations slip through without automated checks.",
    solution: "Built four expectation suites covering completeness (null checks, uniqueness), validity (regex patterns, enum sets, type assertions), accuracy (value ranges, distribution health), and schema integrity (column order, referential integrity, row counts). Pipeline orchestrator runs all suites, produces HTML reports, and triggers a severity-graded alert dispatcher (CRITICAL < 50% pass rate down to LOW 90-99%) with Slack/PagerDuty/Email dispatcher stubs. Packaged in Docker with docker-compose, GitHub Actions CI runs all suites per push and uploads artifacts.",
    impact: "Catches silent pipeline failures before they poison analytics — schema drift, null explosions, unmapped enums, foreign key breaks, and statistical anomalies. Production-extensible architecture with documented paths to Airflow integration, new data sources, and additional alerting channels.",
    technologies: ["Great Expectations", "Python", "Pandas", "pytest", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/Revanthpotu/data-quality-framework"
  },
  {
    id: 6,
    title: "RAG Pipeline with LangChain",
    overview: "Production-ready Retrieval-Augmented Generation system for PDF document Q&A using HuggingFace embeddings, ChromaDB vector storage, and local Ollama inference — entirely offline at zero API cost.",
    problem: "Teams need to ask natural-language questions over internal PDFs (contracts, reports, documentation) but don't want to send sensitive documents to external APIs or pay per-query costs.",
    solution: "Built an end-to-end RAG pipeline: PDFs loaded via PyMuPDF, chunked with RecursiveCharacterTextSplitter (1000-char chunks, 200 overlap), embedded with sentence-transformers/all-MiniLM-L6-v2, stored in ChromaDB with on-disk persistence. Query pipeline embeds user questions, retrieves top-K chunks by cosine similarity, assembles context with source attribution, and generates grounded answers via Ollama (llama3.2). All settings externalized through environment variables. Streamlit UI with file upload and chat interface, Docker Compose for the full stack.",
    impact: "Fully offline RAG system with zero API costs, grounded answers with source attribution, configurable chunking and retrieval parameters. Demonstrates the complete RAG pattern — ingestion, embedding, retrieval, generation — in a reproducible containerized deployment.",
    technologies: ["LangChain", "ChromaDB", "Sentence-Transformers", "Ollama", "PyMuPDF", "Streamlit", "Docker"],
    githubUrl: "https://github.com/Revanthpotu/rag-pipeline-langchain"
  },
  {
    id: 7,
    title: "F1 Analytics Platform on Azure Databricks",
    overview: "End-to-end analytics platform ingesting Formula 1 race data from the Ergast API and transforming it into dashboard-ready insights across decades of racing history.",
    problem: "Raw F1 racing data spans 70+ years across multiple API endpoints in disparate formats. It's not immediately usable for analytics, trend detection, or performance comparison without substantial transformation.",
    solution: "Implemented a modern ETL workflow on Azure: ingested multi-table race datasets into the ADLS Raw layer, built PySpark transformation notebooks in Databricks to create curated Delta Lake tables, added validation and quality checks, and scheduled the pipeline through Azure Data Factory. Visualized results in Databricks dashboards focused on driver and team dominance across eras.",
    impact: "Scalable analytics platform exploring decades of racing history with automated scheduling. Delivered insights on dominant drivers and team consistency patterns across F1 eras.",
    technologies: ["Azure Databricks", "PySpark", "Azure Data Factory", "ADLS", "Delta Lake", "Power BI"],
    githubUrl: "https://github.com/Revanthpotu/Formula1-Data-Pipeline-Transformation-Databricks"
  }
];
