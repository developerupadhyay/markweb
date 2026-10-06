export interface CompanyInfo {
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  establishedYear: number;
  founderStory: string;
  phones: string[];
  displayPhones: string[];
  email: string;
  address: {
    plot: string;
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  whatsappNumber: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  certifications: string[];
  workingHours: string;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    indiamart?: string;
  };
}

export const companyData: CompanyInfo = {
  name: "Krishna Packaging Industry",
  tagline: "Pioneering Advanced Packaging Automation & Machinery Since 2010",
  shortDescription:
    "Delivering a range of sturdy and functionally efficient Packaging Machines for the food & beverage, snack, powder, and industrial manufacturing sectors.",
  fullDescription:
    "Located at a prime location in Faridabad at Haryana (India), Krishna Packaging Industry is a renowned packaging machinery exporter, manufacturer, and supplier. Delivering an extensive portfolio of heavy-duty, functionally superior Form-Fill-Seal (FFS), Collar Type Cup Fillers, Multi-Head Weighers, Auger Fillers, and Horizontal Flow Wrap machines engineered to GMP standards.",
  establishedYear: 2010,
  founderStory:
    "Founded with a vision to empower Indian and global manufacturing units with high-performance, cost-effective automation, Krishna Packaging Industry has grown into a trusted brand. Over the past decade and a half, our engineering workshop in Faridabad has delivered over 500+ customized machinery installations across food processing, pharmaceuticals, FMCG, bakery, and hardware industries.",
  phones: ["+919818542091", "+918700293484"],
  displayPhones: ["+91 98185 42091", "+91 87002 93484"],
  email: "kpindustry70@gmail.com",
  address: {
    plot: "Plot No. 82",
    street: "Jeevan Nagar, Wazirpur HUDA Road",
    area: "Greater Faridabad",
    city: "Faridabad",
    state: "Haryana",
    pincode: "121002",
    country: "India",
    full: "Plot No. 82, Jeevan Nagar, Wazirpur HUDA Road, Greater Faridabad, Faridabad - 121002, Haryana, India",
  },
  whatsappNumber: "919818542091",
  stats: [
    {
      value: "15+",
      label: "Years of Engineering Excellence",
      description: "Serving packaging industries with custom engineering since 2010",
    },
    {
      value: "500+",
      label: "Machines Installed Worldwide",
      description: "Deployed across FMCG, snacks, spices, grains, and bakery plants",
    },
    {
      value: "99.8%",
      label: "Operational Reliability",
      description: "Precision CNC fabricated with food-grade SS-316/304 contact components",
    },
    {
      value: "24/7",
      label: "Technical & On-Site Support",
      description: "Dedicated pan-India service engineers and ready spare parts inventory",
    },
  ],
  certifications: [
    "ISO 9001:2015 Compliant Standards",
    "GMP Grade Stainless Steel Fabrication",
    "CE Standards Component Integration",
    "L&T / Festo / Bonfiglioli Industrial Grade Drive Systems",
  ],
  workingHours: "Monday - Saturday: 9:00 AM - 7:30 PM (IST)",
  socials: {
    indiamart: "https://www.indiamart.com/krishna-packaging-industry/",
  },
};
