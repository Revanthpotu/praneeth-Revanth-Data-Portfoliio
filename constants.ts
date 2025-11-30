import { Project, Experience, Certification, SkillCategory, Education } from './types';

export const PROFILE = {
  name: "L Praneeth Revanth Potu",
  fullName: "L Praneeth Revanth Potu",
  title: "Data Engineer",
  tagline: "Designing cloud data platforms that scale with your business.",
  bio: "I’m a Data Engineer with 3+ years of experience building scalable, cloud-native data pipelines on Azure and modern lakehouse platforms. I work across Azure Data Factory, Databricks, and Snowflake to design efficient ETL and ELT workflows, using Python, PySpark, and SQL for automation, modeling, and real-time streaming with Event Hubs and Delta Lake. In my recent work, I improved ETL performance by 35% through tuning, workflow redesign, and reusable pipeline patterns. I’m focused on data quality and operational excellence, from implementing Great Expectations and Delta Live Tables to building secure lakehouse architectures, Terraform infrastructure, and CI/CD pipelines in Azure DevOps",
  email: "poturevanth@gmail.com",
  phone: "+1(410) 892-2025",
  linkedin: "https://www.linkedin.com/in/revpotu",
  github: "https://github.com/Revanthpotu",
  location: "United States"
};

export const TECHNICAL_EXPERTISE = [
  "Data Engineering",
  "Big Data Analytics",
  "Data Warehousing & Modelling",
  "Cloud Computing",
  "Performance Optimization",
  "Object Oriented Programming",
  "CI / CD Pipelines Deployment",
  "System & Database Design",
  "Software Development"
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming & Scripting Languages",
    skills: ["Python", "Java", "Scala"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Cassandra"]
  },
  {
    category: "Big Data & Analytics",
    skills: ["PySpark", "Spark SQL", "Hadoop", "Hive", "Delta Lake", "Kafka", "Snowflake"]
  },
  {
    category: "Cloud Platforms & Services",
    skills: [
      "Azure", 
      "Azure Data Factory (ADF)", 
      "Azure Databricks", 
      "Azure Synapse Analytics",
      "Azure Data Lake Storage (ADLS)", 
      "Azure Monitor", 
      "Azure Functions",
      "Azure Key Vault", 
      "Azure Kubernetes Service (AKS)", 
      "Azure Event Hubs"
    ]
  },
  {
    category: "Data Engineering & Orchestration",
    skills: ["Databricks Workflows", "Airflow", "dbt", "Snowflake Tasks"]
  },
  {
    category: "DevOps & CI/CD",
    skills: ["Azure DevOps Pipelines", "GitHub Actions", "Terraform", "Docker", "Kubernetes", "Helm"]
  },
  {
    category: "Data Visualization & Monitoring",
    skills: ["Power BI", "Tableau", "Grafana"]
  },
  {
    category: "Version Control & Project Management Tools",
    skills: ["Git", "GitHub", "Bitbucket", "Jira", "Confluence"]
  },
  {
    category: "Operating Systems",
    skills: ["Windows", "Linux", "macOS"]
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
    company: "PayPal",
    title: "Azure Data Engineer",
    date: "June 2023 - Present",
    achievements: [
      "Designed end-to-end Azure Data Factory pipelines handling 5TB+ daily transactional data, reducing ETL processing time.",
      "Implemented and managed real-time streaming solutions using Azure Event Hubs and Databricks, improving payment transaction monitoring by 40%.",
      "Automated CI/CD deployments via Terraform and Azure DevOps for 20+ microservices, accelerating deployment cycles and ensuring zero downtime.",
      "Led cross-functional collaboration with a 6-member engineering team to standardize data governance and logging, resulting in full compliance with internal audit standards.",
      "Established monitoring dashboards with Azure Monitor and Power BI, leveraging Python and SQL to identify anomalies, reducing incident response time by 30%.",
      "Enhanced infrastructure scalability by migrating legacy batch processes to Delta Lake on Databricks, supporting higher peak payment volumes without performance degradation.",
      "Improved data security and access management by implementing role-based access controls and encryption protocols in Azure Key Vault and Databricks, reducing potential compliance risks by 25%."
    ],
    techStack: ["Azure Data Factory", "Databricks", "PySpark", "Event Hubs", "Terraform", "Azure DevOps", "SQL"]
  },
  {
    id: 2,
    company: "Capgemini", 
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
    techStack: ["Azure Synapse", "Snowflake", "Python", "PySpark", "ADF", "Power BI"]
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