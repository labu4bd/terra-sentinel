import React from 'react';
import { 
  Search, 
  Cpu, 
  LineChart, 
  Map, 
  Cloud, 
  ShieldCheck 
} from 'lucide-react';
import { Service, Project, HeroSlide } from './types';

export const SERVICES: Service[] = [
  {
    id: 'data-collection',
    title: 'Data Collection',
    description: 'Delivering precise insights for smarter decisions through advanced field surveys and automated sensors.',
    icon: <Search className="w-8 h-8" />,
  },
  {
    id: 'data-processing',
    title: 'Data Processing',
    description: 'Cleaning, validating, and transforming raw information into high-quality datasets ready for analysis.',
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    description: 'Forecasting trends and providing actionable insights using machine learning and spatial statistics.',
    icon: <LineChart className="w-8 h-8" />,
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    description: 'Creating interactive GIS maps and dashboards that make complex spatial data intuitive.',
    icon: <Map className="w-8 h-8" />,
  },
  {
    id: 'big-data',
    title: 'Big Data Solutions',
    description: 'Scalable architectures, data warehousing, and cloud platforms for handling massive geospatial datasets.',
    icon: <Cloud className="w-8 h-8" />,
  },
  {
    id: 'data-management',
    title: 'Data Management',
    description: 'Secure databases, governance, and metadata organization to ensure data integrity and accessibility.',
    icon: <ShieldCheck className="w-8 h-8" />,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'excise-taxation',
    title: 'Excise and Taxation Mapping',
    description: 'Integrating excise records and taxpayer registries with spatial layers to visualize taxable activities and identify compliance gaps.',
    fullDescription: 'Excise and taxation mapping leverages geospatial intelligence to bring clarity, transparency, and efficiency to revenue administration. By integrating excise records, taxpayer registries, and business licensing data with high-resolution spatial layers, we enable authorities to visualize where taxable activities occur, identify compliance gaps, and detect high-risk zones for leakage or fraud. Location-based analytics support smarter field inspections, optimized route planning, and fairer tax enforcement by linking each enterprise to its precise geographic footprint. Through interactive dashboards and spatial reporting, decision-makers gain a real-time, evidence-driven view of revenue performance across districts and sectors—transforming traditional tax management into a data-driven, accountable, and policy-ready system.',
    image: '/Excise.png',
    category: 'Government'
  },
  {
    id: 'land-cover',
    title: 'Land Cover Mapping',
    description: 'Classifying Earth surface into meaningful categories using satellite imagery and machine learning for environmental monitoring.',
    fullDescription: 'Land cover mapping is the process of classifying the Earth’s surface into meaningful categories such as forests, urban areas, croplands, water bodies, and wetlands using satellite imagery and geospatial analysis techniques. As a geospatial specialist, I use multi-sensor data (e.g., optical and radar imagery), machine learning, and spatial statistics to produce accurate, up-to-date land cover maps that support environmental monitoring, urban planning, agriculture management, and climate studies. These maps provide a spatially consistent view of how landscapes are structured and how they change over time, enabling decision-makers to better understand human impacts and natural processes at local, regional, and global scales.',
    image: '/Landcover.png',
    category: 'Environment'
  },
  {
    id: 'khareef-zones',
    title: 'Khareef Zones Mapping',
    description: 'Mapping seasonal monsoon regions to understand ecosystem dynamics, water availability, and support tourism planning.',
    fullDescription: 'Khareef zones refer to the regions influenced by the seasonal monsoon system that affects southern Oman and parts of the Arabian Peninsula between June and September. From a geospatial perspective, these zones are defined by the interaction of topography, wind patterns, and ocean–atmosphere dynamics, which together create localized microclimates characterized by increased cloud cover, fog, and light rainfall. Satellite observations and spatial climate models reveal sharp gradients between khareef-affected areas and the surrounding arid landscape, making them uniquely identifiable through vegetation indices, land surface temperature, and moisture signals. Mapping khareef zones is essential for understanding ecosystem dynamics, water availability, and land-use planning, as these seasonal transformations support biodiversity, agriculture, and tourism in an otherwise hyper-arid environment.',
    image: '/Kharif.png',
    category: 'Climate'
  },
  {
    id: 'agro-ecological',
    title: 'Agro-ecological Zones (AEZs)',
    description: 'Defining regions where climate, soil, and topography interact to shape agricultural potential and food security.',
    fullDescription: 'Agro-ecological zones (AEZs) as spatially defined regions where climate, soil, topography, and vegetation interact to shape agricultural potential and constraints. Using satellite imagery, climate surfaces, and soil databases within a GIS framework, AEZs are mapped to capture variations in rainfall patterns, temperature regimes, elevation, and land suitability. These zones provide a scientific basis for aligning crops and farming practices with local environmental conditions, reducing risk and improving productivity. By integrating remote sensing and spatial analysis, agro-ecological zoning supports evidence-based decisions in land-use planning, food security assessments, and climate-smart agriculture, ensuring that agricultural development is both productive and environmentally sustainable.',
    image: '/Agro.png',
    category: 'Agriculture'
  },
  {
    id: 'cadastral-mapping',
    title: 'Cadastral Mapping',
    description: 'Accurate representation of land parcels and ownership information integrated into a unified spatial framework.',
    fullDescription: 'Cadastral mapping is the foundation of modern land administration, providing an accurate and legally recognized representation of land parcels, boundaries, and ownership information. As a geospatial specialist, I rely on cadastral maps to integrate field survey data, satellite imagery, and GIS analysis into a unified spatial framework that supports property registration, taxation, and urban planning. These maps not only define parcel geometry with high positional accuracy but also link each parcel to attribute data such as ownership, land use, and zoning regulations. By maintaining up-to-date cadastral datasets, governments and private organizations can reduce land disputes, improve transparency, and enable evidence-based decision-making for sustainable development and infrastructure planning.',
    image: '/Cadastral.png',
    category: 'Land Admin'
  },
  {
    id: 'land-record-digitization',
    title: 'Land Record Digitization',
    description: 'Transforming cadastral records into accurate, spatially referenced datasets to reduce disputes and improve transparency.',
    fullDescription: 'Land record digitization is the foundation of a modern, transparent, and efficient land administration system. As a geospatial specialist, I view it as more than simply converting paper maps and registers into digital files—it is the process of transforming cadastral records into accurate, spatially referenced datasets that can be analyzed, updated, and shared across institutions. By integrating scanned deeds, survey maps, and ownership records with GIS and high-resolution satellite or drone imagery, digitized land records provide a precise representation of parcel boundaries and legal attributes. This not only reduces disputes and fraud, but also supports urban planning, infrastructure development, taxation, and environmental management. A well-designed land record digitization program creates a reliable spatial database that ensures data integrity, improves public access, and enables data-driven decision-making for sustainable land governance.',
    image: '/LandRecord.png',
    category: 'Land Admin'
  },
  {
    id: 'plantation-assessment',
    title: 'Plantation Assessment Services',
    description: 'Evaluating vegetation vigor, canopy density, and planting patterns using high-resolution satellite and drone data.',
    fullDescription: 'Our plantation assessment services leverage advanced geospatial technologies to deliver accurate, timely, and objective insights into crop health and plantation performance. Using high-resolution satellite imagery, drone data, and GIS-based analytics, we evaluate vegetation vigor, canopy density, planting patterns, and stress indicators across large plantation areas. These spatial assessments enable early detection of issues such as water stress, pest infestation, and nutrient deficiency, supporting data-driven decision making for irrigation planning, yield optimization, and sustainable land management. By integrating temporal change analysis with field-level mapping, we provide plantation managers with actionable intelligence to enhance productivity while minimizing environmental impact.',
    image: '/Plantation.png',
    category: 'Agriculture'
  },
  {
    id: 'land-degradation',
    title: 'Land Degradation Assessment',
    description: 'Quantifying decline in land productivity and ecosystem function using multi-temporal satellite imagery and environmental modeling.',
    fullDescription: 'Land degradation assessment is a critical geospatial task that integrates satellite remote sensing, GIS analysis, and environmental modeling to quantify the decline in land productivity and ecosystem function over time. By combining multi-temporal satellite imagery with indicators such as vegetation indices, soil moisture, surface temperature, and land cover change, geospatial specialists can identify areas affected by erosion, salinization, deforestation, overgrazing, and unsustainable agricultural practices. This spatially explicit approach enables objective monitoring of degradation trends, supports early warning systems, and provides scientifically grounded evidence for land management decisions. The resulting maps and statistics are essential for policy makers, conservation agencies, and development planners seeking to design targeted restoration strategies and promote sustainable land use practices.',
    image: '/LandDegradation.png',
    category: 'Environment'
  },
  {
    id: 'crop-health',
    title: 'Crop Health Monitoring',
    description: 'Detecting nutrient deficiencies, water stress, and early signs of disease using multispectral sensors and machine learning.',
    fullDescription: 'Leveraging advanced geospatial technologies, our crop health monitoring solutions provide farmers and agronomists with precise, timely insights into the condition of their fields. By integrating high-resolution satellite imagery, drone data, and multispectral sensors, we can assess vegetation vigor, detect nutrient deficiencies, water stress, and early signs of disease. Our platform applies sophisticated remote sensing indices, machine learning algorithms, and temporal analysis to deliver actionable maps and reports, enabling informed decisions that optimize yield, reduce input costs, and promote sustainable farming practices. With continuous monitoring, stakeholders gain a comprehensive understanding of crop performance across space and time, transforming raw data into strategic agricultural intelligence.',
    image: '/CropHealth.png',
    category: 'Agriculture'
  },
  {
    id: 'utility-network',
    title: 'Utility Network Mapping',
    description: 'Visualizing and optimizing complex networks of water, gas, electricity, and telecommunications infrastructure.',
    fullDescription: 'Utility Network Mapping is the cornerstone of modern infrastructure management, enabling cities, utilities, and industries to visualize, analyze, and optimize complex networks of water, gas, electricity, and telecommunications. By integrating high-precision geospatial data with advanced GIS technologies, utility network mapping provides a detailed, real-time view of underground and above-ground assets, facilitating efficient maintenance, rapid fault detection, and proactive planning. This spatially-aware approach not only reduces operational risks and service disruptions but also supports sustainable development by improving resource allocation and enabling smarter decision-making. With accurate utility maps, organizations can enhance safety, streamline workflows, and ensure resilient infrastructure for communities and businesses alike.',
    image: '/Utility.png',
    category: 'Infrastructure'
  },
  {
    id: 'citrus-monitoring',
    title: 'Citrus Disease Monitoring',
    description: 'Real-time monitoring of orchards to detect early signs of disease and stress, ensuring healthier yields.',
    fullDescription: 'Leveraging advanced geospatial technologies, we provide real-time monitoring and analysis of citrus orchards to detect early signs of disease and stress. By integrating high-resolution satellite imagery, drone-based aerial surveys, and multispectral sensing, our platform identifies subtle changes in canopy health, leaf color, and vegetation patterns that may indicate fungal infections, bacterial diseases, or nutrient deficiencies. This spatially precise approach enables farmers and agronomists to implement targeted interventions, reduce crop losses, and optimize resource use, ensuring healthier orchards and higher yields. With data-driven insights delivered directly to your dashboard, citrus disease monitoring becomes proactive rather than reactive, supporting sustainable and profitable orchard management.',
    image: '/Citrus.png',
    category: 'Agriculture'
  }
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: 'Geospatial & Data Intelligence',
    subtitle: 'Solving real-world problems through data collection and visualization.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920&h=1080'
  },
  {
    title: 'Smart Geospatial Mapping',
    subtitle: 'For data-driven urban planning and infrastructure development.',
    image: '/geospatial_mapping.jpeg'
  },
  {
    title: 'Actionable Insights',
    subtitle: 'Transforming complex data into intuitive dashboards and spatial reports.',
    image: '/Actionable.png'
  },
  {
    title: 'Advanced Remote Sensing',
    subtitle: 'High-resolution aerial insights using drones and satellite imagery.',
    image: '/remote_sensing.jpg'
  }
];

export const PROCESS_STEPS = [
  { number: '01', title: 'Understand Requirements', description: 'We begin by deeply analyzing your specific business needs and spatial challenges.' },
  { number: '02', title: 'Collect & Process Data', description: 'Our team gathers high-precision data and transforms it into actionable datasets.' },
  { number: '03', title: 'Analyze & Visualize', description: 'We apply advanced analytics and create intuitive visual interfaces for your data.' },
  { number: '04', title: 'Deliver & Support', description: 'Final solutions are deployed with ongoing technical support and maintenance.' },
];
