import { Project, Experience, Certification, SkillCategory, Education } from './types';

export const PROFILE = {
  name: "L P Revanth Kumar Potu",
  fullName: "Lakshmi Praneeth Revanth Kumar Potu",
  title: "Data Engineer",
  tagline: "Designing cloud data platforms that scale with your business.",
  bio: "Data and software engineer with 4+ years building cloud-native data platforms and AI-powered applications on Azure, AWS, Snowflake, and Databricks. I design scalable ETL/ELT pipelines and real-time streaming systems, recently cutting ETL runtime by 35% through workflow redesign and reusable pipeline patterns. Beyond pipelines, I've shipped production RAG systems and AI-integrated services, with deep focus on data quality, secure lakehouse architecture, and infrastructure automation using Terraform and Azure DevOps. I'm currently exploring new opportunities in the US where I can help teams ship reliable data and AI platforms at scale.",
  email: "poturevanth@gmail.com",
  phone: "+1(410) 892-2025",
  linkedin: "https://www.linkedin.com/in/revpotu",
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
    title: "Agentic RAG-Based Multi-Format Document Question Answering System",
    overview: "Built an agentic Retrieval-Augmented Generation system that answers natural-language questions from large, multi-format documents.",
    problem: "Enterprises rely on long PDFs, Word files, and mixed-format documents that are hard to search manually. Traditional search tools do not understand context and often return incomplete or irrelevant results.",
    solution: "Developed a multi-agent RAG pipeline with structured message passing and semantic retrieval. Implemented text ingestion, preprocessing, chunking, and MiniLM-based embeddings. Used FAISS as the vector store. Designed three cooperative agents (Ingestion, Retrieval, LLM Response).",
    technologies: ["Python", "Streamlit", "FAISS", "LangChain", "LLMs", "MiniLM"],
    impact: "Delivered an end-to-end, modular system that improves accuracy and user trust by grounding every response in the retrieved source text. Enabled significantly faster information discovery."
  },
  {
    id: 2,
    title: "F1 Analytics Platform on Azure Databricks",
    overview: "Designed and orchestrated an end-to-end analytics platform that ingests Formula 1 race data from the Ergast API and transforms it into meaningful insights.",
    problem: "Raw F1 racing data spans decades and is distributed across multiple API endpoints. It is not immediately usable for analytics, trend detection, or performance comparison.",
    solution: "Implemented a modern ETL workflow with Databricks and ADLS. Ingested multi-table race datasets into ADLS Raw layer. Built transformation notebooks in PySpark to create curated Delta Lake tables. Added validation and quality checks.",
    technologies: ["Azure Databricks", "PySpark", "ADF", "ADLS", "Delta Lake", "Power BI"],
    impact: "Delivered a scalable analytics platform capable of exploring decades of racing history. Enabled insights such as dominant drivers and team consistency. Automated scheduling ensured stable operations."
  },
  {
    id: 3,
    title: "Accounting Fraud Detection using Deep Learning (RUS-MLP)",
    overview: "Deep learning–based fraud detection system using a Random Under-Sampling Multi-Layer Perceptron (RUS-MLP).",
    problem: "Financial statement fraud is difficult to detect because misstatements are hidden within large volumes of 10-K financial data. Traditional statistical models struggle to capture nonlinear patterns.",
    solution: "Built a DL-based system using RUS-MLP. Processed 28 raw financial items + 14 ratios from COMPUSTAT. Addressed class imbalance using Random Under Sampling. Optimized hyperparameters using Optuna.",
    technologies: ["Python", "PyTorch", "Optuna", "COMPUSTAT", "Machine Learning"],
    impact: "Achieved higher AUC scores compared to traditional statistical models. Demonstrated that MLP models can uncover complex patterns in financial statements, improving accuracy in identifying fraudulent firms."
  },
  {
    id: 4,
    title: "Real-Time Streaming with Data Lakehouse Architecture",
    overview: "Build an end-to-end, event-driven data pipeline that streams high-volume data from object storage into Kafka using S3-style event notifications.",
    problem: "Traditional batch ingestion introduces latency. This project solves the need for real-time processing by automatically streaming millions of NYC taxi records from object storage to Kafka.",
    solution: "Created a scalable ingestion layer where MinIO events push data to Kafka. Implemented ZooKeeper-free Kafka (Kraft). Added Python Parquet reader for converting records to JSON streams.",
    technologies: ["Docker", "Kafka", "MinIO", "Python", "Pandas", "Spark"],
    impact: "Successfully demonstrated fully automated streaming pipeline. Real-time ingestion of millions of records. Foundation laid for Spark/Flink consumers to build Silver/Gold lakehouse layers."
  },
  {
    id: 5,
    title: "End-to-End YouTube Data Analysis Pipeline on AWS",
    overview: "Serverless data lake on AWS to handle the full ETL lifecycle for YouTube video popularity analysis.",
    problem: "A marketing client needed to identify key factors driving YouTube video popularity. The challenge was ingesting and joining disparate raw data formats (JSON & CSV).",
    solution: "Deployed S3 as central data lake. Used AWS Lambda with Pandas to clean/normalize data into Parquet. Implemented AWS Glue Crawlers for schema inference and Athena for SQL querying.",
    technologies: ["AWS S3", "AWS Lambda", "AWS Glue", "AWS Athena", "Python", "Parquet"],
    impact: "Unified Analysis of semi-structured metadata with statistics. Reduced query costs and latency via Parquet conversion. Established scalable pay-as-you-go serverless architecture."
  }
];
